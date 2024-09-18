import { View, Text, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Suspense, useCallback, useRef } from 'react'
import { useGetProperty } from '@/hooks/queries/react-query/useGetProperty'
import Loader from '@/components/common/LoadingOverlay'
import BottomSheet from '@gorhom/bottom-sheet'
import { Tables } from '@/supabase/database.types'
import { Ionicons } from '@expo/vector-icons'

interface EditGuidelineImageProps {
  id: string
  onPress: () => void
}

const EditGuidelineImage = ({ id, onPress }: EditGuidelineImageProps) => {
  const { data: property, isLoading } = useGetProperty(id as string)

  if (isLoading) return <Loader />

  return (
    <TouchableOpacity onPress={onPress} id="card" className="mb-4 p-4 shadow-md rounded-lg bg-white">
      <Text className="text-lg font-PretendardSemiBold">숙소 가이드라인 이미지</Text>
      <OverlappedImageCards
        images={property?.property_cleaning_guidelines.map((guideline) => guideline.image_url) || []}
      />
    </TouchableOpacity>
  )
}

export default EditGuidelineImage

interface OverlappedImageCardsProps {
  images: string[]
}

const OverlappedImageCards = ({ images }: OverlappedImageCardsProps) => {
  const screenWidth = Dimensions.get('window').width
  const mainImageWidth = screenWidth * 0.5 // 메인 이미지 크기 축소
  const mainImageHeight = mainImageWidth * 0.8
  const sideImageWidth = mainImageWidth * 0.4 // 옆 이미지 더 많이 보이도록 조정

  const displayImages = images.slice(0, 3)

  return (
    <View className="flex-row justify-center items-center relative my-5">
      {/* 왼쪽 이미지 */}
      {displayImages.length > 1 && (
        <Image
          source={{ uri: displayImages[1] }}
          className="absolute rounded-2xl z-10"
          style={{
            width: sideImageWidth * 0.9,
            height: mainImageHeight * 0.8,
            top: mainImageHeight * 0.2,
            left: screenWidth * 0.05,
            transform: [{ translateX: -sideImageWidth / 2 }, { rotate: '-5deg' }, { translateX: sideImageWidth / 2 }]
          }}
        />
      )}

      {/* 메인 이미지 */}
      <Image
        source={{ uri: displayImages[0] }}
        className="rounded-2xl z-20"
        style={{
          width: mainImageWidth,
          height: mainImageHeight
        }}
      />

      {/* 오른쪽 이미지 */}
      {displayImages.length > 2 && (
        <Image
          source={{ uri: displayImages[2] }}
          className="absolute rounded-2xl z-10"
          style={{
            width: sideImageWidth * 0.9,
            height: mainImageHeight * 0.8,
            top: mainImageHeight * 0.2,
            right: screenWidth * 0.05,
            transform: [{ translateX: sideImageWidth / 2 }, { rotate: '5deg' }, { translateX: -sideImageWidth / 2 }]
          }}
        />
      )}

      {/* 이미지 개수 태그 */}
      <View className="absolute top-2 left-[24%] bg-white bg-opacity-60 rounded-full px-3 py-2 z-30">
        <Text className="text-gray-600 text-xs font-PretendardBold">{images.length + '장의 사진'}</Text>
      </View>
    </View>
  )
}

interface ImageGridProps {
  guidelines: Tables<'property_cleaning_guidelines'>[]
  pickImages: () => void
}

const ImageGrid = ({ guidelines, pickImages }: ImageGridProps) => {
  const screenWidth = Dimensions.get('window').width
  const imageWidth = screenWidth - 48 // 48 is total horizontal padding
  const imageHeight = (imageWidth / 16) * 9 // 16:9 ratio

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
              source={{ uri: image.image_url }}
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
              // onPress={() => removeCleaningGuideline(index)}
              className="absolute top-2 right-2 bg-white rounded-full p-1"
            >
              <Ionicons name="close" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <TextInput
            value={guidelines[index]?.description}
            // onChangeText={(text) => updateCleaningGuidelines(index, text)}
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
