'use client'

import type { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'

/**
 * Theme Provider wrapper component for next-themes
 * Handles dark/light mode switching across the application
 */
export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & { children: ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
