import { initializeKakaoSDK } from "@react-native-kakao/core";
import { isLogined } from "@react-native-kakao/user";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import userStore from "@/store/userStore";

const Page = () => {
  const { user: userAuth } = useAuth();
  const { user, initUser } = userStore();
  const [isKakaoLoggedIn, setIsKakaoLoggedIn] = useState<boolean | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      if (process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY) {
        initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY);
      }

      try {
        await initUser();
        const loggedIn = await isLogined();
        setIsKakaoLoggedIn(loggedIn);
      } catch (error) {
        console.error("초기화 중 오류 발생:", error);
        setIsKakaoLoggedIn(false);
      } finally {
        setIsInitialized(true);
      }
    };

    initialize();
  }, []);

  if (!isInitialized) {
    return null; // 또는 로딩 인디케이터를 표시
  }

  // 1. 로그인X -> /(auth)/welcome
  if (!userAuth && !isKakaoLoggedIn) return <Redirect href="/(auth)/welcome" />;

  // 2. 로그인O, 등록X -> /user-setup
  if (userAuth && !user) return <Redirect href="/user-setup" />;

  // 3. 로그인O, 등록O -> /(root)/(tabs)/home
  return <Redirect href="/(root)/(tabs)/home" />;
};

export default Page;
