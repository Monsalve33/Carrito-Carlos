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

const products = [
  {
    title: "Shirt Burnt White",
    price: 150000,
    image: "/img/1.jpg"
  },
  {
    title: "Hoodie Light Blue",
    price: 200000,
    image: "/img/2.jpg"
  },
  {
    title: "Shorts Sandblast Grape",
    price: 180000,
    image: "/img/3.jpg"
  },
  {
    title: "Jeans Brown",
    price: 120000,
    image: "/img/4.jpg"
  },
];

const formatPrice = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);

export const Article = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #f8f8f8 0%, #ffffff 35%, #f4f4f4 100%)",
        minHeight: "100vh",
        py: { xs: 5, md: 8 }
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {products.map((product) => (
            <Grid key={product.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  border: "1px solid #e5e5e5",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
                  transition: "transform .25s ease, box-shadow .25s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.12)"
                  }
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia component="img" image={product.image} alt={product.title} sx={{ height: 320 }} />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      bgcolor: "rgba(255,255,255,0.9)",
                      "&:hover": { bgcolor: "#fff" }
                    }}
                  >
                    <FaRegHeart size={15} />
                  </IconButton>
                </Box>

                <CardContent sx={{ pb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {product.title}
                  </Typography>

                  <Typography sx={{ fontSize: "1.02rem", fontWeight: 700, color: "#111" }}>
                    {formatPrice(product.price)}
                  </Typography>
                </CardContent>

                <CardActions sx={{ mt: "auto", px: 2, pb: 2, gap: 1 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    endIcon={<FaArrowRightLong />}
                    sx={{ borderColor: "#111", color: "#111" }}
                  >
                    Ver
                  </Button>
                  <Button fullWidth variant="contained" startIcon={<FaCartPlus />} sx={{ bgcolor: "#111" }}>
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
