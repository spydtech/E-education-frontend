import React, { useState } from "react";

function AcceptanceTestingIntroduction() {
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
      heading: "Introduction to Acceptance Testing",
      items: [
        "Acceptance testing ensures that systems and applications meet the specified requirements and are acceptable for delivery.",
        "Key Concepts: Understand the importance of acceptance testing in verifying that the system meets business needs and requirements.",
      ],
    },
    {
      heading: "Types of Acceptance Testing",
      items: [
        "User Acceptance Testing: Validating that the system meets the needs of the users.",
        "Operational Acceptance Testing: Ensuring the system is ready for operational use.",
      ],
    },
    {
      heading: "Common Acceptance Testing Tools",
      items: [
        "Selenium: An open-source tool for automating web browser testing.",
        "Cucumber: A tool for running automated tests written in plain language.",
      ],
    },
    {
      heading: "Acceptance Testing Metrics",
      items: [
        "Test Coverage: The percentage of requirements covered by test cases.",
        "Defect Detection Rate: The percentage of defects identified during testing.",
      ],
    },
    {
      heading: "Best Practices for Acceptance Testing",
      items: [
        "Involve Stakeholders: Ensure that all relevant stakeholders are involved in the testing process.",
        "Comprehensive Test Cases: Create detailed test cases that cover all aspects of the system.",
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
            <span className="text-[#f6ac14] inline pl-2">Acceptance Testing</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Acceptance Tesing
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
  );
}

export default AcceptanceTestingIntroduction;
