import Image from "next/image";
import Navbar from "./components/header/Navbar";
import Navbar2 from "./components/header/Navbar2";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="relative grid grid-cols-12">
      <div className="col-span-12">
        <Navbar />
      </div>
      <div className="col-span-12">
        <Hero />
      </div>
      <div className="col-span-12 h-screen bg-black">
        {/* <Hero /> */}
      </div>
    </div>
  );
}
