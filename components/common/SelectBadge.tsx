import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SelectBadgeProps {
  id: string;
  image: ImageSourcePropType;
  text: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}
const SelectBadge = ({
  image,
  text,
  isSelected,
  id,
  onSelect,
}: SelectBadgeProps) => {
  return (
    <TouchableOpacity
      className={`border-[1px] border-white m-1 rounded-full ${isSelected ? "border-black" : ""}`}
      onPress={() => onSelect(id)}
    >
      <View
        className={`flex flex-row rounded-full border-[1px] border-secondary-500 bg-white items-center py-2 px-4 ${isSelected ? "border-black bg-secondary-100" : ""}`}
      >
        <Image
          className="pb-1 w-[22px] h-[22px]"
          source={image}
          style={{ tintColor: "#222" }}
        />
        <Text className="pl-2 text-lg font-Pretendard text-secondary-900">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default SelectBadge;
