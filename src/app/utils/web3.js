import Web3 from 'web3';

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.request({ method: "eth_requestAccounts" }); // Solicita permiso para acceder a las cuentas
  } catch (error) {
    console.error("User denied account access", error);
  }
} else {
  console.log("MetaMask no está instalada");
}

export default web3;
