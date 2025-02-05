import React from "react";
import Nextgen from "../../../../../../../assetss/fullstackwebdev/java/java11.png";

const FullStackJavaDevelopmentCard = () => {
  return (
    <>
      <div className="m-5 text-center lg:flex justify-around">
        <div className="md:flex justify-center">
          <img src={Nextgen} alt="" className="md:w-96" />
        </div>
        <div className="lg:w-[50%] lg:text-start">
          <h2 className="my-2 text-lg md:text-xl lg:text-2xl ">
            Full Stack Java Development
          </h2>
          <h1 className="tracking-tight text-gray-900 leading-6 text-xl md:text-2xl lg:text-3xl font-bold">
            Next-Gen <span className="text-[#F6AC14]">Full Stack</span> Java
            Development
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
            Enhance your web applications with our comprehensive Full Stack Java
            development solutions. From powerful backend logic to interactive
            frontend experiences, we leverage Java's robustness to deliver
            scalable and efficient web solutions. It is one of the most simple
            programming languages to learn. Write code once and it will run on
            nearly any computing platform. Java is platform agnostic. Some
            programs developed on one machine can be run on another.
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

export default FullStackJavaDevelopmentCard;
