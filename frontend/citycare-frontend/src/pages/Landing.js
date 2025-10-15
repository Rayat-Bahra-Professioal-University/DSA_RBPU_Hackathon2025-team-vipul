import React from "react";
import Lottie from "lottie-react";
import cityAnimation from "../animations/CityBuilding.json"; // Download free city animation from lottiefiles.com

import { Box, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F4F6F7"
      }}
    >
      <Lottie animationData={cityAnimation} style={{ width: 300, height: 300, marginBottom: 20 }} />
      <Typography variant="h2" sx={{ mb: 4, fontWeight: "bold", color: "#2C3E50" }}>
        Welcome to CityCare
      </Typography>
      <Stack direction="row" spacing={4}>
        <Button
          variant="contained"
          color="primary"
          sx={{ px: 5, py: 2, borderRadius: 3 }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ px: 5, py: 2, borderRadius: 3 }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Stack>
    </Box>
  );
};

export default Landing;
