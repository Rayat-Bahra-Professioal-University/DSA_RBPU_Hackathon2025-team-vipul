import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/user" },
    { name: "Submit Issue", path: "/user/submit" },
    { name: "View Issues", path: "/user/issues" },
    { name: "Admin Panel", path: "/admin" },
    { name: "Map View", path: "/map" },
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">CityCare</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
