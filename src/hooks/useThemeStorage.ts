// src/hooks/useThemeStorage.ts
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import useThemeStore from '@/store/themeStore'
import { ThemeMode } from '@/types/common'

const useThemeStorage = () => {
  const systemTheme = useColorScheme() as ThemeMode
  const { theme, isSystem, setTheme, setIsSystem } = useThemeStore()

  useEffect(() => {
    if (isSystem) {
      setTheme(systemTheme)
    }
  }, [isSystem, systemTheme])

  const setMode = (mode: ThemeMode) => {
    setTheme(mode)
    setIsSystem(false)
  }

  const setSystem = (flag: boolean) => {
    setIsSystem(flag)
    if (flag) {
      setTheme(systemTheme)
    }
  }

  return { theme, isSystem, setMode, setSystem }
}

export default useThemeStorage
