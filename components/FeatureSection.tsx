'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Users, Zap, Brain, Code, Database, ArrowRight } from 'lucide-react'

const FeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const shadow = useTransform(scrollYProgress, [0, 0.5], [0, 20])

  const features = [
    {
      title: "Here's what I've built for real estate agents.",
      subtitle: "Real systems. Real results. No fluff.",
      items: [
        { title: "🏠 Lead Capture Automation", desc: "Built systems that capture 300% more leads for CLC Realty agents", icon: Users, cta: "See Results" },
        { title: "⚡ Follow-up Sequences", desc: "Automated follow-ups that close 40% more deals", icon: Zap, cta: "See Results" },
        { title: "🤖 AI Lead Qualification", desc: "GPT-powered systems that qualify leads 24/7", icon: Brain, cta: "See Results" },
        { title: "📊 CRM Integration", desc: "Seamless Follow Up Boss and Monday.com automation", icon: Code, cta: "See Results" }
      ]
    }
  ]

  return (
    <section ref={containerRef} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), opacity }}
        className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]), opacity }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100 rounded-full blur-2xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            style={{ y, opacity }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
            >
              {feature.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto"
            >
              {feature.subtitle}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {feature.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    y: -10
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center mx-auto">
                    {item.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection 