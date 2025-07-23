import { supabase, type QuestionnaireSubmission } from './supabase'

export async function submitQuestionnaire(data: Omit<QuestionnaireSubmission, 'id' | 'created_at'>) {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'disabled' || supabaseAnonKey === 'disabled') {
      console.warn('Questionnaire submitted (Supabase not configured):', data)
      // Return success for development - in production you'd want to handle this differently
      return { 
        success: true, 
        data: { 
          id: 'mock-id', 
          ...data,
          created_at: new Date().toISOString() 
        },
        warning: 'Supabase not configured - data not actually saved'
      }
    }

    // Prepare the data, handling optional fields properly
    const submissionData = {
      current_location: data.current_location,
      primary_concern: data.primary_concern,
      service_interest: data.service_interest,
      investment_range: data.investment_range,
      timeline: data.timeline,
      name: data.name,
      email: data.email,
      phone: data.phone || null, // Convert empty string to null
      country_code: data.country_code,
    }

    console.log('=== FORM SUBMISSION DEBUG ===')
    console.log('Original form data:', data)
    console.log('Prepared submission data:', submissionData)
    console.log('Field analysis:')
    console.log('- current_location:', submissionData.current_location, typeof submissionData.current_location)
    console.log('- primary_concern:', submissionData.primary_concern, Array.isArray(submissionData.primary_concern), submissionData.primary_concern?.length)
    console.log('- service_interest:', submissionData.service_interest, Array.isArray(submissionData.service_interest), submissionData.service_interest?.length)
    console.log('- investment_range:', submissionData.investment_range, typeof submissionData.investment_range)
    console.log('- timeline:', submissionData.timeline, typeof submissionData.timeline)
    console.log('- name:', submissionData.name, typeof submissionData.name, submissionData.name?.length)
    console.log('- email:', submissionData.email, typeof submissionData.email, submissionData.email?.length)
    console.log('- phone:', submissionData.phone, typeof submissionData.phone, submissionData.phone?.length)
    console.log('- country_code:', submissionData.country_code, typeof submissionData.country_code)
    console.log('=== END DEBUG ===')
    console.log('Submitting to Supabase...')

    const { data: submission, error } = await supabase
      .from('questionnaire_submissions')
      .insert([submissionData])
      .select()
      .single()

    if (error) {
      console.error('Supabase error submitting questionnaire:', error)
      // Check for common errors
      if (error.message?.includes('relation "questionnaire_submissions" does not exist')) {
        return { 
          success: false, 
          error: new Error('Database table not found. Please run the database-setup.sql script in your Supabase dashboard.') 
        }
      }
      if (error.message?.includes('Invalid API key')) {
        return { 
          success: false, 
          error: new Error('Invalid Supabase credentials. Please check your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.') 
        }
      }
      return { success: false, error }
    }

    return { success: true, data: submission }
  } catch (error) {
    console.error('Failed to submit questionnaire:', error)
    return { success: false, error }
  }
}