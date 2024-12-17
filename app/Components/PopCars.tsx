import React from "react";
import Link from "next/link";
import Cars from "./Cars";
import Car1 from "../../public/images/rentalCar1.png";
import Car2 from "../../public/images/rentalCar2.png";
import Car3 from "../../public/images/car3.png";
import RecomCars from "./RecomCars";
import "./style.css";

export default function PopCars() {
  return (
    <section className="px-4 lg:px-12 pt-12 pb-3 bg-[#F6F7F9]">
      <div className="flex justify-between items-center"><h1 className="text-[20px] font-semibold">Popular Cars</h1><Link href="/" className="text-[#3563E9] hover:underline text-base">View All</Link></div>
      <div className="grid grid-cols-4 gap-4 mt-6 pb-5 elem">
        <Cars CarName="Koenigsegg" carTurbo="sport car" img={Car1} liter="90" capacity="2" price="$99.00"/>
        <Cars CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00"/>
        <Cars CarName="Rolls - Royce" carTurbo="family car" img={Car3} liter="70" capacity="4" price="$180.10"/>
        <Cars CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00"/>
      </div>
      <RecomCars />
    </section>
  );
}
