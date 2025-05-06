import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl: "/LocationIcon2.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView([center.latitude, center.longitude], map.getZoom());
    }
  }, [center, map]);
  return null;
}

const GoogleMap = ({ selectedLocation }) => {
  const defaultCenter = { latitude: 28.6139, longitude: 77.209 }; // New Delhi
  const center = selectedLocation || defaultCenter;
  const ZOOM_LEVEL = 12;

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[center.latitude, center.longitude]}
        zoom={ZOOM_LEVEL}
        style={{
          height: "100%", // Use 100% to take the full height of the parent
          width: "100%",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        className="rounded-lg sm:rounded-xl"
      >
        <ChangeView center={center} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker
          position={[center.latitude, center.longitude]}
          icon={customIcon}
        >
          <Popup>{`Latitude: ${center.latitude}, Longitude: ${center.longitude}`}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleMap;
