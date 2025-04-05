import React from "react";
import AppRoutes from "./components/AppRoutes";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  return (
    <div className="h-auto bg-gray-900 overflow-x-hidden">
      <ProfileProvider>
        <AppRoutes />
      </ProfileProvider>
    </div>
  );
}

export default App;
