import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Games from "./components/Games";
import Product from "./components/Product";
import SliderArea from "./components/SliderArea";
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="relative grid grid-cols-12 bg-black">
      <div className="col-span-12">
        <Navbar />
      </div>
      <div className="col-span-12">
        <Hero />
      </div>
      <div className="col-span-12">
        <Games />
      </div>
      <div className="col-span-12">
        <Product />
      </div>
      <div className="col-span-12">
        <Team />
      </div>
      <div className="col-span-12">
        <SliderArea />
      </div>
    </div>
  );
}
