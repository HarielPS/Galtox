'use client'
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // Importa el tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Importa los estilos de PrimeReact
import 'primeicons/primeicons.css'; // Importa los iconos de PrimeIcons
import SideBar from '@/components/navigation/Sidebar';
import Navbar from '@/components/navigation/Navbar';

const Home = () => {
    const [visible,setVisible] = useState(false);
    const handleVisible= ()=>{
        setVisible(!visible);
    }
    return (
        <div style={{height:"100vh"}}>
            <Navbar/>
            <button onClick={()=> setVisible(true)}> Abrir</button>
            <div style={{ padding: '2rem'}}>
                <h1>Bienvenido a mi aplicación Next.js con PrimeReact</h1>
                <p>Contenido de la página principal.</p>
            </div>
        </div>
    );
};

export default Home;