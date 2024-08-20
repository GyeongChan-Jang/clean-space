import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/common/CustomButton";

const defaultImage = require("@/assets/images/profile-default.png");

const UserSetup = () => {
  // const { authUser, setIsRegistered } = useAuthStore();
  // const { checkAndRequestPermission } = usePermission();

  const [role, setRole] = useState<"host" | "cleaner">("host");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(defaultImage);
  // const imageOption = useModal();

  const handleImagePress = async () => {
    Keyboard.dismiss();
    // const hasPermission = await checkAndRequestPermission("PHOTO");
    // if (hasPermission) {
    //   imageOption.show();
    // }
  };

  // const imageSource = authUser?.user_metadata?.picture
  //   ? { uri: authUser.user_metadata.picture }
  //   : defaultImage;
  //
  // const imagePicker = useImagePicker({
  //   initialImages: [imageSource],
  //   mode: "single",
  //   onSettled: imageOption.hide,
  // });
  //
  // useEffect(() => {
  //   if (authUser?.user_metadata.picture) {
  //     setProfileImage({ uri: authUser.user_metadata.picture });
  //   }
  // }, [authUser]);
  //
  // useEffect(() => {
  //   if (imagePicker.imageUris.length > 0) {
  //     setProfileImage({ uri: imagePicker.imageUris[0].uri });
  //   }
  // }, [imagePicker.imageUris]);
  //
  // const handleSubmit = async () => {
  //   if (!authUser) return;
  //
  //   try {
  //     const { data, error } = await supabase
  //       .from("users")
  //       .upsert({
  //         id: authUser.id,
  //         role,
  //         name,
  //         email: authUser.user_metadata.email,
  //         profile_image: profileImage.uri,
  //       })
  //       .eq("id", authUser.id);
  //
  //     setIsRegistered(true);
  //
  //     if (error) throw error;
  //   } catch (error) {
  //     console.error("Error updating user profile:", error);
  //   }
  // };
  //
  // useEffect(() => {
  //   if (authUser?.user_metadata.name) {
  //     setName(authUser.user_metadata.name);
  //   }
  // }, [authUser]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1 px-5"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 20}
      >
        <ScrollView className="flex-grow" keyboardShouldPersistTaps="handled">
          <View className="flex-1 justify-start">
            <View className="items-center mb-5">
              <View className="relative w-25 h-25">
                <Pressable
                  className="w-full h-full rounded-full overflow-hidden"
                  onPress={handleImagePress}
                >
                  <Image
                    className="w-full h-full rounded-full"
                    resizeMode="cover"
                    source={profileImage}
                  />
                  {/*{!authUser?.user_metadata.picture &&*/}
                  {/*imagePicker.imageUris.length === 0 ? (*/}
                  {/*  <View className="justify-center items-center border border-gray-200 rounded-full w-25 h-25">*/}
                  {/*    <Ionicons*/}
                  {/*      name="person"*/}
                  {/*      size={40}*/}
                  {/*      color={theme === "dark" ? "#e5e7eb" : "#9ca3af"}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*) : (*/}
                  {/*  <Image*/}
                  {/*    className="w-full h-full rounded-full"*/}
                  {/*    resizeMode="cover"*/}
                  {/*    source={profileImage}*/}
                  {/*  />*/}
                  {/*)}*/}
                </Pressable>
                <Pressable
                  className="absolute -right-1 -bottom-1 bg-white p-1 rounded-full border border-gray-200 z-10"
                  onPress={handleImagePress}
                >
                  <Ionicons name="camera" size={24} color={"#6b7280"} />
                </Pressable>
              </View>
            </View>
            <TextInput
              className="border border-gray-300 rounded-md p-2.5 mb-5"
              placeholder="이름을 입력해주세요."
              value={name}
              onChangeText={setName}
            />
            <View className="flex-row justify-between mb-5 gap-2.5">
              <CustomButton
                className="flex-1"
                title="호스트"
                bgVariant={role === "host" ? "primary" : "outline"}
                onPress={() => setRole("host")}
              />
              <CustomButton
                className="flex-1"
                title="클리너"
                bgVariant={role === "cleaner" ? "primary" : "outline"}
                onPress={() => setRole("cleaner")}
              />
            </View>
          </View>
        </ScrollView>

        <View className="pb-5">
          <TouchableOpacity
            className="bg-sky-500 p-4 rounded-md items-center"
            // onPress={handleSubmit}
          >
            <Text className="text-white font-bold text-lg">완료</Text>
          </TouchableOpacity>
        </View>

        {/*<EditProfileOption*/}
        {/*  onChangeImage={() =>*/}
        {/*    imagePicker.handleChange("user-profiles", authUser?.id, "avatars")*/}
        {/*  }*/}
        {/*  isVisible={imageOption.isVisible}*/}
        {/*  hideOption={imageOption.hide}*/}
        {/*/>*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UserSetup;
