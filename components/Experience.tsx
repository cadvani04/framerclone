'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      letter: 'R',
      company: 'Revamp',
      role: 'CEO/Founder',
      description: 'Developing an "Uber for Home Services" platform, connecting homeowners with service providers.',
      color: 'from-red-500 to-orange-600'
    },
    {
      letter: 'W',
      company: 'Western Digital',
      role: 'Data Science Intern & IOT',
      description: 'Benchmarked LLMs for engineering queries, improving response accuracy by 30%.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      letter: 'U',
      company: 'UCSC',
      role: 'Residential Assistant',
      description: 'Led onboarding and conflict resolution for 200+ students, improving retention and engagement.',
      color: 'from-green-500 to-teal-600'
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
            Experience
            <br />
            <span className="gradient-text">Highlights</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                {exp.letter}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                <p className="text-lg text-gray-600 mb-3">{exp.role}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="button-primary text-lg px-8 py-4 flex items-center mx-auto">
            View Full Experience
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 