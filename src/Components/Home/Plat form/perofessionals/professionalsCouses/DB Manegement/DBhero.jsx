import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Add the image import to match the reference code style
import img1 from '../../../../../../assetss/professionalimages/image3.png'; // Adjust the path accordingly

const DBhero = () => {
  const [courseName] = useState("DataBase Management");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[408px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`, // Use the imported image
        }}
      ></div>
      <div className="relative z-10 text-center text-white p-6 md:p-10">
        {/* <h1 className="text-[18px] md:text-[26px] lg:text-[28px] font-semibold text-[#f6ac14] leading-tight mb-4">
          Transform Your Database Management Strategy
          <span className="block">to Achieve Unmatched Scalability and Efficiency!</span>
        </h1> */}
        <p className="text-center text-white text-[20px] font-medium px-4 mb-6 max-w-[800px]">
          Empowering you to leverage cutting-edge database technologies,
          ensuring optimal performance, security, and cost-effectiveness for
          your business...
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

export default DBhero;
