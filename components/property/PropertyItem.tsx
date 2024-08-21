import React from "react";
import { Image, Text, View } from "react-native";
import { Switch } from "react-native-gesture-handler";

interface PropertyProps {
  image: string;
  title: string;
  price: number;
  cleaningTime: string;
  date: string;
  isActive: boolean;
  onToggle: (value: boolean) => void;
}

const PropertyItem = ({
  image,
  title,
  price,
  cleaningTime,
  date,
  isActive,
  onToggle,
}: PropertyProps) => {
  return (
    <View className="mb-5 bg-white rounded-2xl shadow-lg overflow-hidden">
      <View className="relative">
        <Image source={{ uri: image }} className="w-full h-48 rounded-t-2xl" />
        <View className="absolute top-3 left-3">
          <View className="bg-white rounded-full px-3 py-1.5 flex-row items-center shadow-sm">
            <View
              className={`w-2 h-2 rounded-full ${isActive ? "bg-success-500" : "bg-danger-500"} mr-2`}
            />
            <Text className="text-xs text-secondary-800 font-PretendardBold">
              {isActive ? "운영중" : "운영정지"}
            </Text>
          </View>
        </View>
      </View>
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text
            className="text-lg font-PretendardBold text-secondary-900 flex-1 mr-2"
            numberOfLines={1}
          >
            {title}
          </Text>
          <Switch
            value={isActive}
            onValueChange={onToggle}
            trackColor={{ false: "#D1D5DB", true: "#5CCEF8" }}
            thumbColor={isActive ? "#FFFFFF" : "#FFFFFF"}
          />
        </View>
        <Text className="text-base font-PretendardMedium text-secondary-800 mb-1">
          ₩{price.toLocaleString()} / 청소 {cleaningTime}
        </Text>
        <Text className="text-sm font-Pretendard text-secondary-600">
          {date}
        </Text>
      </View>
    </View>
  );
};

export default PropertyItem;
