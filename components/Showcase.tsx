'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Showcase = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Designer',
      company: 'Netflix',
      content: 'Framer has completely transformed how we design and prototype. The collaboration features are game-changing.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Design Lead',
      company: 'Spotify',
      content: 'The code generation feature saves us hours of development time. It\'s like having an extra developer on the team.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'UX Manager',
      company: 'Airbnb',
      content: 'Our design system is now more consistent than ever. Framer makes it easy to maintain quality across all our products.',
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Framer in
            <br />
            <span className="gradient-text">action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Watch how teams use Framer to design, prototype, and ship products faster than ever before.
          </p>
        </motion.div>

        {/* Demo Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Interactive Demo</h3>
                <p className="text-white/80">See Framer's powerful features in action</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Loved by designers worldwide
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-gray-300 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role} at {testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your design workflow?
            </h3>
            <p className="text-gray-600 mb-6">
              Join millions of designers who trust Framer to create amazing digital experiences.
            </p>
            <button className="button-primary text-lg px-8 py-4">
              Start designing for free
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase 