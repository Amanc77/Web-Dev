import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProfiles } from "../context/ProfileContext";

function ProfileDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles } = useProfiles();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white w-full max-w-md">
          <p className="text-xl sm:text-2xl font-semibold text-center">
            Profile not found!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-6 px-4 sm:py-12">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden relative w-full">
        <div className="bg-gradient-to-r from-gray-800 to-blue-400 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {profile.name}
              </h1>
              <p className="text-blue-200 text-base sm:text-lg">
                {profile.description}
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Contact
              </h2>
              <div className="text-gray-300 text-sm sm:text-base space-y-1">
                <p>Email: {profile.email}</p>
                <p>Phone: {profile.phone}</p>
                <p>Address: {profile.address}</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Social
              </h2>
              <div className="space-y-2 text-sm sm:text-base">
                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors block"
                  >
                    LinkedIn
                  </a>
                )}
                {profile.socialLinks.twitter && (
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors block"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 sm:absolute sm:bottom-4 sm:right-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={() => navigate(`/edit-profile/${profile.id}`)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
          >
            Edit
          </button>
          <button
            onClick={() => navigate("/add-profile")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
          >
            Add
          </button>
          <button
            onClick={() => navigate(`/delete-profile/${profile.id}`)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
