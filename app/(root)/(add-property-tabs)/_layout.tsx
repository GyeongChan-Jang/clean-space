import { Tabs, usePathname, useRouter } from 'expo-router'
import {
  BottomTabBarProps,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import CustomButton from '@/components/common/CustomButton'
import { AddPropertyRoutes } from '@/constants/routes'
import useAddPropertyStore from '@/store/useAddProperty'
import { heightPercentage } from '@/utils/responsive'
import { NavigationHelpers, ParamListBase, RouteProp } from '@react-navigation/native'
interface CustomTabOptions {
  onNextPress?: () => void
  // isNextDisabled?: boolean
}

// BottomTabNavigationOptions를 확장하여 커스텀 옵션 포함
type ExtendedTabNavigationOptions = BottomTabNavigationOptions & CustomTabOptions

// CustomTabBarProps 인터페이스 정의
interface CustomTabBarProps extends Omit<BottomTabBarProps, 'descriptors'> {
  descriptors: {
    [key: string]: {
      options: ExtendedTabNavigationOptions
      route: RouteProp<ParamListBase, string>
      navigation: any
    }
  }
}

const ROUTES = Object.values(AddPropertyRoutes)

const ProgressBar = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <View className="flex-row h-1">
      {ROUTES.slice(1).map((_, index) => (
        <View key={index} className={`flex-1 ${index <= currentIndex ? 'bg-sky-500' : 'bg-gray-200'}`} />
      ))}
    </View>
  )
}

const TabBar = ({ state, descriptors, navigation }: CustomTabBarProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const currentIndex = ROUTES.indexOf(pathname.split('/').pop() as AddPropertyRoutes)

  const currentRoute = state.routes[state.index]
  const { options } = descriptors[currentRoute.key]

  const onNextPress =
    options.onNextPress ||
    (() => {
      if (currentIndex < ROUTES.length - 1) {
        router.push(ROUTES[currentIndex + 1] as any)
      } else {
        router.push('/my-property')
      }
    })

  const { isStepValid } = useAddPropertyStore()
  const currentRouteName = ROUTES[currentIndex]

  const isNextDisabled = !isStepValid(currentRouteName)

  if (pathname.includes(AddPropertyRoutes.ADD_PROPERTY) || pathname.includes(AddPropertyRoutes.COMPLETE)) {
    return null
  }

  return (
    <View style={{ height: heightPercentage(15) }} className="bg-white">
      <ProgressBar currentIndex={currentIndex} />
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity
          onPress={() => {
            if (currentIndex > 1) {
              router.push(ROUTES[currentIndex - 1] as any)
            } else {
              router.push('/my-property')
            }
          }}
          className="w-1/4 px-6 py-3 rounded-lg"
        >
          <Text className="text-center text-secondary-800 text-lg font-bold">뒤로</Text>
        </TouchableOpacity>
        <CustomButton
          onPress={onNextPress}
          title={currentIndex === ROUTES.length - 2 ? '완료' : '다음'}
          // bgVariant={isNextDisabled ? "secondary" : "primary"}
          bgVariant="secondary"
          textVariant="secondary"
          className="w-1/4 px-6 py-3 rounded-lg"
          disabled={isNextDisabled}
        />
      </View>
    </View>
  )
}

export default function Layout() {
  const pathname = usePathname()

  const shouldShowTabBar = () => {
    // 루트 경로('/')이거나 ADD_PROPERTY 경로인 경우 TabBar를 숨깁니다.
    if (pathname === '/' || pathname.includes(AddPropertyRoutes.ADD_PROPERTY)) {
      return false
    }
    // COMPLETE 경로인 경우에도 TabBar를 숨깁니다.
    if (pathname.includes(AddPropertyRoutes.COMPLETE)) {
      return false
    }
    return true
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => (shouldShowTabBar() ? <TabBar {...(props as CustomTabBarProps)} /> : null)}
    >
      {ROUTES.map((route) => (
        <Tabs.Screen
          key={route}
          name={route}
          options={route === AddPropertyRoutes.COMPLETE ? { href: null } : undefined}
        />
      ))}
    </Tabs>
  )
}
