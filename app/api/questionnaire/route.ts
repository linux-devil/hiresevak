import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Use the working anon key instead of the invalid service role key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    hasUrl: !!supabaseUrl,
    hasAnonKey: !!supabaseAnonKey,
  })
}

// Create Supabase client with anon key (which we know works)
let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  } catch (error) {
    console.error('Failed to create Supabase client:', error)
  }
}

// Rate limiting (simple in-memory store)
const submissions = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxSubmissions = 3 // Max 3 submissions per 15 minutes
  
  if (!submissions.has(ip)) {
    submissions.set(ip, [now])
    return false
  }
  
  const timestamps = submissions.get(ip)!
  const validTimestamps = timestamps.filter(time => now - time < windowMs)
  
  if (validTimestamps.length >= maxSubmissions) {
    return true
  }
  
  validTimestamps.push(now)
  submissions.set(ip, validTimestamps)
  return false
}

function validateData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  // Required fields
  const requiredFields = ['current_location', 'primary_concern', 'service_interest', 'investment_range', 'timeline', 'name', 'email', 'country_code']
  
  for (const field of requiredFields) {
    if (!data[field]) {
      errors.push(`Missing required field: ${field}`)
    }
  }
  
  // Email validation
  if (data.email && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
    errors.push('Invalid email format')
  }
  
  // Name validation (no special characters)
  if (data.name && !/^[a-zA-Z\s'-]+$/.test(data.name)) {
    errors.push('Name contains invalid characters')
  }
  
  // Array validation
  if (data.primary_concern && !Array.isArray(data.primary_concern)) {
    errors.push('Primary concern must be an array')
  }
  
  if (data.service_interest && !Array.isArray(data.service_interest)) {
    errors.push('Service interest must be an array')
  }
  
  return { isValid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    
    // Rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again in 15 minutes.' },
        { status: 429 }
      )
    }
    
    // Check if Supabase is configured
    if (!supabase) {
      console.error('Supabase not configured properly')
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }
    
    const data = await request.json()
    
    // Validate data
    const validation = validateData(data)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      )
    }
    
    // Sanitize and prepare data
    const sanitizedData = {
      current_location: data.current_location.trim(),
      primary_concern: data.primary_concern,
      service_interest: data.service_interest,
      investment_range: data.investment_range.trim(),
      timeline: data.timeline.trim(),
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      phone: data.phone ? data.phone.trim() : null,
      country_code: data.country_code.trim(),
    }
    
    console.log('Attempting to insert questionnaire data for IP:', clientIP)
    
    // Insert into database
    const { data: submission, error } = await supabase
      .from('questionnaire_submissions')
      .insert([sanitizedData])
      .select('id, created_at')
      .single()
    
    if (error) {
      console.error('Supabase insertion error:', error)
      
      // Handle specific error types
      if (error.message?.includes('Invalid API key')) {
        console.error('Invalid Supabase API key. Please check your environment variables.')
        return NextResponse.json(
          { error: 'Service configuration error. Please contact support.' },
          { status: 500 }
        )
      }
      
      if (error.message?.includes('row-level security policy')) {
        console.error('RLS policy blocking insert. Please check database policies.')
        return NextResponse.json(
          { error: 'Data validation failed. Please check your input and try again.' },
          { status: 400 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to submit questionnaire. Please try again.' },
        { status: 500 }
      )
    }
    
    console.log('Questionnaire submitted successfully:', submission.id)
    
    return NextResponse.json({
      success: true,
      message: 'Questionnaire submitted successfully',
      submissionId: submission.id
    }, { status: 201 })
    
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Prevent other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}