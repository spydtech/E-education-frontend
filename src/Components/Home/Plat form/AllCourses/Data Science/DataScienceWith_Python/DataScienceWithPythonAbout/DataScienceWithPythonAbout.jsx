import React from "react";
import programmer from "../../../../../../../assetss/student/AboutProgram/programmer.jpg";
import assistance from "../../../../../../../assetss/student/AboutProgram//assistance.jpg";

const DataScienceWithPythonAbout = () => {
  const ethicalHackingInfo = [
    {
      title: "Career Assistance",
      description:
        "Stay ahead with access to one-on-one career counseling sessions and mock interviews with industry professionals.",
      imgSrc: programmer,
      imgAlt: "career-assistance",
    },
    {
      title: "Student Support",
      description:
        'Access student support via support@E_education.com or through the "ask us?" option on our learning platform for urgent queries.',
      imgSrc: assistance,
      imgAlt: "student-support",
    },
  ];

  return (
    <div className="px-3 text-center">
      <div className="">
        <p className="md:text-2xl font-bold text-[#0098F1]">
          Discover the Machine Learning Program
        </p>
      </div>

      <div className="md:flex justify-around">
        {ethicalHackingInfo.map((item, index) => (
          <div
            key={index}
            className=" md:w-2/5 md:h-96 bg-white rounded-lg shadow-lg p-3 my-4"
          >
            <img
              className="md:w-full object-contain  md:h-64 rounded-md"
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <div className="my-3">
              <h2 className="md:text-xl font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScienceWithPythonAbout;
