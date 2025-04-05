import React, { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      description: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      address: "Bengaluru, India",
      location: { latitude: 12.9716, longitude: 77.5946 },
      email: "aarav.sharma@example.com",
      phone: "+91-9876543210",
      interests: ["Coding", "Music", "Traveling"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/aaravsharma",
        twitter: "https://twitter.com/aaravsharma",
      },
    },
    {
      id: 2,
      name: "Sanya Singh",
      description: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      address: "Mumbai, India",
      location: { latitude: 19.076, longitude: 72.8777 },
      email: "sanya.singh@example.com",
      phone: "+91-8765432109",
      interests: ["Design", "Photography", "Reading"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/sanyasingh",
        twitter: "https://twitter.com/sanyasingh",
      },
    },
    {
      id: 3,
      name: "Riya Patel",
      description: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      address: "Ahmedabad, India",
      location: { latitude: 23.0225, longitude: 72.5714 },
      email: "riya.patel@example.com",
      phone: "+91-7654321098",
      interests: ["Management", "Traveling", "Cooking"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/riyapatel",
        twitter: "https://twitter.com/riyapatel",
      },
    },
    {
      id: 4,
      name: "Karan Verma",
      description: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      address: "Delhi, India",
      location: { latitude: 28.7041, longitude: 77.1025 },
      email: "karan.verma@example.com",
      phone: "+91-6543210987",
      interests: ["Coding", "Gaming", "Reading"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/karanverma",
        twitter: "https://twitter.com/karanverma",
      },
    },
    {
      id: 5,
      name: "Pooja Nair",
      description: "DevOps Engineer",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      address: "Kochi, India",
      location: { latitude: 9.9312, longitude: 76.2673 },
      email: "pooja.nair@example.com",
      phone: "+91-5432109876",
      interests: ["Automation", "Music", "Traveling"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/poojanair",
        twitter: "https://twitter.com/poojanair",
      },
    },
    {
      id: 6,
      name: "Ananya Roy",
      description: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      address: "Kolkata, India",
      location: { latitude: 22.5726, longitude: 88.3639 },
      email: "ananya.roy@example.com",
      phone: "+91-4321098765",
      interests: ["Design", "Coding", "Dancing"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/ananyaroy",
        twitter: "https://twitter.com/ananyaroy",
      },
    },
    {
      id: 7,
      name: "Raghav Iyer",
      description: "Mobile Developer",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      address: "Chennai, India",
      location: { latitude: 13.0827, longitude: 80.2707 },
      email: "raghav.iyer@example.com",
      phone: "+91-3210987654",
      interests: ["Mobile Apps", "Music", "Traveling"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/raghaviyer",
        twitter: "https://twitter.com/raghaviyer",
      },
    },
    {
      id: 8,
      name: "Diya Choudhary",
      description: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      address: "Jaipur, India",
      location: { latitude: 26.9124, longitude: 75.7873 },
      email: "diya.choudhary@example.com",
      phone: "+91-2109876543",
      interests: ["Design", "Art", "Reading"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/diyachoudhary",
        twitter: "https://twitter.com/diyachoudhary",
      },
    },
    {
      id: 9,
      name: "Vikram Joshi",
      description: "AI Engineer",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      address: "Pune, India",
      location: { latitude: 18.5204, longitude: 73.8567 },
      email: "vikram.joshi@example.com",
      phone: "+91-1098765432",
      interests: ["Artificial Intelligence", "Robotics", "Gaming"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/vikramjoshi",
        twitter: "https://twitter.com/vikramjoshi",
      },
    },
    {
      id: 10,
      name: "Isha Gupta",
      description: "Security Specialist",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      address: "Hyderabad, India",
      location: { latitude: 17.385, longitude: 78.4867 },
      email: "isha.gupta@example.com",
      phone: "+91-9987654321",
      interests: ["Cybersecurity", "Reading", "Traveling"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/ishagupta",
        twitter: "https://twitter.com/ishagupta",
      },
    },
    {
      id: 11,
      name: "Neha Kapoor",
      description: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      address: "Lucknow, India",
      location: { latitude: 26.85, longitude: 80.949997 },
      email: "neha.kapoor@example.com",
      phone: "+91-8876543210",
      interests: ["Data Analysis", "Cooking", "Music"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/nehakapoor",
        twitter: "https://twitter.com/nehakapoor",
      },
    },
    {
      id: 12,
      name: "Amitabh Das",
      description: "System Analyst",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      address: "Patna, India",
      location: { latitude: 25.594095, longitude: 85.137566 },
      email: "amitabh.das@example.com",
      phone: "+91-8765432101",
      interests: ["Systems Analysis", "Chess", "Reading"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/amitabhdas",
        twitter: "https://twitter.com/amitabhdas",
      },
    },
    {
      id: 13,
      name: "Priya Menon",
      description: "Database Administrator",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
      address: "Thiruvananthapuram, India",
      location: { latitude: 8.524139, longitude: 76.936638 },
      email: "priya.menon@example.com",
      phone: "+91-7654321012",
      interests: ["Databases", "Cooking", "Traveling"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/priyamenon",
        twitter: "https://twitter.com/priyamenon",
      },
    },
    {
      id: 14,
      name: "Siddharth Malhotra",
      description: "Network Engineer",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      address: "Chandigarh, India",
      location: { latitude: 30.733315, longitude: 76.779419 },
      email: "siddharth.malhotra@example.com",
      phone: "+91-6543210123",
      interests: ["Networking", "Gaming", "Music"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/siddharthmalhotra",
        twitter: "https://twitter.com/siddharthmalhotra",
      },
    },
    {
      id: 15,
      name: "Kavita Reddy",
      description: "Business Analyst",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      address: "Bhopal, India",
      location: { latitude: 23.259933, longitude: 77.412615 },
      email: "kavita.reddy@example.com",
      phone: "+91-5432101234",
      interests: ["Business Analysis", "Reading", "Yoga"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/kavitareddy",
        twitter: "https://twitter.com/kavitareddy",
      },
    },
    {
      id: 16,
      name: "Arjun Mehta",
      description: "Scrum Master",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
      address: "Nagpur, India",
      location: { latitude: 21.1458, longitude: 79.088155 },
      email: "arjun.mehta@example.com",
      phone: "+91-4321012345",
      interests: ["Agile Methodologies", "Cricket", "Traveling"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/arjunmehta",
        twitter: "https://twitter.com/arjunmehta",
      },
    },
    {
      id: 17,
      name: "Meera Iyer",
      description: "Quality Assurance Engineer",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      address: "Coimbatore, India",
      location: { latitude: 11.016844, longitude: 76.955832 },
      email: "meera.iyer@example.com",
      phone: "+91-3210123456",
      interests: ["Testing", "Cooking", "Music"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/meeraiyer",
        twitter: "https://twitter.com/meeraiyer",
      },
    },
    {
      id: 18,
      name: "Nikhil Chandra",
      description: "Technical Support Engineer",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      address: "Visakhapatnam, India",
      location: { latitude: 17.686816, longitude: 83.218482 },
      email: "nikhil.chandra@example.com",
      phone: "+91-2101234567",
      interests: ["Customer Support", "Gaming", "Reading"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/nikhilchandra",
        twitter: "https://twitter.com/nikhilchandra",
      },
    },
    {
      id: 19,
      name: "Sneha Agarwal",
      description: "Content Strategist",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      address: "Indore, India",
      location: { latitude: 22.719568, longitude: 75.857727 },
      email: "sneha.agarwal@example.com",
      phone: "+91-1098765432",
      interests: ["Content Creation", "Blogging", "Traveling"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/snehaagarwal",
        twitter: "https://twitter.com/snehaagarwal",
      },
    },
    {
      id: 20,
      name: "Rahul Bose",
      description: "Cloud Solutions Architect",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      address: "Guwahati, India",
      location: { latitude: 26.144517, longitude: 91.736237 },
      email: "rahul.bose@example.com",
      phone: "+91-9987654321",
      interests: ["Cloud Computing", "Music", "Hiking"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/rahulbose",
        twitter: "https://twitter.com/rahulbose",
      },
    },
  ]);

  const addProfile = (newProfile) => {
    try {
      if (!newProfile || typeof newProfile !== "object") {
        throw new Error("Invalid profile data");
      }

      if (!newProfile.name || !newProfile.email) {
        throw new Error("Name and email are required");
      }

      const newId =
        profiles.length > 0 ? Math.max(...profiles.map((p) => p.id)) + 1 : 1;

      const completeProfile = {
        id: newId,
        name: newProfile.name,
        description: newProfile.description || "",
        image:
          newProfile.image || "https://randomuser.me/api/portraits/lego/1.jpg",
        address: newProfile.address || "",
        location: newProfile.location || { latitude: 0, longitude: 0 },
        email: newProfile.email,
        phone: newProfile.phone || "",
        interests: Array.isArray(newProfile.interests)
          ? newProfile.interests
          : [],
        socialLinks: {
          linkedin: newProfile.socialLinks?.linkedin || "",
          twitter: newProfile.socialLinks?.twitter || "",
        },
      };

      setProfiles((prevProfiles) => [...prevProfiles, completeProfile]);
      return { success: true, id: newId };
    } catch (error) {
      console.error("Error adding profile:", error.message);
      return { success: false, error: error.message };
    }
  };

  const updateProfile = (id, updatedProfile) => {
    try {
      if (!id || !updatedProfile) {
        throw new Error("Invalid ID or profile data");
      }

      const profileExists = profiles.some((p) => p.id === id);
      if (!profileExists) {
        throw new Error("Profile not found");
      }

      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.id === id
            ? {
                ...profile,
                ...updatedProfile,
                id,
                location: updatedProfile.location || profile.location,
                socialLinks: {
                  ...profile.socialLinks,
                  ...updatedProfile.socialLinks,
                },
                interests: Array.isArray(updatedProfile.interests)
                  ? updatedProfile.interests
                  : profile.interests,
              }
            : profile
        )
      );
      return { success: true };
    } catch (error) {
      console.error("Error updating profile:", error.message);
      return { success: false, error: error.message };
    }
  };

  const deleteProfile = (id) => {
    try {
      if (!id) {
        throw new Error("Invalid ID");
      }

      const profileExists = profiles.some((p) => p.id === id);
      if (!profileExists) {
        throw new Error("Profile not found");
      }

      setProfiles((prevProfiles) =>
        prevProfiles.filter((profile) => profile.id !== id)
      );
      return { success: true };
    } catch (error) {
      console.error("Error deleting profile:", error.message);
      return { success: false, error: error.message };
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, addProfile, updateProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfiles() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfiles must be used within a ProfileProvider");
  }
  return context;
}
