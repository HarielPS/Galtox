"use client";
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function ChartTest2() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  /* const updateAspectRatio = () => {
    const width = window.innerWidth;
    console.log("Aqui el width: " +width);
    console.log("Aqui el aspectRadio: " +chartOptions.aspectRatio);
    let aspectRatio = 1; // valor por defecto

    if (width < 1400) {
      aspectRatio = 1; // relación de aspecto para pantallas pequeñas
    } else if (width > 1900) {
      aspectRatio = .6; // relación de aspecto para pantallas medianas
    }

    setChartOptions((prevOptions) => ({
      ...prevOptions,
      aspectRatio: aspectRatio,
    }));
  }; */
  /* useEffect(() => {
    updateAspectRatio(); // Inicializa el aspectRatio al cargar el componente
    window.addEventListener("resize", updateAspectRatio); // Añade el event listener para redimensionar

    return () => {
      window.removeEventListener("resize", updateAspectRatio); // Limpia el event listener al desmontar
    };
  }, []); */

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Inversiones",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue("--teal-500"),
        },
        {
          label: "Third Dataset",
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue("--orange-500"),
          tension: 0.4,
          backgroundColor: "rgba(255,167,38,0.2)",
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: .6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card" style={{ width: "100%", height: "100%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}
