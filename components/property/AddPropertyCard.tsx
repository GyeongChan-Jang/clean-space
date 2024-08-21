import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface AddPropertyCardProps {
  title: string;
  description: string[];
  image?: string;
  onPress?: () => void;
}

const AddPropertyCard = ({
  title,
  description,
  image,
  onPress,
}: AddPropertyCardProps) => {
  return (
    <Pressable
      className="flex-row justify-between items-center px-5 py-2.5 my-2.5 bg-white rounded-lg shadow-md"
      style={{
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.17,
        shadowRadius: 18,
        elevation: 8,
      }}
      onPress={onPress}
    >
      <View className="flex-1">
        <Text className="text-lg font-bold mb-2.5">{title}</Text>
        {description.map((line, index) => (
          <Text key={index} className="text-sm text-gray-700 w-[210px] mb-0.75">
            {line}
          </Text>
        ))}
      </View>
      <View className="w-[100px] h-[100px]">
        <Image
          className="w-full h-full"
          source={require("@/assets/images/building.png")}
        />
      </View>
    </Pressable>
  );
};

export default AddPropertyCard;
