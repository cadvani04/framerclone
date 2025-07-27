'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const Newsletter = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join 3500+ Readers
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Receive weekly updates on Product Development and AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter 