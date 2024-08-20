import { initializeKakaoSDK } from "@react-native-kakao/core";
import { isLogined } from "@react-native-kakao/user";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import userStore from "@/store/userStore";

const Page = () => {
  const { user: userAuth, session, signOut } = useAuth();
  const { user } = userStore();
  const [isKakaoLoggedIn, setIsKakaoLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    if (!process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY) return;
    initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY);

    const checkKakaoLogin = async () => {
      try {
        const loggedIn = await isLogined();

        setIsKakaoLoggedIn(loggedIn);
      } catch (error) {
        console.error("카카오 로그인 상태 확인 중 오류 발생:", error);
        setIsKakaoLoggedIn(false);
      }
    };

    checkKakaoLogin();
  }, []);

  // isKakaoLoggedIn이 null이면 아직 확인 중
  if (isKakaoLoggedIn === null) {
    return null; // 또는 로딩 인디케이터를 표시
  }

  // 1. 로그인X -> /(auth)/welcome
  if (!userAuth && !isKakaoLoggedIn) return <Redirect href="/(auth)/welcome" />;

  // 2. 로그인O, 등록X -> /user-setup
  if (userAuth && !user) return <Redirect href="/user-setup" />;

  // 3. 로그인O, 등록O -> /(root)/(tabs)/home
  return <Redirect href={"/(auth)/sign-in"} />;
};

export default Page;
