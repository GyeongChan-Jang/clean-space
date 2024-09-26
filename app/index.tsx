import Loader from '@/components/common/LoadingOverlay'
import { useGetProfiles } from '@/hooks/queries/react-query/useGetProfiles'
import { useAuth } from '@/store/useAuthStore'
import { Redirect } from 'expo-router'
import { View } from 'react-native'

const Page = () => {
  const { user, session, initialized, signOut } = useAuth()

  const { data: profiles, isLoading } = useGetProfiles(user?.id)

  if (!initialized || isLoading) {
    return (
      <View>
        <Loader />
      </View>
    )
  }

  // // 1. 로그인X -> /(auth)/welcome
  // if (!user && !session) return <Redirect href="/(auth)/sign-in" />

  // // 2. 로그인O, Profile 등록X -> /user-setup
  // if (user && !profiles) return <Redirect href="/(auth)/user-setup" />

  // // 3. 로그인O, Profile 등록O -> /(root)/(main-tabs)/home
  // if (user && profiles) return <Redirect href="/(root)/(main-tabs)/home" />
  return <Redirect href="/(root)/(main-tabs)/home" />
}

export default Page
