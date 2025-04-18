import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import skillsImg from "../../../../../../../assetss/fullstackwebdev/SoftSkill.jpg";
import requirementsImg from "../../../../../../../assetss/fullstackwebdev/techskills.jpg";
import MeanStackDevelopmentCard from "./MeanStackDevelopmentCard";

const softSkills = [
  { name: "Coordination" },
  { name: "Empathy" },
  { name: "Articulation" },
  { name: "Analysis" },
  { name: "Initialization" },
];

const technicalSkills = [
  { name: "MongoDB" },
  { name: "Express.js" },
  { name: "Angular" },
  { name: "Node.js" },
  { name: "RESTful APIs" },
];

const MeanStackDeveloper = () => {
  return (
    <>
      <MeanStackDevelopmentCard />
      <div className=" my-10">
        <h2 className=" font-bold text-gray-900 my-5 text-lg md:text-2xl text-center">
          MEAN Stack <span className="text-[#F6AC14]">Development</span> Skills
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 m-4 ">
          <div className="bg-[#0098F1] rounded-lg flex flex-col md:flex-row ">
            <img
              src={skillsImg}
              alt="Soft Skills"
              className=" md:w-32 md:h-32 lg:w-48 lg:h-44"
            />
            <div className="flex flex-col p-5 lg:p-7">
              <h3 className="text-2xl font-bold text-white mb-4">
                Soft Skills
              </h3>
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-x-2 mb-2">
                  <p>
                    <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14]" />
                  </p>
                  <p className="text-xl text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0098F1] rounded-lg flex flex-col md:flex-row ">
            <img
              src={requirementsImg}
              alt="STechnical Skills"
              className="md:w-32 md:h-32 lg:w-48 lg:h-44"
            />
            <div className="flex flex-col md:items-start p-5 lg:p-7">
              <h3 className="text-2xl font-bold text-white mb-4">
                Technical Skills
              </h3>
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 mb-2"
                >
                  <p>
                    <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14]" />
                  </p>
                  <p className="text-xl text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeanStackDeveloper;

// import React from "react";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { IoRemoveOutline } from "react-icons/io5";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import MeanStackDevelopmentCard from "./MeanStackDevelopmentCard";
// import skills from "../../../../../../../assets/WebDeveloper/skills.png";
// // Assests_MeanStack/WebDeveloper/skills.png";
// import requirements from "../../../../../../../assets/WebDeveloper/requirements.png";

// const softSkills = [
//   { name: "Coordination" },
//   { name: "Empathy" },
//   { name: "Articulation" },
//   { name: "Analysis" },
//   { name: "Initialization" },
// ];

// const technicalSkills = [
//   { name: "MongoDB" },
//   { name: "Express.js" },
//   { name: "Angular" },
//   { name: "Node.js" },
//   { name: "RESTful APIs" },
// ];

// const MeanStackDeveloper = () => {
//   return (
//     <>
//       <MeanStackDevelopmentCard />
//       <div
//         id="main"
//         className="gap-10 py-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 p-10 justify-center items-center"
//       >
//         <div
//           id="1"
//           className="max-w-sm w-full rounded-lg h-60 relative mx-auto mb-10"
//         >
//           <div className="p-4 rounded-lg shadow-2xl border-orange-700 border-2 relative">
//             <img src={skills} className="w-24 h-24 absolute top-4 right-4" />
//             <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font mb-4">
//               Soft Skills
//             </h2>
//             <div>
//               {softSkills.map((skill, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <p className="text-base text-gray-600 font">
//                     <FaArrowAltCircleRight className="text-blue-600 inline mx-2" />
//                     {skill.name}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div
//           id="2"
//           className="max-w-sm w-full rounded-lg h-60 relative mx-auto mb-10"
//         >
//           <div className="bg-white p-4 rounded-lg shadow-2xl border-orange-700 border-2 relative">
//             <img
//               src={requirements}
//               className="w-24 h-24 absolute top-4 right-4"
//             />
//             <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font mb-4">
//               Technical Skills
//             </h2>
//             <div>
//               {technicalSkills.map((skill, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <p className="text-base text-gray-600 font">
//                     <FaArrowAltCircleRight className="text-blue-600 inline mx-2" />
//                     {skill.name}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div
//           id="3"
//           className="max-w-sm w-full h-40 rounded-lg items-center flex mx-auto mb-4"
//         >
//           <div className="p-4 rounded-lg  ">
//             <h2 className="text-base font-extrabold text-blue-600 sm:text-xl lg:text-lg xl:text-3xl font mb-2">
//               Mean Stack Developer Skills{" "}
//             </h2>
//             <div className="flex text-blue-600 justify-center items-center mb-4">
//               <IoRemoveOutline className="text-[40px]" />
//               <IoReorderThreeOutline className="text-[40px]" />
//               <IoRemoveOutline className="text-[40px]" />
//             </div>
//             <p className="text-base text-gray-600 font">
//               Over the last decade, web development expectations have shifted
//               dramatically, with many businesses now expecting their MEAN stack
//               developers to be multi-skilled experts.{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MeanStackDeveloper;
