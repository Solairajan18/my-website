import React from 'react'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Chatbot } from '@/components/Chatbot'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cloud Engineer | Portfolio',
  description: 'Senior Cloud Engineer portfolio showcasing AWS, Terraform, CI/CD, and DevOps expertise',
  keywords: [
    'Cloud Engineer',
    'AWS',
    'Terraform',
    'DevOps',
    'CI/CD',
    'Cloud Architecture',
    'Infrastructure as Code',
  ],
  authors: [{ name: 'Cloud Engineer' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Cloud Engineer Portfolio',
    title: 'Cloud Engineer | Portfolio',
    description: 'Senior Cloud Engineer portfolio showcasing AWS, Terraform, CI/CD, and DevOps expertise',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cloud Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Engineer | Portfolio',
    description: 'Senior Cloud Engineer portfolio showcasing AWS, Terraform, CI/CD, and DevOps expertise',
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://yourportfolio.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="transition-theme">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Chatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
