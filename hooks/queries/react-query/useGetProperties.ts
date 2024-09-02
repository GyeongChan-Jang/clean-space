import { getProperties } from '@/api/properties'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useGetProperties = (hostId: string | undefined) => {
  return useQuery({
    queryFn: () => getProperties(hostId),
    queryKey: ['properties', hostId],
    retry: false
  })
}
