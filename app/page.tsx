import Navbar from "./Components/Header";
import Hero from "./Components/Hero";
import LocationTime from "./Components/PickAndDrop";
import PopCars from "./Components/PopCars";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LocationTime />
      <PopCars />
      <Footer />
    </>
  );
}
