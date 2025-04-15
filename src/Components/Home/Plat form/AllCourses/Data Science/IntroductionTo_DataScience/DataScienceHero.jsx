import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
import hero from "../../../../../../assetss/student/dataScience/dswithpython/DataScience.jpg";
const DataScienceHero = () => {
  const [courseName] = useState("Introduction to Data Science"); // Placeholder for course name
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    // <div className="relative">
    //   <div
    //     className=" w-full h-[370px] bg-cover bg-center"
    //     style={{
    //       backgroundImage:
    //         'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726487963/image_10_tqfmry.png")',
    //     }}
    //   >
    //     </div>
    //     <div className="  absolute inset-0 flex items-center flex-col justify-center text-center p-4 ">
    //       {/* <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-6">
    //   Discover how Data Science can transform raw data into actionable insights,
    //   <span className="hidden md:inline"> <br /></span>
    //   empowering your business to make data-driven decisions and
    //   <span className="hidden md:inline"> <br /></span>
    //   stay ahead of the competition...
    // </p> */}

    //       <div className=" flex justify-center items-center inset-0 text-teal-200 text-lg md:text-xl lg:text-2xl font-medium mb-6 border border-white">
    //         {" "}

    //         Discover how Data Science turns raw data into actionable insights, empowering your business to make data-driven decisions and stay competitive.
    //       </div>
    //     </div>
    //     <div className="absolute inset-0 flex items-end justify-center pb-10">
    //       <button
    // onClick={handleEnroll}
    // className="px-6 py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl hover:bg-[#007bb5] transition duration-200"
    //       >
    //         Enroll Now
    //       </button>
    //     </div>

    // </div>

    <div className="relative">
      <div
        className=" w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
       
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[120px] lg:px-[200px]">
        <div className="text-white text-lg md:text-xl lg:text-2xl font-medium  text-center">
          {" "}
          Discover how Data Science can transform raw data into actionable
          insights, empowering your business to make data-driven decisions and
          stay ahead of the competition
        </div>

        <button
          onClick={handleEnroll}
          className="absolute bottom-5 lg:bottom-12 px-3 py-2 md:px-5 md:py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl  transition duration-200"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default DataScienceHero;
