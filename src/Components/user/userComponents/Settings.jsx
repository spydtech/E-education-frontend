import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UpdatePassword from "../../Profile/updatepassword/Update_Password";
import PaymentHistory from "../../Profile/Payment/PaymentHistory";
import UserProfile from "../../Profile/Profile";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("password");
  const jwt = localStorage.getItem("jwt");

  const tabVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full md:max-w-6xl max-w-3xl mx-auto p-4 md:p-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center md:justify-evenly space-x-2 md:space-x-4 mb-4">
        {["update password", "payment history", "profile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-200 ${
              activeTab === tab
                ? "border-b-4 border-blue-500 font-semibold text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Animated Content Switching */}
      <div className="relative bg-white p-4 md:p-6 rounded-lg ">
        <AnimatePresence mode="wait">
          {activeTab === "update password" && (
            <motion.div
              key="password"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <UpdatePassword jwt={jwt} />
            </motion.div>
          )}
          {activeTab === "payment history" && (
            <motion.div
              key="paymenthistory"
              variants={tabVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PaymentHistory jwt={jwt} />
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
              <UserProfile jwt={jwt} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Settings;
