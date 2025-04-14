import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../../assetss/Basic_Courses/Web-Development.jpg";

const WebDevlopmentHero = () => {
  const [courseName] = useState("Basic Web Development Fundamentals"); // Updated course name
  const [coursePrice] = useState(4999);
  const [courseDuration] = useState("3 months"); // Updated duration
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
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
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4 pb-10">
            Basic the foundations of web development. Learn HTML, CSS, and JavaScript to build<br/> 
            responsive and interactive websites. Our comprehensive course takes you from<br/>
            beginner to proficient in modern web development techniques.
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-10 ">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl "
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default WebDevlopmentHero;