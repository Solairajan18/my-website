'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { EXPERIENCE } from '@/data/portfolio'

/**
 * Experience Section - Timeline view of professional background
 * Updated to use portfolio data
 */
export function Experience() {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="experience"
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
                Professional Experience
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-green-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
              {EXPERIENCE.length} years of expertise in cloud engineering and DevOps
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            className="space-y-8 relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 to-blue-600 hidden md:block" />

            {EXPERIENCE.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 md:left-0 md:top-6 w-16 h-16 md:w-auto md:h-auto md:left-1 md:top-6 hidden md:flex items-center justify-center -translate-x-7.5">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="w-5 h-5 bg-green-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"
                  />
                </div>

                {/* Content card */}
                <div className="md:ml-12 bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-400 transition-colors shadow-md hover:shadow-lg">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                        <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right mt-3 sm:mt-0">
                      <p className="text-gray-600 dark:text-gray-400 font-semibold">
                        {experience.duration}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {experience.period}
                      </p>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-6 mt-6">
                    {experience.projects.map((project, projectIdx) => (
                      <div key={projectIdx} className="border-l-2 border-green-300 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {project.name}
                          </h4>
                          {project.clientUrl && (
                            <a
                              href={project.clientUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={project.client}
                              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        {project.client && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Client: {project.client}
                          </p>
                        )}

                        {/* Achievements */}
                        <div className="space-y-2">
                          {project.achievements.map((achievement, achIdx) => (
                            <motion.div
                              key={achIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: projectIdx * 0.1 + achIdx * 0.05 }}
                              className="flex gap-3"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {achievement}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
}
