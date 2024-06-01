import * as React from 'react';
import { useState, useEffect } from 'react';
import { alpha, MobileStepper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

const slides = [
  {
    image: '/first.jpg',
    title: 'DebtConnect: Revolucionando el Financiamiento Empresarial',
    text: 'DebtConnect utiliza la tecnología blockchain y el crowdfunding para optimizar el flujo de efectivo de las empresas. Con condiciones justas y una plataforma digital sin complicaciones, estamos transformando la forma en que se gestionan las finanzas empresariales.',
  },
  {
    image: '/second.png',
    title: 'Invierte y Gana con DebtConnect',
    text: 'Invierte en el crecimiento empresarial y genera ganancias mensuales con DebtConnect. Tu inversión ayuda a financiar facturas y deudas, mientras recibes retornos estables y atractivos.',
  },
  {
    image: '/third.jpg',
    title: 'Optimiza tu Liquidez con DebtConnect',
    text: 'Paga tus deudas y obtén préstamos con tasas competitivas a través de DebtConnect. Mejora tu flujo de efectivo y asegura el crecimiento de tu empresa de manera eficiente y transparente.',
  },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState('left');

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [activeStep]);

  const handleNext = () => {
    setSlideIn(false);
    setDirection('left');
    setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % slides.length);
      setSlideIn(true);
    }, 500); // La duración de la animación debe coincidir con el tiempo de salida
  };

  const handleBack = () => {
    setSlideIn(false);
    setDirection('right');
    setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep - 1 + slides.length) % slides.length);
      setSlideIn(true);
    }, 500);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Slide direction={direction} in={slideIn}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography
                variant="h1"
                sx={{
                  textAlign: 'center',
                  fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                }}
              >
                {slides[activeStep].title}
              </Typography>
              <Typography
                textAlign="center"
                color="text.secondary"
                sx={{ width: { xs: '100%', md: '80%' } }}
              >
                {slides[activeStep].text}
              </Typography>
            </Stack>
            <Box
                id="image"
                sx={{
                    mt: { xs: 8, md: 0 },
                    ml: { md: 4 },
                    width: { xs: '100%', md: '50%' },
                    borderRadius: '50px',
                    overflow: 'hidden',
                    boxShadow:
                    (theme) =>
                        theme.palette.mode === 'light'
                        ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                        : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    aspectRatio: '16/9', // Establece una relación de aspecto 16:9 por defecto
                }}
                >
                <Box
                    sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${slides[activeStep].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 0.5s ease-in-out',
                    backgroundRepeat: 'no-repeat',
                    }}
                />
                </Box>
            </Box>

        </Slide>
        <MobileStepper
          steps={slides.length}
          position="static"
          variant="dots"
          activeStep={activeStep}
          sx={{
            mt: 4,
            width: '100%',
            justifyContent: 'center',
            bgcolor: 'transparent',
          }}
          nextButtonProps={{ onClick: handleNext }}
          backButtonProps={{ onClick: handleBack }}
          onChange={handleStepChange}
        />
      </Container>
    </Box>
  );
}
