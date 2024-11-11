"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [shouldChangeBackground, setShouldChangeBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateBackground = () => {
      if (scrollY.get() > 50) {
        setShouldChangeBackground(true);
      } else {
        setShouldChangeBackground(false);
      }
    };

    const unsubscribe = scrollY.onChange(updateBackground);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="absolute w-full">
      <motion.header
        className="fixed top-0 z-50 w-full transition-all duration-300 ease-in-out"
        animate={{
          backgroundColor: shouldChangeBackground
            ? "rgba(0, 0, 0, 1)"
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 h-20 pt-5">
            <div className="col-span-4">
              <Link href="/" className="">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Gaming House
                </span>
              </Link>
            </div>
            <div className="col-span-8 hidden md:block">
              <div className="flex items-baseline space-x-4 float-right">
                {["Home", "About", "Games", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="text-white hover:bg-violet-700 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                    // initial={{ y: 10, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    // transition={{
                    //   delay: index * 0.5,
                    //   type: "spring",
                    //   stiffness: 100,
                    // }}
                  >
                    <Link href={"/"}>{item}</Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Gaming-inspired border */}
        <div className="bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500">
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-blue-500"></div> */}
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "About", "Games", "Contact"].map((item) => (
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
  );
}
