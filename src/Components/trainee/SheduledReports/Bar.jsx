import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialDays = 30;
  const [days, setDays] = useState(initialDays);

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + initialDays);

    const updateDays = () => {
      const now = new Date();
      const timeDifference = endDate - now;
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDays(daysRemaining > 0 ? daysRemaining : 0);
    };

    updateDays();

    const timer = setInterval(() => {
      updateDays();
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, [initialDays]);

  const calculateDegree = () => (days / initialDays) * 360;

  const getGradientColor = () => {
    if (days > 20) return "#007f5f";
    if (days > 10) return "yellow";
    return "red";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center w-80 h-80 ">
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            background: `conic-gradient(${getGradientColor()} ${calculateDegree()}deg, white 0deg 360deg)`,
          }}
        ></div>
        <div className="absolute flex justify-center items-center w-32 h-32 bg-white rounded-full">
          <span className="text-2xl font-bold">{days} Days</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
