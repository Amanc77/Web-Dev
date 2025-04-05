import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function ProfileCard({ profile, onSelectLocation }) {
  return (
    <div
      className="bg-gray-800 text-white rounded-lg p-3  shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700
    flex flex-row  gap-5
    overflow-y-auto  w-full  "
    >
      {/* Image Section */}
      <div className="mb-3 sm:mb-0 sm:mr-4 flex justify-center items-center ">
        <Link to={`/profile/${profile.id}`}>
          <img
            src={profile.image}
            alt={profile.name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-gray-600 "
          />
        </Link>
      </div>

      {/* Text and Button Section */}
      <div className="flex-1 flex flex-col w-full ">
        <div className="mb-2 sm:mb-3">
          <h2 className="text-base sm:text-lg font-semibold">{profile.name}</h2>
          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
            {profile.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-orange-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm truncate">{profile.address}</p>
          </div>
          <div>
            <button
              onClick={() => onSelectLocation(profile.location)}
              className="bg-orange-500 text-white font-bold px-3 py-1 sm:px-4 sm:py-1 rounded-lg hover:bg-orange-600 transition-colors text-xs sm:text-sm w-full sm:w-auto"
            >
              Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
