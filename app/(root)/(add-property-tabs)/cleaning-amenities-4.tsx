import React, { useEffect } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import SelectCard from '@/components/common/SelectCard'
import useAddPropertyStore from '@/store/useAddProperty'
import { CleaningAmenity } from '@/types/property'
import { router, useNavigation } from 'expo-router'
import { supabase } from '@/lib/supabase'
import { AddPropertyRoutes } from '@/constants/routes'

const amenities: CleaningAmenity[] = [
  {
    id: 'cleaning_tools',
    name: '청소도구',
    image: require('@/assets/icons/amenities/cleaning-tools.png')
  },
  {
    id: 'air_conditioner',
    name: '에어컨',
    image: require('@/assets/icons/amenities/air-conditioning.png')
  },
  {
    id: 'heating',
    name: '난방',
    image: require('@/assets/icons/amenities/heater.png')
  },
  {
    id: 'elevator',
    name: '엘리베이터',
    image: require('@/assets/icons/amenities/elevator.png')
  },
  {
    id: 'wifi',
    name: '와이파이',
    image: require('@/assets/icons/amenities/wifi.png')
  },
  {
    id: 'parking',
    name: '주차',
    image: require('@/assets/icons/amenities/parking.png')
  },
  {
    id: 'laundry',
    name: '빨래방',
    image: require('@/assets/icons/amenities/washing-machine.png')
  }
]

const CleaningAmenities = () => {
  const navigation = useNavigation()
  const { cleaningAmenities, setCleaningAmenities, propertyId } = useAddPropertyStore()

  const onSelectAmenities = (amenity: CleaningAmenity) => {
    if (cleaningAmenities.some((item) => item.id === amenity.id)) {
      setCleaningAmenities(cleaningAmenities.filter((item) => item.id !== amenity.id))
      return
    }
    setCleaningAmenities([...cleaningAmenities, amenity])
  }

  const updateCleaningAmenities = async () => {
    const amenities = useAddPropertyStore.getState().cleaningAmenities.reduce(
      (acc, item) => {
        acc[item.id] = true
        return acc
      },
      {} as { [key: string]: boolean }
    )

    const { error } = await supabase.from('property_amenities').insert({
      property_id: propertyId,
      ...amenities
    })

    if (error) {
      // 이미 등록된 경우
      if (error.code === '23505') {
        router.push(`/${AddPropertyRoutes.CLEANING_LIST_5}`)
        return
      }
      console.error(error)
      Alert.alert('오류', '청소 편의시설 업데이트 중 오류가 발생했습니다.')
      return
    }
    router.push(`/${AddPropertyRoutes.CLEANING_LIST_5}`)
  }

  useEffect(() => {
    navigation.setOptions({
      onNextPress: updateCleaningAmenities
    })
  }, [navigation])

  return (
    <SafeAreaView className="bg-white">
      <ScrollView className="px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">어떤 편의시설이 있나요?</Text>
        <Text className="text-gray-500 mb-6">해당하는 모든 항목을 선택해주세요.</Text>
        <View className="flex-row flex-wrap justify-between">
          {amenities.map((amenity) => (
            <SelectCard
              key={amenity.id}
              id={amenity.id}
              image={amenity.image}
              label={amenity.name}
              isSelected={cleaningAmenities.some((item) => item.id === amenity.id)}
              onSelect={() => onSelectAmenities(amenity)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CleaningAmenities
