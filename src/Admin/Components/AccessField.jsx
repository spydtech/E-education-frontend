import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const AccessField = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const themes = localStorage.getItem("theme");
  const handleNavigateToTrainee = () => {
    navigate("/admin/register-trainee");
  };

  const handleNavigateToEmployee = () => {
    navigate("/admin/register-employee");
  };
  //#001510  #00BF8F
  return (
    <div className="flex justify-center p-8 px-6 min-h-screen">
      <div
        className={`   rounded-lg shadow-lg w-68 h-80 md:w-[700px]  md:h-[420px]  `}
      >
        <div className="w-auto h-24 bg-[#153243]  rounded-t-lg flex justify-center items-center">
          <h2 className="md:lg:text-2xl font-bold text-xl  text-white ">
            Choose Access Type
          </h2>
        </div>

        <div className=" justify-center items-center px-6 flex mt-10">
          <button
            className="w-[250px] h-[60px] lg:h-[80px] lg:w-[350px] md:lg:text-xl px-8 font-medium lg:px-4 py-3 mb-4 text-white bg-[#00BF8F]   rounded-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleNavigateToTrainee}
          >
            Register As A Trainee
          </button>
        </div>
        <div className=" justify-center items-center px-6 flex mt-5">
          <button
            className="w-[250px] h-[60px] lg:h-[80px] lg:w-[350px] md:lg:text-xl text-base px-8 font-medium lg:px-4 py-3 text-white bg-[#00BF8F]  rounded-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleNavigateToEmployee}
          >
            Register As A Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessField;
