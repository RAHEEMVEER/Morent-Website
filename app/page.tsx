import Hero from "./Components/Hero";
import LocationTime from "./Components/PickAndDrop";
import PopCars from "./Components/PopCars";
import RecomCars from "./Components/RecomCars";
import Cars from "./Components/Cars";
import Car1 from "../public/images/rentalCar1.png";
import Car2 from "../public/images/rentalCar2.png";
import Car3 from "../public/images/car3.png";
import car4 from "../public/images/car4.png";
import car5 from "../public/images/car5.png";
import car6 from "../public/images/car6.png";
import car7 from "../public/images/car7.png";
import car8 from "../public/images/car8.png";
import car9 from "../public/images/car9.png";
import Button from './Components/Button';

export default function Home() {
  return (
    <>
      <Hero />
      <LocationTime />
      <PopCars
        style="px-4 lg:px-12 pt-12 pb-3"
        grid="grid-cols-4"
        speacility="Popular Cars"
        cars={[
          <Cars CarName="Koenigsegg" carTurbo="sport car" img={Car1} liter="90" capacity="2" price="$99.00"/>,
          <Cars CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00"/>,
          <Cars CarName="Rolls - Royce"carTurbo="family car" img={Car3} liter="70" capacity="4" price="$180.10"/>,
          <Cars CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00"/>,
        ]}
      />
      <RecomCars 
       style="px-4 lg:px-12 pb-3"
       gridCol="grid-cols-4"
       showMore={<div className='flex justify-center mt-6'><Button stylee="bg-[#3563E9] py-2 px-3" content="Show More Cars" contentStyle="text-white text-sm"/></div>}
       cars={[
       <Cars CarName="All New Rush" carTurbo="family car" img={car4} liter="70" capacity="6" price="$78.00"/>,
       <Cars CarName="CR-V" carTurbo="family car" img={car5} liter="80" capacity="8" price="$80.00"/>,
       <Cars CarName="All New Terios" carTurbo="family car" img={car6} liter="90" capacity="2" price="$90.00"/>,
       <Cars CarName="CR-V" carTurbo="family car" img={car9} liter="80" capacity="6" price="$80.00"/>,
       <Cars CarName="MG ZX Exclusive" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00"/>,
       <Cars CarName="New MG ZS" carTurbo="family car" img={car7} liter="80" capacity="6" price="$86.00"/>,
       <Cars CarName="MG ZX Exclusive" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00"/>,
       <Cars CarName="New MG ZS" carTurbo="family car" img={car7} liter="80" capacity="6" price="$86.00"/>,
       ]}/>
    </>
  );
}
