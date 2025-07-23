// Alternative: Use anon key with proper validation (more secure than service role)
// Update your API route to use this approach

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Use anon key (safer than service role)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Rate limiting store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(clientIP: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3

  const clientData = rateLimitMap.get(clientIP)
  
  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (clientData.count >= maxRequests) {
    return false
  }
  
  clientData.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
    
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in 15 minutes.' },
        { status: 429 }
      )
    }

    const data = await request.json()

    // Server-side validation (redundant with RLS but good practice)
    const requiredFields = ['current_location', 'primary_concern', 'service_interest', 'investment_range', 'timeline', 'name', 'email', 'country_code']
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Email validation
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert using anon key (RLS policies will enforce security)
    const { data: submission, error } = await supabase
      .from('questionnaire_submissions')
      .insert([{
        current_location: data.current_location.trim(),
        primary_concern: data.primary_concern,
        service_interest: data.service_interest,
        investment_range: data.investment_range.trim(),
        timeline: data.timeline.trim(),
        name: data.name.trim(),
        email: data.email.toLowerCase().trim(),
        phone: data.phone ? data.phone.trim() : null,
        country_code: data.country_code.trim(),
      }])
      .select('id')
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit questionnaire. Please check your input and try again.' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Questionnaire submitted successfully',
      submissionId: submission.id
    }, { status: 201 })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}