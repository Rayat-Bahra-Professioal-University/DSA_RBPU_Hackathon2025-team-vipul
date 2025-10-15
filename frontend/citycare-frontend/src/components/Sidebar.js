import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Report";
import MapIcon from "@mui/icons-material/Map";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Report Issue", icon: <ReportIcon />, path: "/submit" },
    { text: "Map", icon: <MapIcon />, path: "/map" }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 220,
          boxSizing: "border-box",
          bgcolor: "#2C3E50", // Dark blue-grey sidebar
          color: "#ECF0F1"
        }
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ECF0F1" }}>
          CityCare
        </Typography>
      </Box>
      <List>
        {menuItems.map(item => (
          <ListItem button key={item.text} component={Link} to={item.path} sx={{ "&:hover": { bgcolor: "#34495E" } }}>
            <ListItemIcon sx={{ color: "#ECF0F1" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
