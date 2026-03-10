import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const columnTitleSx = {
    fontWeight: 700,
    fontSize: "0.95rem",
    letterSpacing: 1.1,
    color: "#5a6672",
    textTransform: "uppercase",
    mb: 2
  };

  const linkSx = {
    color: "#8a94a0",
    textDecoration: "none",
    fontSize: "0.94rem",
    letterSpacing: 0.2,
    transition: "color 160ms ease",
    "&:hover": { color: "#495463" }
  };

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#f1f1f1",
        borderTop: "1px solid #d7d7d7",
        pt: { xs: 5, md: 8 },
        pb: { xs: 4, md: 6 }
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 3 }}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Typography sx={columnTitleSx}>Registrate</Typography>
            <Typography
              sx={{
                color: "#6b7682",
                mb: 2,
                textTransform: "uppercase",
                fontSize: "0.95rem"
              }}
            >
              Esta pagina no es real, es un proyecto React.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2.5 }}>
              {[FacebookIcon, InstagramIcon].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{ color: "#9aa2ab", "&:hover": { color: "#646f7a" } }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Grid container spacing={{ xs: 3, md: 2 }}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography sx={columnTitleSx}>Marca</Typography>
                <Stack spacing={1.2}>
                  <Link href="#/" sx={linkSx}>Acerca de</Link>
                  <Link href="#/article" sx={linkSx}>Articulos</Link>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography sx={columnTitleSx}>Compras</Typography>
                <Stack spacing={1.2}>
                  <Link href="#/" sx={linkSx}>Tiendas</Link>
                  <Link href="#/account" sx={linkSx}>Trabaja con nosotros</Link>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography sx={columnTitleSx}>Servicio al cliente</Typography>
                <Stack spacing={1.2}>
                  <Link href="#/" sx={linkSx}>Contactanos</Link>
                  <Link href="#/" sx={linkSx}>Forma de pago</Link>
                  <Link href="#/" sx={linkSx}>Cambios y devoluciones</Link>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography sx={columnTitleSx}>Terminos y condiciones</Typography>
                <Stack spacing={1.2}>
                  <Link href="#/" sx={linkSx}>Politicas</Link>
                  <Link href="#/" sx={linkSx}>Tratamiento de datos</Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography
          sx={{
            mt: { xs: 5, md: 7 },
            color: "#738090",
            letterSpacing: 1.8,
            textTransform: "uppercase",
            fontSize: "0.95rem"
          }}
        >
          {new Date().getFullYear()} - Undergold - Edward Monsalve
        </Typography>
      </Container>
    </Box>
  );
};
