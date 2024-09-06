import { useRouter } from 'expo-router'
import React from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '@/components/common/CustomButton'
import { AddPropertyRoutes } from '@/constants/routes'
import { supabase } from '@/lib/supabase'
import useAddPropertyStore from '@/store/useAddProperty'
import { useAuth } from '@/store/useAuthStore'

const AddProperty = () => {
  const router = useRouter()
  const { user } = useAuth()
  const { setPropertyId } = useAddPropertyStore()
  const insertProperty = async (id: string) => {
    const { data, error } = await supabase
      .from('properties')
      .insert({
        host_id: id
      })
      .select('property_id')

    if (data) setPropertyId(data[0].property_id)

    if (error) {
      console.log(error)
      Alert.alert('오류', '공간 등록에 실패했습니다.')
      router.back()
    }
  }

  const onClickStart = () => {
    if (!user?.id) {
      Alert.alert('오류', '로그인이 필요합니다.')
      router.push('/(auth)/sign-in')
      return
    }
    insertProperty(user?.id)
    router.push(`/${AddPropertyRoutes.PROPERTY_TYPE_1}`)
  }

  const steps = [
    {
      title: '공간 정보를 알려주세요',
      description: '청소가 필요한 공간의 위치와 크기 등 기본정보를 알려주세요.'
    },
    {
      title: '청소 정보를 알려주세요',
      description: '청소 가이드라인을 작성하고 청소에 대한 요구사항을 입력해주세요.'
    },
    {
      title: '등록을 완료하세요',
      description: '적절한 청소 가격을 설정해주세요.'
    }
  ]

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6">
        <Text className="text-3xl font-bold mb-6">공간 등록하기</Text>
        <Text className="text-lg mb-8">몇 가지 간단한 단계를 통해 귀하의 숙소를 등록하고 클리너를 찾아보세요.</Text>

        {steps.map((step, index) => (
          <View key={index} className="flex-row mb-6">
            <View className="w-10 h-10 bg-sky-500 rounded-full items-center justify-center mr-4">
              <Text className="text-white font-bold">{index + 1}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold mb-1">{step.title}</Text>
              <Text className="text-gray-600">{step.description}</Text>
            </View>
          </View>
        ))}

        <Image
          source={require('@/assets/images/building2.png')}
          className="w-full h-52 rounded-lg mb-8"
          resizeMode="cover"
        />

        <CustomButton
          title="시작하기"
          onPress={onClickStart}
          bgVariant="primary"
          textVariant="secondary"
          className="py-4 rounded-lg"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddProperty
