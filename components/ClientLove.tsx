'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const ClientLove = () => {
  const testimonials = [
    {
      content: "Working with Curran has been an absolute pleasure! His keen eye for product development, coupled with a deep understanding of AI applications, brought a fresh perspective to our projects. We've seen a noticeable improvement in our user engagement since collaborating with him.",
      name: "Karthik",
      role: "CEO, Aero Studio"
    },
    {
      content: "Collaborating with Curran was a transformative experience for our brand. His deep grasp of product strategy, coupled with his technical prowess, resulted in solutions that struck the perfect balance between innovation and functionality, leaving a lasting impression on our audience.",
      name: "Shreya",
      role: "Product Manager"
    },
    {
      content: "Our platform underwent a remarkable transformation under Curran's product leadership. His understanding of our business needs, coupled with a commitment to AI innovation, resulted in solutions that were both intuitive and technically advanced, contributing significantly to our success.",
      name: "Akshay",
      role: "Co-Founder, Rise Academy"
    },
    {
      content: "Curran's product contributions have been a cornerstone of our success. His unique blend of technical expertise and strategic thinking is evident in the seamless user experiences he crafts. Curran's work not only elevated our platform but also significantly improved user satisfaction.",
      name: "Saumya",
      role: "Instagram Influencer"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client love
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLove 