import { supabase } from '@/lib/supabase'
import { Database } from '@/supabase/database.types'
const getProperties = async (hostId: string | undefined) => {
  if (!hostId) return []
  const { data } = await supabase.from('properties').select(`*, property_cleaning_guidelines(*)`).eq('host_id', hostId)
  return data
}

export { getProperties }
