import React from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css"; // Importar un tema de PrimeReact
import "primereact/resources/primereact.min.css"; // Importar estilos de PrimeReact
import "primeicons/primeicons.css"; // Importar íconos de PrimeReact
import styles from "./Navbar.module.css"; // Importar el CSS module para los estilos personalizados

const Navbar = ({ handleVisible }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <i className={"pi mr-2 pi-bars"} style={{color:"#FFF"}} onClick={handleVisible}></i>
      </div>
      <div className={styles.right}>
        <Image src="/logo2.png" alt="Logo" width={40} height={40} />
      </div>
    </div>
  );
};

export default Navbar;
