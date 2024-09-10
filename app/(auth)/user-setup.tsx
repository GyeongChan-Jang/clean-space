import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { supabase } from '@/lib/supabase'
import { useAuth } from '@/store/useAuthStore'

type FormData = {
  name: string
  phone: string
}

const UserSetup = () => {
  const { user } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: ''
    }
  })

  const [role, setRole] = React.useState<'host' | 'cleaner'>('host')

  const onSubmit = async (data: FormData) => {
    try {
      if (!user) {
        Alert.alert('로그인 정보를 찾을 수 없습니다.')
        router.replace('/(auth)/sign-in')
        return
      }
      const { data: userData, error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          role,
          name: data.name,
          phone: data.phone,
          email: user.user_metadata.email
          // profile_image: user.user_metadata.picture
        })
        .eq('id', user.id)
        .select()

      if (error) throw new Error('사용자 등록 중 오류가 발생했습니다. user-setup.tsx')

      if (userData) router.replace('/(root)/(main-tabs)/home')
    } catch (error) {
      Alert.alert('사용자 등록 중 오류가 발생했습니다.')
      console.log('user-setup-error', error)
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        <ScrollView
          className="flex-1 px-6 font-Pretendard"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="mt-10 mb-6">
            <Text className="text-3xl font-bold text-gray-900 font-Pretendard">사용자 등록</Text>
            <Text className="mt-2 text-lg text-gray-600 font-Pretendard">Clean Space에 오신 것을 환영합니다.</Text>
          </View>

          <View className="mb-6">
            <Text className="text-xl font-medium text-gray-700 mb-3 font-PretendardBold">역할 선택</Text>
            <View className="flex-row">
              <TouchableOpacity
                onPress={() => setRole('host')}
                className={`flex-1 py-3 ${
                  role === 'host' ? 'bg-secondary-800' : 'bg-gray-200'
                } rounded-l-full items-center`}
              >
                <Text className={`text-lg ${role === 'host' ? 'text-white' : 'text-gray-700'} font-PretendardBold`}>
                  호스트
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setRole('cleaner')}
                className={`flex-1 py-3 ${
                  role === 'cleaner' ? 'bg-secondary-800' : 'bg-gray-200'
                } rounded-r-full items-center`}
              >
                <Text className={`text-lg ${role === 'cleaner' ? 'text-white' : 'text-gray-700'} font-PretendardBold`}>
                  클리너
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-xl font-medium text-gray-700 mb-3 font-PretendardBold">이름</Text>
            <Controller
              control={control}
              rules={{
                required: '이름을 입력해주세요.',
                minLength: {
                  value: 2,
                  message: '이름은 최소 2자 이상이어야 합니다.'
                }
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="이름을 입력해주세요"
                  className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
                  autoComplete="off"
                />
              )}
              name="name"
            />
            {errors.name && <Text className="text-red-500 mt-1">{errors.name.message}</Text>}
          </View>

          <View className="mb-6">
            <Text className="text-xl font-medium text-gray-700 mb-3 font-PretendardBold">전화번호</Text>
            <Controller
              control={control}
              rules={{
                required: '전화번호를 입력해주세요.',
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: '올바른 전화번호 형식이 아닙니다.'
                }
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="전화번호를 입력해주세요"
                  keyboardType="phone-pad"
                  className="text-lg pb-2 border-b border-gray-300 text-gray-900 font-Pretendard"
                  autoComplete="off"
                />
              )}
              name="phone"
            />
            {errors.phone && <Text className="text-red-500 mt-1">{errors.phone.message}</Text>}
          </View>

          <View className="flex-1 justify-end mb-6">
            <TouchableOpacity className="bg-primary-500 py-4 rounded-lg items-center" onPress={handleSubmit(onSubmit)}>
              <Text className="text-white text-xl font-PretendardBold">완료</Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-center mt-8">
              <Ionicons name="shield-checkmark-outline" size={20} color="#4B5563" />
              <Text className="ml-2 text-gray-600 font-Pretendard">
                Clean Space는 회원님의 개인정보를 안전하게 보호합니다.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default UserSetup
