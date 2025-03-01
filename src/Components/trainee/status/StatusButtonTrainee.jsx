import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../Config/api";
import axios from "axios";

const StatusButtonTrainee = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginTime, setLoginTime] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);
  const [duration, setDuration] = useState(null);
  const [trainer, setTrainer] = useState(null);
  
  useEffect(() => {
    const storedTrainer = JSON.parse(localStorage.getItem("trainerData"));
    if (storedTrainer) {
      setTrainer(storedTrainer);
    }

    const storedLoginTime = localStorage.getItem("loginTime");
    const storedLogoutTime = localStorage.getItem("logoutTime");

    if (storedLoginTime && !storedLogoutTime) {
      setIsLoggedIn(true);
      setLoginTime(new Date(storedLoginTime));
    } else if (storedLogoutTime) {
      setIsLoggedIn(false);
      setLogoutTime(new Date(storedLogoutTime));
      setDuration(calculateDuration(storedLoginTime, storedLogoutTime));
    }
  }, []);

  const handleCheckInOut = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      alert("Unauthorized. Please log in.");
      return;
    }
  
    const status = isLoggedIn ? "CHECKOUT" : "CHECKIN"; // Match backend enum
    const apiUrl = `${API_BASE_URL}/api/trainee/attendance/checkIn/checkOut?status=${status}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`, // ✅ Correct
        //  "Content-Type": "multipart/form-data",
        },
      });
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log("Attendance recorded successfully:", result);
  
      if (status === "CHECKIN") {
        localStorage.setItem("loginTime", new Date().toISOString());
        setLoginTime(new Date());
        setIsLoggedIn(true);
      } else {
        localStorage.setItem("logoutTime", new Date().toISOString());
        setLogoutTime(new Date());
        setDuration(calculateDuration(localStorage.getItem("loginTime"), new Date().toISOString()));
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error recording attendance:", error);
      alert("Error: Could not record attendance.");
    }
  };
  

  const calculateDuration = (start, end) => {
    const diffInMs = new Date(end) - new Date(start);
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleCheckInOut}
        className={`px-4 py-2 font-bold text-white rounded ${
          isLoggedIn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isLoggedIn ? "Check Out" : "Check In"}
      </button>

      {trainer && (
        <p className="mt-2 text-gray-700">👤 Trainer: {trainer.name} ({trainer.email})</p>
      )}

      {loginTime && (
        <p className="mt-2 text-gray-700">✅ Logged in at: {loginTime.toLocaleTimeString()}</p>
      )}

      {logoutTime && (
        <p className="mt-2 text-gray-700">⏳ Logged out at: {logoutTime.toLocaleTimeString()}</p>
      )}

      {duration && <p className="mt-2 text-blue-500">Total Session Time: {duration}</p>}
    </div>
  );
};

export default StatusButtonTrainee;
