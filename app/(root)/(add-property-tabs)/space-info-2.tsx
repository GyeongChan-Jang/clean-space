import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAddPropertyStore from "@/store/useAddProperty";

const SpaceInfo2 = () => {
  const { spaceInfo, setSpaceInfo } = useAddPropertyStore();
  const [showTimePicker, setShowTimePicker] = useState(false);

  // TODO: react-hook-form 으로 구현하기
  const handleChange = (field: keyof typeof spaceInfo, value: string) => {
    if (["size", "rooms", "bathrooms"].includes(field)) {
      // 숫자만 허용하는 정규 표현식
      const numericRegex = /^[0-9]*$/;
      if (numericRegex.test(value)) {
        setSpaceInfo({
          ...spaceInfo,
          [field]: value === "" ? "" : Number(value),
        });
      }
    } else {
      setSpaceInfo({ ...spaceInfo, [field]: value });
    }
  };

  // 값이 0이거나 빈 문자열일 때 빈 문자열 반환
  const getDisplayValue = (value: number | string) => {
    return value === 0 || value === "" ? "" : value.toString();
  };

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || spaceInfo.cleaningTime || new Date();
    setShowTimePicker(Platform.OS === "ios");
    handleChange("cleaningTime", currentDate);
  };

  const showTimepicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: spaceInfo.cleaningTime || new Date(),
        onChange,
        mode: "time",
        is24Hour: true,
      });
    } else {
      setShowTimePicker(true);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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
            공간 크기 (평방미터)
          </Text>
          <TextInput
            value={getDisplayValue(spaceInfo.size)}
            onChangeText={(value) => handleChange("size", value)}
            placeholder="공간 크기를 입력해주세요"
            className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
            autoComplete="off"
            keyboardType="numeric"
          />
          {spaceInfo.size > 0 && (
            <Text className="text-secondary-800 mt-2">{`${(Number(spaceInfo.size) * 0.3025).toFixed(2)} 평`}</Text>
          )}
        </View>

        <View className="mb-6">
          <Text className="text-base font-semibold mb-2">방 개수</Text>
          <TextInput
            value={getDisplayValue(spaceInfo.rooms)}
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
            value={getDisplayValue(spaceInfo.bathrooms)}
            onChangeText={(value) => handleChange("bathrooms", value)}
            placeholder="화장실 개수를 입력해주세요"
            className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
            autoComplete="off"
            keyboardType="numeric"
          />
        </View>

        <View className="mb-6">
          <Text className="text-base font-semibold mb-2">청소 희망 시간</Text>
          <TouchableOpacity
            onPress={showTimepicker}
            className="border-b border-gray-300 pb-2"
          >
            <Text className="text-lg text-gray-900 font-Pretendard">
              {spaceInfo.cleaningTime
                ? formatTime(spaceInfo.cleaningTime)
                : "시간을 선택해주세요"}
            </Text>
          </TouchableOpacity>
        </View>

        {showTimePicker && Platform.OS === "ios" && (
          <DateTimePicker
            value={spaceInfo.cleaningTime || new Date()}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpaceInfo2;
