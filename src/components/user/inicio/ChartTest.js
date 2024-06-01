'use client'
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import "primereact/resources/themes/saga-blue/theme.css"; // Importar un tema de PrimeReact
import "primereact/resources/primereact.min.css"; // Importar estilos de PrimeReact
import "primeicons/primeicons.css"; // Importar íconos de PrimeReact

export default function ChartTest() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ["Proyectos activos", "Proyectos en fondeo", 'Proyectos terminados'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%',
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio:1,
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        