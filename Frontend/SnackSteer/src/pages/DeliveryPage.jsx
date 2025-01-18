import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";
import '../styles/DeliveryPage.css'; // Import the CSS file
import { Link } from "react-router";
const GOOGLE_MAPS_API_KEY = "AIzaSyAJ8MSlTWNHYOvTpuMB-v3NT8q7mr2jhyg"; // Replace with your own API key

const DeliveryPage = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setOrigin({ lat: latitude, lng: longitude });
        },
        () => alert("Unable to fetch your location")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const getDirections = () => {
    if (!origin || !destination) {
      alert("Please provide both your location and destination.");
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          fetchRestaurantsAlongRoute(result.routes[0].overview_path);
        } else {
          alert("Could not fetch directions. Please try again.");
        }
      }
    );
  };

  const fetchRestaurantsAlongRoute = (path) => {
    const service = new google.maps.places.PlacesService(document.createElement("div"));
    const waypoints = path.filter((_, index) => index % Math.floor(path.length / 10) === 0);

    const restaurantPromises = waypoints.map((point) => {
      return new Promise((resolve) => {
        service.nearbySearch(
          {
            location: point,
            radius: 5000,
            type: "restaurant",
          },
          (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              resolve(results);
            } else {
              resolve([]);
            }
          }
        );
      });
    });

    Promise.all(restaurantPromises).then((allResults) => {
      const uniqueRestaurants = Array.from(
        new Map(
          allResults.flat().map((res) => [res.place_id, res])
        ).values()
      );
      setRestaurants(uniqueRestaurants);
    });
  };

  const postRestaurantDetails = async (restaurant) => {
    try {
      const response = await axios.post("YOUR_BACKEND_API_URL/restaurant", restaurant);
      console.log("Restaurant details sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending restaurant details:", error);
    }
  };

  return (
    <>
    <nav className="navbar">
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/emergency-support">Emergency Support</Link></li>
    </ul>
  </nav>
      <div className="container">
        <h1>Traffic Relief Dashboard</h1>
    
        <div className="input-container">
          <button onClick={getCurrentLocation} className="btn">Get Current Location</button>
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="input"
            />
          <button onClick={getDirections} className="btn green-btn">Get Directions</button>
        </div>
    
        <div className="main-content">
          <div className="map-container">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
              <GoogleMap
                center={origin || { lat: 27.5937, lng: 80.9629 }}
                zoom={12}
                mapContainerStyle={{ height: "100%", width: "100%" }}
              >
                {origin && <Marker position={origin} label="You" />}
                {directions && <DirectionsRenderer directions={directions} />}
                {restaurants.map((restaurant) => (
                  <Marker
                  key={restaurant.place_id}
                  position={restaurant.geometry.location}
                  onClick={() => setSelectedRestaurant(restaurant)}
                  />
                ))}
                {selectedRestaurant && (
                  <InfoWindow
                  position={selectedRestaurant.geometry.location}
                  onCloseClick={() => setSelectedRestaurant(null)}
                  >
                    <div>
                      <h3>{selectedRestaurant.name}</h3>
                      <p>{selectedRestaurant.vicinity}</p>
                      <button
                        onClick={() => postRestaurantDetails(selectedRestaurant)}
                        className="send-btn"
                        >
                        Send to Backend
                      </button>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>
    
          <div className="restaurants-list" style={{}}>
            <h4>Restaurants Along the Route</h4>
            <ul>
              {restaurants.slice(0, 10).map((restaurant) => (
                <li key={restaurant.place_id}>
                  <strong>{restaurant.name}</strong>
                  <br />
                  {restaurant.vicinity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
              </>
    );
    
  
};

export default DeliveryPage;
