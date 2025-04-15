import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../assetss/premium/blockchain/2premium Block chain.jpg";
const BlockChainHero = () => {
  const [courseName] = useState("Block Chain Development");
  const [coursePrice] = useState(34999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      {/* first part */}

      <div
        className="relative w-full h-[370px]  bg-cover bg-center font-poppins"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px]"></div>


        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white lg:text-[20px] text-[16px] font-medium px-4">
            Explore blockchain technology and build innovative solutions! Our
            comprehensive
            <br />
            resources will guide you from understanding the basics to
            <br />
            developing advanced blockchain applications.
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-10">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 md:text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Second part */}
    </>
  );
};

export default BlockChainHero;
