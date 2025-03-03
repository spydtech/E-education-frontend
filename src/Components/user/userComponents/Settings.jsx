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
    <div className="w-full mx-auto p-6 ">
      {/* Tab Buttons */}
      <div className="flex justify-evenly space-x-4 mb-6">
        {["update password", "payment history", "profile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2  0 ${
              activeTab === tab
                ? "  border-b-[4px] border-b-blue-500  transition-all duration-30 "
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
