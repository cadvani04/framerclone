'use client'

import { motion } from 'framer-motion'
import { Palette, Zap, Users, Code, Layers, Smartphone } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: 'Design',
      description: 'Create beautiful interfaces with our intuitive design tools and component library.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Prototype',
      description: 'Build interactive prototypes with animations, micro-interactions, and real data.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Collaborate',
      description: 'Work together in real-time with comments, version control, and team management.',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Handoff',
      description: 'Generate production-ready code for React, Vue, and other frameworks.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Layers,
      title: 'Design Systems',
      description: 'Create and maintain consistent design systems with reusable components.',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Design for all devices with automatic responsive layouts and breakpoints.',
      color: 'from-teal-500 to-green-600'
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
            Everything you need to
            <br />
            <span className="gradient-text">design and ship</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design to final code, Framer provides all the tools your team needs 
            to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">10M+</div>
            <div className="text-gray-600">Active users worldwide</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">500K+</div>
            <div className="text-gray-600">Projects created</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-600">Uptime guarantee</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 