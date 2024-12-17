import React from 'react';
import Button from './Button';
import Image from 'next/image';
import rentalCar2 from "../../public/images/rentalCar2.png";

export default function RentalCar2(props:any) {
  return (
    <div className={`bg-[url(/images/bg2.png)] h-[370px] w-[100%] md:w-[70%] lg:w-[50%] rounded-2xl bg-center bg-cover flex flex-col p-6 ${props.visibility}`}>
    <div>
      <h1 className="text-3xl font-semibold text-white w-[70%] xl:w-[50%] mt-2">Easy way to rent a car at a low price</h1>
      <p className="text-base text-white mt-4 w-[70%]">Providing cheap car rental services and safe and comfortable facilities.</p>
      <Button stylee="bg-[#54A6FF] mt-5 py-1 px-2" content="Rental Car" contentStyle="text-white"/>
    </div>
    <div className="flex justify-center"><Image src={rentalCar2} alt="car Image" className="w-[350px] h-auto mt-3"/></div>
  </div>
  )
}
