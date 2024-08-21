import { Stack } from "expo-router";
import "react-native-reanimated";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="my-property" options={{ headerShown: false }} />
      <Stack.Screen name="detail-property" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
