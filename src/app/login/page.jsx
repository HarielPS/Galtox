"use client"
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Web3 from 'web3';
import { useLocalStorage } from 'primereact/hooks';
import { db } from '../../../firebase';
import { findUserIdByWalletAddress } from '@/component/serchFirebase';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function Login() {
  const [userId, setUserId] = useLocalStorage('userId', '');
  const [formValues, setFormValues] = useState({
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formValues.confirmPassword) {
      errors.confirmPassword = 'La contraseña es requerida';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const connectMetamask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0];
        
        const existingUser = await findUserIdByWalletAddress(walletAddress);
  
        if (existingUser) {
          const docSnapshot = await db.collection('usuarios').doc(existingUser).get();
          const userData = docSnapshot.data();
          const storedPassword = userData.password;
          
          if (storedPassword === formValues.confirmPassword) {
            setUserId(existingUser);
            window.location.href = "/user/dashboard/inicio";
          } else {
            alert("La contraseña no coincide");
            if (window.ethereum && window.ethereum.disconnect) {
              await window.ethereum.disconnect();
            }
          }
        } else {
          alert("No se encontró ninguna cuenta asociada a esta billetera.");
          if (window.ethereum && window.ethereum.disconnect) {
            await window.ethereum.disconnect();
          }
        }
      } else {
        console.error("MetaMask extension is not installed.");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
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

        <FormGrid item xs={6}>
          <FormLabel htmlFor="confirmPassword" required>
            Confirmar contraseña
          </FormLabel>
          <OutlinedInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="12345"
            required
            value={formValues.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && <span style={{ color: 'red' }}>{formErrors.confirmPassword}</span>}
        </FormGrid>
      </List>
    </Box>
  );
}