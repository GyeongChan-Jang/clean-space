import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ADD_PROPERTY_MAX_DESCRIPTION_LENGTH } from '@/constants'
import useAddPropertyStore from '@/store/useAddProperty'
import { router, useNavigation } from 'expo-router'
import { supabase } from '@/lib/supabase'
import { AddPropertyRoutes } from '@/constants/routes'

type FormData = {
  name: string
  description: string
  size: string
}

const PropertyDetailsScreen = () => {
  const { propertyDetails, setPropertyDetails, propertyId } = useAddPropertyStore()
  const navigation = useNavigation()

  const {
    control,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: propertyDetails.name,
      description: propertyDetails.description,
      size: propertyDetails.size > 0 ? propertyDetails.size.toString() : ''
    }
  })

  const handleIncrement = (field: 'rooms' | 'beds' | 'bathrooms') => {
    setPropertyDetails({ [field]: propertyDetails[field] + 1 })
  }

  const handleDecrement = (field: 'rooms' | 'beds' | 'bathrooms') => {
    setPropertyDetails({ [field]: Math.max(0, propertyDetails[field] - 1) })
  }

  const updatePropertyDetails = async () => {
    const { name, description, size, rooms, beds, bathrooms } = useAddPropertyStore.getState().propertyDetails
    const { error } = await supabase
      .from('properties')
      .update({
        name,
        description,
        area_sqm: size,
        area_pyeong: size * 0.3025,
        room_count: rooms,
        bed_count: beds,
        toilet_count: bathrooms
      })
      .eq('property_id', propertyId)

    if (error) {
      console.log(error)
      Alert.alert('오류', '공간 상세정보 업데이트에 실패했습니다.')
      return
    }
    router.push(`/${AddPropertyRoutes.CLEANING_AMENITIES_4}`)
  }

  useEffect(() => {
    navigation.setOptions({
      onNextPress: updatePropertyDetails
    })
  }, [navigation])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">공간에 대해 자세히 알려주세요</Text>
        <Text className="text-gray-500 mb-6">이 정보는 청소 서비스 제공에 중요한 역할을 합니다.</Text>

        <Controller
          control={control}
          rules={{ required: '공간 이름은 필수입니다' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="mb-6">
              <Text className="text-xl font-PretendardSemiBold mb-2">공간 이름</Text>
              <TextInput
                onBlur={onBlur}
                onChangeText={(text) => {
                  onChange(text)
                  setPropertyDetails({ name: text })
                }}
                value={value}
                placeholder="숙소 이름을 입력해주세요"
                className={`text-lg pb-2 h-[38px] border-b ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 font-Pretendard`}
              />
              {errors.name && <Text className="text-red-500 mt-1">{errors.name.message}</Text>}
            </View>
          )}
          name="name"
        />

        <Controller
          control={control}
          rules={{
            required: '공간 설명은 필수입니다',
            maxLength: {
              value: ADD_PROPERTY_MAX_DESCRIPTION_LENGTH,
              message: `최대 ${ADD_PROPERTY_MAX_DESCRIPTION_LENGTH}자까지 입력 가능합니다`
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="mb-6">
              <Text className="text-xl font-PretendardSemiBold mb-2">공간 설명</Text>
              <TextInput
                onBlur={onBlur}
                onChangeText={(text) => {
                  if (text.length <= ADD_PROPERTY_MAX_DESCRIPTION_LENGTH) {
                    onChange(text)
                    setPropertyDetails({ description: text })
                  }
                }}
                value={value}
                placeholder="공간에 대해 설명해주세요"
                multiline
                numberOfLines={4}
                className={`text-lg p-4 border rounded-md text-gray-900 font-Pretendard h-[120px] ${
                  errors.description ? 'border-danger-800' : 'border-secondary-600 focus:border-black'
                }`}
              />
              <Text className="text-left text-secondary-800 font-PretendardSemiBold mt-2">{`${value.length}/${ADD_PROPERTY_MAX_DESCRIPTION_LENGTH}`}</Text>
              {errors.description && <Text className="text-red-500 mt-1">{errors.description.message}</Text>}
            </View>
          )}
          name="description"
        />

        <Controller
          control={control}
          rules={{
            required: '공간 크기는 필수입니다',
            pattern: {
              value: /^[0-9]+$/,
              message: '숫자만 입력 가능합니다'
            },
            validate: (value) => Number(value) > 0 || '0보다 큰 숫자를 입력해주세요'
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="mb-6">
              <Text className="text-xl font-PretendardSemiBold mb-2">공간 크기 (㎡)</Text>
              <TextInput
                onBlur={onBlur}
                onChangeText={(text) => {
                  if (text === '' || /^[0-9]+$/.test(text)) {
                    onChange(text)
                    setPropertyDetails({ size: Number(text) || 0 })
                  }
                }}
                value={value}
                placeholder="공간 크기를 입력해주세요"
                keyboardType="numeric"
                className={`text-lg pb-2 border-b ${errors.size ? 'border-red-500' : 'border-gray-300'} text-gray-900 font-Pretendard`}
              />
              {errors.size && <Text className="text-red-500 mt-1">{errors.size.message}</Text>}
              {!errors.size && Number(value) > 0 && (
                <Text className="text-secondary-800 mt-2">{`${(Number(value) * 0.3025).toFixed(2)} 평`}</Text>
              )}
            </View>
          )}
          name="size"
        />

        <View className="mb-6">
          {[
            { label: '침실', field: 'rooms' as const },
            { label: '침대', field: 'beds' as const },
            { label: '욕실', field: 'bathrooms' as const }
          ].map((item, index) => (
            <View key={index} className="flex-row items-center justify-between mb-4 border-b border-gray-200 pb-2">
              <Text className="text-lg font-Pretendard text-secondary-900">{item.label}</Text>
              <View className="flex-row items-center">
                <TouchableOpacity onPress={() => handleDecrement(item.field)} className="p-2">
                  <Ionicons name="remove-circle-outline" size={40} color="#AAAAAA" />
                </TouchableOpacity>
                <Text className="text-xl w-[30px] text-center font-Pretendard">{propertyDetails[item.field]}</Text>
                <TouchableOpacity onPress={() => handleIncrement(item.field)} className="p-2">
                  <Ionicons name="add-circle-outline" size={40} color="#AAAAAA" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PropertyDetailsScreen
