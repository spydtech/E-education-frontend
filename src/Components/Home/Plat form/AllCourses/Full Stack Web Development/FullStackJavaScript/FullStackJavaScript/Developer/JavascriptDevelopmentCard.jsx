import React from "react";
import nextgen from "./../../../../../../../../assetss/fullstackwebdev/javaScript/javscript2.avif";

const JavascriptDevelopmentCard = () => {
  return (
    <>
      <div className="m-5 text-center lg:flex justify-around ">
        <div className="md:flex justify-center">
          <img src={nextgen} alt="Coding Illustration" className="md:w-96" />
        </div>
        <div className="lg:w-[50%] lg:text-start">
          <h2 className="my-2 text-lg md:text-xl lg:text-2xl ">
            MEAN Stack Development
          </h2>
          <h1 className="tracking-tight text-gray-900 leading-6 text-xl md:text-2xl lg:text-3xl font-bold">
            Next-Gen <span className="text-[#F6AC14]">Full Stack</span>{" "}
            Javascript Development
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
            Transform your web development skills with our comprehensive
            JavaScript full-stack solutions. From powerful backend services with
            Node.js and Express.js to interactive front-end experiences with
            React, we equip you with the latest tools and technologies to create
            seamless and scalable applications.
          </p>

          <div className="mt-5 flex justify-center lg:justify-start">
            <button className="bg-[#0098F1] text-white px-6 py-3 rounded transition-all active:scale-95 text-nowrap md:text-xl">
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

export default JavascriptDevelopmentCard;
