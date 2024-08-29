import { supabase } from '@/lib/supabase'

const getProperties = async (hostId: string | undefined) => {
  if (!hostId) return
  const { data } = await supabase.from('properties').select('*').eq('host_id', hostId)
  return data
}

export { getProperties }
