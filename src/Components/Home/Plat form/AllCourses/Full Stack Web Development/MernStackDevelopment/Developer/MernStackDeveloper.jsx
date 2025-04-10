import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import skillsImg from "../../../../../../../assetss/fullstackwebdev/SoftSkill.jpg";
import requirementsImg from "../../../../../../../assetss/fullstackwebdev/techskills.jpg";
import MernStackDevelopmentCard from "./MernStackDevelopmentCard";

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
  { name: "React.js" },
  { name: "Node.js" },
  { name: "RESTful APIs" },
];
const MeanStackDeveloper = () => {
  return (
    <>
      <MernStackDevelopmentCard />
      <div className=" my-10">
        <h2 className=" font-bold text-gray-900 my-5 text-lg md:text-2xl text-center">
          MERN Stack <span className="text-[#F6AC14]">Development</span> Skills
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

export default MeanStackDeveloper;
