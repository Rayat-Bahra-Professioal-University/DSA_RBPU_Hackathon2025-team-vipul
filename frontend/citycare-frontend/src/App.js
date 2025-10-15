import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SubmitIssue from "./pages/SubmitIssue";
import MapPage from "./pages/MapPage";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#F4F6F7", minHeight: "100vh" }}>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="submit" element={<SubmitIssue />} />
                <Route path="map" element={<MapPage />} />
              </Routes>
            </Box>
          </Box>
        } />
      </Routes>
    </Router>
  );
}

export default App;
