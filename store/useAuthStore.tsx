import { create } from 'zustand'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface AuthState {
  user: User | null
  session: Session | null
  initialized: boolean
  setUser: (user: User | null) => void
  setSession: (session: Session | null) => void
  setInitialized: (initialized: boolean) => void
  signOut: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  initialized: false,
  setUser: (user) => set({ user }),
  setSession: (session) => set({ session }),
  setInitialized: (initialized) => set({ initialized }),
  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null, session: null })
  }
}))

// Initialize the auth listener
supabase.auth.onAuthStateChange(async (event, session) => {
  useAuthStore.getState().setSession(session)
  useAuthStore.getState().setUser(session ? session.user : null)
  useAuthStore.getState().setInitialized(true)
})

// Custom hook for easier access to auth state and actions
export function useAuth() {
  const { user, session, initialized, signOut } = useAuthStore()

  return { user, session, initialized, signOut }
}
