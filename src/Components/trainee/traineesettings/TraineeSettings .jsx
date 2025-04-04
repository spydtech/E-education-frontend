import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PasswordSettings from "./PasswordSettings";
import ProfileSettings from "./ProfileSettings";
import ThemeSettings from "./ThemeSettings";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../../../State/Auth/Action";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const TraineeSettings = () => {
  const [activeTab, setActiveTab] = useState("password");
  const jwt = localStorage.getItem("jwt");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

   const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    localStorage.removeItem("jwt"); // Remove JWT

    // Show success popup
    setShowSuccessPopup(true);

    // Wait for animation to complete before navigating
    setTimeout(() => {
      setShowSuccessPopup(false);
      navigate("/trainelogin");
    }, 1500); // Match animation duration
  };
  // const handleLogout = () => {
  //     dispatch(logout());
  //     localStorage.removeItem("jwt");
  //     navigate("/trainelogin"); // Redirect to the login page
  //   };
  
  const tabVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full mx-auto p-6 ">
      {/* Tab Buttons */}
      <div className="flex justify-evenly space-x-4 mb-6">
        {["profile", "password", "skills", "theme"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2  border-none  transition-all duration-300 ${
              activeTab === tab
                ? "underline decoration-orange-500 text-transparent "
                : "text-gray-400"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Animated Content Switching */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeTab === "password" && (
            <motion.div
              key="password"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PasswordSettings jwt={jwt} />
            </motion.div>
          )}
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProfileSettings jwt={jwt} />
            </motion.div>
          )}
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Skills jwt={jwt} />
            </motion.div>
          )}
          {activeTab === "theme" && (
            <motion.div
              key="theme"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ThemeSettings />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex mt-5 justify-center items-center">
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
    </div>
  );
};

export default TraineeSettings;
