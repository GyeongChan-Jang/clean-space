import React from 'react'
import { View, Text, Image } from 'react-native'

const NoData = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <View className="items-center mt-[20%]">
        <View className="mb-8">
          <Image
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
            source={require('@/assets/images/property-no-data.png')}
          />
        </View>

        <View className="items-center">
          <Text className="text-secondary-900 text-lg font-PretendardBold mb-2 text-center">
            현재 등록된 숙소가 없습니다.
          </Text>
          <Text className="text-secondary-900 text-lg font-Pretendard text-center">
            숙소를 등록하고 클리너를 모집해보세요.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default NoData
