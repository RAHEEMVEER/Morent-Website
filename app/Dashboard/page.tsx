import React from "react";
import MainMenuLinks from "../Components/MainMenuLinks";
import Image from "next/image";
import map from "../../public/images/Maps.png";
import gtr from "../../public/images/rentalCar2.png";
import mark from "../../public/images/mark.png";
import arrow from "../../public/images/arrow-down.png";
import circleChart from "../../public/images/circleChart.png";
import more from "../../public/images/more.png";
import Link from "next/link";

export default function page() {
  const mainMenuLinks = [
    { icon: "ri-home-9-fill", alt: "Dashboard", LinkName: "Dashboard" },
    { icon: "ri-roadster-fill", alt: "Car", LinkName: "Car Rent" },
    { icon: "ri-signal-tower-line", alt: "Insight", LinkName: "Insight" },
    { icon: "ri-wallet-3-fill", alt: "Reimburse", LinkName: "Reimburse" },
    { icon: "ri-message-2-fill", alt: "Inbox", LinkName: "Inbox" },
    { icon: "ri-calendar-todo-fill", alt: "Calender", LinkName: "Calender" },
  ];

  const prefrences = [
    { icon: "ri-settings-line", alt: "Settings", LinkName: "Settings" },
    { icon: "ri-question-fill", alt: "Help", LinkName: "Help & Center" },
    { icon: "ri-moon-fill", alt: "mode", LinkName: "Dark Mode" },
  ];
  
  const timeManagement =[
    {type:"Pick-Up", date: "20 July2022", time: "07.00"},
    {type:"Drop-Off", date: "21 July2022", time: "01.00"},
  ];

  const popularCarsDetail = [
    {color:"bg-[#0D3559]", carType: "Sport Car", num: "17,439"},
    {color:"bg-[#175D9C]", carType: "SUV", num: "9,478"},
    {color:"bg-[#2185DE]", carType: "Coupe", num: "18,197"},
    {color:"bg-[#63A9E8]", carType: "Hatchback", num: "12,510"},
    {color:"bg-[#A6CEF2]", carType: "MPV", num: "14,406"},
  ];

  const transactionCars = [
    {carImg: "/images/rentalCar2.png", carName:"Nissan GT-R", carType:"Sport Car", carTime: "20 July", carPrice:"$80.00"},
    {carImg: "/images/rentalCar1.png", carName:"Koegnigsegg", carType:"Sport Car", carTime: "19 July", carPrice:"$99.00"},
    {carImg: "/images/car3.png", carName:"Rolls-Royce", carType:"Sport Car", carTime: "18 July", carPrice:"$96.00"},
    {carImg: "/images/car5.png", carName:"CR-V", carType:"SUV", carTime: "17 July", carPrice:"$80.00"},
  ];

  return (
    <section className="flex min-h-[100vh]">
      <div className="bg-white min-h-[100vh] min-w-[250px] pt-5 px-4 shadow-inner hidden lg:block">
        <h1 className="text-[#78889f] text-base">Main Menu</h1>
        <div className="flex flex-col gap-1 mt-2">{mainMenuLinks.map((val) => (<MainMenuLinks img={val.icon} imgType={val.alt} LinkName={val.LinkName}/>))}</div>

        <h1 className="text-[#78889f] text-base mt-10">Prefrences</h1>
        <div className="flex flex-col gap-1 mt-2">{prefrences.map((val) => (<MainMenuLinks img={val.icon} imgType={val.alt} LinkName={val.LinkName}/>))}</div>
      </div>

      <div className="bg-[#F6F7F9] px-7 py-6 grid grid-cols-2 gap-5 w-full">
        <div className="bg-white rounded-md py-6 px-4">
          <h1 className="font-semibold text-xl">Details Rental</h1>
          <Image src={map} alt="map" className="mt-4 w-full" />
          <div className="flex gap-3 items-center mt-3">
            <div className="bg-[url(/images/bg2.png)] bg-center w-[200px] bg-cover rounded-md flex justify-center items-center p-4 mt-3"><Image src={gtr} alt="car interior" className="w-[150px]" /></div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col"><h1 className="text-[22px] font-semibold">Nissan GT-R</h1><p className="text-[#3D5278] text-xs">Sport Car</p></div>
              <p className="text-[#3D5278] text-xs">#9761</p>
            </div>
          </div>
          {timeManagement.map((elem)=>(
             <div className="mt-8">
             <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0'><Image src={mark} alt="button" className='w-3 h-3 font'/>{elem.type}</h1>
             <div className="grid grid-cols-3 mt-2">
               <div className="px-5">
                 <h1 className="text-base font-semibold">Location</h1>
                 <div className="flex justify-between items-center mt-1"><p className="text-[#90A3BF] text-xs">Toronto</p><Image src={arrow} alt="arrow down" className='w-3 h-3'/></div>
               </div>
               <div className="border-l-2 border-[#C3D4E966] px-5">
                 <h1 className="text-base font-semibold">Date</h1>
                 <div className="flex justify-between items-center mt-1"><p className="text-[#90A3BF] text-xs">{elem.date}</p><Image src={arrow} alt="arrow down" className='w-3 h-3'/></div>
               </div>
               <div className="border-l-2 border-[#C3D4E966] px-5">
                 <h1 className="text-base font-semibold">Time</h1>
                 <div className="flex justify-between items-center mt-1"><p className="text-[#90A3BF] text-xs">{elem.time}</p><Image src={arrow} alt="arrow down" className='w-3 h-3'/></div>
               </div>
             </div>
           </div>
          ))}
          <div className="flex justify-between items-center pt-6 mt-8 border-t-2 border-[#C3D4E966]">
            <div><h1 className="text-lg font-bold">TotalRentalPrice</h1><p className="text-sm text-[#90A3BF]">Overall price and includes rental discount</p></div>
            <h1 className="text-xl font-bold">$80.00</h1>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-md py-6 px-4">
           <div className="flex justify-between items-center"><h1 className="text-xl font-semibold">Top 5 Car Rental</h1><Image src={more} alt="more" className="cursor-pointer"/></div>
           <div className="flex gap-4 mt-5">
            <div className="relative w-[35%] h-max">
                <Image src={circleChart} alt="circleChart" className="w-full"/>
                <div className="flex flex-col items-center justify-center absolute inset-0"><h1 className="text-[20px] font-semibold">72,030</h1><p className="text-[#90A3BF] text-xs">Rental Car</p></div>
            </div>

            <div className="flex flex-col gap-4 w-[65%]">
              {popularCarsDetail.map((val)=>(
                 <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${val.color}`}></div><p className="text-[#90A3BF] text-sm">{val.carType}</p></div>
                 <h1 className="text-base">{val.num}</h1>
               </div>
              ))}
            </div>
           </div>
          </div>

          <div className="bg-white rounded-md py-6 px-4">
            <div className="flex justify-between items-center mb-8"><h1 className="text-xl font-semibold">Recent Transaction</h1><Link href="/" className="text-sm text-[#2185DE] hover:underline">View All</Link></div>
            {transactionCars.map((data)=>(
              <div className="flex items-center gap-2 py-2 mt-6">
              <div className="w-[25%]"><Image src={data.carImg} alt="transaction cars" width={100} height={30} /></div>
              <div className="flex flex-col w-[75%]">
                <div className="flex justify-between items-center"><h1 className="text-lg font-semibold">{data.carName}</h1><p className="text-sm text-[#90A3BF]">{data.carTime}</p></div>
                <div className="flex justify-between items-center"><p className="text-sm text-[#90A3BF]">{data.carType}</p><h1 className="text-lg font-semibold">{data.carPrice}</h1></div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
