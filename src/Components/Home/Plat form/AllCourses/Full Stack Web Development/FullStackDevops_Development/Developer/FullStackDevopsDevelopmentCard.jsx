import React from "react";
import Nextgen from "../../../../../../../assetss/fullstackwebdev/devops/devops2.avif";

const FullStackDevOpsDevelopmentCard = () => {
  return (
    <>
      {/* <div className="max-w-screen  px-4 mx-auto  sm:px-6 mb-12">
        <div className=" lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="relative mt-8 pl-8 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img src={Nextgen} alt="" className="" />
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left pl-4 mb-8">
            <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font">
            Full Stack DevOps Development
            </div>
            <h2 className="mt-1   leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl text-xl md:text-4xl lg:text-5xl font-bold font">
              Next-Gen <span className="text-[#F6AC14]">   Full Stack</span> DevOps
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-md lg:text-lg xl:text-xl font">
            Our Full Stack DevOps solutions are designed to help you navigate
              the complexities of modern software development. With our
              comprehensive courses, you will gain the knowledge and skills
              needed to implement DevOps practices that accelerate your delivery
              process, improve software quality, and enhance team collaboration.
              Join us to revolutionize your approach to software development and
              stay ahead in the competitive tech landscape.
              </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <button
            className="mt-6 bg-[#0098F1] text-white   md:w-auto py-3 px-6 rounded transition-all hover:bg-[#007acc] active:scale-95 text-nowrap lg:text-2xl lg:w-[180px] lg:h-[60px] md:text-xl">
            <a href="/"
               className=""
                >
                  Explore Now
                </a>
          </button>
              </div>
            </div>
          </div>
        </div> */}

      <div className="m-5 text-center lg:flex justify-around">
        <div className="md:flex justify-center">
          <img src={Nextgen} alt="" className="md:w-96" />
        </div>
        <div className="lg:w-[50%] lg:text-start">
          <h2 className="my-2 text-lg md:text-xl lg:text-2xl ">
            Full Stack DevOps Development
          </h2>
          <h1 className="tracking-tight text-gray-900 leading-6 text-xl md:text-2xl lg:text-3xl font-bold">
            Next-Gen <span className="text-[#F6AC14]">Full Stack</span> DevOps
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
            Our Full Stack DevOps solutions are designed to help you navigate
            the complexities of modern software development. With our
            comprehensive courses, you will gain the knowledge and skills needed
            to implement DevOps practices that accelerate your delivery process,
            improve software quality, and enhance team collaboration. Join us to
            revolutionize your approach to software development and stay ahead
            in the competitive tech landscape.
          </p>

          <div className="mt-5 flex justify-center lg:justify-start">
            <button className=" bg-[#0098F1] text-white px-6 py-3 rounded transition-all active:scale-95 text-nowrap md:text-xl ">
              <a href="/" className="">
                Explore Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackDevOpsDevelopmentCard;
