import { Tables } from '@/supabase/database.types'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

interface PropertyProps {
  item: Tables<'properties'>
  onToggle: (value: boolean) => void
}

const PropertyItem = ({ item, onToggle }: PropertyProps) => {
  return (
    <View className="mb-5 bg-white rounded-2xl shadow-lg overflow-hidden">
      <View className="relative">
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaWBzb-WRlAIAii3_lcE5zhCicIN0e0ovJQ&s'
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
