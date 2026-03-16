'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { ABOUT } from '@/data/portfolio'

/**
 * Certifications Section - Badge-style certification cards with hover animations
 * Updated to use portfolio data
 */
export function Certifications() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="max-w-5xl mx-auto">
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
                Certifications
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-green-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-8">
              Professional certifications validating my expertise
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {ABOUT.certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-400 transition-all shadow-md hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-4xl flex-shrink-0">
                    <Award className="w-10 h-10 text-green-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* External Link Icon */}
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 flex-shrink-0 transition-colors mt-1" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-900 dark:text-green-300">
                Continuous Learning
              </h3>
            </div>
            <p className="text-sm text-green-800 dark:text-green-400">
              Actively pursuing new certifications to stay current with the latest cloud technologies and industry standards.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
