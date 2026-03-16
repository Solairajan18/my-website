'use client'

import type { ComponentProps, ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type NextThemesProviderProps = ComponentProps<typeof NextThemesProvider>

/**
 * Theme Provider wrapper component for next-themes
 * Handles dark/light mode switching across the application
 */
export function ThemeProvider({
  children,
  ...props
}: NextThemesProviderProps & { children: ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
