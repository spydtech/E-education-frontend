import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import dp from "../../assets/women2.png";
import Navbar from "../Navbar";
import { API_BASE_URL } from "../../Config/api";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        const user = response.data;
        const fullName = `${user.firstName} ${user.lastName}`;

        setFormData({
          fullName,
          firstName: user.firstName,
          lastName: user.lastName,
          bio: user.bio || "",
          gender: user.gender || "",
          email: user.email,
          phoneNumber: user.phoneNumber || "",
          location: user.location || "",
          dateOfBirth: user.dateOfBirth || "",
          website: user.website || "",
          profilePhoto: user.profileImage || dp,
          coverImage: user.coverImage || "",
        });
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, [jwt]);

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/users/${auth.user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch({ type: "UPDATE_USER", payload: formData });
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/${auth.user.email}/profile-photo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          profilePhoto: URL.createObjectURL(file),
        }));
      }
    } catch (error) {
      console.error('Error uploading profile photo:', error);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto mt-8 p-6 bg-white ">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <label htmlFor="profilePhoto" className="cursor-pointer rounded-3xl">
            <img
              src={formData.profilePhoto}
              alt="User profile"
              className="w-24 h-24 rounded-3xl mr-4"
            />
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <h2 className="text-3xl font-bold text-[#0098f1]">
            {formData.fullName}
          </h2>
        </div>
        <div className="flex justify-center">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Date Of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                E-mail ID
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label className="block text-sm text-[#f6ac14] mb-3 font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md p-2"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
          </form>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;