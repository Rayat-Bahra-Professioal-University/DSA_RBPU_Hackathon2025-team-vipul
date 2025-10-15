import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPanel from "./pages/UserPanel";
import AdminPanel from "./pages/AdminPanel";
import MapPanel from "./pages/MapPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/map" element={<MapPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
