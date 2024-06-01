'use client'
import { useRouter } from "next/navigation";
import React from "react";

export default function CardInfoPortafolio({title,numPrin,icon, numText,text,link,color}) {
  const router = useRouter();
  
  return (
    <div className="col-12 md:col-6 lg:col-2" onClick={()=> router.push(link)}>
      <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="flex justify-content-between mb-3">
          <div>
            <span className="block text-500 font-medium mb-3">{title}</span>
            <div className="text-900 font-medium text-xl">{numPrin}</div>
          </div>
          <div
            className={`flex align-items-center justify-content-center ${color?color:"bg-blue-100"} border-round`}
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            <i className={`pi ${icon} ${color?'text-white':'text-blue-500'} text-xl`}></i>
          </div>
        </div>
        <span className="text-green-500 font-medium">{numText}</span>
        <span className="text-500">{text}</span>
      </div>
    </div>
  );
}
