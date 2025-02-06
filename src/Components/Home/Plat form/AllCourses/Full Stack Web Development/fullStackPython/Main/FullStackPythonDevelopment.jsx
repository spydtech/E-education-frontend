import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./../../../../../../../assetss/fullstackwebdev/python/python11.png";
import Navbar from "../../../../../../Navbar";
import Footer from "../../../../../footer/Footer";
import AboutCourses from "./AboutCourses";
import Community from "../Community/community";
import SuccessStory from "../SuccessStory/successstory";
// import Delivery_Methods from "../deliverymethods/Delivery_Methods";
import FullStackPythonDeveloper from "../Developer/FullStackPythonDeveloper";

const FullStackPythonDevelopment = () => {
  const [courseName] = useState("Full Stack Python Development"); // Corrected course name
  const [coursePrice] = useState(34999);
  const [courseDuration] = useState("6 months");
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="">
        <div className="m-5 text-center lg:flex justify-around">
          <div className="md:flex justify-center lg:order-2">
            <img src={Hero} alt="Hero" className="md:w-96 " />
          </div>
          <div className="lg:w-[50%] lg:text-start">
            <h2 className="tracking-tight text-gray-900 leading-6 text-xl md:text-2xl lg:text-3xl font-bold">
              Master <span className="text-[#F6AC14]">Full Stack</span> Python
              Development
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
            Enhance your tech capabilities with in-depth courses focused on
              full stack Python development. Master Python, Django, Flask,
              RESTful APIs covering both front-end and back-end technologies.
              Develop proficiency in building robust, scalable applications and
              position yourself for success as a full stack Python developer.
            </p>
            <button
              onClick={handleEnroll}
              className="mt-6 bg-[#0098F1] text-white py-3 px-6 rounded transition-all active:scale-95 md:text-xl"
            >
              Enroll Now
            </button>
            <p className="mt-4 text-gray-600">11,095 already enrolled</p>
          </div>
        </div>
        <FullStackPythonDeveloper />
        <AboutCourses />
        {/* <Delivery_Methods /> */}
        <Community />
        <SuccessStory />
        <Footer />
      </div>
    </>
  );
};

export default FullStackPythonDevelopment;

// import React, { useState, useEffect } from "react";

// // import React, { useState } from "react";
// // import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // import Navbar from "../../../../Navbar";
// import Navbar from "../../../../../../Navbar";
// import Footer from "../../../../../footer/Footer";
// import AboutCourses from "./AboutCourses";
// import Community from "../Community/community";
// import SuccessStory from "../SuccessStory/successstory";
// import Delivery_Methods from "../deliverymethods/Delivery_Methods";
// import FullStackPythonDeveloper from "../Developer/FullStackPythonDeveloper";

// const FullStackPythonDevelopment = () => {
//   const [courseName] = useState("full stack python developmwnt"); // Placeholder for course name
//   // const [coursePrice] = useState(199);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [coursePrice] = useState(199);
//   const navigate = useNavigate(); // useNavigate hook for navigation

//   const handleEnroll = () => {
//     // Navigate to the card details page with course details as parameters
//     navigate("/course-details", { state: { courseName, coursePrice } });
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="w-full md:pl-28 py-12 flex md:flex-row flex-col items-center justify-center gap-8 max-w-8xl mx-auto">
//         <div className="md:w-[600px] pl-8 ">
//           <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
//             Explore Full Stack Python Course{" "}
//           </span>
//           <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
//             Master Full Stack Python Development
//           </h3>
//           <p className="mt-3 text-base md:text-lg text-gray-600 lg:text-base xl:text-lg ">
//             Enhance your tech capabilities with in-depth courses focused on full
//             stack Python development. Master Python, Django, Flask, RESTful APIs
//             covering both front-end and back-end technologies. Develop
//             proficiency in building robust, scalable applications and position
//             yourself for success as a full stack Python developer.
//           </p>
//           <p className="text-base md:text-lg text-gray-700 my-4">
//             Our courses empower you to dive deep into full stack Python
//             technologies. Develop practical skills and stand out in a
//             competitive job market. Start your full stack Python journey today.
//           </p>
//           <button
//             onClick={handleEnroll}
//             className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
//           >
//             Enroll Now
//           </button>
//           <div className="py-4">11,095 already enrolled</div>
//         </div>
//         <div className="relative pl-12">
//           <img
//             src="https://www.folksit.com/assets/courses/Full_Stack_Python_Online_Training.jpg"
//             className="pr-4 h-[350px]"
//           />
//         </div>
//       </div>
//       <FullStackPythonDeveloper />
//       <AboutCourses />
//       <Delivery_Methods />
//       <Community />
//       <SuccessStory />
//       <Footer />
//     </>
//   );
// };

// export default FullStackPythonDevelopment;
