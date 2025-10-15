import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard = ({ title, value, color }) => (
  <Card
    sx={{
      minWidth: 150,
      m: 1,
      background: color,
      color: "#fff",
      borderRadius: 3,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}
  >
    <CardContent>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default SummaryCard;
