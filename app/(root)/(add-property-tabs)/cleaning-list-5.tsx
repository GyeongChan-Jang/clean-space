import React, { useEffect } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import SelectBadge from '@/components/common/SelectBadge'
import useAddPropertyStore from '@/store/useAddProperty'
import { CleaningPlaces } from '@/types/property'
import { router, useNavigation } from 'expo-router'
import { supabase } from '@/lib/supabase'
import { AddPropertyRoutes } from '@/constants/routes'
import { cleaningList } from '@/constants'

const CleaningPlaces5 = () => {
  const { cleaningPlaces, setCleaningPlaces, propertyId } = useAddPropertyStore()
  const navigation = useNavigation()

  const onSelectPlaces = (place: CleaningPlaces) => {
    if (cleaningPlaces.some((item) => item.id === place.id)) {
      setCleaningPlaces(cleaningPlaces.filter((item) => item.id !== place.id))
      return
    }
    setCleaningPlaces([...cleaningPlaces, place])
  }

  const updateCleaningList = async () => {
    const cleaningList = useAddPropertyStore.getState().cleaningPlaces.reduce(
      (acc, item) => {
        acc[item.id] = true
        return acc
      },
      {} as { [key: string]: boolean }
    )
    const { error } = await supabase.from('property_cleaning_list').insert({
      property_id: propertyId,
      ...cleaningList
    })
    if (error) {
      // 이미 등록된 경우
      if (error.code === '23505') {
        router.push(`/${AddPropertyRoutes.CLEANING_GUIDELINES_6}`)
        return
      }
      console.error(error)
      Alert.alert('오류', '청소 공간 업데이트 중 오류가 발생했습니다.')
      return
    }
    router.push(`/${AddPropertyRoutes.CLEANING_GUIDELINES_6}`)
  }

  useEffect(() => {
    navigation.setOptions({
      onNextPress: updateCleaningList
    })
  }, [navigation])
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">청소가 필요한 공간을 선택해주세요.</Text>
        <Text className="text-gray-500 mb-6">청소 가이드라인 작성 시 이 정보가 사용됩니다.</Text>
        <View className="flex-row flex-wrap">
          {cleaningList.map((cleaning) => (
            <SelectBadge
              key={cleaning.id}
              id={cleaning.id}
              image={cleaning.image}
              isSelected={cleaningPlaces.some((item) => item.id === cleaning.id)}
              onSelect={() => onSelectPlaces(cleaning)}
              text={cleaning.name}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default CleaningPlaces5
