import { supabase } from '@/lib/supabase'
import { ImagePickerAsset } from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

const CHUNK_SIZE = 15 // 한 번에 업로드할 이미지 수

interface UploadResult {
  isError: boolean
  data: string[] | null
  isLoading: boolean
}

export const uploadImages = async (
  bucketName: string | undefined,
  userId: string | undefined,
  images: ImagePickerAsset[],
  folderName: string = ''
): Promise<UploadResult> => {
  const uploadChunk = async (chunk: ImagePickerAsset[]): Promise<string[]> => {
    if (!bucketName || !userId) {
      throw new Error('Bucket name or user ID is undefined')
    }
    const uploadPromises = chunk.map(async (image) => {
      const fileExt = image.uri.split('.').pop()
      const fileName = `${folderName ? `${folderName}/` : ''}${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${fileExt}`
      const filePath = `${userId}/${fileName}`

      const fileContent = await FileSystem.readAsStringAsync(image.uri, {
        encoding: FileSystem.EncodingType.Base64
      })

      const { data, error: uploadError } = await supabase.storage.from(bucketName).upload(filePath, fileContent, {
        contentType: image.mimeType || 'image/jpeg',
        upsert: true
      })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        throw uploadError
      }

      const {
        data: { publicUrl }
      } = supabase.storage.from(bucketName).getPublicUrl(filePath)
      return publicUrl
    })

    return Promise.all(uploadPromises)
  }

  try {
    let uploadedUrls: string[] = []
    let isLoading = true

    for (let i = 0; i < images.length; i += CHUNK_SIZE) {
      const chunk = images.slice(i, i + CHUNK_SIZE)
      const chunkUrls = await uploadChunk(chunk)
      uploadedUrls = [...uploadedUrls, ...chunkUrls]
    }

    isLoading = false
    return { isError: false, data: uploadedUrls, isLoading }
  } catch (error) {
    console.error('Error uploading images:', error)
    return { isError: true, data: null, isLoading: false }
  }
}
