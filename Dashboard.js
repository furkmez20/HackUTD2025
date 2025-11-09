import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const { getAccessTokenSilently } = useAuth0();

  const fetchProperties = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch("http://localhost:8000/properties", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  return (
    <div>
      <h1>PropIntel Dashboard</h1>
      <button onClick={fetchProperties}>Load Properties</button>
    </div>
  );
}

export default Dashboard;
