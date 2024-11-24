'use client'

import React from "react"
import { motion } from "framer-motion"
import { FaArrowRightLong } from "react-icons/fa6"

export default function Hero() {
  const buttonVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { rotate: -10, scale: 1.1 },
    tap: { scale: 0.95 },
  }

  const floatingTextVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" },
      },
    },
  }

  const title = "Black Myth: Wukong"

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 bg-cover w-full min-h-screen relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dir1jzh3n/image/upload/v1731844116/gaming-house/black-myth_ujpvpw.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="col-span-1 md:col-span-10 2xl:col-span-8 p-6 md:p-10 flex flex-col justify-center">
      <motion.h1
          className="text-4xl sm:text-5xl xl:text-6xl font-bold text-blue-300 mb-6 flex flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {title.split(" ").map((word, wordIndex) => (
            <span key={`word-${wordIndex}`} className="mr-2">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${char}-${wordIndex}-${charIndex}`}
                  className="inline-block whitespace-nowrap"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: [0, -15, 0],
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                        duration: 0.5,
                        delay: (wordIndex * word.length + charIndex) * 0.1,
                      },
                    },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <div className="flex flex-wrap mb-6">
          {['Action', 'Mythology', '3D'].map((tag, index) => (
            <motion.div
              key={tag}
              className={`badge ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-green-400' : 'bg-purple-400'} text-black font-bold text-base py-3 px-4 mr-3 mb-3`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {tag}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, ease: "easeInOut" }}
        >
          <motion.button
            className="px-3 xxs:px-6 py-1 xxs:py-3 bg-white rounded-lg text-lg font-bold shadow-lg mr-5 mb-3"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            aria-label="View details"
          >
            Details
          </motion.button>
          <motion.button
            className="px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg shadow-lg flex items-center gap-2 mb-3"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            aria-label="Play now"
          >
            Play Now <FaArrowRightLong aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>

      <motion.p
        className="absolute bottom-8 right-8 text-xl md:text-2xl font-bold text-yellow-400 bg-violet-500 bg-opacity-50 px-4 py-2 rounded-lg"
        variants={floatingTextVariants}
        animate="animate"
        aria-live="polite"
      >
        Coming Soon!
      </motion.p>
    </motion.div>
  )
}