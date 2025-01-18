import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // Ensure to link the CSS

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/emergency-support">Emergency Support</Link></li> {/* New Link */}
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="user-info">
          <h2>User Information</h2>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
        </div>

        <div className="map">
          <h2>Map</h2>
          <Link to="/map">Choose your locations</Link>
        </div>

        <div className="online-games">
          <h2>Play Free Online Games</h2>
          <a href="https://www.miniclip.com/games/en/" target="_blank" rel="noopener noreferrer">Visit Miniclip for Free Games</a>
        </div>

        <div className="transport-option">
          <h2>Transport Option</h2>
          <p>Available transport options here.</p>
        </div>

        <div className="emergency-support">
          <h2>Emergency Support</h2>
          <p><strong>Medical Assistance:</strong> Book medical help or minor first-aid deliveries in case of an emergency.</p>
          <p><strong>Vehicle Breakdown Assistance:</strong> Request immediate mechanical help if your vehicle breaks down in traffic.</p>
          <Link to="/emergency-support" className="view-more-link">Learn More</Link> {/* Link to Emergency Support page */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
