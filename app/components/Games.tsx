"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Search, Info, PlayCircle, Star } from "lucide-react";

interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  genre: string;
}

const games: Game[] = [
  {
    id: 1,
    title: "Cosmic Adventure",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731732763/gaming-house/one_eggl29.jpg",
    rating: 4.5,
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Dragon Quest",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731732774/gaming-house/two_dagtq0.png",
    rating: 4.8,
    genre: "Fantasy",
  },
  {
    id: 3,
    title: "Neon Racer",
    price: 39.99,
    image:
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731733019/gaming-house/three_bh0uoa.jpg",
    rating: 4.2,
    genre: "Racing",
  },
  {
    id: 4,
    title: "Mystic Legends",
    price: 54.99,
    image:
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731732751/gaming-house/four_cm5ijo.jpg",
    rating: 4.7,
    genre: "RPG",
  },
  {
    id: 5,
    title: "Pixel Warrior",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731732745/gaming-house/five_vcg4jw.jpg",
    rating: 4.0,
    genre: "Action",
  },
  {
    id: 6,
    title: "Space Odyssey",
    price: 44.99,
    image:
      "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731732759/gaming-house/six_sdz1uu.jpg",
    rating: 4.6,
    genre: "Adventure",
  },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const productsRef = useRef(null);
  const isSearchInView = useInView(searchRef, { once: true, amount: 0.5 });
  const areProductsInView = useInView(productsRef, { once: true, amount: 0.1 });
  const searchControls = useAnimation();
  const productsControls = useAnimation();

  useEffect(() => {
    if (isSearchInView) {
      searchControls.start("visible");
    }
  }, [isSearchInView, searchControls]);

  useEffect(() => {
    if (areProductsInView) {
      productsControls.start("visible");
    }
  }, [areProductsInView, productsControls]);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colors = {
    background: "from-indigo-900 via-purple-900 to-pink-800",
    card: "from-blue-500 to-pink-500",
    buttonPrimary: "from-cyan-500 to-blue-600",
    buttonSecondary: "from-pink-500 to-purple-600",
    text: "text-gray-100",
    accent: "text-yellow-400",
  };

  const searchVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const productsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 0.8,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: "-5deg" },
    tap: { scale: 0.95 },
  };

  return (
    <section
      className={`py-8 sm:py-24 bg-gradient-to-br ${colors.background} min-h-screen`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-500">
          Featured Games
        </h2>

        <motion.div
          ref={searchRef}
          initial="hidden"
          animate={searchControls}
          variants={searchVariants}
          className="relative mb-6 sm:mb-8 max-w-md 2xl:max-w-2xl mx-auto"
        >
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800 text-white border-2 border-purple-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-100"
            aria-label="Search games"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
        </motion.div>

        <motion.div
          ref={productsRef}
          initial="hidden"
          animate={productsControls}
          variants={productsVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredGames.map((game) => (
            <motion.div
              key={game.id}
              variants={cardVariants}
              whileHover="hover"
              className={`card overflow-hidden rounded-xl bg-gradient-to-br ${colors.card} shadow-lg transform perspective-1000`}
            >
              <figure className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 font-bold px-2 py-1 text-sm sm:text-base rounded-bl-lg">
                  ${game.price.toFixed(2)}
                </div>
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h3
                  className={`card-title text-lg sm:text-xl 2xl:text-2xl font-semibold ${colors.accent} mb-1`}
                >
                  {game.title}
                </h3>
                <p className="text-pink-400 text-sm sm:text-base mb-2">
                  {game.genre}
                </p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < Math.floor(game.rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                      fill={
                        i < Math.floor(game.rating) ? "currentColor" : "none"
                      }
                    />
                  ))}
                  <span className="ml-2 text-gray-300 text-sm sm:text-base">
                    {game.rating.toFixed(1)}
                  </span>
                </div>
                <div className="card-actions justify-between mt-2">
                  <motion.button
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${colors.buttonPrimary} ${colors.text} font-semibold shadow-lg flex items-center space-x-2`}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    aria-label={`View details for ${game.title}`}
                  >
                    <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base 2xl:text-lg sm:text-base font-bold">
                      Details
                    </span>
                  </motion.button>
                  <motion.button
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${colors.buttonSecondary} ${colors.text} font-semibold shadow-lg flex items-center space-x-2`}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    aria-label={`Play ${game.title} now`}
                  >
                    <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base 2xl:text-lg font-bold">
                      Play Now
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
