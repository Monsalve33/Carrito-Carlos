import React, { useMemo, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const expensiveCalculation = (num) => {
  let result = num;
  for (let i = 0; i < 4000000; i += 1) {
    result += 1;
  }
  return result;
};

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

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
          Hook useMemo
        </Typography>

        <Stack spacing={1.5}>
          <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100" }}>
            <Typography sx={{ fontWeight: 600 }}>Todos: {todos.length}</Typography>
            <Button sx={{ mt: 1 }} variant="outlined" onClick={() => setTodos((t) => [...t, `Todo ${t.length + 1}`])}>
              Agregar todo
            </Button>
          </Box>

          <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100" }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Count: {count}</Typography>
            <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
              Incrementar
            </Button>
          </Box>

          <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100" }}>
            <Typography variant="h6">Resultado memoizado: {calculation}</Typography>
            <Typography variant="body2" color="text.secondary">
              La operacion pesada solo se recalcula cuando cambia count.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};
