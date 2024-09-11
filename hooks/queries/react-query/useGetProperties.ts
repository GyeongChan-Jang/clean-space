import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
const getProperties = async (hostId: string | undefined) => {
  if (!hostId) return []
  const { data } = await supabase
    .from('properties')
    .select(
      `
      *,
      property_cleaning_guidelines(*)
    `
    )
    .eq('host_id', hostId)
    .order('order', { referencedTable: 'property_cleaning_guidelines', ascending: true })
  return data
}

export { getProperties }

export const useGetProperties = (hostId: string | undefined) => {
  return useQuery({
    queryFn: () => getProperties(hostId),
    queryKey: ['properties', hostId],
    enabled: !!hostId,
    retry: false
  })
}
