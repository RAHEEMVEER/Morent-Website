import React from 'react';
import "./style.css";

export default function RecomCars(props:any) {
  return (
    <div className={`bg-[#F6F7F9] ${props.style}`}>
        <h1 className="text-[20px] font-semibold">Recommendation Car</h1>
        <div className={`grid ${props.gridCol} gap-4 mt-6 elem`}>
         {props.cars.map((elem: any, idx: number) => (<div key={idx}>{elem}</div>))}
        </div>
        {props.showMore}
    </div>
  )
}
