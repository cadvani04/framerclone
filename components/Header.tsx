'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  const menuItems = [
    {
      name: 'Product',
      hasDropdown: true,
      items: ['Design', 'Prototype', 'Collaborate', 'Handoff', 'Design Systems']
    },
    {
      name: 'Resources',
      hasDropdown: true,
      items: ['Documentation', 'Tutorials', 'Community', 'Blog', 'Help Center']
    },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Enterprise', hasDropdown: false },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold gradient-text">Framer</div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (item.name === 'Product') setIsProductOpen(true)
                      if (item.name === 'Resources') setIsResourcesOpen(true)
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'Product') setIsProductOpen(false)
                    if (item.name === 'Resources') setIsResourcesOpen(false)
                  }}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>

                {/* Dropdown Menus */}
                {(item.name === 'Product' && isProductOpen) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    onMouseEnter={() => setIsProductOpen(true)}
                    onMouseLeave={() => setIsProductOpen(false)}
                  >
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}

                {(item.name === 'Resources' && isResourcesOpen) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="button-secondary">Sign In</button>
            <button className="button-primary">Start for Free</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && item.items && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <button className="w-full button-secondary">Sign In</button>
                <button className="w-full button-primary">Start for Free</button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header 