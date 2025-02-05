import React from "react";
import FullStackDevopsDevelopmentCard from "./FullStackDevopsDevelopmentCard";
import { FaArrowAltCircleRight } from "react-icons/fa";
import skillsImg from "../../../../../../../assetss/fullstackwebdev/SoftSkill.jpg";
import requirementsImg from "../../../../../../../assetss/fullstackwebdev/techskills.jpg";

const softSkills = [
  { name: "Coordination" },
  { name: "Empathy" },
  { name: "Articulation" },
  { name: "Analysis" },
  { name: "Initialization" },
];

const technicalSkills = [
  { name: "IaC" },
  { name: "Cloud " },
  { name: "CI/CD Pipelines" },
  { name: "Containerization " },
  { name: "Orchestration " },
];

const FullStackDevopsDeveloper = () => {
  return (
    <>
      <FullStackDevopsDevelopmentCard />
      <div className=" my-10">
        <h2 className=" font-bold text-gray-900 my-5 text-lg md:text-2xl text-center">
          Full Stack <span className="text-[#F6AC14]">DevOps Development</span>
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
                <div key={index} className="flex items-center gap-x-2 mb-2">
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

export default FullStackDevopsDeveloper;

// import React from "react";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { IoRemoveOutline } from "react-icons/io5";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import FullStackDevopsDevelopmentCard from "./FullStackDevopsDevelopmentCard";
// import devopsSkills from "../../../../../../../assets/Assests_FullStackDevops/Devops/skills.png";
// import devopsRequirements from "../../../../../../../assets/WebDeveloper/requirements.png";

// const softSkills = [
//   { name: "Coordination" },
//   { name: "Empathy" },
//   { name: "Articulation" },
//   { name: "Analysis" },
//   { name: "Initialization" },
// ];

// const technicalSkills = [
//   { name: "IaC" },
//   { name: "Cloud " },
//   { name: "CI/CD Pipelines" },
//   { name: "Containerization " },
//   { name: "Orchestration " },
// ];

// const FullStackDevopsDeveloper = () => {
//   return (
//     <>
//       <FullStackDevopsDevelopmentCard />
//       <div
//         id="main"
//         className="gap-10 py-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 p-10 justify-center items-center"
//       >
//         <div
//           id="1"
//           className="max-w-sm w-full rounded-lg h-60 relative mx-auto mb-10"
//         >
//           <div className="p-4 rounded-lg shadow-2xl border-orange-700 border-2 relative">
//             <img
//               src={devopsSkills}
//               className="w-24 h-24 absolute top-4 right-4"
//             />
//             <h2 className="text-base font-extrabold text-[#25a244] sm:text-xl lg:text-lg xl:text-3xl font mb-4">
//               Soft Skills
//             </h2>
//             <div>
//               {softSkills.map((skill, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <p className="text-base text-gray-600 font">
//                     <FaArrowAltCircleRight className="text-[#25a244] inline mx-2" />
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
//               src={devopsRequirements}
//               className="w-24 h-24 absolute top-4 right-4"
//             />
//             <h2 className="text-base font-extrabold text-[#25a244] sm:text-xl lg:text-lg xl:text-3xl font mb-4">
//               Technical Skills
//             </h2>
//             <div>
//               {technicalSkills.map((skill, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <p className="text-base text-gray-600 font">
//                     <FaArrowAltCircleRight className="text-[#25a244] inline mx-2" />
//                     {skill.name}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div
//           id="3"
//           className="max-w-sm w-full h-40 rounded-lg items-center flex mx-auto mb-2"
//         >
//           <div className="p-4 rounded-lg ">
//             <h2 className="text-base font-extrabold text-[#25a244] sm:text-xl lg:text-lg xl:text-3xl font mb-2">
//               Full Stack DevOps Developer Skills{" "}
//             </h2>
//             <div className="flex text-[#25a244] justify-center items-center mb-2">
//               <IoRemoveOutline className="text-[40px]" />
//               <IoReorderThreeOutline className="text-[40px]" />
//               <IoRemoveOutline className="text-[40px]" />
//             </div>
//             <p className="text-base text-gray-600 font">
//               Full Stack DevOps Developers are expected to possess a broad range
//               of skills, from continuous integration and delivery to managing
//               scalable infrastructure.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FullStackDevopsDeveloper;
