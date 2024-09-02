import { initializeKakaoSDK } from '@react-native-kakao/core'
import { login } from '@react-native-kakao/user'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '@/components/common/CustomButton'

import { supabase } from '@/lib/supabase'
import userStore from '@/store/userStore'
import Loader from '@/components/common/LoadingOverlay'

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = userStore()

  useEffect(() => {
    if (process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY) {
      initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY)
    }
  }, [])

  const handleKakaoLogin = async () => {
    setIsLoading(true)
    try {
      const response = await login()
      if (!response.idToken) {
        throw new Error('카카오 로그인 실패: ID 토큰을 받지 못했습니다.')
      }

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'kakao',
        token: response.idToken
      })

      if (error) throw error

      const { data: existingUser, error: userError } = await supabase
        .from('users')
        .select()
        .eq('id', data.user?.id)
        .single()

      if (userError && userError.code !== 'PGRST116') {
        throw userError
      }

      if (!existingUser && data.user?.id && data.user?.email) {
        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .upsert({
            id: data.user.id,
            name: data.user.user_metadata.name,
            email: data.user.email
          })
          .select()
          .single()

        if (insertError) throw insertError

        setUser(newUser)
        router.push('/user-setup')
      } else if (existingUser) {
        setUser(existingUser)
        router.push('/(root)/(main-tabs)/home')
      }
    } catch (error) {
      console.error('카카오 로그인 중 오류:', error)
      // showErrorAlert('로그인 오류', '카카오 로그인 중 문제가 발생했습니다. 다시 시도해 주세요.')
      Alert.alert('로그인 오류', '카카오 로그인 중 문제가 발생했습니다. 다시 시도해 주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleAppleLogin = async () => {
    // 애플 로그인 로직 구현
    // showErrorAlert('준비 중', '애플 로그인 기능은 현재 개발 중입니다.')
    Alert.alert('준비 중', '애플 로그인 기능은 현재 개발 중입니다.')
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-primary-500">
      {/* {isLoading && <Loader />} */}
      <View className="flex-[1.5] w-1/3 justify-center items-center">
        <Image resizeMode="contain" className="w-full h-full" source={require('@/assets/icons/icon.png')} />
      </View>
      <View className="flex-1 gap-3 px-12 items-center">
        <CustomButton
          onPress={handleKakaoLogin}
          style={{ backgroundColor: '#FFEB00' }}
          className="w-56 shadow-none rounded-2xl"
          textVariant="primary"
          title="카카오 로그인"
          IconLeft={() => (
            <Image className="w-5 h-5 mx-2" resizeMode="contain" source={require('@/assets/icons/kakao.png')} />
          )}
        />
        <CustomButton
          onPress={handleAppleLogin}
          style={{ backgroundColor: '#222222' }}
          className="w-56 shadow-none rounded-2xl"
          textVariant="default"
          title="애플 로그인"
          IconLeft={() => (
            <Image className="w-5 h-5 mx-2" resizeMode="contain" source={require('@/assets/icons/apple.png')} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignIn
