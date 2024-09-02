import { router } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Animated, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import FloatingButton from '@/components/common/FloatingButton'
import PropertyItem from '@/components/property/PropertyItem'
import { useAuth } from '@/hooks/useAuth'
import { useGetProperties } from '@/hooks/queries/react-query/useGetProperties'

interface Property {
  id: string
  image: string
  title: string
  price: number
  cleaningTime: string
  date: string
  isActive: boolean
}

const propertyList: Property[] = [
  {
    id: '1',
    image:
      'https://www.travelandleisure.com/thmb/U_ek9iFrp3UwNSOf5xW7MsTEV88=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-zion-ecocabin-WISHLISTBNB0222-f2649df02ff748c5bcff43052f20e309.jpg',
    title: '서울의 아름다운 숙소',
    price: 100000,
    cleaningTime: '2시간',
    date: '6월 1일 - 6월 5일',
    isActive: true
  },
  {
    id: '2',
    image: 'https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920',
    title: '인천의 아름다운 숙소',
    price: 80000,
    cleaningTime: '1.5시간',
    date: '6월 7일 - 6월 10일',
    isActive: false
  },
  {
    id: '3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbHVCudRciZ9_52VyDV__VZzooE0VIyTOIA&s',
    title: '강릉의 아름다운 숙소',
    price: 120000,
    cleaningTime: '2.5시간',
    date: '6월 15일 - 6월 20일',
    isActive: true
  },
  {
    id: '4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPx3eqBCKt1sKtQECM0-ebQoikcKtFhHNQjA&s',
    title: '파주의 아름다운 숙소',
    price: 90000,
    cleaningTime: '2시간',
    date: '6월 22일 - 6월 25',
    isActive: true
  },
  {
    id: '5',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaWBzb-WRlAIAii3_lcE5zhCicIN0e0ovJQ&s',
    title: '전주의 아름다운 숙소',
    price: 110000,
    cleaningTime: '3시간',
    date: '7월 1일 - 7월 5일',
    isActive: false
  }
]

const MyProperty = () => {
  const scrollY = useRef(new Animated.Value(0)).current
  // const [properties, setProperties] = useState<Property[]>(propertyList)
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
        {/* {properties?.map((property) => (
          <PropertyItem key={property.id} {...property} onToggle={(newStatus) => onToggle(property.id, newStatus)} />
        ))} */}
      </Animated.ScrollView>
      <FloatingButton onPress={onAddPropertyPress} scrollY={scrollY} text="숙소등록" icon="plus" />
    </SafeAreaView>
  )
}

export default MyProperty
