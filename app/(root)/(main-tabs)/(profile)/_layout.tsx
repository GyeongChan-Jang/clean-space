import { Stack } from 'expo-router'
import 'react-native-reanimated'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(my-profile)" options={{ headerShown: false }} />
      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
      <Stack.Screen name="(my-property)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default Layout
