import React, { useEffect } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import SelectCard from '@/components/common/SelectCard'
import useAddPropertyStore from '@/store/useAddProperty'
import { PropertyValues, PropertyType } from '@/types/property'
import { supabase } from '@/lib/supabase'
import { router, useNavigation } from 'expo-router'
import { AddPropertyRoutes } from '@/constants/routes'

export const propertyValues: PropertyValues[] = [
  {
    id: '1',
    value: PropertyType.HOUSE,
    name: '주택',
    image: require('@/assets/icons/properties/house.png')
  },
  {
    id: '2',
    value: PropertyType.APARTMENT,
    name: '아파트/오피스텔',
    image: require('@/assets/icons/properties/apartment.png')
  },
  {
    id: '3',
    value: PropertyType.OFFICE,
    name: '사무실',
    image: require('@/assets/icons/properties/office.png')
  },
  {
    id: '4',
    value: PropertyType.PENSION,
    name: '펜션',
    image: require('@/assets/icons/properties/pension.png')
  }
]

const PropertyTypeScreen = () => {
  const navigation = useNavigation()
  const { propertyType, setPropertyType, propertyId } = useAddPropertyStore()

  const handleSelect = (id: string) => {
    if (propertyType === id) {
      setPropertyType('')
      return
    }
    setPropertyType(id)
  }

  const updatePropertyType = async () => {
    const propertyTypeValue = propertyValues.find((type) => type.id === propertyType)?.value

    const { error } = await supabase
      .from('properties')
      .update({ property_type: propertyTypeValue as PropertyType })
      .eq('property_id', propertyId)
    if (error) {
      Alert.alert('오류', '공간 유형 업데이트에 실패했습니다.')
      router.back()
    }
    router.push(`/${AddPropertyRoutes.PROPERTY_LOCATION_2}`)
  }

  useEffect(() => {
    navigation.setOptions({
      onNextPress: updatePropertyType
    })
  }, [navigation, propertyType])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">공간의 유형을 선택해주세요.</Text>
        <Text className="text-gray-500 mb-6">청소가 필요한 공간의 유형을 선택해주세요.</Text>
        <View className="flex-row flex-wrap justify-between">
          {propertyValues.map((type) => (
            <SelectCard
              key={type.id}
              id={type.id}
              image={type.image}
              label={type.name}
              isSelected={propertyType === type.id}
              onSelect={handleSelect}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PropertyTypeScreen
