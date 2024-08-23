import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface SelectCardProps {
  id: string;
  image: ImageSourcePropType;
  label: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const SelectCard: React.FC<SelectCardProps> = ({
  id,
  image,
  label,
  isSelected,
  onSelect,
  containerStyle,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      className={`w-[48%] aspect-square mb-4 p-4 pl-0 rounded-xl border-2 ${
        isSelected ? "border-sky-500 bg-sky-50" : "border-gray-200"
      }`}
      style={containerStyle}
      onPress={() => onSelect(id)}
    >
      <Image
        source={image} // Image 태그로 변경
        style={{
          width: 50,
          height: 50,
          tintColor: isSelected ? "#0EA5E9" : "#666666",
        }}
        className="ml-2"
      />
      <Text
        className={`mt-2 ml-4 text-secondary-800 text-lg ${isSelected ? "font-PretendardBold" : "font-PretendardSemiBold"} ${labelStyle}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectCard;
