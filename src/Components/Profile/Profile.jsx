import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import dp from "../../assets/women2.png";
import Navbar from "../Navbar";
import { API_BASE_URL } from "../../Config/api";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    dateOfBirth: "",
    website: "",
    gender: "",
    profilePhoto: dp,
  });
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        console.log("Fetching user profile...");
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });

        console.log("API Response:", response.data);
        const user = response.data;
        
        // Check what fields are actually available in the response
        console.log("Available user fields:", Object.keys(user));
        
        // Create full name safely
        const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();

        // Initialize formData with default values for missing fields
        const updatedFormData = {
          fullName,
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          location: user.location || "",
          dateOfBirth: user.dateOfBirth || "",
          website: user.website || "",
          gender: user.gender || "",
          profilePhoto: dp, // Default image
        };

        console.log("Form data to set:", updatedFormData);
        setFormData(updatedFormData);

        // Try to fetch profile photo if profilePhoto field exists
        if (user.profilePhoto !== null && user.profilePhoto !== undefined) {
          try {
            console.log("Fetching profile photo...");
            const profilePhotoResponse = await axios.get(
              `${API_BASE_URL}/api/users/${user.email}/profile-photo`,
              { 
                responseType: "arraybuffer", 
                headers: { Authorization: `Bearer ${jwt}` } 
              }
            );

            if (profilePhotoResponse.data) {
              const profilePhotoBlob = new Blob([profilePhotoResponse.data], { type: "image/jpeg" });
              const profilePhotoUrl = URL.createObjectURL(profilePhotoBlob);
              
              setFormData(prev => ({
                ...prev,
                profilePhoto: profilePhotoUrl
              }));
              console.log("Profile photo loaded successfully");
            }
          } catch (photoError) {
            console.warn("Profile photo not available or error fetching:", photoError.message);
            // Keep using default image
          }
        } else {
          console.log("No profile photo in user data");
        }

      } catch (error) {
        console.error("Error fetching user profile data:", error);
        if (error.response) {
          console.error("Response status:", error.response.status);
          console.error("Response data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
      }
    };

    if (jwt) {
      fetchUserProfile();
    } else {
      console.warn("No JWT token found in localStorage");
    }
  }, [jwt]);

  const handleSave = async () => {
    try {
      // Prepare data for backend - only send fields that exist
      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber || null,
        location: formData.location || null,
        dateOfBirth: formData.dateOfBirth || null,
        website: formData.website || null,
        gender: formData.gender || null,
      };

      console.log("Sending update data:", updateData);

      const response = await axios.put(
        `${API_BASE_URL}/api/users/profile/update`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log("Update response:", response.data);
      
      if (response.status === 200) {
        // Update local state with the response from server
        const updatedUser = response.data;
        const fullName = `${updatedUser.firstName || ""} ${updatedUser.lastName || ""}`.trim();
        
        setFormData(prev => ({
          ...prev,
          fullName,
          firstName: updatedUser.firstName || "",
          lastName: updatedUser.lastName || "",
          phoneNumber: updatedUser.phoneNumber || "",
          location: updatedUser.location || "",
          dateOfBirth: updatedUser.dateOfBirth || "",
          website: updatedUser.website || "",
          gender: updatedUser.gender || "",
        }));
        
        dispatch({ 
          type: "UPDATE_USER", 
          payload: {
            ...auth.user,
            ...updatedUser
          } 
        });
        
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
        alert(`Error updating profile: ${error.response.data.message || "Unknown error"}`);
      } else {
        alert("Error updating profile. Please try again.");
      }
    }
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Special handling for fullName - split into first and last names
    if (id === "fullName") {
      const names = value.split(" ");
      const firstName = names[0] || "";
      const lastName = names.slice(1).join(" ") || "";
      
      setFormData(prevFormData => ({
        ...prevFormData,
        fullName: value,
        firstName,
        lastName,
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (e.g., 5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB");
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append('file', file);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/profile-photo`,
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      if (response.status === 200 || response.status === 201) {
        // Update the profile photo preview
        const profilePhotoUrl = URL.createObjectURL(file);
        setFormData(prevFormData => ({
          ...prevFormData,
          profilePhoto: profilePhotoUrl,
        }));
        alert("Profile photo updated successfully!");
      }
    } catch (error) {
      console.error('Error uploading profile photo:', error);
      if (error.response) {
        alert(`Error uploading photo: ${error.response.data.message || "Unknown error"}`);
      } else {
        alert("Error uploading profile photo. Please try again.");
      }
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto mt-8 p-6 bg-white">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <label htmlFor="profilePhoto" className="cursor-pointer rounded-3xl relative">
            <img
              src={formData.profilePhoto}
              alt="User profile"
              className="w-24 h-24 rounded-3xl mr-4 object-cover border-2 border-gray-300"
              onError={(e) => {
                console.error("Error loading profile image, using fallback");
                e.target.src = dp;
              }}
            />
            <div className="absolute bottom-0 right-4 bg-blue-500 text-white rounded-full p-1">
              <FaRegEdit size={16} />
            </div>
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <div>
            <h2 className="text-3xl font-bold text-[#0098f1]">
              {formData.fullName || "User Name"}
            </h2>
            <p className="text-gray-600">{formData.email || "user@example.com"}</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
                placeholder="Enter your full name"
              />
              {isEditing && (
                <FaRegEdit className="absolute top-10 right-3 text-gray-400" />
              )}
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
                placeholder="Enter phone number"
              />
              {isEditing && (
                <FaRegEdit className="absolute top-10 right-3 text-gray-400" />
              )}
            </div>

            {/* Date of Birth */}
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Date Of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-10 right-3 text-gray-400" />
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                E-mail ID
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                disabled={true} // Email should not be editable usually
              />
              <FaRegEdit className="absolute top-10 right-3 text-gray-400" />
            </div>

            {/* Gender */}
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              {isEditing && (
                <FaRegEdit className="absolute top-10 right-3 text-gray-400" />
              )}
            </div>

            {/* Location */}
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
                placeholder="Enter your location"
              />
              {isEditing && (
                <FaRegEdit className="absolute top-10 right-3 text-gray-400" />
              )}
            </div>

            {/* Website */}
            <div className="relative md:col-span-2">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Website
              </label>
              <input
                type="url"
                id="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
                placeholder="https://example.com"
              />
              {isEditing && (
                <FaRegEdit className="absolute top-10 right-3 text-gray-400" />
              )}
            </div>
          </form>
        </div>

        <div className="flex justify-end mt-8 space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-[#f6ac14] text-white px-6 py-2 rounded-lg hover:bg-[#e59b13] transition duration-300 flex items-center"
            >
              <FaRegEdit className="mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;