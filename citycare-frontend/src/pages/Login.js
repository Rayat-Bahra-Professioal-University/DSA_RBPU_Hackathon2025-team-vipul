import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form default submit behavior
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      
      // Check if response exists and has data
      if (res && res.data) {
        const userData = res.data.user || res.data; // adapt depending on backend
        localStorage.setItem("user", JSON.stringify(userData));

        if (userData.role === "admin") navigate("/admin");
        else navigate("/user");
      } else {
        alert("Login failed: no data received from server");
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        sx={{ mb: 2 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Password"
        type="password"
        sx={{ mb: 3 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />
      <Button variant="contained" type="submit" disabled={loading} fullWidth>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </Box>
  );
};

export default Login;
