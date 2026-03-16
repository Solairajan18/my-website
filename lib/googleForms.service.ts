/**
 * Google Forms integration service
 * Handles form submission to Google Forms endpoint
 */

import { PORTFOLIO_CONFIG } from '@/data/portfolio'

export interface FormData {
  name?: string
  email?: string
  message: string
  feedback?: string
  subject?: string
}

/**
 * Submit feedback to Google Forms
 * This mimics the original form.html submission logic
 */
export async function submitFeedbackToGoogleForms(
  feedback: string
): Promise<{ success: boolean; message: string }> {
  try {
    if (!feedback || feedback.trim().length === 0) {
      return {
        success: false,
        message: 'Feedback cannot be empty',
      }
    }

    // Prepare FormData for Google Forms
    const formData = new FormData()
    formData.append(PORTFOLIO_CONFIG.googleForms.feedbackField, feedback)

    // Submit to Google Forms with no-cors mode (like the original)
    await fetch(PORTFOLIO_CONFIG.googleForms.feedbackUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // This is required for Google Forms cross-origin requests
    })

    // Note: With no-cors, we can't read the response status
    // Google Forms will return a 200 or error, but we won't see it
    // Assume success if fetch completes without throwing

    return {
      success: true,
      message: 'Thank you for your feedback! It has been submitted.',
    }
  } catch (error) {
    console.error('Error submitting feedback to Google Forms:', error)
    return {
      success: false,
      message: 'Failed to submit feedback. Please try again later.',
    }
  }
}

/**
 * Submit contact form to API endpoint (if backend API is available)
 * This is an alternative to direct Google Forms submission
 */
export async function submitContactFormToAPI(
  data: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name || 'Anonymous',
        email: data.email || '',
        message: data.message,
        subject: data.subject || 'Contact Form Submission',
      }),
    })

    const result = await response.json()

    if (response.ok) {
      return {
        success: true,
        message: result.message || 'Message sent successfully!',
      }
    } else {
      return {
        success: false,
        message: result.message || 'Failed to send message. Please try again.',
      }
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    }
  }
}

/**
 * Submit contact form using either API or direct Google Forms
 */
export async function submitContactForm(
  data: FormData,
  useAPI: boolean = true
): Promise<{ success: boolean; message: string }> {
  if (useAPI) {
    return submitContactFormToAPI(data)
  } else {
    return submitFeedbackToGoogleForms(data.message || data.feedback || '')
  }
}

/**
 * Get the contact information for display
 */
export function getContactInfo() {
  return {
    name: PORTFOLIO_CONFIG.name,
    email: PORTFOLIO_CONFIG.email,
    phone: PORTFOLIO_CONFIG.phone,
    location: PORTFOLIO_CONFIG.location,
    website: PORTFOLIO_CONFIG.website,
    social: PORTFOLIO_CONFIG.social,
  }
}

/**
 * Get all contact methods as strings
 */
export function getContactMethods(): string[] {
  const contact = getContactInfo()
  return [
    `Email: ${contact.email}`,
    `Phone: ${contact.phone}`,
    `Location: ${contact.location}`,
    `Website: ${contact.website}`,
  ]
}

/**
 * Generate a WhatsApp link to pre-filled message
 */
export function getWhatsAppLink(message?: string): string {
  const phone = PORTFOLIO_CONFIG.social.whatsapp.replace(/\D/g, '') // Remove non-digits
  const text = encodeURIComponent(message || `Hi ${PORTFOLIO_CONFIG.name}, I wanted to connect with you!`)
  return `https://wa.me/${phone}?text=${text}`
}

/**
 * Generate a mailto link
 */
export function getMailtoLink(subject?: string, body?: string): string {
  const params = new URLSearchParams()
  if (subject) params.append('subject', subject)
  if (body) params.append('body', body)

  const queryString = params.toString()
  return `mailto:${PORTFOLIO_CONFIG.email}${queryString ? '?' + queryString : ''}`
}

/**
 * Generate a LinkedIn profile URL
 */
export function getLinkedInLink(): string {
  return PORTFOLIO_CONFIG.social.linkedin
}

/**
 * Generate a GitHub profile URL
 */
export function getGitHubLink(): string {
  return PORTFOLIO_CONFIG.social.github || 'https://github.com/Solairajan18'
}
