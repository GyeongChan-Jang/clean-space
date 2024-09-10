import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useAuth } from '@/store/useAuthStore'
import { useGetProfiles } from '@/hooks/queries/react-query/useGetProfiles'

const ProfileCard = () => {
  const [image, setImage] = useState('')

  const { user, signOut } = useAuth()
  const { data: profiles } = useGetProfiles(user?.id)

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View className="bg-white rounded-xl shadow-lg p-4 m-[1px] flex-1 flex-row">
      <View className="flex-[1.4]">
        <View className="items-center shadow-md mb-4">
          <TouchableOpacity onPress={handleImagePick}>
            <Image
              source={image ? { uri: image } : require('@/assets/icons/profile-default.png')}
              className="w-24 h-24 rounded-full"
            />
            {/* <View className="absolute bottom-0 right-0 bg-gray-100 rounded-full p-1">
              <Ionicons name="camera" size={20} color="#717171" />
            </View> */}
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center mb-2">
          <View className="flex">
            <Text className="text-2xl font-PretendardBold text-center">{profiles?.name}</Text>
            <Text className="text-lg font-Pretendard text-center">{profiles?.role}</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 justify-center gap-2">
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
