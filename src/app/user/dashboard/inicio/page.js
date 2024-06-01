import React from "react";
import { Card } from "primereact/card";
import styles from "../../../../components/user/inicio/inicio.module.css";
import CardInfoInicio from "@/components/user/inicio/CardInfoInicio";
import ChartTest from "@/components/user/inicio/chartTest";
import ChartTest2 from "@/components/user/inicio/ChartTest2";

export default function Page() {
  return (
    <div style={{ width: "100%", height: "calc(100vh - 60px)", background: "#EEF3F7" }}>
      <div className="grid">
        <CardInfoInicio
          title={"Proyectos activos"}
          numPrin={"12"}
          icon={"pi-desktop"}
          numText={""}
          text={""}
          link={"portafolio"}
        />
        <CardInfoInicio
          title={"Proyectos en fondeo"}
          numPrin={"19"}
          icon={"pi-users"}
          numText={""}
          text={""}
          link={"portafolio"}
        />
        <CardInfoInicio
          title={"Proyectos terminados"}
          numPrin={"34"}
          icon={"pi-flag-fill"}
          numText={""}
          text={""}
          link={"historial"}
        />
        <CardInfoInicio
          title={"Ganancias totales"}
          numPrin={"3,465"}
          icon={"pi-money-bill"}
          numText={""}
          text={""}
          link={"wallet"}
        />
      </div>
      <div className="grid" style={{ height: "calc(100% - 240px)" }}>
      <div className="col-8" style={{ height: "100%" }}>
        <div className="text-center p-3 border-round-sm bg-white font-bold" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "100%", maxHeight: "100%", maxWidth: "100%", display:"flex",alignItems: "center", justifyContent: "center" }}>
            <ChartTest2 />
          </div>
        </div>
        </div>
        <div className="col-4" style={{ height: '100%' }}>
          <div className="text-center p-3 border-round-sm font-bold bg-white" style={{ height: '100%' }}>
            <div className="grid" style={{ height: '50%', width: '100%', justifyContent: 'center' }}>
              <ChartTest />
            </div>
            <div className="grid" style={{ height: '50%', width: '100%', justifyContent: 'center' }}>
              <ChartTest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}