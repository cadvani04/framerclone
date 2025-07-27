'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Manifesto = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const words = [
    "Most", "realtors", "waste", "time", "on", "manual", "tasks", "that", "should", "be", "automated",
    "I", "build", "systems", "that", "capture", "leads", "follow", "up", "and", "close", "deals", "automatically",
    "You", "focus", "on", "clients", "I", "handle", "the", "rest"
  ]

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), opacity }}
        className="absolute top-20 left-1/4 w-40 h-40 bg-blue-50 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]), opacity }}
        className="absolute bottom-20 right-1/4 w-32 h-32 bg-purple-50 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
          >
            💭 My Approach
          </motion.h2>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-12">
            {words.map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  className="text-lg md:text-xl font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 cursor-pointer p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200"
                >
                  {word}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Manifesto 