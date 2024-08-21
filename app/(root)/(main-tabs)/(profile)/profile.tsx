import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CompoundList } from "@/components/common/CompoundList";
import AddPropertyCard from "@/components/property/AddPropertyCard";
import userStore from "@/store/userStore";

const Profile = () => {
  const { user } = userStore();

  const onCardPress = () => {};

  const onPropertyPress = (itemId: string) => {
    if (itemId === "1") {
      router.push("/(profile)/my-property");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-5">
        {/* 헤더 */}
        <View className="flex-row justify-between items-center py-9">
          <Text className="text-3xl font-PretendardBold text-secondary-900">
            프로필
          </Text>
          <Ionicons name="notifications-outline" size={32} color="#333333" />
        </View>

        {/* 프로필 */}
        <TouchableOpacity className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2.5">
            <View className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-secondary-300">
              <Image
                className="w-full h-full rounded-full"
                source={
                  user?.profile_image
                    ? { uri: user.profile_image }
                    : require("@/assets/icons/profile-default.png")
                }
              />
            </View>
            <View className="justify-center gap-1">
              <Text className="text-xl font-PretendardBold text-secondary-900">
                {user?.name}
              </Text>
              <Text className="font-Pretendard text-secondary-700">
                프로필 보기
              </Text>
            </View>
          </View>
          <FontAwesome name="angle-right" size={30} color="#333333" />
        </TouchableOpacity>

        <View className="border-b border-secondary-300 my-5" />

        {/* 숙소 등록 Card */}
        <AddPropertyCard
          onPress={onCardPress}
          title="당신의 숙소를 청소하세요."
          description={[
            "간단히 숙소를 등록하고",
            "숙소 청소 클리너를 모집하세요.",
          ]}
        />

        <View className="mt-5 mb-2.5">
          <Text className="text-xl font-PretendardBold text-secondary-900">
            나의 정보
          </Text>
        </View>

        {/* 나의 정보 */}
        <CompoundList onItemPress={onPropertyPress}>
          <CompoundList.Item
            id="1"
            icon={<Ionicons name="home-outline" size={24} color="#666666" />}
            title="숙소 관리"
          />
          <CompoundList.Divider />
        </CompoundList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
