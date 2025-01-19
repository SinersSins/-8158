/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar.jsx";
import Map from "../Map/Map.jsx";
import TrafficReliefDashboard from "../TrafficReliefDashboard/TrafficReliefDashboard.jsx";
import TestingFooter from "../../pages/testingFooter.jsx";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("http://localhost:3000/userProfile/");
        if (response.data.length > 0) {
          setUserData(response.data[0]); // Assuming the first user for simplicity
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="left">
            {/* User Information Section */}
            <div className="section user-info">
              <h2>User Information</h2>
              {userData ? (
                <>
                  <p>Name: {userData.name}</p>
                  <p>City: {userData.city}</p>
                  <p>contact: {userData.emergencyContact}</p>
                  {/* Add additional fields as needed */}
                </>
              ) : (
                <p>Loading user data...</p>
              )}
            </div>

            <div className="food-order">
              <h2>Navigation and Food</h2>
              <Link to="/map" id="link">
                Hungry? Let's Order
              </Link>
            </div>

            {/* Online Games Section */}
            <div className="section online-games">
              <h2>Play Free Online Games</h2>
              <a
                href="https://www.miniclip.com/games/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit for Free Games
              </a>
            </div>

            {/* Emergency Support Section */}
            <div className="section emergency-support">
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
            <div className="section map">
              <Map />
            </div>

            {/* Transport Option Section */}
            <div className="section transport-option">
              <h2>Transport Option</h2>
              <Link to="/transport">Available transport options here.</Link>
            </div>
          </div>
        </div>
      </div>
      <TrafficReliefDashboard />
      <TestingFooter />
    </>
  );
}

export default Dashboard;
