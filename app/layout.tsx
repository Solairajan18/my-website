import React from 'react'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Chatbot } from '@/components/Chatbot'
import { Footer } from '@/components/Footer'
import { PORTFOLIO_CONFIG } from '@/data/portfolio'

const siteTitle = `${PORTFOLIO_CONFIG.name} | ${PORTFOLIO_CONFIG.title}`
const siteDescription =
  'Cloud Engineer portfolio showcasing AWS, Terraform, CI/CD, Python, and DevOps expertise'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'Cloud Engineer',
    'AWS',
    'Terraform',
    'DevOps',
    'CI/CD',
    'Cloud Architecture',
    'Infrastructure as Code',
  ],
  authors: [{ name: PORTFOLIO_CONFIG.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PORTFOLIO_CONFIG.website,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${PORTFOLIO_CONFIG.website}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
        <link rel="canonical" href={PORTFOLIO_CONFIG.website} />
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
