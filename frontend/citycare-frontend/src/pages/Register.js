import React, { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = () => {
    alert("Registration successful! (Demo only)");
    navigate("/login");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", bgcolor: "#F4F6F7" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Register for CityCare</Typography>
      <Stack spacing={2} sx={{ width: 300 }}>
        <TextField label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <TextField label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <TextField label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <Button variant="contained" onClick={handleRegister}>Register</Button>
        <Button variant="text" onClick={() => navigate("/login")}>Already have an account? Login</Button>
      </Stack>
    </Box>
  );
};

export default Register;
