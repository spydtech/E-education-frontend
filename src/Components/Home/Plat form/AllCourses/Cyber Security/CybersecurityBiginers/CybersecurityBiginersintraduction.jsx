import React, { useState } from "react";

function CybersecurityBeginnersIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
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
      heading: "Understanding Cybersecurity",
      items: [
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
        "Importance: Learn why cybersecurity is crucial in today's digital world.",
      ],
    },
    {
      heading: "Cyber Threats Overview",
      items: [
        "Types of Threats: Malware, phishing, ransomware, and other common threats.",
        "Impact: Explore the potential consequences of cybersecurity breaches.",
      ],
    },
    {
      heading: "Cybersecurity Strategies",
      items: [
        "Prevention: Best practices to prevent cyber attacks.",
        "Detection and Response: How to identify and respond to security incidents.",
      ],
    },
    {
      heading: "Key Cybersecurity Technologies",
      items: [
        "Firewalls: Understanding how firewalls protect your network.",
        "Encryption: Learn about encryption techniques to protect data.",
      ],
    },
    {
      heading: "Building a Career in Cybersecurity",
      items: [
        "Career Paths: Different roles in the cybersecurity field.",
        "Skills and Certifications: Key skills and certifications needed to succeed.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5 ">
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
                Cyber Security for Beginners
              </span>
            </p>
          </div>
          <div>
            <p className="md:text-lg lg:text-3xl mt-2">
              Brief about Cyber Security for Beginners
            </p>
          </div>
        </div>

        {/* Slider Section */}
        {/* <div className=" lg:h-[468px]"> */}
        <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-5 lg:flex flex-col justify-between ">
          <div className="flex text-white">
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

export default CybersecurityBeginnersIntroduction;
