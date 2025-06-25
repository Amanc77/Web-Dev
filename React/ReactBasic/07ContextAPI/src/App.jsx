import React from "react";
import Login from "./ components/Login.jsx";
import Profile from "./ components/Profile.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col min-h-screen bg-gray-800">
        <h1 className="flex justify-center p-5 text-3xl text-white rounded-md">
          Context Example
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
