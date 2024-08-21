import { Stack } from "expo-router";
import "react-native-reanimated";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(main-tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(add-property-tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
