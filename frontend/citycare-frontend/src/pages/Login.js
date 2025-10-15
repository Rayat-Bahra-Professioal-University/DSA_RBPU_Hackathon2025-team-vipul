import React, { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Demo: Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", bgcolor: "#F4F6F7" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Login to CityCare</Typography>
      <Stack spacing={2} sx={{ width: 300 }}>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
        <Button variant="text" onClick={() => navigate("/register")}>Don't have an account? Register</Button>
      </Stack>
    </Box>
  );
};

export default Login;
