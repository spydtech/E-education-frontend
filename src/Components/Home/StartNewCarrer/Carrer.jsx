import React, { useEffect } from "react";
import Carrerimg from "../../../assetss/Home/carrer.png";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Carrer = () => {
  return (
    <>
      <div class="text-center md:mt-32 mt-8  w-full px-12">
        <div class="md:text-4xl text-xl font-bold    font text-center">
          Start a new{" "}
          <span class="bg-gradient-to-r from-[#ff9b26] to-[#0098F1] inline-block text-transparent bg-clip-text">
            career
          </span>{" "}
          with E-education &#8594;
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center  md:mx-20 md:mb-24  mt-6">
        <div className="w-60 h-60 md:w-auto md:h-auto ">
          <img src={Carrerimg} />
        </div>
        <div className="ml-6 px-4 mt-4">
          <div className="flex  flex-col items-start justify-start w-auto  gap-4">
            <div className="font font-bold  text-xl md:text-3xl ">
              Unlocking Career Horizons
            </div>
            <div className="font md:text-md text-base mb-8 ">
              Embracing E-education for a new career path offers flexible
              learning opportunities accessible anytime, anywhere. This
              platforms provide vast resources for skill acquisition and career
              development. With dedication and curiosity, individuals can
              explore diverse fields and start their professional journey with
              the convenience of E-education.
            </div>
          </div>
          <div className="mb-10">
            <motion.button className=" group relative flex rounded-lg w-fit items-center gap-1.5 bg-[#0098F1] px-4 py-3 text-gray-50 transition-colors ">
              <Link to="/pricing">Start Now</Link>
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrer;
