import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'
import React, { useEffect } from 'react'
import { Alert, Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { propertyValues } from '@/app/(root)/(add-property-tabs)/property-type-1'
import useAddPropertyStore, { CleaningGuideline } from '@/store/useAddProperty'
import { Ionicons } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import useUploadImages from '@/hooks/useUploadImages'
import { AddPropertyRoutes } from '@/constants/routes'

interface InitialCleaningGuidelinesProps {
  pickImages: () => void
}

interface ImageGridProps {
  guidelines: CleaningGuideline[]
  pickImages: () => void
}

const InitialCleaningGuidelines = ({ pickImages }: InitialCleaningGuidelinesProps) => {
  const { propertyType } = useAddPropertyStore()
  return (
    <View>
      <Text className="text-2xl font-bold mt-6 mb-4">
        {propertyValues.find((type) => type.id === propertyType)?.name} 청소 가이드라인 추가하기
      </Text>
      <Text className="text-gray-500 mb-2">청소 가이드라인은 사진과 설명을 통해 클리너에게 보여집니다.</Text>
      <Text className="text-gray-500 mb-2">가이드라인은 최소 5장 이상의 사진과 설명을 입력해야합니다.</Text>
      <Text className="text-gray-500 mb-6">첫번째 사진이 숙소의 대표 사진으로 등록됩니다.</Text>

      <TouchableOpacity className="mb-4" onPress={pickImages}>
        <View className="flex-row px-4 justify-start items-center py-4 rounded-xl border border-secondary-400">
          <Image className="w-5 h-5 mr-4" source={require('@/assets/icons/common/plus.png')} />
          <Text className="text-lg font-Pretendard">사진 추가하기</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mb-4">
        <View className="flex-row px-4 justify-start items-center py-4 rounded-xl border border-secondary-400">
          <Image className="w-5 h-5 mr-4" source={require('@/assets/icons/common/plus.png')} />
          <Text className="text-lg font-Pretendard">사진 새로 찍기</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const ImageGrid = ({ guidelines, pickImages }: ImageGridProps) => {
  const { cleaningGuidelines, setCleaningGuidelines } = useAddPropertyStore()
  const screenWidth = Dimensions.get('window').width
  const imageWidth = screenWidth - 48 // 48 is total horizontal padding
  const imageHeight = (imageWidth / 16) * 9 // 16:9 ratio

  const updateCleaningGuidelines = (index: number, description: string) => {
    const updatedGuidelines = [...cleaningGuidelines]
    updatedGuidelines[index].description = description
    setCleaningGuidelines(updatedGuidelines)
  }

  const removeCleaningGuideline = (index: number) => {
    const updatedGuidelines = [...cleaningGuidelines]
    updatedGuidelines.splice(index, 1)
    setCleaningGuidelines(updatedGuidelines)
  }

  return (
    <View className="mt-4">
      {/* Description and Add Button */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold">5장 이상의 사진을 선택하세요.</Text>
        <TouchableOpacity
          onPress={pickImages}
          className="flex-row items-center bg-secondary-200 rounded-full px-2 py-1"
        >
          <Image className="w-[14px] h-[14px] mr-2" source={require('@/assets/icons/common/plus.png')} />
          <Text className="text-sm pb-[1px]">추가</Text>
        </TouchableOpacity>
      </View>
      {/* Images and Descriptions */}
      {guidelines.map((image, index) => (
        <View key={image.id} className="mb-6">
          <View className="relative">
            <Image
              source={{ uri: image.image?.uri }}
              style={{
                width: imageWidth,
                height: imageHeight,
                borderRadius: 8
              }}
              resizeMode="cover"
            />
            {index === 0 && (
              <View className="absolute top-2 left-2 bg-white rounded-full px-2 py-1">
                <Text className="text-xs font-bold">커버 사진</Text>
              </View>
            )}
            <TouchableOpacity
              onPress={() => removeCleaningGuideline(index)}
              className="absolute top-2 right-2 bg-white rounded-full p-1"
            >
              <Ionicons name="close" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <TextInput
            value={guidelines[index]?.description}
            onChangeText={(text) => updateCleaningGuidelines(index, text)}
            placeholder={`${index + 1}. 사진에 대한 설명을 입력하세요.`}
            className="border-gray-300 rounded-md p-2 mt-2 border-b"
            multiline
            numberOfLines={4}
          />
        </View>
      ))}
      {/* Add Image Button */}
      <TouchableOpacity onPress={pickImages} className="mb-6">
        <View
          className="border-2 border-dashed border-gray-300 rounded-lg justify-center items-center"
          style={{ width: imageWidth, height: imageHeight }}
        >
          <Image className="w-8 h-8 mb-2" source={require('@/assets/icons/common/plus.png')} />
          <Text className="text-sm text-gray-500">추가하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const CleaningGuidelines = () => {
  const { cleaningGuidelines, setCleaningGuidelines, propertyId } = useAddPropertyStore()
  const navigation = useNavigation()
  const { uploadImages, isLoading, isError, data } = useUploadImages()

  const pickImages = async () => {
    let results = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [3, 4],
      quality: 1
    })

    if (!results.canceled) {
      const newGuidelines = results.assets.map((asset, index) => ({
        id: cleaningGuidelines.length + index,
        image: asset,
        description: ''
      }))

      setCleaningGuidelines([...cleaningGuidelines, ...newGuidelines])
    }
  }

  const uploadCleaningGuidelines = async () => {
    try {
      const cleaningGuidelines = useAddPropertyStore.getState().cleaningGuidelines

      if (!process.env.EXPO_PUBLIC_BUCKET_PROPERTY_GUIDELINE) {
        console.error('입력된 bucket이 없습니다.')
        return
      }

      uploadImages({
        bucket: process.env.EXPO_PUBLIC_BUCKET_PROPERTY_GUIDELINE,
        folderName: propertyId,
        imagePickerAssets: cleaningGuidelines.map((guideline) => guideline.image)
      })

      if (isError) return

      // TODO: 업로드 완료된 url properties에 저장
      router.push(`/${AddPropertyRoutes.CLEANING_TIME_7}`)
    } catch (error) {
      console.error('Error uploading images:', error)
      Alert.alert('오류', '사진 업로드 중 오류가 발생했습니다.')
      return
    }
  }

  useEffect(() => {
    navigation.setOptions({
      onNextPress: uploadCleaningGuidelines
    })
  }, [navigation])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6">
        {cleaningGuidelines.length === 0 ? (
          <InitialCleaningGuidelines pickImages={pickImages} />
        ) : (
          <ImageGrid guidelines={cleaningGuidelines} pickImages={pickImages} />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default CleaningGuidelines
