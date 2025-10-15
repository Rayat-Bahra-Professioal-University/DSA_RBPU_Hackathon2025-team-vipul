import React from "react";
import { Box, Typography } from "@mui/material";

const MapPage = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h5" sx={{ mb: 2 }}>Geo-Tagged Map</Typography>
    <Box
      sx={{
        width: "100%",
        height: "500px",
        borderRadius: 2,
        bgcolor: "#D6EAF8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2C3E50",
        fontWeight: "bold",
        fontSize: 18
      }}
    >
      Map Placeholder
    </Box>
  </Box>
);

export default MapPage;
