import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

const MapPanel = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/issues")
      .then(res => setIssues(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <MapContainer style={{ height: "100vh", width: "100%" }} center={[20.5937, 78.9629]} zoom={5}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {issues.map(issue => (
        <Marker key={issue._id} position={[issue.location.lat, issue.location.lng]}>
          <Popup>
            <b>{issue.title}</b><br />
            <img src={issue.photo} alt="issue" style={{ width: 100 }} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPanel;
