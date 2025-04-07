import React from "react";
import programmer from "../../../../../../src/assetss/Basic_Courses/BasicPHP/programmer1.jpg";
import assistance from "../../../../../../src/assetss/Basic_Courses/BasicPHP/assistance1.jpg";
const WordpressAbout = () => {
  const wordpressInfo = [
    {
      title: "Student Support",
      description: "Learn about the latest techniques and get support for courses 24/7.",
      imgSrc: programmer,
      imgAlt: "student-support",
    },
    {
      title: "Career Assistance",
      description: "Gain expertise in continuous network monitoring to detect anomalies and respond to incidents in real-time.",
      imgSrc: assistance,
      imgAlt: "career-assistance",
    },
  ];

  return (
    <div className="px-3 text-center font-poppins">
      <div className="">
        <p className="md:text-2xl font-bold text-[#0098F1]">
        Discover the Wordpress Program
        </p>
      </div>
  
      <div className="md:flex justify-around ">
        {wordpressInfo.map((item, index) => (
          <div
            key={index}
            className="md:w-2/5 md:h-96 bg-white rounded-lg shadow-lg p-3 my-4"
          >
            <img
              className=" md:w-full md:h-64 rounded-md"
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

export default WordpressAbout;
