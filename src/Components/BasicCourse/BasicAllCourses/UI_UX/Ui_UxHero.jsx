import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../../assetss/Basic_Courses/BasicUIUX/bgimageUIUX.jpg";

const Ui_UxHero = () => {
  const [courseName] = useState("Basics UI/UX"); // Placeholder for course name
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
        className="relative w-full h-[370px] bg-cover bg-center font-poppins"
        style={{
          backgroundImage:`url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4">
          Dive into the world of UI/UX design. Learn the principles of user-centered design, enhance your skills 
          <br/>create visually stunning and user-friendly interfaces. Our resources make  <br/>
          basics to advanced techniques in UI/UX design.
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


export default Ui_UxHero;


