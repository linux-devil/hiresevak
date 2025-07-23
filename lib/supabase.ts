import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if Supabase is properly configured
const isSupabaseConfigured = 
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'disabled' && 
  supabaseAnonKey !== 'disabled' &&
  supabaseUrl.startsWith('https://') &&
  supabaseUrl.includes('.supabase.co')

// Create the client based on configuration
let supabaseClient: any

if (!isSupabaseConfigured) {
  console.warn('Supabase is not configured. Please update your .env.local file with valid Supabase credentials.')
  
  // Create a mock client that throws helpful errors
  supabaseClient = {
    from: () => ({
      insert: () => ({
        select: () => ({
          single: async () => {
            throw new Error('Supabase not configured. Please add your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local')
          }
        })
      })
    })
  }
} else {
  supabaseClient = createClient(supabaseUrl!, supabaseAnonKey!)
}

export const supabase = supabaseClient

// Types for our questionnaire data
export interface QuestionnaireSubmission {
  id?: string
  created_at?: string
  current_location: string
  primary_concern: string[]
  service_interest: string[]
  investment_range: string
  timeline: string
  name: string
  email: string
  phone: string
  country_code: string
}