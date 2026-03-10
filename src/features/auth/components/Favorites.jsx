import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import {FAVORITES_STORAGE_EVENT, getFavoriteIds, toggleFavoriteId} from "../../view/utils/favoritesStorage";
import { formatPrice, PRODUCTS } from "../../view/utils/productsCatalog";

export const Favorites = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const syncFavorites = () => setFavoriteIds(getFavoriteIds());

    syncFavorites();
    window.addEventListener("storage", syncFavorites);
    window.addEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);

    return () => {
      window.removeEventListener("storage", syncFavorites);
      window.removeEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);
    };
  }, []);

  const favoriteProducts = useMemo(
    () => PRODUCTS.filter((product) => favoriteIds.includes(product.id)),
    [favoriteIds]
  );

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Mis Favoritos
        </Typography>

        {favoriteProducts.length === 0 ? (
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              border: "1px dashed #c7c7c7",
              bgcolor: "#fff",
              textAlign: "center"
            }}
          >
            <FaRegHeart size={28} />
            <Typography sx={{ mt: 1.5, fontWeight: 600 }}>No tienes favoritos todavia</Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {favoriteProducts.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    height: "100%",
                    border: "1px solid #e5e5e5",
                    boxShadow: "0 10px 26px rgba(0,0,0,0.08)"
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{ height: 300, objectFit: "cover" }}
                    />
                    <IconButton
                      onClick={() => setFavoriteIds(toggleFavoriteId(product.id))}
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor: "rgba(255,255,255,0.92)",
                        "&:hover": { bgcolor: "#fff" }
                      }}
                    >
                      <FaHeart size={15} color="#d32f2f" />
                    </IconButton>
                  </Box>

                  <CardContent>
                    <Stack spacing={0.5}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {product.title}
                      </Typography>
                      <Typography sx={{ fontWeight: 700, color: "#111" }}>
                        {formatPrice(product.price)}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};
