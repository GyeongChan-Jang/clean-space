import { router } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Animated, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import FloatingButton from '@/components/common/FloatingButton'
import PropertyItem from '@/components/property/PropertyItem'
import { useGetProperties } from '@/hooks/queries/react-query/useGetProperties'
import { useAuth } from '@/store/useAuthStore'
import NoData from '@/components/common/exception/property/NoData'

interface Property {
  id: string
  image: string
  title: string
  price: number
  cleaningTime: string
  date: string
  isActive: boolean
}

const MyProperty = () => {
  const scrollY = useRef(new Animated.Value(0)).current

  const { user } = useAuth()

  const { data: properties, isLoading } = useGetProperties(user?.id)

  const onAddPropertyPress = () => {
    router.push('/(add-property-tabs)')
  }

  const onToggle = async (id: string, newStatus: boolean) => {
    try {
      // 서버에 상태 변경 요청을 보냅니다.
      // await updatePropertyStatus(id, newStatus);
      // 로컬 상태를 업데이트합니다.
      // setProperties((prevProperties) =>
      //   prevProperties.map((property) => (property.id === id ? { ...property, isActive: newStatus } : property))
      // )
    } catch (error) {
      console.error('Failed to update property status:', error)
      // 에러 처리 (예: 사용자에게 알림)
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Animated.ScrollView
        className="flex-1 px-5"
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false
        })}
        scrollEventThrottle={16}
      >
        {/* 헤더 */}
        <View className="flex-row justify-between py-7">
          <Text className="text-3xl font-PretendardBold text-secondary-900">숙소</Text>
        </View>
        {/* 숙소 리스트 */}
        {properties?.map((property) => (
          <PropertyItem
            key={property.property_id}
            item={property}
            isLoading={isLoading}
            onToggle={(newStatus) => onToggle(property.property_id, newStatus)}
          />
        ))}
        {properties?.length === 0 && <NoData />}
      </Animated.ScrollView>
      <FloatingButton onPress={onAddPropertyPress} scrollY={scrollY} text="숙소등록" icon="plus" />
    </SafeAreaView>
  )
}

export default MyProperty
