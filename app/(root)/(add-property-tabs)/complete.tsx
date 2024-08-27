import React, { useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'

const CompleteScreen = () => {
  const handleGoToListing = () => {
    // 등록된 숙소 목록 페이지로 이동
    // navigation.navigate('PropertyList');
  }

  const handleAddAnotherProperty = () => {
    // 새로운 숙소 등록 프로세스 시작
    // navigation.navigate('PropertyType');
    // 상태 초기화
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <ScrollView className={`mt-10 pt-[${Dimensions.get('window').height * 0.05}px]`}>
        <View className="p-5 items-center ">
          <LottieView
            source={require('@/assets/animations/congratulation.json')}
            autoPlay
            loop
            style={{
              width: 200,
              height: 200,
              marginBottom: 30
            }}
          />
          <Text className="text-3xl font-bold text-black mb-2">축하합니다!</Text>
          <Text className="text-lg text-gray-700 mb-8 text-center">공간 등록이 완료되었습니다.</Text>

          <View>
            <View className="flex-row items-center mb-4 gap-1">
              <MaterialCommunityIcons name="check-circle" size={24} color="#51b37f" className="mr-2" />
              <Text className="text-base text-gray-700">공간 정보가 저장되었습니다.</Text>
            </View>
            <View className="flex-row items-center mb-4 gap-1">
              <MaterialCommunityIcons name="check-circle" size={24} color="#51b37f" className="mr-2" />
              <Text className="text-base text-gray-700">클리너들이 곧 숙소를 확인할 수 있습니다.</Text>
            </View>
          </View>

          <TouchableOpacity
            className={`bg-sky-500 py-4 px-8 rounded-lg mt-8 w-full items-center`}
            onPress={handleGoToListing}
          >
            <Text className="text-white text-lg font-bold">나의 숙소 보기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`border border-sky-500 py-4 px-8 rounded-lg mt-4 w-full items-center`}
            onPress={handleAddAnotherProperty}
          >
            <Text className="text-sky-500 text-lg font-bold">다른 숙소 등록하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  )
}

export default CompleteScreen
