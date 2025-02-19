import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";

const ProfileSettings = ({ jwt }) => {
  const { auth } = useSelector((state) => state);

  const [profile, setProfile] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profilePhoto: "",
  });

  const [loading, setLoading] = useState(true);

  const themesBackGroundColor = [
    { value: "light", colorClass: "bg-light-theme" },
    { value: "dark", colorClass: "bg-dark-theme" },
    { value: "grey-light", colorClass: "bg-[#494949] text-white" },
    { value: "teal", colorClass: "bg-[#007b7f] text-white" },
    { value: "orange", colorClass: "bg-[#cc5500] text-white" },
    { value: "purple", colorClass: "bg-[#752d5c] text-white" },
    { value: "dark-blue", colorClass: "bg-[#0451bd] text-white" },
    { value: "charcoal", colorClass: "bg-[#2e2e2e] text-white" },
    { value: "aqua", colorClass: "bg-[#00a6a6] text-white" },
    { value: "deep-red", colorClass: "bg-[#a32638] text-white" },
  ];

  const [themeBg, setThemeBg] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const selectedTheme = themesBackGroundColor.find(
      (t) => t.value === themeBg
    );
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass;
    }
  }, [themeBg]);

  const fileInputRef = useRef(null);

  // Fetch Trainee Profile
  const fetchTraineeProfile = async () => {
    if (!jwt) {
      console.error("JWT token is missing or invalid.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:8080/trainee/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const { data } = response;
      console.log("Fetched Profile:", data);

      setProfile({
        userId: data.userId || "",
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "example@mail.com",
        phoneNumber: data.phoneNumber || "1234567890",
        profilePhoto: data.profilePhoto || "https://via.placeholder.com/150",
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching profile:", error);
      alert(`Error fetching profile: ${error.response?.data?.message || "Something went wrong"}`);
    }
  };

  useEffect(() => {
    fetchTraineeProfile();
  }, []);

  // Handle Profile Update
  const handleProfileUpdate = async () => {
    if (!jwt) {
      console.error("JWT token is missing or invalid.");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:8080/trainee/update/trainee/email",
        profile, // Sending the updated profile data
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Profile updated successfully!");
      fetchTraineeProfile(); // Refresh profile data
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(`Error updating profile: ${error.response?.data?.message || "Something went wrong"}`);
    }
  };

  return (
    <div className="space-y-10">
      <div className="bg-[#000000] bg-opacity-20 text-white p-8 rounded-2xl shadow-md w-auto mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <img
              src={profile.profilePhoto || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-500"
            />
            <label
              htmlFor="fileUpload"
              className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-full cursor-pointer"
            >
              <FiEdit className="text-white text-xl" />
            </label>
            <input
              type="file"
              ref={fileInputRef}
              id="fileUpload"
              className="hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="text-sm text-gray-400">First Name</label>
            <input
              type="text"
              value={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
              className="w-full p-3 text-black border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Last Name</label>
            <input
              type="text"
              value={profile.lastName}
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
              className="w-full p-3 text-black border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="text"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full p-3 text-black border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Mobile Number</label>
            <input
              type="text"
              value={profile.phoneNumber}
              onChange={(e) =>
                setProfile({ ...profile, phoneNumber: e.target.value })
              }
              className="w-full p-3 text-black border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm text-gray-400">User ID</label>
            <input
              type="text"
              value={profile.userId}
              disabled
              className="w-full p-3 text-black border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>

        <button
          onClick={handleProfileUpdate}
          className="w-full mt-6 bg-[#FF9b26] text-white py-3 rounded-lg text-lg font-semibold"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
