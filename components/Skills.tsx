'use client'

import { motion } from 'framer-motion'
import { Code, BarChart3, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Technical Skills',
      color: 'from-blue-500 to-purple-600',
      skills: ['Python', 'PostgreSQL', 'AWS Bedrock', 'Make.com', 'n8n', 'HTML/CSS', 'Oracle', 'API', 'Machine Learning']
    },
    {
      icon: BarChart3,
      title: 'Data & Product Skills',
      color: 'from-green-500 to-teal-600',
      skills: ['NumPy', 'Excel/Sheets', 'Plotly', 'UI/UX Design', 'User Research', 'Business Analytics', 'ERP', 'Presentations']
    },
    {
      icon: Users,
      title: 'Soft Skills',
      color: 'from-orange-500 to-red-600',
      skills: ['Problem-solving', 'Communication', 'Detail-oriented', 'Leadership', 'Project Management', 'Team Collaboration']
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
            Skills &
            <br />
            <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 