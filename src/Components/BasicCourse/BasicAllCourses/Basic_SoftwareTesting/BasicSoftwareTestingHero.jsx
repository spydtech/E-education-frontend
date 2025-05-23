import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../../../assetss/Basic_Courses/software-testing1s.jpg";
const BasicSoftwareTestingHero = () => {
  const [courseName] = useState("Basic Software Testing"); // Placeholder for course name
  const [coursePrice] = useState(4999);
  const [courseDuration] = useState("2 months");
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", {
      state: { courseName, coursePrice, courseDuration },
    });
  };
  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center font-poppins"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div

       
className="absolute inset-0 bg-black  md:h-[370px] w-full  items-center bg-cover opacity-65"

      
     ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4">
            Empower yourself with the skills to ensure the quality and
            reliability of software through effective testing.
            <br/> Our comprehensive
            course will guide you from the basics to advanced concepts,
            <br/> ensuring
            you're ready to perform robust software testing in real-world
            applications.
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

export default BasicSoftwareTestingHero;
