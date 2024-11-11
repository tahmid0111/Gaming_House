"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
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
        {/* <motion.h1
          className="text-6xl font-bold text-blue-300 mt-40"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                  },
                },
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1> */}
        <motion.h1
          className="text-6xl mt-40 font-bold text-blue-300"
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

        <div className="flex">
          <div className="badge badge-warning font-bold text-black">Action</div>
          <div className="badge badge-accent font-bold text-black">
            Mythology
          </div>
          <div className="badge badge-secondary font-bold text-black">3D</div>
        </div>
        <button className="btn">Details</button>
        <button className="btn">
          Play Now <FaArrowRightLong />
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
