import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import {  useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../../../Config/api";
// import { useNavigate } from "react-router-dom";

const ProfileSettings = ({ jwt }) => {
  const { auth } = useSelector((state) => state);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  // const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  
  const handleLogout = () => {
    localStorage.removeItem("jwt");

    setShowSuccessPopup(true); // Show success popup
    setTimeout(() => {
      setShowSuccessPopup(false);
      navigate("/admin/*"); // Redirect after animation
    }, 1500);

    setShowPopup(false);
  };
  
  const [profile, setProfile] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profilePhoto: "",
  });
 
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

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/users/profile`,
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    if (jwt) {
      fetchProfileData();
    }
  }, [jwt]);

  const handleProfileUpdate = async () => {
    if (!fileInputRef.current || !fileInputRef.current.files[0]) return;

    const formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    formData.append("firstName", profile.firstName);
    formData.append("lastName", profile.lastName);
    formData.append("email", profile.email);
    formData.append("phoneNumber", profile.phoneNumber);

    try {
      await axios.put(
        `${API_BASE_URL}/api/users/profile/update/${auth.user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
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
                className={` w-full p-3 text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 ${
                  themesBackGroundColor.find((t) => t.value === themeBg)
                    ?.colorClass || ""
                }`}
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
                className={` w-full p-3 text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 ${
                  themesBackGroundColor.find((t) => t.value === themeBg)
                    ?.colorClass || ""
                }`}
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
                className={` w-full p-3 text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 ${
                  themesBackGroundColor.find((t) => t.value === themeBg)
                    ?.colorClass || ""
                }`}
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
                className={` w-full p-3 text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 ${
                  themesBackGroundColor.find((t) => t.value === themeBg)
                    ?.colorClass || ""
                }`}
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm text-gray-400">User ID</label>
              <input
                type="text"
                value={profile.employeeId}
                disabled
                className={` w-full p-3 text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 ${
                  themesBackGroundColor.find((t) => t.value === themeBg)
                    ?.colorClass || ""
                }`}
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
        <div className="flex justify-center items-center">
          <Link>
            <button
              className="flex items-center justify-center border-[#ff5454] rounded-lg bg-transparent border w-60 py-3"
              onClick={() => setShowPopup(true)}
            >
              <span className="mr-2 text-[#ff5454]">Log Out</span>
              <MdOutlineLogout className="text-[#ff5454] w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
            <h3 className="text-lg text-black mb-4">
              Are you sure you want to log out?
            </h3>
            <div className="flex justify-between  space-x-4">
              <button
                onClick={handleLogout} // Call the logout function
                className="flex items-center text-white justify-center bg-[#ff9b26] rounded-lg  w-60 py-3"
              >
                Yes
              </button>
              <button
                onClick={() => setShowPopup(false)} // Close the popup without logging out
                className="flex items-center text-[#ff9b26] bg-white justify-center border-[#ff9b26] rounded-lg bg-transparent border w-60 py-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessPopup && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-white  z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className=" w-96 p-8  flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-green-500  flex justify-center items-center text-9xl mb-4">
              <i className="fas fa-check-circle"></i>{" "}
              {/* You can replace with your own check icon */}
            </div>
            {/* <h3 className="text-lg text-black">Successfully Logged Out</h3> */}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProfileSettings;
