"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
// icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BalanceIcon from '@mui/icons-material/Balance';
import TimelineIcon from '@mui/icons-material/Timeline';

const items = [
  {
    icon: <AccessTimeIcon />,
    title: 'Consigue fondos en horas, no días',
    description:
      'Con DebtConnect, puedes adelantar el pago de tus facturas y obtener financiamiento rápido a través del crowdfunding, mejorando tu flujo de efectivo de manera inmediata.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <ShieldIcon />,
    title: 'Transacciones seguras y transparentes',
    description:
      'Utilizamos smart contracts y stablecoins para asegurar que todas las transacciones sean seguras, transparentes y eficientes.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <ManageAccountsIcon />,
    title: 'Gestión financiera 100% digital',
    description:
      'Olvídate del papeleo. Nuestra plataforma completamente digital simplifica el proceso de financiamiento, haciéndolo más rápido y menos complicado.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <BalanceIcon />,
    title: 'Tasas de interés competitivas y términos justos',
    description:
      'Ofrecemos condiciones de financiamiento justas y transparentes, adaptadas a las necesidades de tu empresa.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <TimelineIcon />,
    title: 'Oportunidades de inversión rentables',
    description:
      'Atrae a inversionistas interesados en financiar tu crecimiento y generar ganancias mensuales.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
            Cómo Impulsar tu Negocio con DebtConnect
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 }, mt:4 }}
            >
              DebtConnect te ofrece una solución financiera innovadora y eficiente para 
              transformar la gestión de tu negocio. Con nuestra plataforma digital, puedes 
              acceder a financiamiento rápido y seguro, mejorando tu flujo de efectivo y facilitando 
              el crecimiento de tu empresa. Descubre cómo DebtConnect puede ayudarte a alcanzar tus objetivos empresariales de manera ágil y transparente.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  mt:2,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
  variant="outlined"
  sx={{
    height: '100%', // Ajusta la altura de la Card al 100% del contenedor padre
    width: '100%', // Ajusta el ancho de la Card al 100% del contenedor padre
    display: 'flex', // Hace que la Card se comporte como un flex container
    justifyContent: 'center', // Centra el contenido horizontalmente
    alignItems: 'center', // Centra el contenido verticalmente
    p: 1, // Añade un poco de espacio alrededor de la Card
    borderRadius: '12px', // Agrega bordes redondeados a la Card
    overflow: 'hidden', // Oculta cualquier contenido que se desborde de la Card
    pointerEvents: 'none',
  }}
>
  <div
    style={{
      width: '80%', // Ajusta el ancho del contenedor de la imagen al 80% de la Card
      height: '80%', // Ajusta la altura del contenedor de la imagen al 80% de la Card
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px', // Agrega bordes redondeados al contenedor
      overflow: 'hidden', // Oculta cualquier contenido que se desborde del contenedor
    }}
  >
    <img
      src="https://www.shutterstock.com/image-photo/mature-business-woman-manager-holding-600nw-2356242049.jpg"
      alt="Imagen de muestra"
      style={{
        width: '100%', // Ajusta el ancho de la imagen al 100% del contenedor
        height: '100%', // Ajusta el alto de la imagen al 100% del contenedor
        objectFit: 'contain', // Ajusta la imagen para que se contenga dentro del contenedor sin recortarse
      }}
    />
  </div>
</Card>



        </Grid>
      </Grid>
    </Container>
  );
}