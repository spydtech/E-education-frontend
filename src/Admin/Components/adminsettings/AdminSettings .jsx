import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function AdminSettings() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profilePhoto: "",
  });
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("password");
  const [message, setMessage] = useState("");
  const { auth } = useSelector((state) => state);
  const jwt = localStorage.getItem("jwt");
  
  const fileInputRef = useRef(null);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users/profile", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const user = response.data;
      setProfile({
        employeeId: user.employeeId || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        profilePhoto: user.profilePhoto || "", // Fallback image
      });
    } catch (error) {
      console.error("Error fetching user profile data:", error);
      setMessage("Failed to fetch profile data. Please try again.");
    }
  };

  useEffect(() => {
    if (jwt) {
      fetchProfileData();
    }
  }, [jwt]);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }

    try {
      const email = auth.user.email; // Get the user's email dynamically
      const response = await axios.put(
        `http://localhost:8080/api/users/password/${email}`,
        { oldPassword, newPassword, confirmPassword },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      if (response.data === "password updated successfully") {
        alert(response.data);
        setMessage("");
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      setMessage("Error updating password: " + (error.response?.data || error.message));
    }
  };

  const handleProfileUpdate = async () => {
    if (!fileInputRef.current || !fileInputRef.current.files[0]) {
      console.error("No file selected.");
      return; // Exit the function if no file is selected
    }

    const formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    formData.append("firstName", profile.firstName);
    formData.append("lastName", profile.lastName);
    formData.append("email", profile.email);
    formData.append("phoneNumber", profile.phoneNumber);

    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/profile/update/${auth.user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Profile updated successfully:", response.data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile: " + error.message);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (!file) return; // If no file is selected, do nothing

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/users/${auth.user.email}/profile-photo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data", // Required for file upload
          },
        }
      );

      if (response.status === 200) {
        // Update the profile state with the new profile photo
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePhoto: URL.createObjectURL(file), // Use the uploaded image immediately
        }));
        console.log("Profile photo updated successfully");
      }
    } catch (error) {
      console.error("Error uploading profile photo:", error);
    }
  };

  const themes = [
    { name: "Grey Light", value: "grey-light", colorClass: "bg-gray-100 text-black" },
    { name: "Light", value: "light", colorClass: "bg-gradient-to-b from-[#4B6CB7] to-[#182848] text-white" },
    { name: "Liner Blue", value: "liner-blue", colorClass: "bg-gradient-to-b from-[#C04848] to-[#480048] text-white" },
    { name: "Linear", value: "linear", colorClass: "bg-gradient-to-b from-[#40E0D0] via-[#FF8C00] to-[#FF0080] text-white" },
    { name: "Green", value: "green", colorClass: "bg-gradient-to-b from-[#00BF8F] to-[#001510] text-white" },
    { name: "Red", value: "red", colorClass: "bg-gradient-to-b from-[#007adf] to-[#00ecbc] text-white" },
    { name: "Linear Blue", value: "linear-blue", colorClass: "bg-gradient-to-b from-[#2C3E50] to-[#4CA1AF] text-white" },
  ];

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const selectedTheme = themes.find((t) => t.value === newTheme);
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Admin Settings</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-6">
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "password" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("password")}
        >
          Update Password
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile Settings
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "theme" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("theme")}
        >
          Theme Settings
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "password" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Update Password</h2>
            <div className="space-y-4 mt-4">
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Current Password"
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="New Password"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Confirm New Password"
              />
              <button
                onClick={handlePasswordUpdate}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Update Password
              </button>
              {message && <p className="text-red-500 mt-2">{message}</p>}
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Profile Settings</h2>
            <div className="space-y-4 mt-4">
              {/* Profile Image Upload */}
              <div className="flex items-center space-x-4">
                <img
                  src={profile.profilePhoto || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="file:bg-blue-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
                />
              </div>
              {/* Name */}
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="First Name"
              />
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="Last Name"
              />
              {/* Email */}
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="Email"
              />
              {/* Mobile */}
              <input
                type="text"
                value={profile.phoneNumber}
                onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                className="w-full p-3 border rounded-lg"
                placeholder="Mobile"
              />
              {/* ID */}
              <input
                type="text"
                value={profile.employeeId}
                disabled
                className="w-full p-3 border rounded-lg"
                placeholder="User ID"
              />
              <button
                onClick={handleProfileUpdate}
                className="w-full bg-blue-500 text-white py-3 rounded-lg"
              >
                Update Profile
              </button>
            </div>
          </div>
        )}

        {activeTab === "theme" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Theme Settings</h2>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between gap-4">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.value}
                    onClick={() => handleThemeChange(themeOption.value)}
                    className={`w-20 h-20 rounded-lg transition-all duration-300 ${
                      theme === themeOption.value
                        ? "border-4 border-blue-500"
                        : "border-2 border-gray-300"
                    } ${themeOption.colorClass}`}
                  >
                    {themeOption.name}
                  </button>
                ))}
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
                onClick={() => alert(`Theme switched to ${theme}`)}
              >
                Confirm Theme
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminSettings;
