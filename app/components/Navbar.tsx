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
          <div className="flex justify-between items-center py-5">
            <div>
              <Link href="/" className="">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Gaming House
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {["Home", "About", "Games", "Contact"].map((item) => (
                  <motion.div
                    key={item}
                    className="text-white hover:bg-violet-700 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                  >
                    <Link href={"/"}>{item}</Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-red-400 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-300 transition-colors duration-300"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close main menu" : "Open main menu"}
                </span>
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
        <div className="bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"></div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 h-full w-64 bg-black shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-pink-300 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-300"
                aria-label="Close menu"
              >
                <span className="sr-only">Close main menu</span>
                <X className="block h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-2 p-4">
              {["Home", "About", "Games", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
    </div>
  );
}
