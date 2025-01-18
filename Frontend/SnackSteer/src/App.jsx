import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import DeliveryPage from "../src/pages/DeliveryPage";
import EmergencySupport from "./pages/EmergencySupport";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<DeliveryPage />} />
        <Route path="/emergency-support" element={<EmergencySupport />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/home" element={<Home />} /> */}

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
