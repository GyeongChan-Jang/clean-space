import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/common/CustomButton";
import { AddPropertyRoutes } from "@/constants/routes";

const AddProperty = () => {
  const router = useRouter();

  const steps = [
    {
      title: "숙소 유형 선택",
      description: "귀하의 숙소 유형을 선택해주세요.",
    },
    { title: "위치 정보", description: "숙소의 정확한 위치를 알려주세요." },
    {
      title: "청소 정보",
      description: "청소에 필요한 도구와 영역을 설정하세요.",
    },
    { title: "가격 설정", description: "적절한 청소 가격을 설정해주세요." },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6">
        <Text className="text-3xl font-bold mb-6">숙소 등록하기</Text>
        <Text className="text-lg mb-8">
          몇 가지 간단한 단계를 통해 귀하의 숙소를 등록하고 클리너를 찾아보세요.
        </Text>

        {steps.map((step, index) => (
          <View key={index} className="flex-row mb-6">
            <View className="w-10 h-10 bg-sky-500 rounded-full items-center justify-center mr-4">
              <Text className="text-white font-bold">{index + 1}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold mb-1">{step.title}</Text>
              <Text className="text-gray-600">{step.description}</Text>
            </View>
          </View>
        ))}

        <Image
          source={require("@/assets/images/building2.png")}
          className="w-full h-48 rounded-lg mb-8"
          resizeMode="cover"
        />

        <CustomButton
          title="시작하기"
          onPress={() => router.push(AddPropertyRoutes.SPACE_TYPE_1 as any)}
          bgVariant="primary"
          textVariant="secondary"
          className="py-4 rounded-lg"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProperty;
