import React from "react";
import { Card } from "primereact/card";
import styles from "../../../../components/user/inicio/inicio.module.css";
import CardInfoInicio from "@/components/user/inicio/CardInfoInicio";
import ChartTest2 from "@/components/user/inicio/ChartTest2";
import CardInfoPortafolio from "@/components/user/portafolio/CardInfoPortafolio";
import TablaPortafolio from "@/components/user/portafolio/TablaPortafolio";
export default function Page() {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        background: "#EEF3F7",
      }}
    >
      <div
        className="grid flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <CardInfoPortafolio
          title={"Proyectos activos"}
          numPrin={"12"}
          icon={"pi-desktop"}
          numText={""}
          text={""}
          link={"portafolio"}
        />

        <CardInfoPortafolio
          title={"Proyectos en fondeo"}
          numPrin={"19"}
          icon={"pi-users"}
          numText={""}
          text={""}
          link={"portafolio"}
        />

        <div className="col-12 md:col-6 lg:col-2"></div>
        <CardInfoPortafolio
          title={"Proyectos al corriente"}
          numPrin={"19"}
          icon={"pi-forward"}
          numText={""}
          text={""}
          link={"portafolio"}
          color={"bg-green-500"}
        />
        <CardInfoPortafolio
          title={"Proyectos en proceso"}
          numPrin={"31"}
          icon={"pi-cloud-upload"}
          numText={""}
          text={""}
          link={"portafolio"}
          color={"bg-blue-500"}
        />
        <CardInfoPortafolio
          title={"Proyectos en restrasados"}
          numPrin={"3"}
          icon={"pi-info-circle"}
          numText={""}
          text={""}
          link={"portafolio"}
          color={"bg-red-500"}

        />
      </div>
      <div className="grid" style={{ height: "calc(100% - 240px)" }}>
        <div className="col-12" style={{ height: "100%" }}>
          <div
            className="text-center border-round-sm bg-white font-bold"
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            >
              <TablaPortafolio />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
