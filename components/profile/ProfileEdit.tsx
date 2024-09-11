import React, { useRef, useCallback } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { Ionicons } from '@expo/vector-icons'
import { Tables } from '@/supabase/database.types'

interface ProfileEditBottomSheetProps {
  profile: Tables<'profiles'>
  isOpen: boolean
  onClose: () => void
  onSave: (profile: Tables<'profiles'>) => void
}

const ProfileEditBottomSheet = ({ profile, isOpen, onClose, onSave }: ProfileEditBottomSheetProps) => {
  const bottomSheetRef = useRef(null)
  const snapPoints = ['90%']

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) onClose()
    },
    [onClose]
  )

  const [name, setName] = React.useState(profile?.name || '')
  const [role, setRole] = React.useState(profile?.role || '')
  const [phone, setPhone] = React.useState(profile?.phone || '')
  const [email, setEmail] = React.useState(profile?.email || '')

  const handleSave = () => {
    onSave({ name, role, phone, email } as Tables<'profiles'>)
    onClose()
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isOpen ? 0 : -1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
    >
      <View className="flex-1 p-4">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-PretendardBold">프로필 수정</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View className="mb-4">
          <Text className="text-sm font-PretendardMedium mb-2">이름</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-2 font-Pretendard"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="mb-4">
          <Text className="text-sm font-PretendardMedium mb-2">역할</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-2 font-Pretendard"
            value={role}
            onChangeText={setRole}
          />
        </View>

        <View className="mb-4">
          <Text className="text-sm font-PretendardMedium mb-2">전화번호</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-2 font-Pretendard"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View className="mb-6">
          <Text className="text-sm font-PretendardMedium mb-2">이메일</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-2 font-Pretendard"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity className="bg-primary-500 rounded-lg py-3 items-center" onPress={handleSave}>
          <Text className="text-white font-PretendardBold text-lg">저장</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
}

export default ProfileEditBottomSheet
