// apolloClient.ts
import { supabase } from '@/lib/supabase'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// 환경 변수 검증 및 타입 가드 함수
function getEnvVariable(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`${name} is not set in the environment variables.`)
  }
  return value
}

// 환경 변수 가져오기
const SUPABASE_URL = getEnvVariable('EXPO_PUBLIC_SUPABASE_URL')
const SUPABASE_ANON_KEY = getEnvVariable('EXPO_PUBLIC_SUPABASE_ANON_KEY')

// HTTP 링크 생성
const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`
})

// 인증 링크 생성
const authLink = setContext(async (_, { headers }) => {
  // supabase에서 현재 세션 가져오기
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const token = session?.access_token

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      apiKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
    }
  }
})

// 에러 처리 링크
// const errorLink = new ApolloLink((operation, forward) => {
//   return forward(operation).map(response => {
//     if (response.errors) {
//       response.errors.forEach(err => {
//         if (err.extensions?.code === 'UNAUTHENTICATED') {
//           // 인증 오류 처리 (예: 로그인 페이지로 리디렉션)
//           console.error('Authentication error:', err);
//         }
//       });
//     }
//     return response;
//   });
// });

// Apollo Client 인스턴스 생성
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
      // fetchPolicy: 'network-only' // 캐시 무시
    }
  }
})

export default client
