'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { SKILLS_DATA } from '@/data/skills'

/**
 * Skills Section - Categorized skills with proficiency levels
 * Updated to use portfolio skills data
 */
export function Skills() {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="skills"
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
                Skills & Expertise
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-green-600"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-8">
              Technical proficiencies built through hands-on experience
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {SKILLS_DATA.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.category}
                </h3>
                {category.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                )}
                <div className="h-1 w-12 bg-gradient-to-r from-green-600 to-blue-600 rounded mb-6" />

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-gray-700 dark:text-gray-300 font-semibold">
                            {skill.name}
                          </span>
                          {skill.description && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {skill.description}
                            </p>
                          )}
                        </div>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400 ml-2 flex-shrink-0">
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
                          variants={skillBarVariants}
                          initial="hidden"
                          animate={isInView ? 'visible' : 'hidden'}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 text-center"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Always learning and staying current with the latest cloud technologies, DevOps practices, and infrastructure patterns.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
}
