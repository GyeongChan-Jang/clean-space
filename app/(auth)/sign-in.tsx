import { initializeKakaoSDK } from "@react-native-kakao/core";
import { login, logout } from "@react-native-kakao/user";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/common/CustomButton";
import { supabase } from "@/lib/supabase";

const SignIn = () => {
  useEffect(() => {
    if (!process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY) return;
    initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY);
  }, []);

  const handleKakaoLogin = async () => {
    const response = await login();

    if (!response.idToken) return;

    try {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "kakao",
        token: response.idToken,
      });

      if (error) throw error;

      // 사용자 정보 확인
      const { data: existingUser, error: userError } = await supabase
        .from("users")
        .select()
        .eq("id", data.user?.id)
        .single();

      if (userError && userError.code !== "PGRST116") {
        // PGRST116는 결과가 없음을 의미
        console.error("사용자 정보 조회 중 오류 발생:", userError);
        return;
      }

      if (!existingUser && data.user.id && data.user.email) {
        const { data: newUser } = await supabase
          .from("users")
          .upsert({
            id: data.user?.id,
            name: data.user?.user_metadata.name,
            email: data.user?.email,
          })
          .select();
        // setUser(newUser.data);
        console.log("새로운 사용자 정보가 생성되었습니다.", newUser);

        router.push("/user-setup");
        // router.push("/(root)/(tabs)/home");
      } else {
        // 사용자 정보가 이미 있으면 홈 화면으로 이동
        router.push("/(root)/(tabs)/home");
      }
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
