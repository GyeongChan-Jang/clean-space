import { Redirect } from "expo-router";

import { useAuth } from "@/hooks/useAuth";
import userStore from "@/store/userStore";

const Page = () => {
  const { user: userAuth, session } = useAuth();
  const { user } = userStore();

  // console.log(userAuth);

  // 1. 로그인X 사용자 -> /(auth)/sign-in
  if (!userAuth) return <Redirect href="/(auth)/sign-in" />;

  // 2. 로그인O 등록X 사용자 -> /user-setup
  if (!user) return <Redirect href="/user-setup" />;

  // 3. 로그인O 등록O 사용자 -> /(root)/(tabs)/home
  return <Redirect href={"/(auth)/welcome"} />;
};

export default Page;
