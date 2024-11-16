import Image from "next/image";
import Navbar from "./components/header/Navbar";
import Navbar2 from "./components/header/Navbar2";
import Hero from "./components/hero/Hero";
import Games from "./components/games/Games";
import Product from "./components/others/Product";
import SliderArea from "./components/others/SliderArea";

export default function Home() {
  return (
    <div className="relative grid grid-cols-12">
      <div className="col-span-12">
        <Navbar />
      </div>
      <div className="col-span-12">
        <Hero />
      </div>
      <div className="col-span-12 bg-black">
        <Games />
      </div>
      <div className="col-span-12 bg-black">
        <Product />
      </div>
      <div className="col-span-12 bg-black">
        <SliderArea />
      </div>
    </div>
  );
}
