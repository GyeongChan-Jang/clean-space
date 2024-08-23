import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SelectCard from "@/components/common/SelectCard";
import useAddPropertyStore from "@/store/useAddProperty";
import { PropertyType } from "@/types/property";

const propertyTypes: PropertyType[] = [
  {
    id: "1",
    name: "주택",
    image: require("@/assets/icons/properties/house.png"),
  },
  {
    id: "2",
    name: "아파트/오피스텔",
    image: require("@/assets/icons/properties/apartment.png"),
  },
  {
    id: "3",
    name: "사무실",
    image: require("@/assets/icons/properties/office.png"),
  },
  {
    id: "4",
    name: "펜션",
    image: require("@/assets/icons/properties/pension.png"),
  },
];

const SpaceType = () => {
  const { spaceType, setSpaceType } = useAddPropertyStore();

  const handleSelect = (id: string) => {
    if (spaceType === id) {
      setSpaceType("");
      return;
    }
    setSpaceType(id);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">
          공간의 유형을 선택해주세요.
        </Text>
        <Text className="text-gray-500 mb-6">
          청소가 필요한 공간의 유형을 선택해주세요.
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {propertyTypes.map((type) => (
            <SelectCard
              key={type.id}
              id={type.id}
              image={type.image}
              label={type.name}
              isSelected={spaceType === type.id}
              onSelect={handleSelect}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpaceType;
