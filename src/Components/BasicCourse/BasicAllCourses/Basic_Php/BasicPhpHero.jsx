import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../../../assetss/Basic_Courses/BasicPHP/bgimagephp.jpg";
const WordPhpHero = () => {
  const [courseName] = useState("Basic PHP"); // Placeholder for course name
   const [coursePrice] = useState(4999);
   const [courseDuration] = useState("2 months");
   const navigate = useNavigate();
 
   const handleEnroll = () => {
     // Navigate to the card details page with course details as parameters
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
      Empower yourself with the skills to create dynamic and interactive websites using PHP. 
      Our comprehensive course will guide you from the basics to advanced concepts
      ensuring you're ready to build robust web applications.
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

export default WordPhpHero;