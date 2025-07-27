'use client'

import { motion } from 'framer-motion'

const PortfolioHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-sm text-gray-600 mb-8">Available for new Projects</div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Curran
            <br />
            <span className="gradient-text">Advani</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product-focused Information Science Professional
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            No-code developer
          </h3>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            I'm a product-focused Information Science senior from UC Santa Cruz, focused on AI-driven products and entrepreneurship. 
            I optimize business goals by solving human problems through user research and design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200">
            Get this Template
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-8 py-4 rounded-lg transition-all duration-200">
            Copy Email
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioHero 