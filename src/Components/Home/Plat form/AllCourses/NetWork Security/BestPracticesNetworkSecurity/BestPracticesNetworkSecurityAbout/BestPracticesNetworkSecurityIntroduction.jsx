import React, { useState } from "react";

function BestPracticesNetworkSecurityIntroduction() {
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
        "Network Security involves policies and practices to prevent and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources.",
        "Key Concepts: Understand the importance of protecting data integrity, confidentiality, and availability.",
      ],
    },
    {
      heading: "Fundamentals of Network Security",
      items: [
        "Understanding Threats: Learn about various types of network security threats like malware, phishing, and DDoS attacks.",
        "Security Mechanisms: Get introduced to firewalls, encryption, and intrusion detection systems.",
      ],
    },
    {
      heading: "Network Security Protocols",
      items: [
        "SSL/TLS: Explore Secure Socket Layer and Transport Layer Security protocols.",
        "IPSec: Learn about Internet Protocol Security for secure IP communications.",
      ],
    },
    {
      heading: "Implementing Network Security",
      items: [
        "Network Segmentation: Understand the importance of dividing a network into segments to improve security.",
        "Access Control: Learn about managing user access through authentication and authorization.",
      ],
    },
    {
      heading: "Advanced Network Security Practices",
      items: [
        "Zero Trust Architecture: Gain insights into a security model that assumes no one is trustworthy by default.",
        "Threat Intelligence: Understand the use of data to identify, detect, and respond to threats.",
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

export default BestPracticesNetworkSecurityIntroduction;
