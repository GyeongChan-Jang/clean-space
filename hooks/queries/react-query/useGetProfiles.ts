import { supabase } from '@/lib/supabase'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

const getProfiles = async (userId: string | undefined) => {
  if (!userId) return null
  const { data } = await supabase.from('profiles').select('*').eq('user_id', userId)
  if (data) {
    return data[0]
  } else return null
}

export const useGetProfiles = (userId: string | undefined) => {
  return useQuery({
    queryFn: () => getProfiles(userId),
    queryKey: ['profiles', userId],
    enabled: !!userId,
    retry: false
  })
}
