import React, { useEffect, useRef } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { Ionicons } from '@expo/vector-icons'
import useAddPropertyStore from '@/store/useAddProperty'
import { router, useNavigation } from 'expo-router'
import { supabase } from '@/lib/supabase'
import { AddPropertyRoutes } from '@/constants/routes'
import { formatToTime } from '@/utils/date'

const CleaningTime = () => {
  const navigation = useNavigation()
  const [showPicker, setShowPicker] = React.useState<boolean>(false)
  const [currentEditingTime, setCurrentEditingTime] = React.useState<'start' | 'end'>('start')
  const scaleAnim = useRef(new Animated.Value(1)).current
  const { cleaningTime, setCleaningTime, propertyId } = useAddPropertyStore()

  const animateChange = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      })
    ]).start()
  }

  const toggleTimePicker = (timeType: 'start' | 'end') => {
    if (showPicker && currentEditingTime === timeType) {
      setShowPicker(false)
    } else {
      setCurrentEditingTime(timeType)
      setShowPicker(true)
    }
  }

  const onTimeChange = (_: DateTimePickerEvent, selectedTime?: Date) => {
    if (selectedTime) {
      if (currentEditingTime === 'start') {
        setCleaningTime({ startTime: selectedTime, endTime: new Date(selectedTime.getTime()) })
      } else {
        setCleaningTime({ endTime: selectedTime })
      }
    }
  }

  const formatTime = (date: Date): string => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? '오후' : '오전'
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes.toString().padStart(2, '0')
    return `${ampm} ${formattedHours}:${formattedMinutes}`
  }

  const formatCleaningTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    if (remainingMinutes === 0) {
      return `${hours}시간`
    }
    return `${hours === 0 ? '' : `${hours}시간 `}${remainingMinutes}분`
  }

  const increaseCleaningTime = () => {
    if (cleaningTime.estimatedDuration < 300) {
      setCleaningTime({ estimatedDuration: cleaningTime.estimatedDuration + 30 })
      animateChange()
    }
  }

  const decreaseCleaningTime = () => {
    if (cleaningTime.estimatedDuration > 30) {
      setCleaningTime({ estimatedDuration: cleaningTime.estimatedDuration - 30 })
      animateChange()
    }
  }

  const updateCleaningTime = async () => {
    const { startTime, endTime, estimatedDuration } = useAddPropertyStore.getState().cleaningTime
    try {
      await supabase
        .from('properties')
        .update({
          cleaning_start_time: formatToTime(startTime),
          cleaning_end_time: formatToTime(endTime),
          cleaning_estimated_time: estimatedDuration
        })
        .eq('property_id', propertyId)

      router.push(`/${AddPropertyRoutes.REGISTRATION_PRICE_8}`)
    } catch (error) {
      console.error(error)
      Alert.alert('오류', '청소 시간 업데이트 중 오류가 발생했습니다.')
      return
    }
  }

  useEffect(() => {
    navigation.setOptions({
      onNextPress: updateCleaningTime
    })
  }, [navigation])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-6">청소 시간 설정</Text>

        <View className="mb-2">
          <Text className="text-lg text-gray-900 font-Pretendard">청소 희망 시간</Text>
        </View>

        <TouchableOpacity
          onPress={() => toggleTimePicker('start')}
          className={`mb-4 border rounded-lg p-2 flex-row justify-between items-center ${currentEditingTime === 'start' && showPicker ? 'border-secondary-900' : 'border-gray-300'}`}
        >
          <View>
            <Text className="text-base text-gray-500">시작 시간</Text>
            <Text className="text-lg pl-1 font-PretendardMedium">{formatTime(cleaningTime.startTime)}</Text>
          </View>
          <Ionicons
            name={currentEditingTime === 'start' && showPicker ? 'chevron-up-sharp' : 'chevron-down-sharp'}
            size={24}
            color={currentEditingTime === 'start' && showPicker ? '#222222' : '#9ca3af'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => toggleTimePicker('end')}
          className={`mb-4 border rounded-lg p-2 flex-row justify-between items-center ${currentEditingTime === 'end' && showPicker ? 'border-secondary-900' : 'border-gray-300'}`}
        >
          <View>
            <Text className="text-base text-gray-500">종료 시간</Text>
            <Text className="text-lg pl-1 font-PretendardMedium">{formatTime(cleaningTime.endTime)}</Text>
          </View>
          <Ionicons
            name={currentEditingTime === 'end' && showPicker ? 'chevron-up-sharp' : 'chevron-down-sharp'}
            size={24}
            color={currentEditingTime === 'end' && showPicker ? '#222222' : '#9ca3af'}
          />
        </TouchableOpacity>

        <View className="mb-2">
          <Text className="text-lg text-gray-900 font-Pretendard">청소 예상 시간</Text>
        </View>

        <View className="flex-row justify-between items-center border border-secondary-300 rounded-lg p-2">
          <TouchableOpacity onPress={decreaseCleaningTime} className="bg-secondary-100 rounded-full p-2">
            <Ionicons name="remove" size={24} color="#222222" />
          </TouchableOpacity>
          <Animated.Text
            style={[
              { transform: [{ scale: scaleAnim }] },
              { fontSize: 18, color: '#111827', fontFamily: 'Pretendard' }
            ]}
          >
            {formatCleaningTime(cleaningTime.estimatedDuration)}
          </Animated.Text>
          <TouchableOpacity onPress={increaseCleaningTime} className="bg-secondary-100 rounded-full p-2">
            <Ionicons name="add" size={24} color="#222222" />
          </TouchableOpacity>
        </View>
      </View>

      {showPicker && (
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-secondary-300">
          <View className="flex-row justify-end p-2">
            <TouchableOpacity onPress={() => setShowPicker(false)}>
              <Text className="text-secondary-900 text-lg font-PretendardMedium">완료</Text>
            </TouchableOpacity>
          </View>
          <DateTimePicker
            style={{}}
            value={currentEditingTime === 'start' ? cleaningTime.startTime : cleaningTime.endTime}
            mode="time"
            is24Hour={false}
            display="spinner"
            onChange={onTimeChange}
            locale="ko-KR"
            minuteInterval={10}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

export default CleaningTime
