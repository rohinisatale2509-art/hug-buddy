import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData, ApiResponse } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate form data
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically send an email or store in database
    console.log('Contact form submission:', body)

    // Example: Send email with Resend, SendGrid, or similar
    // await sendEmail({
    //   to: 'info@lummus.com',
    //   subject: body.subject,
    //   html: `From: ${body.name} (${body.email})<br/>${body.message}`
    // })

    return NextResponse.json<ApiResponse<null>>(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json<ApiResponse<null>>(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}