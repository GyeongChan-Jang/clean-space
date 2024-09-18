import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
const getProperty = async (propertyId: string | undefined) => {
  if (!propertyId) return null
  const { data } = await supabase
    .from('properties')
    .select(
      `
      *,
      property_cleaning_guidelines(*),
      property_amenities(*),
      property_address(*),
      property_cleaning_list(
        living_room,
        bed_room,
        bedding,
        working_space,
        kitchen,
        dish_washing,
        refrigerator,
        bathroom,
        terrace,
        dressing_room,
        garbage,
        laundry_dry,
        amenity
      )
    `
    )
    .eq('property_id', propertyId)
    .single()

  return data
}

export { getProperty }

export const useGetProperty = (propertyId: string | undefined) => {
  return useQuery({
    queryFn: () => getProperty(propertyId),
    queryKey: ['property', propertyId],
    enabled: !!propertyId,
    retry: false
  })
}
