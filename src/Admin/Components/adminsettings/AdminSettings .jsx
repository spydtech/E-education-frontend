import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PasswordSettings from "./PasswordSettings";
import ProfileSettings from "./ProfileSettings";
import ThemeSettings from "./ThemeSettings";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("password");
  const jwt = localStorage.getItem("jwt");

  const tabVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full mx-auto p-6 ">
      {/* Tab Buttons */}
      <div className="flex justify-evenly space-x-4 mb-6">
        {["password", "profile", "theme"].map((tab) => (
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
    </div>
  );
};

export default AdminSettings;
