import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdvancephpHero = () => {
  const [courseName] = useState("Advance PHP");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-10/12 mx-auto overflow-x-hidden md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5 font-poppins">
        <div className="order-2 lg:order-1 w-auto h-auto pr-10 md:mb-14 py- font md:py-0 mx-auto">
          <h1 className="text-[18px] md:text-[26px] lg:text-[28px] xl:text-[28px] font-semibold text-[#f6ac14] leading-tight text-start">
            Master Advanced PHP Techniques to Elevate Your Development Skills!
          </h1>
          <p className="text-lg text-gray-500 md:py-6 leading-8">
            Dive deep into advanced PHP concepts including OOP, design patterns,
            and performance optimization. Enhance your backend development
            expertise with cutting-edge PHP practices.
          </p>
          <div className="mt-6 md:w-[250px] md:h-[70px] w-auto h-auto flex justify-center items-center">
            <button
              onClick={handleEnroll}
              className="px-5 w-auto font-sans h-full py-3 text-[26px] font-medium text-white bg-[#0098f1] rounded-[22px] md:px-6"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 mt-4 md:mt-0 p-10  flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8412.jpg?t=st=1725014941~exp=1725018541~hmac=8b955413b04d9b3485341f26d6d0e6f3780a94fd40f346f28cc0aa55b9c6a61a&w=740"
            alt="Hero"
            className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </>
  );
};

export default AdvancephpHero;
