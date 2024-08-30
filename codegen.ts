import type { CodegenConfig } from '@graphql-codegen/cli'
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'
import dotenv from 'dotenv'
import path from 'path'

// .env 파일 로드
dotenv.config({ path: path.resolve(__dirname, '.env') })

const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL

if (!SUPABASE_ANON_KEY) {
  throw new Error('EXPO_PUBLIC_SUPABASE_ANON_KEY is not set in .env file')
}

if (!SUPABASE_URL) {
  throw new Error('EXPO_PUBLIC_SUPABASE_URL is not set in .env file')
}

const config: CodegenConfig = {
  schema: [
    {
      [`${SUPABASE_URL}/graphql/v1`]: {
        headers: {
          apiKey: SUPABASE_ANON_KEY,
          'Content-Type': 'application/json'
        }
      }
    }
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    './gql/': {
      preset: 'client',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any'
        }
      }
    }
  },
  hooks: {
    afterAllFileWrite: ['npm run prettier']
  }
}

export default config
