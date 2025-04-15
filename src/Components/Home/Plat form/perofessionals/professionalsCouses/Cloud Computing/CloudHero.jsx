import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../../../assetss/premium/cloudcomputing/AWS.jpg";

const CloudHero = () => {
  const [courseName] = useState("Cloud Computing");
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  // <h1 className="text-3xl font-semibold text-[#00509d] xl:text-5xl lg:text-3xl">
  //   <span className="block w-full">
  //
  //   </span>{" "}
  //
  // </h1>;

  return (
    <>
      {/* <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font md:py-0">
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            
          </p>

          <div className="mt-4">
            <a
              onClick={handleEnroll}
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-400 rounded-lg md:px-8 hover:bg-blue-500 group"
            >
              <span>Enroll Now</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://www.sandyx.com/wp-content/uploads/2020/04/5-important-things-about-cloud-computing.png"
            alt="Usability Testing hero image"
            width={500}
            height={488}
          />
        </div>
      </div> */}
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 w-full h-[370px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4">
            Empowering you to leverage cutting-edge cloud technologies, ensuring
            optimal performance,
            <br /> security and cost-effectiveness for your business...
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

export default CloudHero;
