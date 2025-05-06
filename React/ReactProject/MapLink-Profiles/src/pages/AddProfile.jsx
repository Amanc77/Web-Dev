import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfiles } from "../context/ProfileContext";

function AddProfile() {
  const navigate = useNavigate();
  const { addProfile } = useProfiles();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    address: "",
    email: "",
    phone: "",
    interests: [],
    socialLinks: { linkedin: "", twitter: "" },
    location: { latitude: "", longitude: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      location: {
        latitude: formData.location.latitude
          ? parseFloat(formData.location.latitude)
          : 0,
        longitude: formData.location.longitude
          ? parseFloat(formData.location.longitude)
          : 0,
      },
    };
    const result = addProfile(submitData);
    if (result.success) {
      alert("Profile added successfully!");
      navigate(`/profile/${result.id}`);
    } else {
      alert(`Error adding profile: ${result.error}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialLinks.")) {
      const socialKey = name.split(".")[1];
      setFormData({
        ...formData,
        socialLinks: { ...formData.socialLinks, [socialKey]: value },
      });
    } else if (name.includes("location.")) {
      const locationKey = name.split(".")[1];
      setFormData({
        ...formData,
        location: { ...formData.location, [locationKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          Add New Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
            required
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          <input
            name="socialLinks.linkedin"
            value={formData.socialLinks.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          <input
            name="socialLinks.twitter"
            value={formData.socialLinks.twitter}
            onChange={handleChange}
            placeholder="Twitter URL"
            className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="location.latitude"
              value={formData.location.latitude}
              onChange={handleChange}
              placeholder="Latitude..."
              type="number"
              step="any"
              className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
            />
            <input
              name="location.longitude"
              value={formData.location.longitude}
              onChange={handleChange}
              placeholder="Longitude.."
              type="number"
              step="any"
              className="w-full p-2 rounded bg-gray-700 text-white text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg w-full text-sm sm:text-base"
          >
            Add Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProfile;
