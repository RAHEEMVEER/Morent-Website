import React from 'react';
import swapUp from "../../public/images/Swap.png";
import Image from 'next/image';
import mark from "../../public/images/mark.png";
import Locationtime from"./LocationTime";

export default function LocationTime() {
  return (
    <div className='flex flex-col pt-10 lg:flex-row items-center lg:px-12 w-[100%] gap-4 xl:gap-8 bg-[#F6F7F9] px-4'>
       <div className='shadow-2xl w-[100%] md:w-[70%] lg:w-[48%] p-3 rounded-md'>
         <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0'><Image src={mark} alt="button" className='w-4 h-4 font'/>Pick-Up</h1>
         <Locationtime />
       </div>
       <div className='bg-[#3563E9] p-3 rounded-lg h-max cursor-pointer'><Image src={swapUp} alt='swapUp'/></div>
       <div className='shadow-2xl w-[100%] md:w-[70%] lg:w-[48%] p-3 rounded-md'>
         <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0'><Image src={mark} alt="button" className='w-4 h-4'/>Drop-Off</h1>
         <Locationtime />
       </div>
    </div>
  )
}
