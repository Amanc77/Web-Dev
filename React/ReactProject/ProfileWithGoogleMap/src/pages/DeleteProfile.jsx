import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProfiles } from "../context/ProfileContext";

function DeleteProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles, deleteProfile } = useProfiles();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl text-white text-center">
          <p className="text-lg sm:text-2xl font-semibold">
            Profile not found!
          </p>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    const result = deleteProfile(parseInt(id));
    if (result.success) {
      alert("Profile deleted successfully!");
      navigate("/");
    } else {
      alert(`Error deleting profile: ${result.error}`);
    }
  };

  const handleCancel = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          Delete Profile
        </h1>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                {profile.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                {profile.description}
              </p>
            </div>
          </div>
          <p className="text-red-400 text-sm sm:text-lg text-center">
            Are you sure you want to delete this profile? This action cannot be
            undone.
          </p>
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleCancel}
              className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base"
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfile;
