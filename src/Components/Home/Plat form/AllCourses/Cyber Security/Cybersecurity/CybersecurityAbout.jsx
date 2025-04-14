import React from "react";
import programmer from "../../../../../../assetss/student/AboutProgram/programmer.jpg";
import assistance from "../../../../../../assetss/student/AboutProgram//assistance.jpg";

const CybersecurityAbout = () => {
  const ethicalHackingInfo = [
    {
      title: "Career Assistance",
      description:
        "Get personalized career guidance through one-on-one counseling and mock interviews led by experienced industry experts.",
      imgSrc: programmer,
      imgAlt: "career-assistance",
    },
    {
      title: "Student Support",
      description:
        'Reach out to our dedicated support team anytime via support@E_education.com or use the "Ask Us?" feature on our platform for quick assistance.',
      imgSrc: assistance,
      imgAlt: "student-support",
    }
    
  ];

  return (
    <div className="px-3 text-center">
      <div className="">
        <p className="md:text-2xl font-bold text-[#0098F1]">
          Discover the Cyber Security Program
        </p>
      </div>

      <div className="md:flex justify-around">
        {ethicalHackingInfo.map((item, index) => (
          <div
            key={index}
            className=" md:w-2/5 md:h-96 bg-white rounded-lg shadow-lg p-3 my-4"
          >
            <img
              className="md:w-full  object-contain md:h-64 rounded-md"
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

export default CybersecurityAbout;
