import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../assetss/premium/cloudcomputing/AWS.jpg";
const CloudComputingHero = () => {
  const [courseName] = useState("Cloud with AWS");
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white lg:text-[20px] text-[16px] font-medium px-4">
            Learn how to leverage the power of Amazon Web Services to build
            scalable, reliable, and secure cloud solutions.
            <br />
            Our comprehensive course will guide you through the essential
            services
            <br />
            and best practices for cloud computing with AWS.
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

export default CloudComputingHero;
