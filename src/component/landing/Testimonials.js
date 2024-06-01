
"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Carlos M." src="/static/images/avatar/1.jpg" />,
    name: 'Carlos M.',
    occupation: 'Emprendedor',
    testimonial:
    "Gracias a DebtConnect, pude adelantar el pago de mis facturas en cuestión de horas. Esto me permitió mantener mi negocio en funcionamiento sin problemas y aprovechar oportunidades de crecimiento. La plataforma es intuitiva y segura, lo que me da total confianza en su uso.",
  },
  {
    avatar: <Avatar alt="Laura G." src="/static/images/avatar/2.jpg" />,
    name: 'Laura G.',
    occupation: 'Directora Financiera',
    testimonial:
    "DebtConnect ha sido un cambio total para nuestra gestión financiera. El proceso completamente digital y las condiciones justas nos han permitido obtener financiamiento rápido sin complicaciones. Además, las tasas de interés son muy competitivas.",
  },
  {
    avatar: <Avatar alt="Ricardo S." src="/static/images/avatar/3.jpg" />,
    name: 'Ricardo S.',
    occupation: 'Inversionista',
    testimonial:
    "Invertir a través de DebtConnect ha sido una excelente decisión. No solo estoy obteniendo ganancias mensuales consistentes, sino que también estoy apoyando a empresas que realmente necesitan financiamiento. La transparencia y seguridad de las transacciones me han dado una gran tranquilidad.",
  },
  {
    avatar: <Avatar alt="Ana T." src="/static/images/avatar/4.jpg" />,
    name: 'Ana T.',
    occupation: 'Propietaria de una PYME',
    testimonial:
    "La posibilidad de adelantar pagos y gestionar deudas sin papeleo ha simplificado enormemente nuestra operación diaria. DebtConnect nos ha proporcionado una solución flexible y eficiente, mejorando nuestro flujo de efectivo y permitiéndonos enfocarnos en el crecimiento del negocio.",
  },
  {
    avatar: <Avatar alt="Miguel P." src="/static/images/avatar/5.jpg" />,
    name: 'Miguel P.',
    occupation: 'Gerente de Ventas',
    testimonial:
    "DebtConnect nos ha permitido mantener relaciones sólidas con nuestros proveedores, gracias a la rapidez con la que podemos pagar nuestras facturas. La plataforma es fácil de usar y ha mejorado significativamente nuestra liquidez.",
  },
  {
    avatar: <Avatar alt="María L." src="/static/images/avatar/6.jpg" />,
    name: 'María L.',
    occupation: 'Dueña de un Restaurante',
    testimonial:
    "DebtConnect ha transformado la forma en que manejamos nuestras finanzas. Antes, esperar el pago de facturas era un gran obstáculo, pero ahora podemos adelantar esos pagos y obtener financiamiento en cuestión de horas. Esto ha mejorado significativamente nuestro flujo de efectivo y nos ha permitido concentrarnos en lo que realmente importa: ofrecer una excelente experiencia a nuestros clientes.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
            Testimonios
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Descubre lo que nuestros clientes aman de nuestros productos. 
        Descubre cómo destacamos en eficiencia, durabilidad y satisfacción. 
        Únete a nosotros por calidad, innovación y soporte confiable
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}