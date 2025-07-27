'use client'

import { motion } from 'framer-motion'

const Stack = () => {
  const stackCategories = [
    {
      title: 'Design',
      tools: [
        { name: 'Figma', type: 'Design Tool' },
        { name: 'Spline', type: '3D Design Tool' },
        { name: 'Canva', type: 'Design Tool' }
      ]
    },
    {
      title: 'Development',
      tools: [
        { name: 'Framer', type: 'Website Builder' },
        { name: 'Webflow', type: 'Website Builder' },
        { name: 'VS Code', type: 'Code Editor' }
      ]
    },
    {
      title: 'Productivity',
      tools: [
        { name: 'Notion', type: 'Second Brain' },
        { name: 'Cron', type: 'Calendar App' },
        { name: 'Things', type: 'Task Manager' }
      ]
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
            Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stackCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h3>
              <div className="space-y-6">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-sm font-bold">
                        {tool.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{tool.name}</div>
                        <div className="text-sm text-gray-600">{tool.type}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack 