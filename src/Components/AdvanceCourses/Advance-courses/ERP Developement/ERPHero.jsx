import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img8 from '../../../../assetss/Professionals/AdvancedERP.jpg';

const ERPHero = () => {
  const [courseName] = useState("Enterprise Resource Planning");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative w-full h-[300px] lg:h-[408px] flex items-center justify-center overflow-hidden mb-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img8})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-[300px] lg:h-[408px]"></div>
      </div>
      <div className="relative z-10 text-center text-white p-6 md:p-10">
        <p className="text-center text-white lg:text-[20px] md:text-[20px]  font-medium px-4 mb-10 max-w-[800px]">
          Learn how to optimize your business operations with our detailed ERP course. From implementation strategies to core modules, gain the skills needed to successfully manage and integrate various business processes using ERP systems.
        </p>
        <button
          onClick={handleEnroll}
          className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl hover:bg-[#007bb5] transition duration-300"
          aria-label="Enroll Now"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default ERPHero;
