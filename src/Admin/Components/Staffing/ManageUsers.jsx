import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmployeeTable from "./EmployeeTable";
import TraineeTable121 from "./TraineeTable121";
// import ThemeSettings from "./ThemeSettings";

const ManageUsers = () => {
  const [activeTab, setActiveTab] = useState("password");
  const jwt = localStorage.getItem("jwt");

  const tabVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full mx-auto p-6  font-poppins">
      {/* Tab Buttons */}
      <div className="flex justify-evenly space-x-4 mb-6">
        {["trainer", "authorized staff"].map((tab) => (
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
          {activeTab === "trainer" && (
            <motion.div
              key="trainer"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TraineeTable121 jwt={jwt} />
            </motion.div>
          )}
          {activeTab === "authorizedstaff" && (
            <motion.div
              key="authorizedstaff"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <EmployeeTable jwt={jwt} />
            </motion.div>
          )}
          {/* {activeTab === "theme" && (
            <motion.div
              key="theme"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ThemeSettings />
            </motion.div>
          )} */}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ManageUsers;
