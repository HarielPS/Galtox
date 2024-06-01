"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function HighlightSection() {
  return (
    <Box
      sx={{
        py: 6,
        textAlign: 'center',
      }}
    >
      <Container>
  <Typography variant="h4" component="h2" gutterBottom>
        Financiamiento rápido para tus facturas
        <br />
        DebtConnect: impulsando el crecimiento de tu empresa.
  </Typography>
  <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
    <Grid item xs={12} sm={4}>
      <Typography variant="h5" component="div">
        Tecnología
      </Typography>
      <Typography variant="body1">
        Nuestra plataforma ha facilitado la financiación de facturas para empresas del sector tecnológico, con una tasa de éxito del 90%.
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Typography variant="h5" component="div">
        Manufactura
      </Typography>
      <Typography variant="body1">
        Hemos ayudado a empresas del sector manufacturero a evitar la morosidad y mantener su flujo de efectivo saludable.
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Typography variant="h5" component="div">
        Servicios
      </Typography>
      <Typography variant="body1">
        Los inversionistas que participan en nuestra plataforma obtienen ganancias estables y consistentes a través de las mensualidades generadas por las facturas financiadas.
      </Typography>
    </Grid>
  </Grid>
</Container>

    </Box>
  );
}
