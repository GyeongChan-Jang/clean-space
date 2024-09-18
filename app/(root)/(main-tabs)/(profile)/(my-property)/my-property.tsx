import React, { useRef } from 'react'
import { Animated, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

import FloatingButton from '@/components/common/FloatingButton'
import PropertyItem from '@/components/property/PropertyItem'
import { useGetProperties } from '@/hooks/queries/react-query/useGetProperties'
import { useAuth } from '@/store/useAuthStore'
import NoData from '@/components/common/exception/property/NoData'
import { Database, Tables } from '@/supabase/database.types'

const MyProperty = () => {
  const scrollY = useRef(new Animated.Value(0)).current
  const { user } = useAuth()
  const { data: properties, isLoading } = useGetProperties(user?.id)

  const onAddPropertyPress = () => {
    router.push('/(add-property-tabs)')
  }

  const onToggle = async (id: string, newStatus: boolean) => {
    try {
      // TODO: Implement server update logic
      console.log('Updating property status:', id, newStatus)
    } catch (error) {
      console.error('Failed to update property status:', error)
    }
  }

  const renderItem = ({
    item
  }: {
    item: Tables<'properties'> & { property_cleaning_guidelines: Tables<'property_cleaning_guidelines'>[] }
  }) => (
    <PropertyItem
      key={item.property_id}
      item={item}
      isLoading={isLoading}
      onToggle={(newStatus) => onToggle(item.property_id, newStatus)}
    />
  )

  const ListHeader = () => (
    <View className="flex-row justify-between py-7">
      <Text className="text-3xl font-PretendardBold text-secondary-900">숙소</Text>
    </View>
  )

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={(item) => item.property_id}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={<NoData />}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
      />
      <FloatingButton onPress={onAddPropertyPress} scrollY={scrollY} text="숙소등록" icon="plus" />
    </SafeAreaView>
  )
}

export default MyProperty
