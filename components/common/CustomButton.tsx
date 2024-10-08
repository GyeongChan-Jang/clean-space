import { Text, TouchableOpacity } from 'react-native'

import { ButtonProps } from '@/types/common'

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-secondary-900'
    case 'danger':
      return 'bg-red-500'
    case 'success':
      return 'bg-green-500'
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]'
    default:
      return 'bg-[#5CCEF8]'
  }
}

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-black'
    case 'secondary':
      return 'text-gray-100'
    case 'danger':
      return 'text-red-100'
    case 'success':
      return 'text-green-100'
    default:
      return 'text-white'
  }
}

const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  disabled,
  isLoading,
  isShadow = false,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-xl p-3 flex flex-row justify-center items-center ${isShadow ? 'shadow-md' : ''} shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className} ${disabled ? 'bg-secondary-300' : ''}`}
      {...props}
      disabled={disabled}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)} ${disabled ? 'text-white' : ''}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  )
}

export default CustomButton
