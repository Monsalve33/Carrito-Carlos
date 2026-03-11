import React, { useMemo, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const initialValues = { email: "", password: "" };

const validateEmail = (value) => {
  if (!value.trim()) {
    return "Ingresa tu correo.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value.trim())) {
    return "Escribe un correo valido.";
  }

  return "";
};

const validatePassword = (value) => {
  if (!value) {
    return "Ingresa tu contrasena.";
  }

  if (value.length < 8) {
    return "Debe tener minimo 8 caracteres.";
  }

  if (!/[A-Z]/.test(value)) {
    return "Agrega al menos una mayuscula.";
  }

  if (!/\d/.test(value)) {
    return "Agrega al menos un numero.";
  }

  return "";
};

export const Account = () => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitState, setSubmitState] = useState({
    type: "",
    message: ""
  });

  const errors = useMemo(
    () => ({
      email: validateEmail(values.email),
      password: validatePassword(values.password)
    }),
    [values.email, values.password]
  );

  const isFormValid = !errors.email && !errors.password;

  const handleChange = (field) => (event) => {
    const nextValue = event.target.value;

    setValues((current) => ({
      ...current,
      [field]: nextValue
    }));

    setSubmitState({
      type: "",
      message: ""
    });
  };

  const handleBlur = (field) => () => {
    setTouched((current) => ({
      ...current,
      [field]: true
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allTouched = {
      email: true,
      password: true
    };

    setTouched(allTouched);

    if (!isFormValid) {
      setSubmitState({
        type: "error",
        message: "Revisa los campos marcados antes de continuar."
      });
      return;
    }

    setSubmitState({
      type: "success",
      message: "Validacion frontend completada. El formulario esta listo para conectar con backend."
    });
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: { xs: 8, md: 12 },
        background:
          "radial-gradient(circle at top, rgba(213,202,185,0.55) 0%, rgba(255, 255, 255, 0.95) 42%, #ebe7df 100%)"
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 560,
          mx: "auto",
          px: { xs: 3, sm: 6 },
          py: { xs: 5, sm: 7 },
          textAlign: "center",
          border: "1px solid rgba(72, 67, 59, 0.08)",
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 20px 60px rgba(81, 73, 61, 0.08)"
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.35rem" },
            fontWeight: 300,
            letterSpacing: "0.34em",
            color: "#67717b",
            textTransform: "uppercase"
          }}
        >
          Login
        </Typography>

        <Typography
          sx={{
            mb: 5,
            color: "#7d868f",
            fontSize: "1rem"
          }}
        >
          Ingresa tus datos. La validacion ocurre solo en frontend.
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2.2}>
            <TextField
              fullWidth
              placeholder="Correo electronico"
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email ? errors.email : " "}
              InputProps={{ sx: inputSx }}
            />

            <TextField
              fullWidth
              placeholder="Contrasena"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password ? errors.password : " "}
              InputProps={{ sx: inputSx }}
            />

            <Typography
              sx={{
                mt: -0.5,
                color: submitState.type === "error" ? "#b3261e" : "#7d868f",
                fontSize: "0.86rem",
                minHeight: 20
              }}
            >
              {submitState.message ||
                "La contrasena debe tener 8 caracteres, una mayuscula y un numero."}
            </Typography>

            <Button
              fullWidth
              type="submit"
              sx={{
                mt: 1,
                py: 1.8,
                border: "1px solid #282421",
                borderRadius: 0,
                bgcolor: isFormValid ? "#1d1b1a" : "rgba(29, 27, 26, 0.45)",
                color: "#fbf8f2",
                fontSize: "0.95rem",
                fontWeight: 400,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                transition:
                  "background-color 220ms ease, color 220ms ease, transform 220ms ease, box-shadow 220ms ease",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "#282421",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 24px rgba(40, 36, 33, 0.08)"
                }
              }}
            >
              Entrar
            </Button>
          </Stack>
        </Box>

        <Typography
          sx={{
            mt: 4,
            color: submitState.type === "success" ? "#4f6b57" : "#7a838c",
            fontSize: "1rem"
          }}
        >
          {submitState.type === "success"
            ? "Formulario valido. Listo para conectar con backend cuando quieras."
            : " "}
        </Typography>
      </Box>
    </Box>
  );
};

const inputSx = {
  borderRadius: 0,
  backgroundColor: "rgba(255,255,255,0.45)",
  color: "#7d868f",
  "& input": {
    py: 1.9
  },
  "& fieldset": {
    borderColor: "rgba(100, 108, 116, 0.14)"
  },
  "&:hover fieldset": {
    borderColor: "rgba(40, 36, 33, 0.45)"
  },
  "&.Mui-focused fieldset": {
    borderWidth: "1px",
    borderColor: "#676057"
  }
};
