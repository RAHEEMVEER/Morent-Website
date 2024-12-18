import React from "react";
import Image from "next/image";
import rentalCar1 from "../../public/images/rentalCar1.png";
import Button from "./Button";
import RentalCar2 from "./RentalCar2";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center lg:items-start min-h-[65vh] pt-4 lg:px-12 gap-4 lg:flex-row bg-[#F6F7F9] px-4">
      <div className="bg-[url(/images/bg1.png)] h-[370px] w-[100%] md:w-[70%] lg:w-[50%] rounded-2xl bg-center bg-cover flex flex-col p-6">
        <div>
          <h1 className="text-3xl font-semibold text-white sm:w-[70%] xl:w-[60%] mt-2">The Best Platform for Car Rental</h1>
          <p className="text-base text-white mt-4 w-[100%] sm:w-[70%]">Ease of doing car rental safely and reliably. Of course at a low price.</p>
          <Button stylee="bg-[#3563E9] mt-5 py-1 px-2" content="Rental Car" contentStyle="text-white"/>
        </div>
        <div className="flex justify-center"><Image src={rentalCar1} alt="car Image" className="w-[390px] h-auto mt-10 sm:mt-3"/></div>
      </div>
      <RentalCar2 visibility="hidden md:flex lg:w-[50%] md:w-[70%]"/>
    </section>
  );
}
