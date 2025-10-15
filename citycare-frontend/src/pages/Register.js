import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState(""); // Add name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/auth/register", { name, email, password, role });
      localStorage.setItem("user", JSON.stringify(res.data));
      if (res.data.user.role === "admin") navigate("/admin");
      else navigate("/user");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box sx={{ mt: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Register</Typography>
      <TextField label="Name" sx={{ mb: 2 }} value={name} onChange={e => setName(e.target.value)} />
      <TextField label="Email" sx={{ mb: 2 }} value={email} onChange={e => setEmail(e.target.value)} />
      <TextField label="Password" type="password" sx={{ mb: 2 }} value={password} onChange={e => setPassword(e.target.value)} />
      <TextField label="Role (user/admin)" sx={{ mb: 2 }} value={role} onChange={e => setRole(e.target.value)} />
      <Button variant="contained" onClick={handleRegister}>Register</Button>
    </Box>
  );
};

export default Register;
