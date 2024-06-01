"use client"
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { db } from '../../../../firebase';
import { doc, updateDoc } from "firebase/firestore";
import { useLocalStorage } from 'primereact/hooks';



const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [userId, setUserId] = useLocalStorage('userId', '');
  const [formValues, setFormValues] = React.useState({
    nombre: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    rfc: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = React.useState({});
  
  const validateForm = () => {
    const errors = {};
    if (!formValues.nombre) {
      errors.nombre = 'El nombre es requerido';
    }
    if (!formValues.apellidos) {
      errors.apellidos = 'Los apellidos son requeridos';
    }
    if (!formValues.direccion) {
      errors.direccion = 'La dirección es requerida';
    }
    if (!formValues.telefono) {
      errors.telefono = 'El teléfono es requerido';
    } else if (!/^\d+$/.test(formValues.telefono)) {
      errors.telefono = 'El teléfono solo debe contener números';
    } else if (formValues.telefono.length !== 10) {
      errors.telefono = 'El teléfono debe tener 10 dígitos';
    }
    if (!formValues.rfc) {
      errors.rfc = 'El RFC es requerido';
    } else if (formValues.rfc.length !== 13) {
      errors.rfc = 'El RFC debe tener 13 caracteres';
    }
    if (!formValues.password) {
      errors.password = 'La contraseña es requerida';
    }
    if (!formValues.confirmPassword) {
      errors.confirmPassword = 'Debes confirmar la contraseña';
    } else if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }
    if (!isChecked) {
      errors.checkbox = 'Debes aceptar los términos y condiciones';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'telefono') {
      // Filtrar caracteres no numéricos para el campo de teléfono
      const numericValue = value.replace(/\D/g, ''); 
      setFormValues({ ...formValues, [name]: numericValue });
    } else {
      // Convertir el valor a mayúsculas si no es un campo numérico ni la contraseña
      const upperCaseValue = (name !== 'password' && name !== 'confirmPassword') && isNaN(value) ? value.toUpperCase() : value;
      setFormValues({ ...formValues, [name]: upperCaseValue });
    }
  };


  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const docRef = doc(db, "usuarios", userId);
        await updateDoc(docRef, {
          ...formValues,
        });
        console.log("Documento actualizado con éxito");
        window.location.href = "/user/dashboard/inicio";
      } catch (error) {
        console.error("Error al actualizar el documento:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          width: '50%', // Adjust as needed
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          padding: 3,
          position: 'relative', // For positioning the button
        }}
      >
        <p>ID del usuario: {userId}</p>
        <Grid container spacing={3}>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="name" required>
              Nombre
            </FormLabel>
            <OutlinedInput
              id="name"
              name="nombre"
              type="text"
              placeholder="John"
              autoComplete="name"
              required
              value={formValues.nombre}
              onChange={handleInputChange}
            />
            {formErrors.nombre && <span style={{ color: 'red' }}>{formErrors.nombre}</span>}
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <FormLabel htmlFor="apellido" required>
              Apellidos
            </FormLabel>
            <OutlinedInput
              id="apellido"
              name="apellidos"
              type="text"
              placeholder="Perez"
              autoComplete="apellido"
              required
              value={formValues.apellidos}
              onChange={handleInputChange}
            />
            {formErrors.apellidos && <span style={{ color: 'red' }}>{formErrors.apellidos}</span>}
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="direccion" required>
              Dirección
            </FormLabel>
            <OutlinedInput
              id="direccion"
              name="direccion"
              type="text"
              placeholder="Calle, número y ciudad"
              autoComplete="shipping address-line1"
              required
              value={formValues.direccion}
              onChange={handleInputChange}
            />
            {formErrors.direccion && <span style={{ color: 'red' }}>{formErrors.direccion}</span>}
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="telefono" required>
              Teléfono
            </FormLabel>
            <OutlinedInput
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="Teléfono"
              autoComplete="telefono"
              required
              value={formValues.telefono}
              onChange={handleInputChange}
              inputProps={{ maxLength: 10, pattern: "[0-9]+" }}
            />
            {formErrors.telefono && <span style={{ color: 'red' }}>{formErrors.telefono}</span>}
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="rfc" required>
              RFC
            </FormLabel>
            <OutlinedInput
              id="rfc"
              name="rfc"
              type="text"
              placeholder="RFC Code"
              autoComplete="off"
              required
              value={formValues.rfc}
              onChange={handleInputChange}
              inputProps={{ maxLength: 13 }}
            />
            {formErrors.rfc && <span style={{ color: 'red' }}>{formErrors.rfc}</span>}
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="password" required>
              Contraseña
            </FormLabel>
            <OutlinedInput
              id="password"
              name="password"
              type="password"
              placeholder="12345"
              required
              value={formValues.password}
              onChange={handleInputChange}
            />
            {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}
          </FormGrid>
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
          <FormGrid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="saveAddress"
                  value="yes"
                  onChange={handleCheckboxChange}
                />
              }
              label="Estoy de acuerdo con los Términos y Condiciones"
            />
            {formErrors.checkbox && <span style={{ color: 'red' }}>{formErrors.checkbox}</span>}
          </FormGrid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          disabled={!isChecked}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
