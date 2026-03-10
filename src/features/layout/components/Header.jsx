import * as React from "react";
import { NavLink } from "react-router-dom";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";


// MUI
import {
  AppBar,
  Toolbar,
  Badge,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  FAVORITES_STORAGE_EVENT,
  getFavoriteIds
} from "../../view/utils/favoritesStorage";
import {
  CART_STORAGE_EVENT,
  getCartCount
} from "../../view/utils/cartStorage";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const [favoritesCount, setFavoritesCount] = React.useState(0);
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const syncFavoritesCount = () => setFavoritesCount(getFavoriteIds().length);

    syncFavoritesCount();
    window.addEventListener("storage", syncFavoritesCount);
    window.addEventListener(FAVORITES_STORAGE_EVENT, syncFavoritesCount);

    return () => {
      window.removeEventListener("storage", syncFavoritesCount);
      window.removeEventListener(FAVORITES_STORAGE_EVENT, syncFavoritesCount);
    };
  }, []);

  React.useEffect(() => {
    const syncCartCount = () => setCartCount(getCartCount());

    syncCartCount();
    window.addEventListener("storage", syncCartCount);
    window.addEventListener(CART_STORAGE_EVENT, syncCartCount);

    return () => {
      window.removeEventListener("storage", syncCartCount);
      window.removeEventListener(CART_STORAGE_EVENT, syncCartCount);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    { to: "/", label: "Inicio", icon: <HomeIcon /> },
    { to: "/article", label: "Artículos", icon: <ArticleIcon /> },
    { to: "/offers", label: "Ofertas", icon: <LocalOfferIcon /> },
    { to: "/account", label: "Mi Cuenta", icon: <PersonIcon /> },
    {
      to: "/favorites",
      label: "Favoritos",
      icon: (
        <Badge
          badgeContent={favoritesCount}
          color="error"
          max={99}
          invisible={favoritesCount === 0}
        >
          <FavoriteIcon />
        </Badge>
      )
    },
    { to: "/purchases", label: "Mis Compras", icon: <ShoppingBagIcon /> },
  ];

  //MUI COLORS
  const styleAppBar = {
    backgroundColor: "#ffffff",
    color: "#000000",
  };

  return (
    <>
      <AppBar position="fixed" style={styleAppBar}>
        <Toolbar
          sx={{
            px: { xs: 2, md: 6 }
          }}
        >

          {/* MENÚ MOBILE */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  onClick={handleCloseNavMenu}
                >
                  {item.to === "/favorites" ? `${item.label} (${favoritesCount})` : item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* TÍTULO */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              textDecoration: "none",
              mr: { md: 5 },
              display: "flex",
              alignItems: "center"
            }}
          >
            <Box
              component="img"
              src="/img/logoOficial.avif"
              alt="Undergold"
              sx={{
                height: { xs: 20, md: 22 },
                width: "auto",
                display: "block"
              }}
            />
          </Box>

          {/* MENÚ DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2.5,
              flexGrow: 1,
              justifyContent: "center"
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={NavLink}
                to={item.to}
                startIcon={item.icon}
                sx={{
                  px: 2.2,
                  py: 0.4,
                  "&.active": {
                    bgcolor: "rgba(255,255,255,0.15)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* SEARCH DESKTOP */}
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="small"
            placeholder="Buscar artículos..."
            sx={{
              display: { xs: "none", md: "flex" },
              bgcolor: "white",
              borderRadius: 1,
              minWidth: 260,
              mx: 3,
              "& .MuiOutlinedInput-root": { bgcolor: "white" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* CARRITO */}
          <IconButton
            color="inherit"
            component={NavLink}
            to="/purchases"
            sx={{ ml: 1 }}
          >
            <Badge
              badgeContent={cartCount}
              color="error"
              max={99}
              invisible={cartCount === 0}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Espaciador para que no tape el contenido */}
      <Toolbar />
    </>
  );
};
