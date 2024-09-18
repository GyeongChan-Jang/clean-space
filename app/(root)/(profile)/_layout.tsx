import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import 'react-native-reanimated'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="detail-profile" options={{ headerShown: false }} />
    </Stack>
  )
}

export default Layout
