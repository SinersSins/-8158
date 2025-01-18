/** @format */
import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Ensure to link the CSS
import Navbar from "../Navbar/Navbar.jsx";
import DeliveryPage from "../../pages/DeliveryPage.jsx";
import Map from "../Map/Map.jsx";
import TrafficReliefDashboard from "../TrafficReliefDashboard/TrafficReliefDashboard.jsx";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard-container11">
        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="left">
            {/* User Information Section */}
            <div className="user-info">
              <h2>User Information</h2>
              <p>Name: John Doe</p>
              <p>Email: john.doe@example.com</p>
            </div>

            {/* Online Games Section */}
            <div className="online-games">
              <h2>Play Free Online Games</h2>
              <a
                href="https://www.miniclip.com/games/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Miniclip for Free Games
              </a>
            </div>

            {/* Emergency Support Section */}
            <div className="emergency-support">
              <h2>Emergency Support</h2>
              <p>
                <strong>Medical Assistance:</strong> Book medical help or minor
                first-aid deliveries in case of an emergency.
              </p>
              <p>
                <strong>Vehicle Breakdown Assistance:</strong> Request immediate
                mechanical help if your vehicle breaks down in traffic.
              </p>
              <Link to="/emergency-support" className="view-more-link">
                Learn More
              </Link>
            </div>
          </div>

          <div className="right">
            {/* Map Section */}
            <div className="map">
            {<Map/>}
            </div>

            {/* Transport Option Section */}
            <div className="transport-option">
              <h2>Transport Option</h2>
              <p>Available transport options here.</p>
            </div>
          </div>
        </div>
       
      </div>
      {<TrafficReliefDashboard/>}
    </>
  );
}

export default Dashboard;
