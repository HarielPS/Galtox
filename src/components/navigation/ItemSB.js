'use client'
import React from "react";
import { Ripple } from "primereact/ripple";

import { StyleClass } from "primereact/styleclass";
import "/node_modules/primeflex/primeflex.css";
import { useRouter } from "next/navigation";

export default function ItemSB({ icon, text, value,link }) {
  const router = useRouter();
  return (
    <li onClick={()=>router.push(link)}>
      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
        <i className={`pi mr-2 ${icon}`}></i>
        <span className="font-medium">{text}</span>
        {value!==undefined? (
          <span
            className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
            style={{ minWidth: "1.5rem", height: "1.5rem" }}
          >
            {value}
          </span>
        ) : (
          <></>
        )}
        <Ripple />
      </a>
    </li>
  );
}