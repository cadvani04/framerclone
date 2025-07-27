'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), opacity }}
        className="absolute top-20 left-1/4 w-48 h-48 bg-blue-50 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]), opacity }}
        className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-50 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          style={{ scale, opacity }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-12"
          >
            Let's work together
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-16 py-6 rounded-2xl transition-all duration-300 text-2xl shadow-xl flex items-center"
            >
              🚀 Get in touch
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-16 py-6 rounded-2xl transition-all duration-300 text-2xl flex items-center"
            >
              📞 Schedule a call
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              🎯 Available for new projects
            </h3>
            <p className="text-xl text-gray-600">
              💼 Consulting • Implementation • Training
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA 