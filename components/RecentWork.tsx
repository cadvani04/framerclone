'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const RecentWork = () => {
  const projects = [
    {
      title: 'Revamp Platform',
      category: 'Mobile App',
      date: 'Dec 29, 2023',
      description: 'Uber for Home Services platform connecting homeowners with service providers.',
      image: '🚀'
    },
    {
      title: 'LLM Benchmarking',
      category: 'Data Science',
      date: 'Dec 13, 2023',
      description: 'Benchmarked LLMs for engineering queries at Western Digital.',
      image: '🤖'
    },
    {
      title: 'UCSC Leadership',
      category: 'Management',
      date: 'Nov 20, 2023',
      description: 'Led onboarding and conflict resolution for 200+ students.',
      image: '👥'
    },
    {
      title: 'AI Product Strategy',
      category: 'Product',
      date: 'Nov 3, 2023',
      description: 'Product strategy and user research for AI-driven applications.',
      image: '💡'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-100 rounded-2xl p-6 h-64 flex flex-col justify-between hover:bg-gray-200 transition-all duration-300">
                <div className="text-4xl mb-4">{project.image}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                  <p className="text-xs text-gray-500">{project.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center mx-auto">
            Show all
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default RecentWork 