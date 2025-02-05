import React, { useState } from "react";

function RegressionTestingIntroduction() {
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
      heading: "Introduction to Regression Testing",
      items: [
        "Regression testing ensures that new code changes do not adversely affect the existing functionality of the software.",
        "Key Concepts: Learn how regression testing helps maintain software stability and reliability.",
      ],
    },
    {
      heading: "Types of Regression Testing",
      items: [
        "Corrective Regression Testing: Used when there are no changes in the product's specification.",
        "Retest-all Regression Testing: All the tests in the existing test suite are re-executed.",
      ],
    },
    {
      heading: "Common Regression Testing Tools",
      items: [
        "Selenium: A widely-used tool for automating web applications.",
        "QTP/UFT: A tool by Micro Focus for functional and regression test automation.",
      ],
    },
    {
      heading: "Regression Testing Metrics",
      items: [
        "Test Coverage: The extent to which the code is covered by automated tests.",
        "Defect Detection Rate: The rate at which defects are found in the software after changes.",
      ],
    },
    {
      heading: "Best Practices for Regression Testing",
      items: [
        "Selective Testing: Choose the right subset of test cases that cover the impacted areas.",
        "Automated Testing: Automate regression tests to ensure they are run consistently and efficiently.",
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
                Regression Testing?
              </span>
            </p>
          </div>
          <div>
            <p className="md:text-lg lg:text-3xl mt-2">
              Brief about Regression Testing
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

          <div className="flex justify-between items-center max-md:p-4">
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

export default RegressionTestingIntroduction;
