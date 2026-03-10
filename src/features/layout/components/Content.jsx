import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { FaArrowRightLong, FaCartPlus, FaRegHeart, FaStar } from "react-icons/fa6";

export const Content = () => {
  const products = [
    { title: "Shirt Burnt White", price: 150000, image: "/img/1.jpg"},
    { title: "Hoodie Light Blue", price: 200000, image: "/img/2.jpg"},
    { title: "Buzo Undergold - Negro", price: 180000, image: "/img/3.jpg"},
    { title: "Jeans Brown", price: 120000, image: "/img/4.jpg" }
  ];

  const formatPrice = (value) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(value);

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5"
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "450px",
          overflow: "hidden"
        }}
      >
        <CardMedia
          component="img"
          image="https://clothesaid.co.uk/wp-content/uploads/2024/10/remarket-manchester.jpg"
          alt="Presentacion"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            background: "rgba(0,0,0,0.35)",
            px: 3
          }}
        >
          <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
            Bienvenido a Manchester Clothing
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, maxWidth: 700 }}>
            Explora nuestro catalogo de productos, descubre nuevas ofertas
            y disfruta de una experiencia de compra moderna, rapida y segura.
          </Typography>
        </Box>
      </Box>

      <Typography variant="h4" fontWeight={700} sx={{ mt: 5, mb: -3, textAlign: "center" }}>
        Nuestros nuevos productos
      </Typography>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.title}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid #e5e5e5",
                  boxShadow: "0 10px 26px rgba(0,0,0,0.08)",
                  transition: "transform .25s ease, box-shadow .25s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 34px rgba(0,0,0,0.14)"
                  }
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ height: 300, width: "100%", objectFit: "cover" }}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "rgba(255,255,255,0.9)",
                      "&:hover": { bgcolor: "#fff" }
                    }}
                  >
                    <FaRegHeart size={15} />
                  </IconButton>
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h6" sx={{ fontWeight: 700 }}>
                    {product.title}
                  </Typography>

                  <Typography variant="body1" sx={{ color: "#111", fontWeight: 700 }}>
                    {formatPrice(product.price)}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center", px: 2, pb: 2, gap: 1 }}>
                  <Button size="small" variant="outlined" endIcon={<FaArrowRightLong />} sx={{ borderColor: "#111", color: "#111" }}>
                    Ver
                  </Button>

                  <Button size="small" variant="contained" startIcon={<FaCartPlus />} sx={{ bgcolor: "#111" }}>
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
