"use client";

import { motion, useAnimation } from "framer-motion";
import SingleSlider from "./SingleSlider";

export default function SliderArea() {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.3 },
    });
  };

  const sliders = [
    {
      id: "slide1",
      image:
        "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731738673/gaming-house/wallpaperflare.com_wallpaper_gvfudc.jpg",
      title: "Spider-Man",
      price: "$59.99",
      des: "Play as Spider-Man and swing through the city, fighting iconic villains like Green Goblin and Doctor Octopus",
      prev: "#slide4",
      next: "#slide2",
    },
    {
      id: "slide2",
      image:
        "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731738688/gaming-house/wallpaperflare.com_wallpaper_7_moaf31.jpg",
      title: "Call Of Duty",
      price: "$35.99",
      des: "A popular first-person shooter franchise with various titles, each offering different campaigns and multiplayer modes",
      prev: "#slide1",
      next: "#slide3",
    },
    {
      id: "slide3",
      image:
        "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731738661/gaming-house/wallpaperflare.com_wallpaper_1_wgsz9u.jpg",
      title: "Game of Thrones",
      price: "$78.99",
      des: "A popular TV series adapted into a few different games, including strategy games and RPGs",
      prev: "#slide2",
      next: "#slide4",
    },
    {
      id: "slide4",
      image:
        "https://res.cloudinary.com/dir1jzh3n/image/upload/v1731738658/gaming-house/wallpaperflare.com_wallpaper_4_xkhauc.jpg",
      title: "PUBG",
      price: "$44.99",
      des: "A battle royale game where 100 players are dropped onto an island and fight to be the last one standing",
      prev: "#slide3",
      next: "#slide1",
    },
  ];
  return (
    <div className="carousel w-full">
      <motion.div
        id="slide1"
        className="carousel-item relative w-full overflow-hidden shadow-lg"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <SingleSlider info={sliders[0]} />
      </motion.div>
      <motion.div
        id="slide2"
        className="carousel-item relative w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <SingleSlider info={sliders[1]} />
      </motion.div>
      <motion.div
        id="slide3"
        className="carousel-item relative w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <SingleSlider info={sliders[2]} />
      </motion.div>
      <motion.div
        id="slide4"
        className="carousel-item relative w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <SingleSlider info={sliders[3]} />
      </motion.div>
    </div>
  );
}
