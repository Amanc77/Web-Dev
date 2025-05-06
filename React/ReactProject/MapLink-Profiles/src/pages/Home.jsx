import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import GoogleMap from "../components/GoogleMap";
import SearchFilter from "../components/SearchFilter";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation({
      latitude: location.latitude,
      longitude: location.longitude,
    });
  };

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen h-full p-1 sm:p-2">
      {/* Search Bar - Full width and responsive */}
      <div className="w-full   max-w-4xl mx-auto mb-3 ">
        <SearchFilter onSearch={handleSearch} />
      </div>

      {/* Main Content - Column on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8">
        {/* Profile List - Second on mobile, first on desktop */}
        <div className="order-2 lg:order-1 relative bg-gray-700 p-3 sm:p-4 rounded-xl shadow-md w-full lg:basis-2/6 h-[600px] sm:h-[1000px] lg:h-[600px] overflow-y-auto no-scrollbar">
          <h2 className="flex items-center justify-center bg-gray-700 text-base sm:text-lg font-semibold text-white   ">
            Profiles
          </h2>
          <ProfileList
            searchQuery={searchQuery}
            onSelectLocation={handleSelectLocation}
          />
        </div>

        {/* Google Map - First on mobile, second on desktop */}
        <div className="order-1 lg:order-2 bg-gray-800 rounded-xl shadow-md w-full lg:basis-4/6 h-[250px] sm:h-[350px] lg:h-[600px] text-white font-semibold overflow-hidden">
          <GoogleMap selectedLocation={selectedLocation} />
        </div>
      </div>
    </div>
  );
}

export default Home;
