'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  medium: string
  github?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Kubernetes Multi-Cloud Migration',
    description:
      'Migrated legacy applications to Kubernetes across AWS and Azure, reducing deployment time by 70% and achieving 99.95% uptime.',
    image: '/projects/k8s-migration.jpg',
    technologies: ['Kubernetes', 'Terraform', 'AWS', 'Azure'],
    medium: 'https://medium.com/@cloud-engineer/k8s-migration',
    github: 'https://github.com/cloud-engineer/k8s-migration',
    featured: true,
  },
  {
    id: 2,
    title: 'Automated CI/CD Pipeline with GitLab',
    description:
      'Built comprehensive CI/CD pipeline using GitLab CI with automated testing, security scanning, and multi-environment deployments.',
    image: '/projects/cicd-pipeline.jpg',
    technologies: ['GitLab CI', 'Docker', 'Security Scanning', 'Terraform'],
    medium: 'https://medium.com/@cloud-engineer/cicd-pipeline',
    github: 'https://github.com/cloud-engineer/cicd-pipeline',
    featured: true,
  },
  {
    id: 3,
    title: 'AWS Cost Optimization Tool',
    description:
      'Created Python automation tool that analyzes AWS usage patterns and recommends cost-saving opportunities, saving $50K+ annually.',
    image: '/projects/cost-optimizer.jpg',
    technologies: ['Python', 'AWS', 'Lambda', 'Cost Optimization'],
    medium: 'https://medium.com/@cloud-engineer/aws-cost-optimizer',
    featured: false,
  },
  {
    id: 4,
    title: 'Infrastructure Monitoring Dashboard',
    description:
      'Developed real-time monitoring solution using Prometheus and Grafana, providing visibility into 500+ cloud resources.',
    image: '/projects/monitoring-dashboard.jpg',
    technologies: ['Prometheus', 'Grafana', 'AWS CloudWatch'],
    medium: 'https://medium.com/@cloud-engineer/monitoring-dashboard',
    featured: false,
  },
  {
    id: 5,
    title: 'Terraform Module Library',
    description:
      'Built reusable Terraform modules for common AWS infrastructure patterns, reducing provisioning time by 60%.',
    image: '/projects/terraform-modules.jpg',
    technologies: ['Terraform', 'AWS', 'Module Design'],
    medium: 'https://medium.com/@cloud-engineer/terraform-modules',
    github: 'https://github.com/cloud-engineer/terraform-modules',
    featured: false,
  },
  {
    id: 6,
    title: 'Docker Multi-Stage Build Optimization',
    description:
      'Optimized Docker builds reducing image sizes by 80% and build times by 50% using multi-stage builds and layer caching.',
    image: '/projects/docker-optimization.jpg',
    technologies: ['Docker', 'Container Optimization', 'CI/CD'],
    medium: 'https://medium.com/@cloud-engineer/docker-optimization',
    featured: false,
  },
]

/**
 * Weekend Projects Section - Showcase of projects with lazy loading and filtering
 * Features: Project cards with images, technology tags, links to Medium and GitHub
 */
export function WeekendProjects() {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  const [filter, setFilter] = useState<string>('all')

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.featured)

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

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
              Weekend Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Exploring cloud architectures and DevOps automation
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            <motion.button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects ({projects.length})
            </motion.button>
            <motion.button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Featured ({projects.filter((p) => p.featured).length})
            </motion.button>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 shadow-md hover:shadow-xl transition-all"
                >
                  {/* Image Container */}
                  <div className="relative h-48 bg-gray-200 dark:bg-slate-700 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2 border-t border-gray-200 dark:border-slate-700">
                      <motion.a
                        href={project.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors group-hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                        Read More
                      </motion.a>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
