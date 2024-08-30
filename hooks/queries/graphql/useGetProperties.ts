import { GET_PROPERTIES } from '@/api/graphql/properties'
import { Properties } from '@/gql/graphql'
import { useQuery } from '@apollo/client'

const useGetProperties = () => {
  return useQuery<any, any>(GET_PROPERTIES, {
    onCompleted: (data) => console.log('Query completed:', data),
    onError: (error) => console.error('Query error:', error)
  })
}

export { useGetProperties }
