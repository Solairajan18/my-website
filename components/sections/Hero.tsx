'use client'

// Deployment test - triggering webhook
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Wrench, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import { PORTFOLIO_CONFIG } from '@/data/portfolio'

/**
 * Hero Section - First impression with profile, designation, and call-to-action
 * Features: Animated profile photo, smooth scroll navigation, resume download
 * Updated to use portfolio data
 */
export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const handleScrollToTools = () => {
    const element = document.querySelector('#tools')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // Use the resume URL from portfolio config
    const link = document.createElement('a')
    link.href = PORTFOLIO_CONFIG.resumeUrl
    link.download = `${PORTFOLIO_CONFIG.name.replace(/\s+/g, '_')}_Resume.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      icon: Github,
      href: PORTFOLIO_CONFIG.social.github,
      aria: 'GitHub',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: PORTFOLIO_CONFIG.social.linkedin,
      aria: 'LinkedIn',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: PORTFOLIO_CONFIG.social.facebook,
      aria: 'Facebook',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: PORTFOLIO_CONFIG.social.instagram,
      aria: 'Instagram',
      label: 'Instagram',
    },
    {
      icon: Mail,
      href: `mailto:${PORTFOLIO_CONFIG.email}`,
      aria: 'Email',
      label: 'Email',
    },
  ].filter((link) => link.href && link.href !== '#')

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fadeIn" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fadeIn delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fadeIn delay-500" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="relative w-48 h-48 mx-auto"
          style={{
            y: scrollY * 0.3,
          }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400"
          >
            <Image
              src="/profile.jpg"
              alt="Cloud Engineer Profile"
              width={192}
              height={192}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">
            {PORTFOLIO_CONFIG.name}
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-green-600 dark:text-green-400">
            {PORTFOLIO_CONFIG.title}
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            AWS • Terraform • Python • DevOps • Cloud Architecture
          </p>
        </motion.div>

        {/* Motto/Quote */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 sm:p-8 border-l-4 border-green-600"
        >
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 italic">
            &quot;{PORTFOLIO_CONFIG.motto}&quot;
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <button
            onClick={downloadResume}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </button>
          <button
            onClick={handleScrollToTools}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Wrench className="w-5 h-5" />
            My Tools
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 pt-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.aria}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.aria}
                title={link.label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8"
        >
          <div className="text-gray-500 dark:text-gray-400">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
