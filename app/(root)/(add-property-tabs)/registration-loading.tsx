import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAddPropertyStore from '@/store/useAddProperty'

const RegistrationLoading = () => {
  const { propertyId } = useAddPropertyStore()

  useEffect(() => {}, [])
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>registration-loading</Text>
    </SafeAreaView>
  )
}

export default RegistrationLoading
