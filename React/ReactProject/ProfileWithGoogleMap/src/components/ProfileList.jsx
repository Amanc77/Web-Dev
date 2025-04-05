import React from "react";
import { useProfiles } from "../context/ProfileContext";
import ProfileCard from "./ProfileCard";

function ProfileList({ searchQuery, onSelectLocation }) {
  const { profiles } = useProfiles();

  if (!profiles || profiles.length === 0) {
    return <div>Loading profiles...</div>;
  }

  // Filter profiles based on searchQuery
  const filteredProfiles = searchQuery
    ? profiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : profiles;

  return (
    <div className="w-full">
      <div className="p-4 grid grid-cols-1 gap-x-10 gap-y-4">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSelectLocation={onSelectLocation} // Pass the prop to ProfileCard
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
