import { ApolloProvider } from '@apollo/client'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useAuth } from '@/hooks/useAuth'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/api/queryClient'
import client from '@/api/apolloClient'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    Pretendard: require('@/assets/fonts/Pretendard-Regular.ttf'),
    PretendardBlack: require('@/assets/fonts/Pretendard-Black.ttf'),
    PretendardBold: require('@/assets/fonts/Pretendard-Bold.ttf'),
    PretendardExtraBold: require('@/assets/fonts/Pretendard-ExtraBold.ttf'),
    PretendardExtraLight: require('@/assets/fonts/Pretendard-ExtraLight.ttf'),
    PretendardLight: require('@/assets/fonts/Pretendard-Light.ttf'),
    PretendardMedium: require('@/assets/fonts/Pretendard-Medium.ttf'),
    PretendardSemiBold: require('@/assets/fonts/Pretendard-SemiBold.ttf'),
    PretendardThin: require('@/assets/fonts/Pretendard-Thin.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GestureHandlerRootView>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </QueryClientProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  )
}
