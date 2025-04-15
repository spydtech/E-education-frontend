// import React from "react";
import React, { useState } from "react";
// import axios from "axios";
import hero from "../../../../../../assetss/student/dataScience/visualization/DataVisualization.png";
import { useNavigate } from "react-router-dom";
const DatavisualisationHero = () => {
  const [courseName] = useState("Data Visualization"); // Placeholder for course name
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726473780/WhatsApp_Image_2024-09-15_at_11.16.11_PM_2_pmcwvr.jpg")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
  <p className="text-center text-white text-[16px] md:text-[20px] font-medium pb-5 leading-relaxed">
  Explore the power of data visualization in transforming complex datasets into intuitive
  <span className="hidden md:inline"> <br /></span>
  empower success and keep you ahead of the competition.
  <span className="hidden md:inline"> <br /></span>
  visual narratives. Our data visualization solutions
  
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
</div> */}

      <div className="relative">
        <div
          className=" w-full h-[370px]  md:h-[470px] bg-cover bg-start"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
          

        </div>
        <div className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[120px] lg:px-[200px]">
          <div className="text-white text-lg md:text-xl lg:text-2xl font-medium  text-center">
            {" "}
            Explore the power of data visualization in transforming complex
            datasets into intuitive empower success and keep you ahead of the
            competition. visual narratives. Our data visualization solutions
          </div>

          <button
            onClick={handleEnroll}
            className="absolute bottom-5 lg:bottom-12 px-3 py-2 md:px-5 md:py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl  transition duration-200"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default DatavisualisationHero;
