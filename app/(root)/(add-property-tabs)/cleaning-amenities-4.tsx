import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import SelectCard from '@/components/common/SelectCard'
import useAddPropertyStore from '@/store/useAddProperty'
import { CleaningAmenity } from '@/types/property'

const amenities: CleaningAmenity[] = [
  {
    id: 'cleaningTools',
    name: '청소도구',
    image: require('@/assets/icons/amenities/cleaning-tools.png')
  },
  {
    id: 'airConditionerOrHeater',
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
    id: 'nearbyLaundry',
    name: '인근 빨래방',
    image: require('@/assets/icons/amenities/washing-machine.png')
  }
]

const CleaningAmenities = () => {
  const { cleaningAmenities, setCleaningAmenities } = useAddPropertyStore()

  const onSelectAmenities = (amenity: CleaningAmenity) => {
    if (cleaningAmenities.some((item) => item.id === amenity.id)) {
      setCleaningAmenities(cleaningAmenities.filter((item) => item.id !== amenity.id))
      return
    }
    setCleaningAmenities([...cleaningAmenities, amenity])
  }

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
