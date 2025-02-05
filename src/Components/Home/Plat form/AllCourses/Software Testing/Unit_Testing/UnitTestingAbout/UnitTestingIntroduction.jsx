import React, { useState } from "react";

function UnitTestingIntroduction() {
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
      heading: "Introduction to Unit Testing",
      items: [
        "Unit testing involves testing individual components or functions of software in isolation.",
        "Key Concepts: Ensure that each unit of the software works as expected independently from other parts.",
      ],
    },
    {
      heading: "Benefits of Unit Testing",
      items: [
        "Early Bug Detection: Identify and fix bugs in individual units during the development phase.",
        "Code Refactoring: Supports safe refactoring by ensuring changes don’t break existing functionality.",
      ],
    },
    {
      heading: "Types of Unit Testing",
      items: [
        "Manual Unit Testing: Performed manually by the developer without the use of automation tools.",
        "Automated Unit Testing: Tests are written and executed using automated testing frameworks like JUnit or Mocha.",
      ],
    },
    {
      heading: "Tools and Frameworks for Unit Testing",
      items: [
        "JUnit: A popular testing framework for Java.",
        "Mocha: A JavaScript testing framework that runs on Node.js.",
        "NUnit: A testing framework for all .NET languages.",
      ],
    },
    {
      heading: "Challenges in Unit Testing",
      items: [
        "Mocking Dependencies: Simulating the behavior of complex dependencies to isolate the unit being tested.",
        "Test Coverage: Ensuring adequate coverage without writing redundant or ineffective tests.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-14 md:mb-9 mb-5">
      <div>
        <div>
          <p className="text-[#0098f1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">Unit Testing</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Unit Testing
          </p>
        </div>
      </div>

      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:px-5 md:pt-1 md:pb-5 lg:flex flex-col justify-between">
        <div className="flex text-white">
          <Slide
            heading={slidesData[currentSlide].heading}
            items={slidesData[currentSlide].items}
          />
        </div>

        <div className="flex justify-between items-center max-md:p-4">
          <button
            onClick={goToPreviousSlide}
            className="text-white hover:text-black font-bold rounded"
          >
            Previous
          </button>
          <div className="text-white text-sm">{`Page ${currentSlide + 1}/${
            slidesData.length
          }`}</div>
          <button
            onClick={goToNextSlide}
            className="text-white hover:text-black font-bold rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnitTestingIntroduction;
