import React from "react";
import home from "../assetss/Home/Homebg.png";
// import Girl from "../assetss/Home/girl.png";
import Girl from "../assetss/Home/girlimage.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div
      className="bg-contain sm:bg-cover "
      style={{ backgroundImage: `url(${home})` }}
    >
    
      <section className="  sm:mt-6 mx-auto px-0 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl px-4 sm:mt-12  lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-4">
          {/* Image Section at the Top */}
          <div className="relative w-full flex justify-center items-center mt-6 lg:mt-0">
            <img
              src={Girl}
              alt="Illustration of a girl"
              className="z-20 max-w-full h-auto object-contain "
            />
          </div>

          {/* Text Section Below the Image */}
          <div className="flex flex-col  w-full h-auto  p-6">
            <div className="w-full flex flex-col justify-center ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-800">
                <span className="block xl:inline">
                  Learn{" "}
                  <span className="bg-gradient-to-r from-[#ff9b26] to-[#25AAE3] inline-block text-transparent bg-clip-text">
                    without
                  </span>{" "}
                  limits online{" "}
                  <span className="bg-gradient-to-r from-[#ff9b26] to-[#0098F1] inline-block text-transparent bg-clip-text">
                    courses
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">

                Kickstart, switch, or elevate your career with over 6,900

                Kickstart, switch, or elevate your career with Our

                courses, professional certificates, and degrees from leading
                universities and top companies.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0098F1] md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
                <Link
                  to="/try-a-demo"
                  className="w-full  sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0098F1] bg-[#0098F11A] md:py-4 md:text-lg md:px-10"
                >
                  Try demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;

// import React, { useState, useEffect } from "react";
// import Boy1 from "./Home/Boy1";
// import Girl from "../assetss/Home/girl.png";
// import Vector1 from "../assetss/Home/Vector1.png";
// import Vector2 from "../assetss/Home/Vector2.png";
// import thumbup from "../assetss/Home/thumbup.png";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// // import "./main.css"
// function Main() {
//   return (
//     <>
//       <div>
//         {/* <Navbar /> */}
//         <section class="sm:mt-6 lg:mt-8  mx-auto px-4 sm:px-6 lg:px-8">
//           <div class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
//             <div class="sm:text-center lg:text-left">
//               <h1 class="font text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
//                 <h1 class="block xl:inline">
//                   Learn{" "}
//                   <span class="bg-gradient-to-r from-[#F6AC14] to-[#0098F1] inline-block text-transparent bg-clip-text">
//                     {" "}
//                     without
//                   </span>{" "}
//                   limits online{" "}
//                   <span class="bg-gradient-to-r from-[#F6AC14] to-[#0098F1] inline-block text-transparent bg-clip-text">
//                     {" "}
//                     courses
//                   </span>
//                 </h1>
//               </h1>
//               <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                 Start, switch, or advance your career with more than 6,900
//                 courses, Professional Certificates, and degrees from world-class
//                 universities and companies.
//               </p>
//               {/* <!-- Button Section --> */}
//               <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                 <div class="rounded-md shadow">
//                   <Link
//                     to="/pricing"
//                     class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0098F1] hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
//                   >
//                     Get started
//                   </Link>
//                 </div>
//                 <div class="mt-3 sm:mt-0 sm:ml-3">
//                   <Link
//                     to="/try-a-demo"
//                     class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0098F1] bg-[#0098F11A] hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
//                   >
//                     Try demo
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="relative lg:inset-y-0 lg:right-0 lg:h-full  lg:w-1/2 md:flex md:justify-center md:items-center rounded-full">
//               <div
//                 className="absolute inset-0 bg-cover bg-no-repeat "
//                 style={{ backgroundImage: `url(${Vector2})` }}
//               ></div>
//               <div
//                 className="absolute inset-0 bg-cover bg-no-repeat"
//                 style={{ backgroundImage: `url(${Vector1})` }}
//               ></div>

//               <div className="relative flex justify-center items-center w-auto h-auto">
//                 <img src={Girl} alt="" className="relative z-20" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
// export default Main;
