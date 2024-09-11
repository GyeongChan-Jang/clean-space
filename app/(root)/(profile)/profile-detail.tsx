import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import ProfileCard from '@/components/profile/ProfileCard'
import CommonButton from '@/components/common/CommonButton'
import { useGetProfiles } from '@/hooks/queries/react-query/useGetProfiles'
import { useAuth } from '@/store/useAuthStore'
import ProfileEditBottomSheet from '@/components/profile/ProfileEdit'
import { Tables } from '@/supabase/database.types'

const ProfileDetail = () => {
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false)
  const { user } = useAuth()
  const { data: profile, refetch } = useGetProfiles(user?.id)

  const onPressBack = () => {
    router.back()
  }

  const handleEditPress = () => {
    setIsEditSheetOpen(true)
  }

  const handleEditClose = () => {
    setIsEditSheetOpen(false)
  }

  const handleSaveProfile = async (updatedProfile: Tables<'profiles'> | undefined) => {
    // API 호출을 통해 프로필 업데이트
    // 예: await updateProfile(user.id, updatedProfile);
    console.log('Updating profile:', updatedProfile)
    // 프로필 데이터 리프레시
    refetch()
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* header */}
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity onPress={onPressBack}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleEditPress}>
          <CommonButton title="수정하기" onPress={handleEditPress} variant="secondary" />
        </TouchableOpacity> */}
      </View>
      <ScrollView
        className="flex-grow p-5"
        contentContainerStyle={{
          paddingTop: 0
        }}
      >
        <ProfileCard />
      </ScrollView>

      <ProfileEditBottomSheet
        profile={profile as Tables<'profiles'>}
        isOpen={isEditSheetOpen}
        onClose={handleEditClose}
        onSave={handleSaveProfile}
      />
    </SafeAreaView>
  )
}

export default ProfileDetail
