// src/store/themeStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeMode } from '@/types/common'

interface ThemeState {
  theme: ThemeMode
  isSystem: boolean
  setTheme: (theme: ThemeMode) => void
  setIsSystem: (isSystem: boolean) => void
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      isSystem: false,
      setTheme: (theme) => set({ theme }),
      setIsSystem: (isSystem) => set({ isSystem })
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export default useThemeStore
