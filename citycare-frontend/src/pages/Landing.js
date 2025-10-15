import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import cityAnimation from "../animations/CityBuilding.json";
import axios from "axios";

const Landing = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/issues")
      .then(res => setIssues(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Lottie animationData={cityAnimation} style={{ width: 300, height: 300 }} />
      <Typography variant="h2" sx={{ fontWeight: "bold", color: "#2C3E50" }}>Welcome to CityCare</Typography>
      <Stack direction="row" spacing={4} sx={{ mb: 3 }}>
        <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
        <Button variant="outlined" onClick={() => navigate("/register")}>Register</Button>
      </Stack>

      <MapContainer style={{ height: "400px", width: "90%" }} center={[20.5937, 78.9629]} zoom={5}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {issues.map(issue => (
          <Marker key={issue._id} position={[issue.location.lat, issue.location.lng]}>
            <Popup>
              <Typography variant="subtitle1">{issue.title}</Typography>
              <img src={issue.photo} alt="issue" style={{ width: 100 }} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Landing;
