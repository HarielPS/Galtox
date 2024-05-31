"use client";
import SideBar from "@/components/navigation/Sidebar";
import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import Navbar from "@/components/navigation/Navbar";

export default function layout({ children }) {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ height: "100vh", width:"100vw" }}>
      <Navbar  handleVisible={handleVisible}/>
      <SideBar visible={visible | false} handleVisible={handleVisible} />
      <div style={{ padding: "2rem" }}>{children}</div>
    </div>
  );
}
