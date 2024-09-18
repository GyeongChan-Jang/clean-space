import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Tables } from '@/supabase/database.types'
import { useLocalSearchParams } from 'expo-router'
import { useGetProperty } from '@/hooks/queries/react-query/useGetProperty'

// interface DetailPropertyProps {
//   property: Property
//   onToggle: (value: boolean) => void
// }

const DetailProperty = () => {
  const { id } = useLocalSearchParams()

  const { data: property, isLoading } = useGetProperty(id as string)

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header Image */}
      <View className="relative">
        {property && (
          <Image
            source={{
              uri:
                property.property_cleaning_guidelines[0]?.image_url ??
                'https://www.travelandleisure.com/thmb/U_ek9iFrp3UwNSOf5xW7MsTEV88=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-zion-ecocabin-WISHLISTBNB0222-f2649df02ff748c5bcff43052f20e309.jpg'
            }}
            className="w-full h-64"
          />
        )}
        <TouchableOpacity className="absolute top-8 left-4 bg-white rounded-full p-2">
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="p-4">
        {/* Title and Status */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-2xl font-PretendardBold text-secondary-900 flex-1 mr-2">{property?.name}</Text>
          <View className={`px-3 py-1 rounded-full ${property?.open ? 'bg-success-100' : 'bg-danger-100'}`}>
            <Text
              className={`text-sm font-PretendardMedium ${property?.open ? 'text-success-700' : 'text-danger-700'}`}
            >
              {property?.open ? '운영중' : '운영정지'}
            </Text>
          </View>
        </View>

        {/* Price and Time */}
        <Text className="text-lg font-PretendardMedium text-secondary-800 mb-1">
          ₩{property?.cleaning_price?.toLocaleString()} / 청소 {property?.cleaning_estimated_time}
        </Text>
        <Text className="text-base font-Pretendard text-secondary-600 mb-4">
          청소 시작 시간: {property?.cleaning_start_time}
        </Text>

        {/* Divider */}
        <View className="border-b border-secondary-200 my-4" />

        {/* Additional Details */}
        <View className="mb-4">
          <Text className="text-lg font-PretendardBold text-secondary-900 mb-2">숙소 정보</Text>
          <Text className="text-base font-Pretendard text-secondary-700">
            {property?.description || '추가 정보가 없습니다.'}
          </Text>
        </View>

        {/* Cleaning Guidelines */}
        <View className="mb-4">
          <Text className="text-lg font-PretendardBold text-secondary-900 mb-2">청소 가이드라인</Text>
          {property?.property_cleaning_guidelines.map((guideline, index) => (
            <Text key={index} className="text-base font-Pretendard text-secondary-700 mb-1">
              • {guideline.description}
            </Text>
          ))}
        </View>

        {/* Toggle Button */}
        <TouchableOpacity
          // onPress={() => onToggle(!property?.open)}
          className={`mt-4 p-3 rounded-lg ${property?.open ? 'bg-success-500' : 'bg-danger-500'}`}
        >
          <Text className="text-center text-white font-PretendardBold">
            {property?.open ? '운영 정지하기' : '운영 시작하기'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default DetailProperty
