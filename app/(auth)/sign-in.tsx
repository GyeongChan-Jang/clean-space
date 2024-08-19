import { router } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import { supabase } from "@/lib/supabase";

const SignIn = () => {
  const handleKakaoLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "kakao",
      });
      console.log(data);
      if (error) throw error;

      if (data) {
        // 로그인 성공 후 처리
        router.replace("/(root)/(tabs)/home");
      }
    } catch (error) {
      console.error("Kakao login error:", error);
      // 에러 처리 (예: 사용자에게 알림 표시)
    }
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
