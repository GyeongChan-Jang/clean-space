import { useState } from 'react'
import { ImagePickerAsset } from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { supabase } from '@/lib/supabase'
import { decode } from 'base64-arraybuffer'

interface UploadImagesProps {
  bucket: string
  folderName: string
  imagePickerAssets: ImagePickerAsset[]
}

interface UploadImagesResult {
  isLoading: boolean
  isError: boolean
  data: string[] | null
  uploadImages: (props: UploadImagesProps) => Promise<void>
}

const useUploadImages = (): UploadImagesResult => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<string[] | null>(null)

  const uploadImages = async ({ bucket, folderName, imagePickerAssets }: UploadImagesProps) => {
    setIsLoading(true)
    setIsError(false)
    setData(null)

    try {
      const uploadPromises = imagePickerAssets.map(async (result) => {
        const base64 = await FileSystem.readAsStringAsync(result.uri, {
          encoding: FileSystem.EncodingType.Base64
        })
        const filePath = `${folderName}/${new Date().getTime()}.png`

        const { data, error } = await supabase.storage.from(bucket).upload(filePath, decode(base64), {
          contentType: 'image/png',
          upsert: true
        })

        if (error) {
          throw error
        }

        // Get the public URL for the uploaded file
        const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(data.path)

        return publicUrlData.publicUrl
      })

      const uploadedUrls = await Promise.all(uploadPromises)
      setData(uploadedUrls)
    } catch (error) {
      console.error('이미지 업로드 실패:', error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, isError, data, uploadImages }
}

export default useUploadImages
