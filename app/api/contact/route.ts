import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactSchema.parse(body)
    
    // TODO: Integrate with email service (Resend or Nodemailer)
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New Portfolio Contact: ${validatedData.name}`,
    //   html: `<p>Name: ${validatedData.name}</p><p>Email: ${validatedData.email}</p><p>Message: ${validatedData.message}</p>`,
    // })
    
    // For now, just log the contact information
    console.log('Contact form submission:', validatedData)
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit contact form. Please try again.',
      },
      { status: 500 }
    )
  }
}
