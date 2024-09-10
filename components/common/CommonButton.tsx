import React, { useEffect, useRef } from 'react'
import { Pressable, Text, ActivityIndicator, Animated, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons' // Expo 아이콘 사용

interface CommonButtonProps {
  onPress: () => void
  title: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  className?: string
  icon?: string | null
  iconPosition?: 'left' | 'right'
}
const CustomButton = ({
  onPress,
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  icon = null,
  iconPosition = 'left'
}: CommonButtonProps) => {
  const baseStyle = 'rounded-lg flex items-center justify-center flex-row'

  const variantStyles = {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-100 text-secondary-900 border border-secondary-300',
    success: 'bg-success-500 text-white',
    danger: 'bg-danger-500 text-white',
    warning: 'bg-warning-500 text-secondary-900'
  }

  const sizeStyles = {
    small: 'px-3 py-2',
    medium: 'px-4 py-2.5',
    large: 'px-6 py-3'
  }

  const textSizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }

  const iconSizes = {
    small: 16,
    medium: 20,
    large: 24
  }

  const disabledStyle = disabled ? 'opacity-50' : ''
  const widthStyle = fullWidth ? 'w-full' : ''

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyle} ${widthStyle} ${className}`

  // 애니메이션 값 설정
  const animatedScale = useRef(new Animated.Value(1)).current
  const animatedOpacity = useRef(new Animated.Value(1)).current

  const animateIn = () => {
    Animated.parallel([
      Animated.spring(animatedScale, {
        toValue: 0.95,
        useNativeDriver: true
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true
      })
    ]).start()
  }

  const animateOut = () => {
    Animated.parallel([
      Animated.spring(animatedScale, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true
      }),
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      })
    ]).start()
  }

  // disabled 상태가 변경될 때 애니메이션 리셋
  useEffect(() => {
    animateOut()
  }, [disabled])

  const iconColor = variant === 'secondary' ? '#222222' : '#FFFFFF'

  const renderIcon = () => {
    if (!icon) return null
    return (
      <Ionicons
        name={icon as any}
        size={iconSizes[size]}
        color={iconColor}
        style={{ marginRight: iconPosition === 'left' ? 8 : 0, marginLeft: iconPosition === 'right' ? 8 : 0 }}
      />
    )
  }

  return (
    <Animated.View style={{ transform: [{ scale: animatedScale }], opacity: animatedOpacity }}>
      <Pressable
        onPress={onPress}
        onPressIn={animateIn}
        onPressOut={animateOut}
        disabled={disabled || loading}
        className={buttonStyle}
      >
        <View style={{ minHeight: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {loading ? (
            <ActivityIndicator
              color={variant === 'secondary' ? '#222222' : '#FFFFFF'}
              size={size === 'small' ? 'small' : 'small'}
            />
          ) : (
            <>
              {iconPosition === 'left' && renderIcon()}
              <Text
                className={`font-PretendardMedium ${textSizeStyles[size]} ${variant === 'secondary' ? 'text-secondary-900' : 'text-white'}`}
              >
                {title}
              </Text>
              {iconPosition === 'right' && renderIcon()}
            </>
          )}
        </View>
      </Pressable>
    </Animated.View>
  )
}

export default CustomButton
