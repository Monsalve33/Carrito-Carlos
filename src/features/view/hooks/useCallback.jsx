import React, { memo, useCallback, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const CounterButton = memo(({ label, count, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} sx={{ minWidth: 170 }}>
      {label}: {count}
    </Button>
  );
});

export const UseCallbackExample = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const handleCountA = useCallback(() => {
    setCountA((value) => value + 1);
  }, []);

  const handleCountB = useCallback(() => {
    setCountB((value) => value + 1);
  }, []);

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
          Hook useCallback
        </Typography>

        <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100" }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <CounterButton label="Boton A" count={countA} onClick={handleCountA} />
            <CounterButton label="Boton B" count={countB} onClick={handleCountB} />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            useCallback mantiene estable la referencia de las funciones entre renderizados.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
