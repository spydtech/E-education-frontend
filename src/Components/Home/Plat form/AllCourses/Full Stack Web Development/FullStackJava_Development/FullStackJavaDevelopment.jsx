import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../Navbar";
import AboutCourses from "./AboutCourses";
import Community from "./Community/community";
import SuccessStory from "./SuccessStory/successstory";
import Hero from "../../../../../../assetss/fullstackwebdev/java/java12.png";
// import Delivery_Methods from "./deliverymethods/Delivery_Methods";
import FullStackJavaDeveloper from "./Developer/FullStackJavaDeveloper";
import Footer from "../../../../footer/Footer";

const FullStackJavaDevelopment = () => {
  const [courseName] = useState("Master Full Stack Java Development");
  const [coursePrice] = useState(34999);
  const [courseDuration] = useState("6 months");
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleEnroll = () => {
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
              Master <span className="text-[#F6AC14]">Full Stack</span> Java
              Development
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 text-md">
              Elevate your technical skills with comprehensive courses focused
              on full stack Java development. Master Java, Spring Boot,
              Hibernate, RESTful APIs, and more, covering both front-end and
              back-end technologies. Develop expertise in building scalable,
              enterprise-grade applications and position yourself for success as
              a full stack Java developer.
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

        <FullStackJavaDeveloper />
        <AboutCourses />
        {/* <Delivery_Methods /> */}
        <Community />
        {/* <Award /> */}
        <SuccessStory />
        <Footer />
      </div>
    </>
  );
};

export default FullStackJavaDevelopment;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // import Navbar from "../../../../Navbar";
// import Navbar from "../../../../../Navbar";
// import AboutCourses from "./AboutCourses";
// import Community from "./Community/community";
// import SuccessStory from "./SuccessStory/successstory";
// import Delivery_Methods from "./deliverymethods/Delivery_Methods";
// import FullStackJavaDeveloper from "./Developer/FullStackJavaDeveloper";
// import Footer from "../../../../footer/Footer";

// const FullStackJavaDevelopment = () => {
//   const [courseName] = useState(" Testing"); // Placeholder for course name
//   const [coursePrice] = useState(199);
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);

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
//             Explore Full Stack Java Course
//           </span>
//           <h3 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
//             Master Full Stack Java Development
//           </h3>
//           <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//             Elevate your technical skills with comprehensive courses focused on
//             full stack Java development. Master Java, Spring Boot, Hibernate,
//             RESTful APIs, and more, covering both front-end and back-end
//             technologies. Develop expertise in building scalable,
//             enterprise-grade applications and position yourself for success as a
//             full stack Java developer.
//           </p>
//           <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
//             Our courses empower you to dive deep into Fulll stack java
//             technologies. Develop practical skills and stand out in a
//             competitive job market. Start your full stack Java journey today.
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
//             src="https://assets-global.website-files.com/6344c9cef89d6f2270a38908/63862296680a877e33cb39f9_c4.webp"
//             className="pr-4 h-[350px]"
//           />
//         </div>
//       </div>
//       <FullStackJavaDeveloper />
//       <AboutCourses />
//       <Delivery_Methods />
//       <Community />
//       {/* <Award /> */}
//       <SuccessStory />
//       <Footer />
//     </>
//   );
// };

// export default FullStackJavaDevelopment;
