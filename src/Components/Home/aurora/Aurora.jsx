// import React, { useEffect } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import {
//   useMotionTemplate,
//   useMotionValue,
//   motion,
//   animate,
// } from "framer-motion";
// import { Link } from "react-router-dom";

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// const Aurora = () => {
//   const color = useMotionValue(COLORS_TOP[0]);

//   useEffect(() => {
//     animate(color, COLORS_TOP, {
//       ease: "easeInOut",
//       duration: 10,
//       repeat: Infinity,
//       repeatType: "mirror",
//     });
//   }, []);

//   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
//   const border = useMotionTemplate`1px solid ${color}`;
//   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

//   return (
//     <motion.section
//       style={{
//         backgroundImage,
//       }}
//       className="font relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 "
//     >
//       <div className="relative z-10 flex flex-col items-center">
//         <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
//           Start Learning!
//         </span>
//         <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
//           Unlock Your Potential with E-education
//         </h1>
//         <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
//           Are you ready to take your skills to the next level? Join us for an
//           inspiring journey of learning and growth with our exclusive course.
//         </p>
//         <motion.button
//           style={{
//             border,
//             boxShadow,
//           }}
//           whileHover={{
//             scale: 1.015,
//           }}
//           whileTap={{
//             scale: 0.985,
//           }}
//           className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
//         >
//         <Link to="/pricing">

//           Start Now

//         </Link>
//           <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
//         </motion.button>
//       </div>

//     </motion.section>
//   );
// };
// export default Aurora;

import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
const Aurora = () => {
  return (
    <>
      <div className="bg-[#ff9b26] bg-opacity-30 md:h-[476px]">
        <div className="bg-gradient-to-r from-[#ff9b26] to-[#0098F1] flex items-center justify-center md:h-[80px] md:w-[458px] p-4 rounded-r-xl">
          <p className="text-center text-white md:text-2xl text-lg">
            Start Learning!
          </p>
        </div>

        <div className="grid place-content-center overflow-hidden px-4 py-16 gap-2">
          <div className="max-w-3xl  text-center text-xl font-medium leading-tight sm:text-5xl sm:leading-tight md:text-4xl md:leading-tight">
            Unlock Your Potential with{" "}
            <span class="bg-gradient-to-r from-[#ff9b26]  to-[#0098F1] inline-block text-transparent bg-clip-text">
              {" "}
              E-education
            </span>
          </div>
          <div className="my-6 max-w-2xl text-center  leading-relaxed text-sm md:text-lg md:leading-9">
            Are you ready to take your skills next level?
            <div> Then join with us for your dream career </div>
          </div>
          <div className="flex justify-center items-center">
            <button className=" flex md:w-[200px] md:h-[50px] items-center justify-center gap-1.5 rounded-lg bg-[#0098F1] px-4 py-2 text-white transition-colors">
              <Link to="/pricing">Start Now</Link>
              <MdArrowOutward className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aurora;
