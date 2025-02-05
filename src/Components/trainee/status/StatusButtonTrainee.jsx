import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const StatusButtonTrainee = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastLoginDate, setLastLoginDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("tableDataTrainee")) || defaultTrainees;
    const today = new Date().toLocaleDateString();
    const todayData = storedData.find((data) => data.date === today);

    if (todayData && todayData.loginTime && !todayData.logoutTime) {
      setIsLoggedIn(true);
      setLastLoginDate(today);
    }
  }, []);

  const handleClick = () => {
    const currentTime = new Date();
    const currentDate = currentTime.toLocaleDateString();
    const storedData =
      JSON.parse(localStorage.getItem("tableDataTrainee")) || defaultTrainees;

    if (isLoggedIn) {
      const logoutTime = currentTime.toISOString();
      const duration = calculateDuration(storedData[0].loginTime, logoutTime);

      const updatedData = storedData.map((trainee) => {
        if (trainee.date === currentDate) {
          return { ...trainee, logoutTime, duration };
        }
        return trainee;
      });

      localStorage.setItem("tableDataTrainee", JSON.stringify(updatedData));
      setIsLoggedIn(false);
    } else {
      if (storedData.some((data) => data.date === currentDate)) {
        alert("You have already checked in today!");
        return;
      }

      const loginTime = currentTime.toISOString();
      const newEntry = {
        id: 1,
        name: "Dany Doe",
        email: "dany.doe@example.com",
        date: currentDate,
        loginTime,
        logoutTime: null,
        duration: null,
      };

      storedData.push(newEntry);
      localStorage.setItem("tableDataTrainee", JSON.stringify(storedData));
      setIsLoggedIn(true);
      setLastLoginDate(currentDate);
    }
  };

  const calculateDuration = (loginTime, logoutTime) => {
    const diffInMs = new Date(logoutTime) - new Date(loginTime);
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const defaultTrainees = [];

  return (
    <div className="flex  items-center justify-end">
      <button
        onClick={handleClick}
        className={`px-4 py-2 font-bold text-white rounded ${
          isLoggedIn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isLoggedIn ? "Check Out" : "Check In"}
      </button>
      {/* <button
        onClick={() => navigate("status/trainee")}
        className="px-1 py-2 text-white rounded"
      >
        <FaArrowCircleRight className="h-8 w-8 text-black" />
      </button> */}
    </div>
  );
};

export default StatusButtonTrainee;