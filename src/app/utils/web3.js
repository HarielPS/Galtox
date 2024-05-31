import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Si la extensión de Trust Wallet (o MetaMask) está instalada
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.request({ method: "eth_requestAccounts" }); // Solicita permiso para acceder a las cuentas
  } catch (error) {
    console.error("User denied account access", error);
  }
} else {
  // Si no hay extensión, usa WalletConnect
  const provider = new WalletConnectProvider({
    infuraId: "ad1e532dae054eaebc2e4493339774f3", // Reemplaza con tu propio Infura Project ID
  });

  provider.on("disconnect", (code, reason) => {
    console.log("Disconnected:", code, reason);
  });

  provider.on("accountsChanged", (accounts) => {
    console.log("Accounts changed:", accounts);
  });

  provider.on("chainChanged", (chainId) => {
    console.log("Chain changed:", chainId);
  });

  web3 = new Web3(provider);
}

export default web3;

