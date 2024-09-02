import { getProperties } from '@/api/properties'
import { Database, Tables } from '@/database.types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useGetProperties = (hostId: string | undefined, queryOptions?: UseQueryOptions) => {
  return useQuery({
    queryKey: ['properties'],
    queryFn: () => getProperties(hostId),
    retry: false,
    ...queryOptions
  })
}
