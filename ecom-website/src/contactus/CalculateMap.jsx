import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = ({ apiKey }) => {
  const [distance, setDistance] = useState(null);

  const calculateDistance = (origin, destination) => {
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          const distanceText = response.rows[0].elements[0].distance.text;
          setDistance(distanceText);
        }
      }
    );
  };

  const handleCalculateDistance = () => {
    const origin = { lat: -3.745, lng: -38.523 }; // User's location
    const destination = { lat: -3.745, lng: -38.523 }; // Product location
    calculateDistance(origin, destination);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
      <button
        onClick={handleCalculateDistance}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Calculate Distance
      </button>
      {distance && <p className="mt-2">Distance: {distance}</p>}
    </LoadScript>
  );
};

export default MapComponent;
