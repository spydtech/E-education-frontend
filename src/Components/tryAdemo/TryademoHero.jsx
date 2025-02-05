import React from "react";
import homeimage from "../../assetss/tryademo/demo.png";
import { FaArrowUp } from "react-icons/fa";

const TryademoHero = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-12">
        {/* Left Side: Image */}
        <div className="flex-shrink-0 md:w-1/2 flex items-center justify-center mb-8 md:mb-0 relative">
          <img
            src={homeimage}
            alt="Home"
            className="object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] max-w-full"
          />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Explore our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-radial from-yellow-700 via-yellow-500 to-yellow-300">
              E-education
            </span>{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Courses
            </span>
          </h1>

          <div className="text-lg sm:text-xl text-yellow-300 md:text-2xl font-medium">
            Join Our Interactive Demo
          </div>

          <p className="text-md sm:text-lg md:text-xl font-semibold text-gray-800">
            Step into the world-class Technology
          </p>

          <button className="flex items-center mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
            Explore now <FaArrowUp className="ml-2 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryademoHero;
