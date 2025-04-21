import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../../../assetss/professionalimages/FulstackWordPressimage.png";

const AdvanceWordpressHero = () => {
  const [courseName] = useState("Advanced WordPress Development");
  const [courseDuration] = useState("4 months");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
  };

  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${Img})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px]"></div>
        <div className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[120px] lg:px-[200px]">
          <div className="text-white text-lg md:text-xl lg:text-2xl font-medium text-center">
            Advanced WordPress is a powerful tool that enables developers to
            create dynamic and interactive websites. This course will teach you
            how to leverage the full potential of WordPress, from custom themes
            to plugin development.
          </div>
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

export default AdvanceWordpressHero;
