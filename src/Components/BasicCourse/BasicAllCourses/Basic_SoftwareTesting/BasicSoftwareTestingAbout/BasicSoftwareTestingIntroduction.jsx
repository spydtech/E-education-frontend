import React, { useState } from "react";

function BasicSoftwareTestingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8 font-poppins">
        <div className="h-auto flex">
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
      heading: "Introduction to Software Testing",
      items: [
        "Software testing is the process of evaluating and verifying that a software product works as intended.",
        "It helps identify bugs, errors, and missing requirements in the software.",
      ],
    },
    {
      heading: "Types of Testing",
      items: [
        "Manual Testing: Performed by a human without automation tools.",
        "Automated Testing: Using scripts and tools to run tests automatically.",
      ],
    },
    {
      heading: "Testing Levels",
      items: [
        "Unit Testing: Testing individual components or functions.",
        "Integration Testing: Testing the interaction between modules.",
        "System Testing: Testing the entire system as a whole.",
        "Acceptance Testing: Verifying the software meets business requirements.",
      ],
    },
    {
      heading: "Common Testing Types",
      items: [
        "Functional Testing: Validating the functionality of the application.",
        "Performance Testing: Checking the speed and responsiveness.",
        "Security Testing: Identifying vulnerabilities in the system.",
        "Usability Testing: Ensuring the app is user-friendly.",
      ],
    },
    {
      heading: "Test Artifacts & Tools",
      items: [
        "Test Plan: Document outlining the scope and approach of testing.",
        "Test Case: Detailed steps to validate a feature.",
        "Bug Report: Document describing a defect found.",
        "Tools: Selenium, JUnit, TestNG, Postman, JIRA, etc.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5font-poppins ">
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
            <span className="text-[#f6ac14] inline pl-2">Software Testing</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Software Testing
          </p>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className=" lg:h-[468px]"> */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-5 lg:flex flex-col justify-between font-poppins">
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
  );
}

export default BasicSoftwareTestingIntroduction;
