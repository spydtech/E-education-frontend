// import React, { useEffect } from "react";
// import Glide from "@glidejs/glide";
// import { FaBrain, FaCode, FaDatabase, FaReact, FaPython, FaJs } from 'react-icons/fa';
// import { Link } from "react-router-dom";

// const courses = [
//   {
//     title: "Generative AI in Practice",
//     description: "Practical generative AI applications",
//     bgColor: "bg-blue-300",
//     icon: <FaBrain className="text-blue-800" />,
//     link: "/data_Science/machine-Learning"
//   },
//   {
//     title: "Web Development",
//     description: "Build dynamic, responsive websites",
//     bgColor: "bg-green-300",
//     icon: <FaCode className="text-green-800" />,
//     link: "/fullStack_WebDevelopment"
//   },
//   {
//     title: "Data Science Fundamentals",
//     description: "Introduction to data science concepts",
//     bgColor: "bg-purple-300",
//     icon: <FaDatabase className="text-purple-800" />,
//     link: "/data_Science/introduction-to-data-science"
//   },
//   {
//     title: "React.js Mastery",
//     description: "Master React.js for web development",
//     bgColor: "bg-yellow-300",
//     icon: <FaReact className="text-yellow-800" />,
//     link: "/reactjs"
//   },
//   {
//     title: "Python Programming",
//     description: "Learn Python for various applications",
//     bgColor: "bg-red-300",
//     icon: <FaPython className="text-red-800" />,
//     link: "/fullStack_WebDevelopment/fullStack-Python-Development"
//   },
//   {
//     title: "JavaScript Essentials",
//     description: "Essential JavaScript programming skills",
//     bgColor: "bg-indigo-300",
//     icon: <FaJs className="text-indigo-800" />,
//     link: "/fullStack_WebDevelopment/full-stack-javascript"
//   },
//   {
//     title: "Machine Learning Algorithms",
//     description: "Study machine learning algorithms",
//     bgColor: "bg-pink-300",
//     icon: <FaBrain className="text-pink-800" />,
//     link: "/data_Science/machine-Learning"
//   },
//   {
//     title: "Software Testing",
//     description: "Techniques for effective software testing",
//     bgColor: "bg-orange-300",
//     icon: <FaDatabase className="text-orange-800" />,
//     link: "/software_testing"
//   },
// ];

// export default function EducationCarousel() {
//   useEffect(() => {
//     const slider = new Glide(".glide-01", {
//       type: "carousel",
//       focusAt: "center",
//       perView: 5,
//       autoplay: 3000,
//       animationDuration: 700,
//       gap: 12,
//       breakpoints: {
//         1024: {
//           perView: 2,
//         },
//         640: {
//           perView: 1,
//         },
//       },
//     });

//     slider.mount();

//     return () => {
//       slider.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <div className="my-8 ">
//       <div className="text-xl lg:text-5xl font-semibold pb-4 text-center font">
//   <span className="">Choose a course for you</span>
// </div>

//       </div>
//       <div className="glide-01 relative  mb-12 font">
//         <div className="overflow-hidden" data-glide-el="track">
//           <ul className="whitespace-no-wrap flex-no-wrap relative flex   overflow-hidden p-0">
//           {courses.map((course, index) => (
//           <Link
//           to = {`${course.link}`}
//             key={index}
//             className={`p-4 rounded-lg  ${course.bgColor} text-center cursor hover:shadow-2xl transform hover:-translate-y-2 transition-transform`}
//           >
//           <div className="flex justify-center items-center">
//           <div className="text-4xl mb-4">{course.icon}</div>
//           </div>
//             <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
//             <p className="text-gray-800">
//              {course.description}!
//             </p>
//           </Link>
//         ))}
//           </ul>
//         </div>
//         <div
//           className="flex  items-center justify-center gap-2 p-4"
//           data-glide-el="controls"
//         >
//           <button
//             className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//             data-glide-dir="<"
//             aria-label="prev slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <title>prev slide</title>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//               />
//             </svg>
//           </button>
//           <button
//             className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
//             data-glide-dir=">"
//             aria-label="next slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <title>next slide</title>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaReact,
  FaPython,
  FaJs,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import WebDev from "../../../assetss/Home/slider/web.png";
import ReactIcon from "../../../assetss/Home/slider/react.png";
import Python from "../../../assetss/Home/slider/pythonpic.png";
import DataScience from "../../../assetss/Home/slider/ds.png";

import Test from "../../../assetss/Home/slider/testing.png";
import Js from "../../../assetss/Home/slider/js.png";
import Ai from "../../../assetss/Home/slider/AI.png";

import Machine from "../../../assetss/Home/slider/machine.png";

const courses = [
  {
    title: "Generative AI",
    description: "Practical generative AI applications",
    bgColor: "bg-blue-300",
    icon: Ai,
    link: "/data_Science/machine-Learning",
  },
  {
    title: "Web Development",
    description: "Build dynamic, responsive websites",
    bgColor: "bg-green-300",
    icon: WebDev, // Use the image path directly
    link: "/fullStack_WebDevelopment",
  },
  {
    title: "Data Science",
    description: "Introduction to data science concepts",
    bgColor: "bg-purple-300",
    icon: DataScience, // Use the image path directly
    link: "/data_Science/introduction-to-data-science",
  },
  {
    title: "React.js Mastery",
    description: "Master React.js for web development",
    bgColor: "bg-yellow-300",
    icon: ReactIcon, // Use the image path directly
    link: "/reactjs",
  },
  {
    title: "Python Programming",
    description: "Learn Python for various applications",
    bgColor: "bg-red-300",
    icon: Python, // Use the image path directly
    link: "/fullStack_WebDevelopment/fullStack-Python-Development",
  },
  {
    title: "JavaScript",
    description: "JavaScript programming skills",
    bgColor: "bg-indigo-300",
    icon: Js,
    link: "/fullStack_WebDevelopment/full-stack-javascript",
  },
  {
    title: "Machine Learning",
    description: "Study machine learning algorithms",
    bgColor: "bg-pink-300",
    icon: Machine,
    link: "/data_Science/machine-Learning",
  },
  {
    title: "Software Testing",
    description: "Techniques for effective software testing",
    bgColor: "bg-orange-300",
    icon: Test,
    link: "/software_testing",
  },
];

export default function EducationCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3000,
      animationDuration: 700,
      gap: 5,
      breakpoints: {
        1024: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <style>
        {`
          .glide__bullet {
            background-color: #2563eb;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin: 0 4px;
            transition: all 0.1s;
          }
          .glide__bullet--active {
            width: 30px;
            height: 10px;
            border-radius: 5px;
            background-color: #ff8c00;
          }
        `}
      </style>
      <div className="lg:my-16 md:my-8 my-4 text-center">
        <div className="md:text-3xl text-2xl bg-gradient-to-r from-[#ff9b26] to-[#0098F1] inline-block text-transparent bg-clip-text lg:text-5xl  pb-4 font-bold font-lora">
          <span>Choose a course for you</span>
        </div>
      </div>

      <div className="glide relative mb-12 font-lora">
        <div className="glide__track overflow-hidden " data-glide-el="track">
          <ul className="glide__slides  flex  items-center justify-center ">
            {courses.map((course, index) => (
              <li
                key={index}
                className="glide__slide flex  items-center justify-center  pt-10"
              >
                <Link
                  to={course.link}
                  className="group shadow-sm relative w-[268px] h-[168px] m-4 bg-[#0098F1] hover:ring duration-400 hover:scale-105 flex flex-col items-center justify-center p-4 rounded-lg text-center cursor-pointer hover:shadow-md transform hover:-translate-y-2 transition-transform"
                >
                  <div className="flex justify-center items-center w-[87px] h-[87px] rounded-full absolute top-[-40px] border-2 border-blue-500 bg-white group-hover:shadow-md transform duration-300">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="flex flex-col text-white items-center justify-center mt-8 p-4">
                    <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4">
                      {course.title}
                    </h2>
                    <p className="text-center dark:text-white">
                      {course.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-20">
          <div
            className="glide__bullets flex justify-center mt-4"
            data-glide-el="controls[nav]"
          >
            {Array(3)
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  className="glide__bullet mx-1"
                  data-glide-dir={`=${index}`}
                ></button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
