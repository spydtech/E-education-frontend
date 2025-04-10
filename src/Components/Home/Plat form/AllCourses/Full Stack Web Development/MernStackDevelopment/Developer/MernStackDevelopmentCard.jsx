import React from "react";
import mern from "../../../../../../../assetss/fullstackwebdev/Mernstack/mern2.avif";

const MeanStackDevelopmentCard = () => {
  return (
    <>
      <div className="m-5 text-center lg:flex justify-around">
        <div className="md:flex justify-center">
          <img src={mern} alt="" className="md:w-96" />
        </div>
        <div className="lg:w-[50%] lg:text-start">
          <h2 className="my-2 text-lg md:text-xl lg:text-2xl ">
            MERN Stack Development
          </h2>
          <h1 className="tracking-tight text-gray-900 leading-6 text-xl md:text-2xl lg:text-3xl font-bold">
            Next-Gen <span className="text-[#F6AC14]">MERN Stack</span>{" "}
            Development
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
            Elevate your digital presence with our comprehensive MERN stack
            development solutions. From robust backend architecture to dynamic
            React-based front-end interfaces, we empower your online presence
            with cutting-edge technologies and seamless user experiences.
            JavaScript is a multi-paradigm, dynamic language with types and
            operators, standard built-in objects, and methods.
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

export default MeanStackDevelopmentCard;
