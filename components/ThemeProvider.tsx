'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'

/**
 * Theme Provider wrapper component for next-themes
 * Handles dark/light mode switching across the application
 */
export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />
}
