import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../../../assetss/professional/ethicalHacking/advanced/EthicalHacking.jpg";

const AdvanceEthicalHackingHero = () => {
  const [courseName] = useState("Advanced Ethical Hacking");
  const [coursePrice] = useState(34999);
  const [courseDuration] = useState("6 Months");
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
  };

  return (
    <>
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
            Ethical hacking serves as the frontline defense in identifying and
            mitigating vulnerabilities. As cyber threats grow more advanced,
            ethical hackers play a crucial role in safeguarding sensitive
            information
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

export default AdvanceEthicalHackingHero;
