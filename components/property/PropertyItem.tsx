import { Tables } from '@/supabase/database.types'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

type Property = Tables<'properties'> & {
  property_cleaning_guidelines: Tables<'property_cleaning_guidelines'>[]
}

interface PropertyProps {
  item: Property
  onToggle: (value: boolean) => void
  isLoading: boolean
}

const PropertyItemSkeleton = () => {
  return (
    <View className="mb-5 bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <View className="w-full h-48 bg-gray-300 rounded-t-2xl" />
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <View className="h-6 bg-gray-300 rounded w-3/4" />
          <View className="w-12 h-6 bg-gray-300 rounded" />
        </View>
        <View className="h-5 bg-gray-300 rounded w-2/3 mb-1" />
        <View className="h-4 bg-gray-300 rounded w-1/2" />
      </View>
    </View>
  )
}

const PropertyItem = ({ item, onToggle, isLoading }: PropertyProps) => {
  if (isLoading) {
    return <PropertyItemSkeleton />
  }

  return (
    <View className="mb-5 bg-white rounded-2xl shadow-lg overflow-hidden">
      <View className="relative">
        <Image
          source={{
            uri:
              item.property_cleaning_guidelines[0]?.image_url ??
              'https://www.travelandleisure.com/thmb/U_ek9iFrp3UwNSOf5xW7MsTEV88=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-zion-ecocabin-WISHLISTBNB0222-f2649df02ff748c5bcff43052f20e309.jpg'
          }}
          className="w-full h-48 rounded-t-2xl"
        />
        <View className="absolute top-3 left-3">
          <View className="bg-white rounded-full px-3 py-1.5 flex-row items-center shadow-sm">
            <View className={`w-2 h-2 rounded-full ${item.open ? 'bg-success-500' : 'bg-danger-500'} mr-2`} />
            <Text className="text-xs text-secondary-800 font-PretendardBold">{item.open ? '운영중' : '운영정지'}</Text>
          </View>
        </View>
      </View>
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-PretendardBold text-secondary-900 flex-1 mr-2" numberOfLines={1}>
            {item.name}
          </Text>
          <Switch
            value={item.open ?? false}
            onValueChange={onToggle}
            trackColor={{ false: '#D1D5DB', true: '#5CCEF8' }}
            thumbColor={item.open ? '#FFFFFF' : '#FFFFFF'}
          />
        </View>
        <Text className="text-base font-PretendardMedium text-secondary-800 mb-1">
          ₩{item.cleaning_price?.toLocaleString()} / 청소 {item.cleaning_estimated_time}
        </Text>
        <Text className="text-sm font-Pretendard text-secondary-600">{item.cleaning_start_time}</Text>
      </View>
    </View>
  )
}

export default PropertyItem
