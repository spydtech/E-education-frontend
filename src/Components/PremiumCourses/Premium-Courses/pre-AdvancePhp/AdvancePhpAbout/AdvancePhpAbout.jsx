import React from "react";
import programmer from "../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../assets/dataAnalatics/assistance.jpg";

const AdvancePhpAbout = () => {
  const PhpAbout = [
    {
      title: "Student Support",
      description:
        "Learn about the latest Advanced Php techniques and tools to build robust and scalable applications.",
      imgSrc: programmer,
      imgAlt: "student-support",
    },
    {
      title: "Career Assistance",
      description:
        "Gain expertise in Advanced Php and receive support to advance your career in this growing field.",
      imgSrc: assistance,
      imgAlt: "career-assistance",
    },
  ];

  return (
    <div className="px-3 text-center">
      <div>
        <p className="md:text-2xl font-bold text-[#0098F1]">
          Discover the Advanced Php Programs
        </p>
      </div>

      <div className="md:flex justify-around">
        {PhpAbout.map((item, index) => (
          <div
            key={index}
            className="md:w-2/5 bg-white rounded-lg shadow-lg p-3 my-4"
          >
            <img
              className="md:w-full md:h-64 rounded-md"
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

export default AdvancePhpAbout;
