'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function Product() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center px-4 overflow-hidden pb-32 pt-20">
      <div ref={ref} className="container mx-auto relative">
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Nebula X Gaming Setup
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Immerse yourself in comfort with the Nebula X Gaming Chair. 
              Engineered for marathon gaming sessions, it offers ergonomic support and futuristic style.
            </motion.p>
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="text-4xl font-bold text-yellow-400">$399.99</span>
              <span className="text-lg text-gray-400 line-through">$499.99</span>
              <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">Save 20%</span>
            </motion.div>
            <motion.button 
              className="relative group btn btn-lg 2xl:btn-wide bg-transparent border-2 border-purple-500 text-lg px-10 py-3 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <span className="relative z-10 text-white group-hover:text-purple-200 transition-colors duration-300">Add to Cart</span>
              <motion.div
                className="absolute inset-0 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.button>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <Image
                src="/pc-setup.jpg"
                alt="Nebula X Gaming Setup"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <motion.div
                className="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 text-xl font-bold px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.4 }}
              >
                New!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}