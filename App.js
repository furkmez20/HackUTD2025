import React from "react";
import Dashboard from "./app/components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}

      {isAuthenticated && (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
          <Dashboard />
        </>
      )}
    </div>
  );
}

export default App;
