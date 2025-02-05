import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PowerBiHero = () => {
  const [courseName] = useState("Master Power BI");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726473509/WhatsApp_Image_2024-09-15_at_11.16.11_PM_1_uilojh.jpg")' }}>
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <p className="text-center text-white text-base md:text-lg lg:text-xl font-medium max-w-[800px]">
      Learn how to leverage the power of Power BI to create stunning data visualizations and insightful reports. Our comprehensive course will guide you through the essential features and best practices for data analysis and visualization with Power BI.
    </p>
  </div>
  <div className="absolute inset-0 flex items-end justify-center pb-4 md:pb-6 lg:pb-10">
  <button
  onClick={handleEnroll}
  className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-[20px] lg:px-8 lg:py-4 lg:text-xl font-medium text-white bg-[#0098f1] rounded-xl"
>
  Enroll Now
</button>

  </div>
</div>


    </>
  );
};

export default PowerBiHero;
