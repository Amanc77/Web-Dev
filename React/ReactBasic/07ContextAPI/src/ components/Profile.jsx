import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div className="flex justify-center p-5 text-3xl text-white rounded-md">
        Please log in to view your profile.
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 ">
      <h1 className="flex justify-center p-5 text-3xl text-white rounded-md">
        Profile
      </h1>

      <p className="text-2xl text-white">UseName: {user.userName}.</p>
      <p className="text-2xl text-white">Password: {user.password}.</p>
    </div>
  );
}

export default Profile;
