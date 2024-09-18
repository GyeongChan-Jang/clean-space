import React, { useMemo, useRef, useCallback, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, Dimensions, Image, ScrollView } from 'react-native'
import { Tables } from '@/supabase/database.types'
import { useLocalSearchParams } from 'expo-router'
import { useGetProperty } from '@/hooks/queries/react-query/useGetProperty'
import Loader from '@/components/common/LoadingOverlay'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/common/Header'
import SelectBadge from '@/components/common/SelectBadge'
import { amenityList, cleaningList } from '@/constants'
import EditGuidelineImage from '@/components/property/edit/EditGuidelineImage'
import BottomSheet from '@gorhom/bottom-sheet'
import { Ionicons } from '@expo/vector-icons'
// import ImageGrid from '@/components/property/edit/ImageGrid'

type Property = Tables<'properties'> & {
  property_cleaning_guidelines: Tables<'property_cleaning_guidelines'>[]
}

const PropertyEdit = () => {
  const { id } = useLocalSearchParams()
  const { data: property, isLoading } = useGetProperty(id as string)
  const bottomSheetRef = useRef<BottomSheet>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const openBottomSheet = useCallback((itemType: string) => {
    setSelectedItem(itemType)
    bottomSheetRef.current?.expand()
  }, [])

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close()
    setSelectedItem(null)
  }, [])

  const cleanings = useMemo(() => {
    if (!property?.property_cleaning_list) return []
    return cleaningList.filter((cleaning) => {
      const key = cleaning.id as keyof typeof property.property_cleaning_list
      if (!property.property_cleaning_list) return false
      return property.property_cleaning_list[key]
    })
  }, [property])

  const amenities = useMemo(() => {
    if (!property?.property_amenities) return []
    return amenityList.filter((amenity) => {
      const key = amenity.id as keyof typeof property.property_amenities
      if (!property.property_amenities) return false
      return property.property_amenities[key]
    })
  }, [property])

  const renderItem = ({ item }: { item: { type: string } }) => {
    const renderCard = (title: string, content: string) => (
      <TouchableOpacity onPress={() => openBottomSheet(item.type)} className="p-4 shadow-md rounded-lg bg-white mb-4">
        <Text className="text-lg font-PretendardSemiBold">{title}</Text>
        <Text className="text-xl font-PretendardMedium text-secondary-700 mt-1">{content}</Text>
      </TouchableOpacity>
    )

    switch (item.type) {
      case 'editGuidelineImage':
        return <EditGuidelineImage id={id as string} onPress={() => openBottomSheet(item.type)} />
      case 'propertyName':
        return renderCard('숙소 이름', property?.name || '')
      case 'propertyType':
        return renderCard('숙소 타입', property?.property_type || '')
      case 'cleaningPrice':
        return renderCard('청소 가격', `${property?.cleaning_price?.toLocaleString('ko-KR')}원`)
      case 'description':
        return renderCard('숙소 설명', property?.description || '')
      case 'address':
        return (
          <TouchableOpacity
            onPress={() => openBottomSheet('address')}
            className="p-4 shadow-md rounded-lg bg-white mb-4"
          >
            <Text className="text-lg font-PretendardSemiBold">숙소 주소</Text>
            <Text className="text-xl font-PretendardMedium text-secondary-700 mt-1">
              {property?.property_address?.address}
            </Text>
            <Text className="text-xl font-PretendardMedium text-secondary-700">
              {property?.property_address?.address_detail}
            </Text>
          </TouchableOpacity>
        )
      case 'cleaningRange':
        return (
          <TouchableOpacity
            onPress={() => openBottomSheet('cleaningRange')}
            className="p-4 shadow-md rounded-lg bg-white mb-4"
          >
            <Text className="text-lg font-PretendardSemiBold">청소 범위</Text>
            <View className="flex-row flex-wrap mt-1">
              {cleanings.map((cleaning) => (
                <SelectBadge
                  key={cleaning.id}
                  id={cleaning.id}
                  image={cleaning.image}
                  isSelected={true}
                  onSelect={() => {}}
                  text={cleaning.name}
                />
              ))}
            </View>
          </TouchableOpacity>
        )
      case 'amenities':
        return (
          <TouchableOpacity
            onPress={() => openBottomSheet('amenities')}
            className="p-4 shadow-md rounded-lg bg-white mb-4"
          >
            <Text className="text-lg font-PretendardSemiBold">숙소 구비사항</Text>
            <View className="flex-row flex-wrap mt-1">
              {amenities.map((amenity) => (
                <SelectBadge
                  key={amenity.id}
                  id={amenity.id}
                  image={amenity.image}
                  isSelected={true}
                  onSelect={() => {}}
                  text={amenity.name}
                />
              ))}
            </View>
          </TouchableOpacity>
        )
      default:
        return null
    }
  }

  const renderBottomSheetContent = () => {
    const screenWidth = Dimensions.get('window').width
    const imageWidth = screenWidth - 48 // 48 is total horizontal padding
    const imageHeight = (imageWidth / 16) * 9 // 16:9 ratio

    const renderEditView = (title: string, value: string, onSave: (newValue: string) => void) => (
      <View className="flex-1 p-4">
        <Text className="text-xl font-PretendardBold mb-4">{title}</Text>
        <TextInput
          value={value}
          onChangeText={(text) => {
            /* Update local state */
          }}
          className="border border-gray-300 rounded-md p-2"
          multiline={title === '숙소 설명'}
        />
        <TouchableOpacity onPress={() => onSave(value)} className="bg-blue-500 rounded-md p-2 mt-4">
          <Text className="text-white text-center">저장</Text>
        </TouchableOpacity>
      </View>
    )

    console.log(selectedItem)

    switch (selectedItem) {
      case 'editGuidelineImage':
        return (
          <View className="flex-1 p-4">
            <Text className="text-xl font-PretendardBold mb-4">가이드라인 이미지 수정</Text>
            <ScrollView>
              {property?.property_cleaning_guidelines.map((image, index) => (
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
                    value={image.description}
                    // onChangeText={(text) => updateCleaningGuidelines(index, text)}
                    placeholder={`${index + 1}. 사진에 대한 설명을 입력하세요.`}
                    className="border-gray-300 rounded-md p-2 mt-2 border-b"
                    multiline
                    numberOfLines={4}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        )
      case 'propertyName':
        return renderEditView('숙소 이름 수정', property?.name || '', (newName) => {
          // 숙소 이름 업데이트 로직
        })
      case 'propertyType':
        return renderEditView('숙소 타입 수정', property?.property_type || '', (newType) => {
          // 숙소 타입 업데이트 로직
        })
      case 'cleaningPrice':
        return renderEditView('청소 가격 수정', property?.cleaning_price?.toString() || '', (newPrice) => {
          // 청소 가격 업데이트 로직
        })
      case 'description':
        return renderEditView('숙소 설명 수정', property?.description || '', (newDescription) => {
          // 숙소 설명 업데이트 로직
        })
      case 'address':
        return (
          <View className="flex-1 p-4">
            <Text className="text-xl font-PretendardBold mb-4">숙소 주소 수정</Text>
            {/* 주소 수정 UI 구현 */}
          </View>
        )
      case 'cleaningRange':
        return (
          <View className="flex-1 p-4">
            <Text className="text-xl font-PretendardBold mb-4">청소 범위 수정</Text>
            {/* 청소 범위 수정 UI 구현 */}
          </View>
        )
      case 'amenities':
        return (
          <View className="flex-1 p-4">
            <Text className="text-xl font-PretendardBold mb-4">숙소 구비사항 수정</Text>
            {/* 숙소 구비사항 수정 UI 구현 */}
          </View>
        )
      default:
        return null
    }
  }

  const data = [
    { type: 'editGuidelineImage' },
    { type: 'propertyName' },
    { type: 'propertyType' },
    { type: 'cleaningPrice' },
    { type: 'description' },
    { type: 'address' },
    { type: 'cleaningRange' },
    { type: 'amenities' }
  ]

  if (isLoading) return <Loader />

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1">
        <Header title="숙소 수정" />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['85%']}
        enablePanDownToClose={true}
        onClose={closeBottomSheet}
        backgroundStyle={{ backgroundColor: 'white' }}
      >
        {renderBottomSheetContent()}
      </BottomSheet>
    </View>
  )
}

export default PropertyEdit
