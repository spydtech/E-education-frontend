import React from "react";
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";

const DBAbout = () => {
  const aboutInfo = [
    {
      title: "Expert Guidance",
      description:
        "Learn from industry experts about fundamental concepts and advanced practices in cloud computing to enhance your skillset.",
      imgSrc: programmer,
      imgAlt: "cloud-computing-essentials",
    },
    {
      title: "Career Support",
      description:
        "Receive career guidance and support to navigate opportunities in the rapidly growing field of cloud computing.",
      imgSrc: assistance,
      imgAlt: "cloud-career-assistance",
    },
  ];

  return (
    <div className="px-3 text-center">
      <div>
        <p className="md:text-2xl font-bold text-[#0098F1]">
          Discover the Cloud Computing Essentials Program
        </p>
      </div>

      <div className="md:flex justify-around">
        {aboutInfo.map((item, index) => (
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

export default DBAbout;
