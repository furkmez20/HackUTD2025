import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const { getAccessTokenSilently } = useAuth0();

  const fetchProperties = async () => {
    const token = await getAccessTokenSilently();
    const response = await fetch("http://localhost:8000/properties", {
      headers: {
        Authorization: `Bearer ${token}`,
      },i
    });
    const data = await response.json();
    console.log(data);
  };

  return <button onClick={fetchProperties}>Load Properties</button>;
}
