import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'

type ThemeMode = 'light' | 'dark'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  bgVariant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success'
  textVariant?: 'primary' | 'default' | 'secondary' | 'danger' | 'success'
  IconLeft?: React.ComponentType<any>
  IconRight?: React.ComponentType<any>
  className?: string
  isLoading?: boolean
  isShadow?: boolean
}

interface SelectCardType {
  id: string
  name: string
  image: ImageSourcePropType
}

export type { ThemeMode, ButtonProps, SelectCardType }
