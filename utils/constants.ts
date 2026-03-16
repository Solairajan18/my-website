/**
 * Application constants
 */

// Site information
export const SITE_NAME = 'Cloud Engineer Portfolio'
export const SITE_DESCRIPTION =
  'Senior Cloud Engineer portfolio showcasing AWS, Terraform, CI/CD, and DevOps expertise'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'mailto:your-email@example.com',
  medium: 'https://medium.com/@cloud-engineer',
}

// Navigation
export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Tools', href: '#tools' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

// Animation configs
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.5,
  SLOW: 0.8,
}

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

// Colors
export const COLORS = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#ec4899',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
}

// Skills categories
export const SKILL_CATEGORIES = [
  'Cloud',
  'IaC',
  'Programming',
  'DevOps',
]

// Tool categories
export const TOOL_CATEGORIES = [
  'Cloud',
  'IaC',
  'Programming',
  'Containerization',
  'Orchestration',
  'DevOps',
  'CI/CD',
  'Infrastructure',
]
