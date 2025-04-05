import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProfileDetails from "../pages/ProfileDetails";
import EditProfile from "../pages/EditProfile";
import AddProfile from "../pages/AddProfile";
import DeleteProfile from "../pages/DeleteProfile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/add-profile" element={<AddProfile />} />
        <Route path="/delete-profile/:id" element={<DeleteProfile />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white">
                <p className="text-2xl font-semibold">404 - Page Not Found</p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
