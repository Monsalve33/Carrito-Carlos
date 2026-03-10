import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return { value, toggle };
};

export const UseCustomCounter = () => {
  const { value: isVisible, toggle } = useToggle(false);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper"
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          Custom Hook
        </Typography>

        <Button variant="contained" onClick={toggle} sx={{ mb: 2 }}>
          {isVisible ? "Ocultar mensaje" : "Mostrar mensaje"}
        </Button>

        {isVisible && (
          <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100" }}>
            <Typography>Hola, este estado lo maneja un custom hook.</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};
