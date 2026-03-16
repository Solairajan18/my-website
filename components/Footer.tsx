'use client'

import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

/**
 * Footer component with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      aria: 'GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      aria: 'LinkedIn profile',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com',
      aria: 'Twitter profile',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:your-email@example.com',
      aria: 'Send an email',
    },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section - Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Cloud Engineer. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Crafted with passion for cloud infrastructure
            </p>
          </div>

          {/* Right section - Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.aria}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
