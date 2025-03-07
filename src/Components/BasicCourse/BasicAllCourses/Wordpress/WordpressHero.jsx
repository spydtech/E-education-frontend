import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../../assetss/Basic_Courses/BasicWordpress/bgimagewordpress.jpg";

const WordpressHero = () => {
  const [courseName] = useState("Basic WordPress");
  const [coursePrice] = useState(4999);
  const [courseDuration] = useState("2 months");
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
  };

  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage:`url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4">
          Master WordPress, the most popular content management system, and gain the skills to <br/> 
           flexible,
           user-friendly websites. Whether you're a beginner  to enhance your skills, <br/>
          our course has you covered.
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-10">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};


export default WordpressHero;