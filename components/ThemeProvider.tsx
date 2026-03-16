'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * Theme Provider wrapper component for next-themes
 * Handles dark/light mode switching across the application
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider>{children}</NextThemesProvider>
}
