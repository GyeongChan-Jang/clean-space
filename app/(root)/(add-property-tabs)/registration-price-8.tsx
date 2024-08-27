import React, { useCallback } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import useAddPropertyStore from '@/store/useAddProperty'

const RegistrationPrice = () => {
  const { cleaningPrice, setCleaningPrice } = useAddPropertyStore()

  const suggestedPrices = [30000, 35000, 40000, 45000, 50000]

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const handlePriceChange = useCallback(
    (text: string) => {
      // Remove non-digit characters and convert to number
      const numericValue = parseInt(text.replace(/[^0-9]/g, ''), 10) || 0
      setCleaningPrice(numericValue)
    },
    [setCleaningPrice]
  )

  const formattedPrice = formatNumber(cleaningPrice)

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="p-6">
          <Text className="text-2xl font-bold mb-6">청소 가격 설정</Text>

          <Text className="text-lg text-gray-700 mb-4">고객들에게 청구할 청소 서비스 가격을 설정해주세요.</Text>

          <View className="flex-row items-center border-b border-gray-300 pb-2 mb-6">
            <Text className="text-2xl mr-2">₩</Text>
            <TextInput
              className="text-2xl flex-1"
              keyboardType="numeric"
              value={formattedPrice}
              onChangeText={handlePriceChange}
              placeholder="가격 입력"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <Text className="text-lg font-semibold mb-4">추천 가격</Text>
          <View className="flex-row flex-wrap mb-6">
            {suggestedPrices.map((suggestedPrice, index) => (
              <TouchableOpacity
                key={index}
                className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2"
                onPress={() => setCleaningPrice(suggestedPrice)}
              >
                <Text className="text-gray-800">₩{formatNumber(suggestedPrice)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="bg-gray-50 rounded-lg p-4 mb-6">
            <View className="flex-row items-center mb-2">
              <Ionicons name="information-circle-outline" size={24} color="#4B5563" />
              <Text className="text-lg font-semibold ml-2">가격 설정 팁</Text>
            </View>
            <Text className="text-gray-600">
              비슷한 규모와 위치의 숙소들의 평균 청소 가격을 참고해보세요. 적절한 가격 설정은 더 많은 예약으로 이어질 수
              있습니다.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegistrationPrice
