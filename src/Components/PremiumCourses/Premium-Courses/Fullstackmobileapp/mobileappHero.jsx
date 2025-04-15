import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../../../assetss/premium/MobileAPP.jpg';

const MobileappHero = () => {
  const [courseName] = useState("Full Stack Mobile App");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative w-full h-[370px] lg:h-[408px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
       
      </div>
      <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px] lg:h-[408px]"></div>
      <div className="relative z-10 text-center text-white p-6 md:p-10">
        {/* <h1 className="text-[18px] md:text-[26px] lg:text-[28px] font-semibold text-[#f6ac14] leading-tight mb-4">
          Master Mobile App Development and Build Next-Gen Applications!
        </h1> */}
        <p className="text-center text-white text-[20px] font-medium px-4 mb-10 max-w-[800px]">
          Dive into the world of mobile app development, from iOS and Android platforms to cross-platform frameworks like React Native and Flutter. Unlock the potential to create innovative and user-friendly mobile experiences.
        </p>
        <button
          onClick={handleEnroll}
          className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default MobileappHero;
