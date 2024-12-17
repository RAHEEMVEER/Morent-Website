import React from 'react';
import Cars from "./Cars";
import car4 from "../../public/images/car4.png";
import car5 from "../../public/images/car5.png";
import car6 from "../../public/images/car6.png";
import car7 from "../../public/images/car7.png";
import car8 from "../../public/images/car8.png";
import car9 from "../../public/images/car9.png";
import Button from './Button';
import "./style.css";

export default function RecomCars() {
  return (
    <div className='bg-[#F6F7F9] pt-5 pb-5'>
        <h1 className="text-[20px] font-semibold">Recommendation Car</h1>
        <div className='grid grid-cols-4 gap-4 mt-6 elem'>
           <Cars CarName="All New Rush" carTurbo="family car" img={car4} liter="70" capacity="6" price="$78.00"/>
           <Cars CarName="CR-V" carTurbo="family car" img={car5} liter="80" capacity="8" price="$80.00"/>
           <Cars CarName="All New Terios" carTurbo="family car" img={car6} liter="90" capacity="2" price="$90.00"/>
           <Cars CarName="CR-V" carTurbo="family car" img={car9} liter="80" capacity="6" price="$80.00"/>
           <Cars CarName="MG ZX Exclusive" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00"/>
           <Cars CarName="New MG ZS" carTurbo="family car" img={car7} liter="80" capacity="6" price="$86.00"/>
           <Cars CarName="MG ZX Exclusive" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00"/>
           <Cars CarName="New MG ZS" carTurbo="family car" img={car7} liter="80" capacity="6" price="$86.00"/>
        </div>
        <div className='flex justify-center mt-6'><Button stylee="bg-[#3563E9] py-2 px-3" content="Show More Cars" contentStyle="text-white text-sm"/></div>
    </div>
  )
}
