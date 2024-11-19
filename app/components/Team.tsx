"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Technical Support",
      color: "from-cyan-500 to-blue-500",
      image:
        "",
    },
    {
      name: "Sam Lee",
      role: "Customer Service",
      color: "from-pink-500 to-purple-500",
      image:
        "",
    },
    {
      name: "Jordan Taylor",
      role: "Game Master",
      color: "from-yellow-500 to-orange-500",
      image:
        "",
    },
    {
      name: "Casey Morgan",
      role: "IT Specialist",
      color: "from-green-500 to-emerald-500",
      image:
        "",
    },
    {
      name: "Riley Brown",
      role: "Community Manager",
      color: "from-purple-500 to-indigo-500",
      image:
        "",
    },
    {
      name: "David Johnson",
      role: "Hiring Manager",
      color: "from-purple-500 to-indigo-500",
      image:
        "",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 bg-black text-white"
      aria-labelledby="support-team-heading"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="support-team-heading"
          className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Our Support Team
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-75`}
              />
              <div className="relative p-6 flex flex-col items-center">
                <motion.div
                  className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={member.image}
                    className="w"
                  />
                </motion.div>
                <h3 className="text-2xl 2xl:text-4xl font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-gray-200 2xl:text-xl mb-4">{member.role}</p>
                <motion.button
                  className="px-4 py-2 bg-white text-black 2xl:text-xl rounded-full font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact {member.name.split(" ")[0]}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
