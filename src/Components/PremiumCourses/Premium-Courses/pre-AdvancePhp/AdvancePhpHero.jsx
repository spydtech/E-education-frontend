import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Img from "../../../../assetss/professionalimages/AdvancePhp.png";
import Img from "../../../../assetss/professionalimages/AdvancedPHP.jpg";

const AdvancePhpHero = () => {
  const [courseName] = useState("Advance PHP");

  const [coursePrice] = useState(14999);
  const [courseDuration] = useState("4 months");
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
  };

  return (
    <>
       <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: `url(${Img})`}}>

  <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px]"></div>

  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4 max-w-[800px]">
    Elevate your PHP skills by diving deep into advanced topics like object-oriented
    programming, frameworks, and performance optimization. This course is
     designed to help you build scalable and high-performance web
      applications with confidence.
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

export default AdvancePhpHero;
