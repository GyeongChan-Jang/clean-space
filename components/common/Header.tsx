import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

interface HeaderProps {
  title?: string
  rightIcon?: {
    name: keyof typeof Ionicons.glyphMap
    onPress: () => void
  }
  showBackButton?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, rightIcon, showBackButton = true }) => {
  const router = useRouter()

  return (
    <View className="flex-row items-center justify-between p-4">
      {showBackButton ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Placeholder for layout consistency
      )}

      {title && <Text className="text-lg font-PretendardBold text-secondary-900 flex-1 text-center">{title}</Text>}

      {rightIcon ? (
        <TouchableOpacity onPress={rightIcon.onPress}>
          <Ionicons name={rightIcon.name} size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Placeholder for layout consistency
      )}
    </View>
  )
}

export default Header
