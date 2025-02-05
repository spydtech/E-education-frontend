import React from "react";
import WebDevelopmentCard from "./WebDevelopmentCard";
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
  { name: "MongoDB" },
  { name: "Express.js" },
  { name: "Angular.js" },
  { name: "Node.js" },
  { name: "REST APIs" },
];

const WebDeveloper = () => {
  return (
    <>
      <WebDevelopmentCard />
      <div className=" my-10">
        <h2 className=" font-bold text-gray-900 my-5 text-lg md:text-2xl text-center">
          Full Stack <span className="text-[#F6AC14]">Web Development</span>{" "}
          Skills
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

export default WebDeveloper;

// import React from "react";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import WebDevelopmentCard from "./WebDevelopmentCard";
// import skillsImg from "../../../../../../../assetss/fullstackwebdev/skills.png";
// import requirementsImg from "../../../../../../../assetss/fullstackwebdev/requirements.png";

// const softSkills = [
//   { name: "Coordination" },
//   { name: "Empathy . . . ." },
//   { name: "Articulation. ." },
//   { name: "Analysis . . . . ." },
//   { name: "Initialization ." },
// ];

// const technicalSkills = [
//   { name: "MongoDB" },
//   { name: "Express.js ." },
//   { name: "Angular. js" },
//   { name: "Node. js   .  ." },
//   { name: "REST APIs." },
// ];

// const WebDeveloper = () => {
//   return (
//     <>
//       <WebDevelopmentCard />
//       <div className="container mx-auto p-6">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
//           Full Stack <span className="text-[#F6AC14]">Web Development</span> Skills
//         </h2>
//         <p className="text-[#0098F1] mb-6 text-center">
//           The future of learning The future of learning The future of learning...
//         </p>
//         <div className="flex flex-col md:flex-row justify-around">
//           <div className="bg-[#0098F1] rounded-lg lg:xl:w-[480px] lg:xl:h-80 mb-6 md:mb-0 flex flex-col lg:items-start md:flex-row md:items-center ">
//             <img src={skillsImg} alt="Soft Skills" className="w-full h-auto mb-4 md:mb-0 md:w-48 md:h-48" />
//             <div className="flex flex-col items-center">
//               <h3 className="text-3xl font-bold text-white px-10 pt-6 mb-4">Soft Skills</h3>
//               {softSkills.map((skill, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14] inline mx-2" />
//                   <p className="text-xl text-white">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="bg-[#0098F1] rounded-lg mb-6 lg:xl:w-[480px] lg:xl:h-80 md:mb-0 flex flex-col md:flex-row lg:items-start md:items-center ">
//             <div className="">
//             <img src={requirementsImg} alt="Technical Skills" className="w-full h-auto mb-4 md:mb-0 md:w-48 md:h-48" />
//             </div>
//             <div className="flex flex-col items-center">
//               <h3 className="text-3xl font-bold text-white px-4 pt-6 mb-4">Technical Skills</h3>
//               {technicalSkills.map((skill, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <FaArrowAltCircleRight className="text-white hover:text-[#F6AC14] inline mx-2" />
//                   <p className="text-xl text-white">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//             </div>
//             </div>
//             </div>
//             </>
//   )
// }

// export default WebDeveloper;
