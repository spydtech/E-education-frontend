import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

const PasswordSettings = ({ jwt }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { auth } = useSelector((state) => state);

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

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }

    try {
      const email = auth.user.email;
      const response = await axios.put(
        `http://localhost:8080/api/users/password/${email}`,
        { oldPassword, newPassword, confirmPassword },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      alert(response.data);
      setMessage(response.data);
    } catch (error) {
      setMessage(
        "Error updating password: " + (error.response?.data || error.message)
      );
    }
  };

  return (
    <div className="flex  items-center h-[500px]  justify-center rounded-lg  bg-[#000000] bg-opacity-20">
      <div className="p-0 ">
        <div className="space-y-5 w-full mt-2 block">
          <div className="w-full">
            <label className="pr-2 mb-1 text-sm text-gray-400">
              Current Password
            </label>
            <input
              type="password"
              className={`w-full p-3 border border-white rounded-lg outline-none ${
                themesBackGroundColor.find((t) => t.value === themeBg)
                  ?.colorClass || ""
              }`}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 pr-2 mb-1">
              New Password
            </label>
            <input
              type="password"
              className={`w-full p-3 border border-white rounded-lg outline-none ${
                themesBackGroundColor.find((t) => t.value === themeBg)
                  ?.colorClass || ""
              }`}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 pr-2 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              className={`w-full p-3 border border-white rounded-lg outline-none ${
                themesBackGroundColor.find((t) => t.value === themeBg)
                  ?.colorClass || ""
              }`}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handlePasswordUpdate}
              className="w-full bg-[#FF9b26] text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Update Password
            </button>
          </div>
        </div>

        {message && <p className="text-red-500 mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default PasswordSettings;
