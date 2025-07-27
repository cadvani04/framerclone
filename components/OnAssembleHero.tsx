'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Brain, Users, Calendar, ArrowRight, Play } from 'lucide-react'

const OnAssembleHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Floating Elements with Automation Icons */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-xl flex items-center justify-center"
      >
        <Zap className="h-16 w-16 text-blue-600" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), opacity }}
        className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full blur-xl flex items-center justify-center"
      >
        <Brain className="h-12 w-12 text-purple-600" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), opacity }}
        className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-100 rounded-full blur-xl flex items-center justify-center"
      >
        <Users className="h-10 w-10 text-green-600" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "75%"]), opacity }}
        className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-100 rounded-full blur-xl flex items-center justify-center"
      >
        <Calendar className="h-14 w-14 text-orange-600" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          style={{ scale, opacity }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-sm text-gray-600 mb-8 font-medium"
          >
            🚀 REAL ESTATE AUTOMATION EXPERT ✦
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-7xl md:text-9xl font-bold text-gray-900 mb-8 leading-none"
          >
            Curran
            <br />
            <span className="text-blue-600">Advani</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 mb-12 font-light"
          >
            I help realtors scale their business with AI automation.
            <br />
            No bullshit. Just results. ✨
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/curran-advani-9663011b6/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg flex items-center"
          >
            See my work
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/curran.creates/reel/DMk9F9wsYp7/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-12 py-4 rounded-lg transition-all duration-300 text-lg flex items-center"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch demo
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm text-gray-500"
        >
          Helped 50+ agents scale • 300% more leads • 20 hours saved per week
        </motion.div>
      </div>
    </section>
  )
}

export default OnAssembleHero 