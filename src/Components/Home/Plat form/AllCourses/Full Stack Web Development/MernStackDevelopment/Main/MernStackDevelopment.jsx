import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutCourses from "./AboutCourses";
import Community from "../Community/community";
import SuccessStory from "../SuccessStory/successstory";
import Hero from "./../../../../../../../assetss/fullstackwebdev/Mernstack/mern1.avif";
import Navbar from "../../../../../../Navbar";
import Footer from "../../../../../footer/Footer";
// import Delivery_Methods from "../deliverymethods/Delivery_Methods";
import MernStackDeveloper from "../Developer/MernStackDeveloper";

const MeanStackDevelopment = () => {
  const [courseName] = useState("Master MEAN Stack Development");
  const [coursePrice] = useState(14999);
  const [courseDuration] = useState("4 months");
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", {
      state: { courseName, coursePrice, courseDuration },
    });
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
              Master <span className="text-[#F6AC14]">MERN Stack</span> Web
              Development
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
              Enhance your tech capabilities with in-depth courses focused on
              MERN stack development. Master MongoDB, Express.js, React, and
              Node.js, covering both front-end and back-end technologies.
              Develop proficiency in building dynamic, scalable applications and
              position yourself for success as a MERN stack developer.
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
        <MernStackDeveloper />
        <AboutCourses />
        {/* <Delivery_Methods /> */}
        <Community />
        <SuccessStory />
        <Footer />
      </div>
    </>
  );
};

export default MeanStackDevelopment;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Add this import for navigation
// import AboutCourses from "./AboutCourses";
// import Community from "../Community/community";
// import SuccessStory from "../SuccessStory/successstory";
// import Navbar from "../../../../../../Navbar";
// import Footer from "../../../../../footer/Footer";
// import Delivery_Methods from "../deliverymethods/Delivery_Methods";
// import MeanStackDeveloper from "../Developer/MeanStackDeveloper";

// const MeanStackDevelopment = () => {
//   const [courseName] = useState("Master MEAN Stack Development"); // Moved inside component
//   const [coursePrice] = useState(199); // Moved inside component
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate(); // useNavigate hook for navigation

//   const handleEnroll = () => {
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
//             Explore MEAN Stack Development{" "}
//           </span>
//           <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
//             Master MEAN Stack Development
//           </h3>
//           <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//             Enhance your tech capabilities with in-depth courses focused on MEAN
//             stack development. Master MongoDB, Express.js, Angular, and Node.js,
//             covering both front-end and back-end technologies. Develop
//             proficiency in building robust, scalable applications and position
//             yourself for success as a MEAN stack developer.
//           </p>
//           <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
//             Our courses empower you to dive deep into mean stack technologies.
//             Develop practical skills and stand out in a competitive job market.
//             Start your mean stack journey today.
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
//             src="https://www.logicraysacademy.com/blog/wp-content/uploads/2023/05/MVM2.png"
//             className="pr-4 h-[350px]"
//           />
//         </div>
//       </div>
//       <MeanStackDeveloper />
//       <AboutCourses />
//       <Delivery_Methods />
//       <Community />
//       <SuccessStory />
//       <Footer />
//     </>
//   );
// };
// export default MeanStackDevelopment;
