"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const buttonVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: -10,
      scale: 1.1,
    },
    tap: {
      scale: 0.95,
    },
  };
  const title = "Black Myth: Wukong";
  return (
    <motion.div
      className="grid grid-cols-12 bg-cover w-full min-h-screen"
      style={{
        backgroundImage: `url('/black-myth.png')`,
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="col-span-6 xl:px-10">
        <motion.h1
          className="text-6xl mt-52 font-bold text-blue-300"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
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
                    delay: index * 0.05,
                  },
                },
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="flex mb-20 mt-4">
          <motion.div
            className="badge badge-warning font-bold text-black text-base py-3 mr-3"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            Action
          </motion.div>
          <motion.div
            className="badge badge-accent font-bold text-black text-base py-3 mr-3"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            Mythology
          </motion.div>
          <motion.div
            className="badge badge-secondary font-bold text-black text-base py-3"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            3D
          </motion.div>
        </div>
        <motion.div
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, ease: "easeInOut" }}
        >
          <motion.button
            className="px-6 py-3 bg-white rounded-lg text-lg font-bold shadow-lg mr-5"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            aria-label="Rotate button"
          >
            Details
          </motion.button>
          <motion.button
            className="px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg shadow-lg flex items-center gap-2"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            aria-label="Rotate button"
          >
            Play Now <FaArrowRightLong />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
