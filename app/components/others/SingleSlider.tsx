import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
interface SliderInfo {
  id: string;
  image: string;
  title: string;
  price: string;
  des: string;
  prev: string;
  next: string;
}

// Define the component props interface
interface SingleSliderProps {
  info: SliderInfo; // Use the SliderInfo interface for type safety
}

const SingleSlider: React.FC<SingleSliderProps> = ({ info }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={info.image}
            alt="Game Cover"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Right side - Game Info */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-pink-500">
          <div className="space-y-4">
            <motion.h2
              className="text-5xl font-bold text-yellow-400"
            >
              {info.title}
            </motion.h2>
            <motion.div
              className="text-4xl font-semibold text-blue-300"
            >
              {info.price}
            </motion.div>
            <p className="text-base/relaxed text-gray-100">
              {info.des}
            </p>
          </div>

          <div className="mt-6">
            <motion.button
              className="btn w-full text-xl md:w-auto bg-yellow-400 text-gray-800 font-bold py-2 px-8 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "#FBBF20" }}
              whileTap={{ scale: 0.95 }}
            >
              Play Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <motion.a
          href={info.prev}
          className="btn btn-circle bg-white/20 text-white border-2 border-white/50"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          ❮
        </motion.a>
        <motion.a
          href={info.next}
          className="btn btn-circle bg-white/20 text-white border-2 border-white/50"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          ❯
        </motion.a>
      </div>
    </>
  );
};

export default SingleSlider;
