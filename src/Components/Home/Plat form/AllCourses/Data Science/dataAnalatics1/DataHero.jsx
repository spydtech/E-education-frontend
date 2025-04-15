import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
import hero from "../../../../../../assetss/professionalimages/DataAnalytics.jpg";

const DataHero = () => {
  const [courseName] = useState("Data Analytics");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative">
      <div
        className="w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[120px] lg:px-[200px]">
        <div className="text-white text-lg md:text-xl lg:text-2xl font-medium text-center">
          Master the art of Data Analytics by transforming raw data into
          actionable insights. Learn how to leverage tools like Excel, SQL,
          Python, and Power BI to make data-driven decisions that shape the
          future of business.
        </div>

        <button
          onClick={handleEnroll}
          className="absolute bottom-5 lg:bottom-12 px-3 py-2 md:px-5 md:py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl transition duration-200"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default DataHero;
