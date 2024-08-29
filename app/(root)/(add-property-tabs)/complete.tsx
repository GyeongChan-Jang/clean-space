import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'
import useAddPropertyStore from '@/store/useAddProperty'
import { router } from 'expo-router'

const CompleteScreen = () => {
  const setInitialState = useAddPropertyStore((state) => state.setInitialState)

  useEffect(() => {
    setInitialState()
  }, [])

  const handleGoToListing = () => {
    router.replace('/(main-tabs)/(profile)/(my-property)')
  }

  const handleAddAnotherProperty = () => {
    router.replace('/(add-property-tabs)/add-property')
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between p-5">
        <View className="flex-1 items-center justify-center">
          <LottieView
            source={require('@/assets/animations/cong.json')}
            autoPlay
            loop
            style={{
              width: 200,
              height: 200,
              marginBottom: 8
            }}
          />
          <Text className="text-3xl font-bold text-black mb-2">축하합니다!</Text>
          <Text className="text-lg text-gray-700 mb-8 text-center">공간 등록이 완료되었습니다.</Text>

          <View>
            <View className="flex-row items-center mb-4">
              <MaterialCommunityIcons name="check-circle" size={24} color="#51b37f" className="mr-2" />
              <Text className="text-base text-gray-700">공간 정보가 저장되었습니다.</Text>
            </View>
            <View className="flex-row items-center mb-4">
              <MaterialCommunityIcons name="check-circle" size={24} color="#51b37f" className="mr-2" />
              <Text className="text-base text-gray-700">클리너들이 곧 숙소를 확인할 수 있습니다.</Text>
            </View>
          </View>
        </View>

        <View className="mt-auto">
          <TouchableOpacity className="bg-sky-500 py-4 px-8 rounded-lg mb-4 items-center" onPress={handleGoToListing}>
            <Text className="text-white text-lg font-bold">나의 숙소 보기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border border-sky-500 py-4 px-8 rounded-lg items-center"
            onPress={handleAddAnotherProperty}
          >
            <Text className="text-sky-500 text-lg font-bold">다른 숙소 등록하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CompleteScreen
