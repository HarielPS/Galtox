"use client";
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Web3 from 'web3';
import { useLocalStorage } from 'primereact/hooks';
import { db } from '../../../firebase';
import { findWalletAddress } from '@/component/serchFirebase';

export default function CheckboxListSecondary() {
  const [account, setAccount] = useState('');
  const [userId, setUserId] = useLocalStorage('userId', '');

  const connectMetamask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0];
        setAccount(walletAddress);

        const existingUsers = await findWalletAddress(walletAddress);

        if (existingUsers) {
          alert("Ya hay un usuario registrado con esa wallet");
          try {
            window.ethereum.request({ method: 'eth_requestAccounts', params: [{ eth_accounts: {} }] });
            setAccount('');
            console.log("Disconnected from MetaMask");
          } catch (error) {
            console.error("Error disconnecting from MetaMask", error);
          }
        } else {
          const docRef = await db.collection('usuarios').add({
            walletAddress: walletAddress
          });
          setUserId(docRef.id);
          window.location.href = "/signup/datos";
        }
      } else {
        console.error("MetaMask extension is not installed.");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <List
        dense
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          p: 3,
        }}
      >
        <ListItem disablePadding sx={{ mb: 2 }}>
          <ListItemButton onClick={connectMetamask}>
            <ListItemAvatar>
              <Avatar
                alt={`Metamask`}
                src={`https://smn.duckie.land/uploads/news/20220810234604-2022-08-10news234323.jpg`}
              />
            </ListItemAvatar>
            <ListItemText primary={`Metamask`} />
          </ListItemButton>
        </ListItem>
        {/* Otros elementos de la lista */}
      </List>
    </Box>
  );
}
