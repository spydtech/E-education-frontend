import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../../../assetss/premium/cybersecurity1.png";
const CybersecurityHero = () => {
  const [courseName] = useState("Cyber Security"); // Placeholder for course name
  const [coursePrice] = useState(24999);
  const [courseDuration] = useState("6 months"); // Placeholder for course duration

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
  };

  return (
    <div className="relative">
      <div
        className=" w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[120px] lg:px-[200px]">
        <div className="text-white text-lg md:text-xl lg:text-2xl font-medium  text-center">
          {" "}
          In today's interconnected world, cybersecurity stands as the first{" "}
          line of defense against an array of digital threats. With cyber
          attacks becoming increasingly sophisticated,
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

export default CybersecurityHero;
