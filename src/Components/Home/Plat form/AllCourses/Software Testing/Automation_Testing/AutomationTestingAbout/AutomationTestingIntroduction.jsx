import React, { useState } from "react";

function AutomationTestingIntroduction() {
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
      heading: "Introduction to Automation Testing",
      items: [
        "Automation testing uses automated tools to execute tests and compare actual outcomes with expected results.",
        "Key Concepts: Learn how automation testing improves efficiency, repeatability, and accuracy in the testing process.",
      ],
    },
    {
      heading: "Types of Automation Testing",
      items: [
        "Unit Testing: Testing individual units or components of the software.",
        "Integration Testing: Testing the interactions between integrated units/modules.",
      ],
    },
    {
      heading: "Common Automation Testing Tools",
      items: [
        "Selenium: A widely-used tool for automating web applications.",
        "Jenkins: A tool for continuous integration and continuous testing.",
      ],
    },
    {
      heading: "Automation Testing Metrics",
      items: [
        "Test Execution Time: The time taken to execute automated tests.",
        "Defect Detection Rate: The rate at which defects are found in the software.",
      ],
    },
    {
      heading: "Best Practices for Automation Testing",
      items: [
        "Maintainable Scripts: Write clear and maintainable test scripts.",
        "Continuous Integration: Integrate automated tests with CI/CD pipelines.",
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
            <span className="text-[#f6ac14] inline pl-2">Automation Testing</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Automation Testing
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

export default AutomationTestingIntroduction;
