import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "../src/pages/Dashboard"
import DeliveryPage from "../src/pages/DeliveryPage"
import EmergencySupport from './pages/EmergencySupport';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map" element={<DeliveryPage />} />
        <Route path="/emergency-support" element={<EmergencySupport />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
