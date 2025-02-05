import React, { useState } from "react";
// FundamentalsOfNetworkSecurityIntroduction
function NetworkSecurityIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-4">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-outside pl-5 text-md lg:text-xl text-white">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction to Network Security",
      items: [
        "Network security involves strategies and practices designed to protect the integrity, confidentiality, and accessibility of computer networks and data.",
        "Key Concepts: Understand the importance of securing network infrastructure against cyber threats.",
      ],
    },
    {
      heading: "Basics of Network Security",
      items: [
        "Security Principles: Learn about core principles such as confidentiality, integrity, and availability.",
        "Threats and Vulnerabilities: Understand different types of network threats and vulnerabilities.",
      ],
    },
    {
      heading: "Common Network Security Tools",
      items: [
        "Firewalls: Explore the role of firewalls in controlling network traffic.",
        "Intrusion Detection Systems (IDS): Learn about IDS and their importance in detecting suspicious activities.",
      ],
    },
    {
      heading: "Network Security Protocols",
      items: [
        "Encryption: Understand how encryption protects data in transit and at rest.",
        "VPNs: Learn about Virtual Private Networks (VPNs) and their role in secure communications.",
      ],
    },
    {
      heading: "Network Security Best Practices",
      items: [
        "Access Control: Implement robust access control measures to protect sensitive information.",
        "Incident Response: Develop effective incident response strategies to handle security breaches.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < slidesData.length - 1 ? prevSlide + 1 : prevSlide
    );
  };

  return (
    <>
      <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center md:h-[380px] lg:h-[450px] px-3 mb-5">
        {/* Text Section */}
        <div className="">
          <div>
            <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
              Introduction
            </p>
          </div>
          <div className="mt-2">
            <p className="md:text-lg lg:text-3xl">
              So what is
              <span className="text-[#f6ac14] inline pl-2">
                Network Security
              </span>
            </p>
          </div>
          <div>
            <p className="md:text-lg lg:text-3xl mt-2">
              Brief about Network Security
            </p>
          </div>
        </div>

        {/* Slider Section */}
        {/* <div className=" lg:h-[468px]"> */}
        <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:h-[420px] md:p-5 lg:flex flex-col justify-between ">
          <div className="flex text-white text-opacity-80">
            <Slide
              heading={slidesData[currentSlide].heading}
              items={slidesData[currentSlide].items}
            />
          </div>

          <div className="flex justify-between max-md:p-4">
            <button
              onClick={goToPreviousSlide}
              className="text-white hover:text-black font-bold  rounded"
            >
              Previous
            </button>
            <div className="text-white text-sm">{`Page ${currentSlide + 1}/${
              slidesData.length
            }`}</div>
            <button
              onClick={goToNextSlide}
              className="text-white hover:text-black font-bold  rounded"
            >
              Next
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default NetworkSecurityIntroduction;
