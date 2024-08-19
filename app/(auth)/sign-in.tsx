import { initializeKakaoSDK } from "@react-native-kakao/core";
import { login, logout } from "@react-native-kakao/user";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import { supabase } from "@/lib/supabase";

const SignIn = () => {
  useEffect(() => {
    if (!process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY) return;
    initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY);
  }, []);
  const handleKakaoLogin = async () => {
    const response = await login();
    console.log("kakaologin", response);

    if (!response.idToken) return;

    try {
      const { data } = await supabase.auth.signInWithIdToken({
        provider: "kakao",
        token: response.idToken,
      });
      console.log("supabase 카카오 로그인 성공!", data);
    } catch (error) {
      console.log("카카오 로그인중 에러가 발생했습니다.", error);
    }
  };

  const handleKakaoLogout = async () => {
    await logout();
  };
  return (
    <SafeAreaView className="flex-1 items-center bg-primary-500">
      <View className="flex-[1.5] w-1/3 justify-center items-center">
        <Image
          resizeMode="contain"
          className="w-full h-full"
          source={require("@/assets/images/icon.png")}
        />
      </View>
      <View className="flex-1 gap-3 px-12 items-center">
        <CustomButton
          onPress={handleKakaoLogin}
          style={{ backgroundColor: "#FFEB00" }}
          className="w-56 shadow-none rounded-2xl"
          textVariant="primary"
          title="카카오 로그인"
          IconLeft={() => (
            <Image
              className="w-5 h-5 mx-2"
              resizeMode="contain"
              source={require("@/assets/images/kakao.png")}
            />
          )}
        />

        <CustomButton
          // onPress={() => router.navigate("/(root)/(tabs)/home")}
          onPress={() => {}}
          style={{ backgroundColor: "#222222" }}
          className="w-56 shadow-none rounded-2xl"
          textVariant="default"
          title="애플 로그인"
          IconLeft={() => (
            <Image
              className="w-5 h-5 mx-2"
              resizeMode="contain"
              source={require("@/assets/images/apple.png")}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
