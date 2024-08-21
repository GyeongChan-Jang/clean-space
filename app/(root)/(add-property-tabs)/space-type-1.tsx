import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAddPropertyStore from "@/store/useAddProperty";

interface PropertyType {
  id: string;
  type: string;
  icon: string;
}

const propertyTypes: PropertyType[] = [
  { id: "1", type: "아파트", icon: "business-outline" },
  { id: "2", type: "주택", icon: "home" },
  { id: "3", type: "별장", icon: "easel-sharp" },
  { id: "4", type: "호텔", icon: "bed" },
  { id: "5", type: "오피스텔", icon: "business-sharp" },
  { id: "6", type: "캠핑카", icon: "car" },
  { id: "7", type: "펜션", icon: "home" },
  { id: "8", type: "풀빌라", icon: "business" },
  { id: "9", type: "글램핑장", icon: "business" },
  { id: "10", type: "텐트", icon: "business" },
  { id: "11", type: "농장", icon: "business" },
  { id: "12", type: "회사", icon: "business" },
  { id: "13", type: "빌딩", icon: "business" },
];

const SpaceType = () => {
  const { spaceType, setSpaceType } = useAddPropertyStore();

  const handleSelect = (id: string) => {
    setSpaceType(id);
  };

  return (
    <SafeAreaView className="bg-white">
      <ScrollView className="px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">
          공간의 유형을 선택해주세요.
        </Text>
        <Text className="text-gray-500 mb-6">
          청소가 필요한 공간의 유형을 선택해주세요.
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {propertyTypes.map((property) => (
            <TouchableOpacity
              key={property.id}
              className={`w-[48%] aspect-square mb-4 p-4 rounded-xl border-2 ${
                spaceType === property.id
                  ? "border-sky-500 bg-sky-50"
                  : "border-gray-200"
              }`}
              onPress={() => handleSelect(property.id)}
            >
              <Ionicons
                name={property.icon as any}
                size={32}
                color={spaceType === property.id ? "#0EA5E9" : "#666666"}
              />
              <Text className="mt-2 text-secondary-800 font-semibold">
                {property.type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpaceType;
