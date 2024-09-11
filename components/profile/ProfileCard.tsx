import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useAuth } from '@/store/useAuthStore'
import { useGetProfiles } from '@/hooks/queries/react-query/useGetProfiles'
import useUploadImages from '@/hooks/useUploadImages'
import { supabase } from '@/lib/supabase'

const ProfileCard = () => {
  const { user, signOut } = useAuth()
  const { data: profiles, refetch: refetchProfiles } = useGetProfiles(user?.id)
  const { uploadImages, isError, isLoading } = useUploadImages()
  const [updating, setUpdating] = useState(false)

  const imageHandler = async (image: ImagePicker.ImagePickerAsset) => {
    if (!user) return
    setUpdating(true)
    try {
      const profileImageUrls = await uploadImages({
        bucket: 'user-profiles',
        folderName: user.id,
        imagePickerAssets: [image]
      })

      if (isError || !profileImageUrls || profileImageUrls.length === 0) {
        throw new Error('Image upload failed')
      }

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ profile_image: profileImageUrls[0] })
        .eq('user_id', user.id)

      if (updateError) {
        throw updateError
      }

      await refetchProfiles()
      Alert.alert('성공', '프로필 이미지가 성공적으로 업데이트되었습니다.')
    } catch (error) {
      console.error('Error updating profile image:', error)
      Alert.alert('오류', '프로필 이미지 업데이트 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setUpdating(false)
    }
  }

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    if (!result.canceled) {
      await imageHandler(result.assets[0])
    }
  }

  return (
    <View className="bg-white rounded-xl shadow-lg p-3 m-[1px] flex-1 flex-row">
      <View className="flex-[1.3]">
        <View className="items-center shadow-md mb-4">
          <TouchableOpacity onPress={handleImagePick} disabled={isLoading || updating}>
            <Image
              source={
                profiles?.profile_image
                  ? { uri: profiles.profile_image }
                  : require('@/assets/icons/profile-default.png')
              }
              className="w-24 h-24 rounded-full"
            />
            <View className="absolute bottom-0 right-0 bg-gray-100 rounded-full p-1">
              <Ionicons name="camera" size={20} color="#717171" />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center mb-2">
          <View className="flex">
            <Text className="text-2xl font-PretendardBold text-center">{profiles?.name}</Text>
            <Text className="text-lg font-Pretendard text-center">{profiles?.role}</Text>
          </View>
        </View>
      </View>
      <View className="flex-[1.2] justify-center gap-2">
        <Text className="font-PretendardSemiBold text-lg">연락처</Text>
        <Text>{profiles?.phone}</Text>
        <View className="h-[1px] w-[90%] bg-gray-300" />
        <Text className="font-PretendardSemiBold text-lg">이메일</Text>
        <Text>{profiles?.email}</Text>
      </View>
    </View>
  )
}

export default ProfileCard
