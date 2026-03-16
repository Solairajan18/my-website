'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Code, Zap, Award } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { ABOUT, PORTFOLIO_CONFIG } from '@/data/portfolio'

/**
 * About Section - Professional summary with details
 * Updated to use portfolio data
 */
export function About() {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Designing scalable, resilient AWS infrastructure',
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Managing infrastructure with Terraform and automation',
    },
    {
      icon: Zap,
      title: 'CI/CD & DevOps',
      description: 'Building automated pipelines with GitLab CI/CD',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'AWS Solutions Architect & Azure Fundamentals',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white relative inline-block w-full">
              <span className="relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
              {PORTFOLIO_CONFIG.name} | {PORTFOLIO_CONFIG.title} | {PORTFOLIO_CONFIG.location}
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {ABOUT.summary}
              </p>

              {/* Personal Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                {ABOUT.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700"
                  >
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {detail.label}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {detail.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={containerVariants} className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-400 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-slate-700"
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Certifications', value: '2' },
              { label: 'Specializations', value: 'AWS, Terraform, Python' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="text-3xl font-bold text-green-600 dark:text-green-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
