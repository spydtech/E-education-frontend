// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FaReact } from "react-icons/fa";
const ReactJsHero = () => {
  const [courseName] = useState("React Js Mastery"); // Placeholder for course name
  const [coursePrice] = useState(34999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="flex py-2 mt-4 px-6 md:px-20  items-center justify-center bg-white  overflow-hidden">
        <div className="flex flex-col-reverse mx-2  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 ">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center md:text-left  font-medium">
              Revolutionize Web Development!
            </h2>
            <h3 className="mt-4 mx-2  md:mt-4 text-md lg:text-xl text-center md:text-left  ">
              ReactJs is declarative, component based design simplifies UI
              creation for top-notch performance. Whether you're a novice or
              expert, React equips you to craft responsive, scalable web apps.
              Dive in now and redefine your development journey!
            </h3>
            <div className="mt-10 mx-2  flex flex-col sm:flex-row justify-center  md:justify-start">
              <button
                onClick={handleEnroll}
                className=" ml-2 sm:w-40 p-2 sm:px-4 sm:py-4 rounded  font-semibold text-lg bg-[#0098f1] text-white "
              >
                Get started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <FaReact className=" md:w-[400px] md:h-[400px] w-64 h-64 animate-spin-slow text-[#0098f1]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactJsHero;
