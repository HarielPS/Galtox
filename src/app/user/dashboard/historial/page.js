import React from "react";
import ChartHistorial from "../../../../components/user/historial/ChartHistorial";
import TablaPortafolio from "@/components/user/portafolio/TablaPortafolio";
import CalendarioHistorial from "@/components/user/historial/CalendarioHistorial";
export default function Page() {
  return (
    <>
      <div className="grid" style={{ height: "100%" }}>
        <div className="col-8" style={{ overflow: "hidden" }}>
          <div
            className="text-center border-round-sm bg-white font-bold"
            style={{ overflow: "auto", maxHeight: "80vh", height: "100%" }}
          >
            <TablaPortafolio />
          </div>
        </div>
        <div className="col-4" style={{ height: "100%" }}>
          <div className="grid" style={{ height: "100%", margin: "0" }}>
            <div
              className="text-center border-round-sm bg-white font-bold"
              style={{
                height: "100%", // Cambia a 100% para llenar el contenedor padre
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
                padding: "10px",
              }}
            >
              <CalendarioHistorial />
            </div>
          </div>
          {/*
            <div
            className="grid text-center border-round-sm bg-white font-bold p-2"
            style={{ height: "50%" }}
          >
            <ChartHistorial />
          </div>
            */}
          
        </div>
      </div>
    </>
  );
}
