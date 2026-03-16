'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import {
  Cloud,
  Database,
  Code,
  Package,
  Container,
  GitBranch,
  Zap,
  Shield,
} from 'lucide-react'

interface Tool {
  id: number
  name: string
  category: string
  icon: React.ReactNode
}

const tools: Tool[] = [
  { id: 1, name: 'AWS', category: 'Cloud', icon: <Cloud className="w-8 h-8" /> },
  { id: 2, name: 'Terraform', category: 'IaC', icon: <Database className="w-8 h-8" /> },
  { id: 3, name: 'Python', category: 'Programming', icon: <Code className="w-8 h-8" /> },
  { id: 4, name: 'Docker', category: 'Containerization', icon: <Container className="w-8 h-8" /> },
  { id: 5, name: 'Kubernetes', category: 'Orchestration', icon: <Package className="w-8 h-8" /> },
  { id: 6, name: 'GitLab CI/CD', category: 'DevOps', icon: <GitBranch className="w-8 h-8" /> },
  { id: 7, name: 'Jenkins', category: 'CI/CD', icon: <Zap className="w-8 h-8" /> },
  { id: 8, name: 'Security', category: 'Infrastructure', icon: <Shield className="w-8 h-8" /> },
]

/**
 * Tools Section - Grid layout of cloud and DevOps tools
 * Features: Animated grid, hover effects, category filtering ready
 */
export function Tools() {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All')

  const categories = [
    'All',
    ...Array.from(new Set(tools.map((tool) => tool.category))),
  ]

  const filteredTools =
    selectedCategory === 'All'
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section
      id="tools"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
              My Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The tools I use to build, deploy, and manage cloud infrastructure
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={itemVariants}
                layout
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-md hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {tool.name}
                  </h3>
                  <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-400">
                No tools in this category
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
