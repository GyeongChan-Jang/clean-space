import { gql } from '@apollo/client'

const GET_PROPERTIES = gql`
  query GetProperties {
    propertiesCollection {
      edges {
        node {
          property_id
          property_type
          property_address {
            coordinates
          }
          name
          host_id
          description
          status
        }
      }
    }
  }
`
export { GET_PROPERTIES }
