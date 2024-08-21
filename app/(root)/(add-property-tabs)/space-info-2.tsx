import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAddPropertyStore from "@/store/useAddProperty";

const SpaceInfo2 = () => {
  const { spaceInfo, setSpaceInfo } = useAddPropertyStore();

  const handleChange = (field: keyof typeof spaceInfo, value: string) => {
    setSpaceInfo({ ...spaceInfo, [field]: value });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">
          공간에 대해 자세히 알려주세요
        </Text>
        <Text className="text-gray-500 mb-6">
          이 정보는 청소 서비스 제공에 중요한 역할을 합니다.
        </Text>

        <View className="mb-6">
          <Text className="text-base font-semibold mb-2">숙소 이름</Text>
          <TextInput
            value={spaceInfo.name}
            onChangeText={(value) => handleChange("name", value)}
            placeholder="숙소 이름을 입력해주세요"
            className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
            autoComplete="off"
          />
        </View>

        <View className="mb-6">
          <Text className="text-base font-semibold mb-2">
            숙소 크기 (평방미터)
          </Text>
          <TextInput
            value={spaceInfo.size.toString()}
            onChangeText={(value) => handleChange("size", value)}
            placeholder="숙소 크기를 입력해주세요"
            className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
            autoComplete="off"
            keyboardType="numeric"
          />
        </View>

        <View className="mb-6">
          <Text className="text-base font-semibold mb-2">방 개수</Text>
          <TextInput
            value={spaceInfo.rooms.toString()}
            onChangeText={(value) => handleChange("rooms", value)}
            placeholder="방 개수를 입력해주세요"
            className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
            autoComplete="off"
            keyboardType="numeric"
          />
        </View>

        <View className="mb-6">
          <Text className="text-base font-semibold mb-2">화장실 개수</Text>
          <TextInput
            value={spaceInfo.bathrooms.toString()}
            onChangeText={(value) => handleChange("bathrooms", value)}
            placeholder="화장실 개수를 입력해주세요"
            className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
            autoComplete="off"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpaceInfo2;
