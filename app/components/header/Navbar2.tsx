'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Component() {
  const { scrollY } = useScroll()
  const [shouldChangeBackground, setShouldChangeBackground] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateBackground = () => {
      if (scrollY.get() > 50) {
        setShouldChangeBackground(true)
      } else {
        setShouldChangeBackground(false)
      }
    }

    const unsubscribe = scrollY.onChange(updateBackground)
    return () => unsubscribe()
  }, [scrollY])

  return (
    <div className="min-h-screen bg-gray-900">
      <motion.header
        className="sticky top-0 z-50 w-full transition-all duration-300 ease-in-out"
        initial={{ backgroundColor: 'rgba(17,24,39,0)', boxShadow: 'none', y: -100 }}
        animate={{ 
          backgroundColor: shouldChangeBackground ? 'rgba(17,24,39,0.8)' : 'rgba(17,24,39,0)',
          boxShadow: shouldChangeBackground ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
          y: 0
        }}
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 }
        }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Gaming House
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Games', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                Play Now
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Animated gaming-style border */}
        <div className="relative w-full h-[3px] overflow-hidden">
          {/* Base glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500/20 to-purple-500/20"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 flex">
            <div className="w-full h-full animate-gradient-x bg-[length:200%_100%] bg-gradient-to-r from-blue-500 via-red-700 to-blue-300"></div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>

        <style jsx>{`
          @keyframes gradient-x {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: -200% 50%;
            }
          }
          .animate-gradient-x {
            animation: gradient-x 20s linear infinite;
          }
        `}</style>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Games', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </div>
  )
}