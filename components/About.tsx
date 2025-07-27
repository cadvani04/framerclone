'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <br />
              <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              I'm an Information Science senior at UC Santa Cruz with a focus on product development and AI applications. 
              My experience spans from founding Revamp, an "Uber for Home Services" platform, to working with LLMs at Western Digital.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              I'm passionate about bridging technical and customer needs, with proven skills in product strategy, 
              user research, and LLM applications. Currently seeking opportunities in supply chain and product roles.
            </p>
            <button className="button-primary text-lg px-8 py-4 flex items-center">
              View My Skills
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Information Science Senior at UC Santa Cruz</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Based in San Jose, CA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>AI-driven product development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Entrepreneurship experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>LLM applications & benchmarking</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 