import React, { useState } from "react";

function SystemTestingIntroduction() {
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
      heading: "Introduction to System Testing",
      items: [
        "System testing validates the complete and integrated software product.",
        "Key Concepts: Understand the importance of system testing in the software development lifecycle.",
      ],
    },
    {
      heading: "Types of System Testing",
      items: [
        "Functional Testing: Ensures that the software functions as expected.",
        "Performance Testing: Checks the software's performance under various conditions.",
        "Security Testing: Identifies vulnerabilities and security flaws.",
      ],
    },
    {
      heading: "Functional Testing in System Testing",
      items: [
        "Test Cases: Develop comprehensive test cases to cover all functionalities.",
        "User Scenarios: Validate the software against real-world user scenarios.",
      ],
    },
    {
      heading: "Performance Testing in System Testing",
      items: [
        "Load Testing: Evaluate the software's performance under peak load conditions.",
        "Stress Testing: Determine the software's robustness under extreme conditions.",
        "Scalability Testing: Assess how well the software scales with increasing load.",
      ],
    },
    {
      heading: "Tools and Techniques for System Testing",
      items: [
        "Automated Testing: Utilize tools like Selenium, JMeter, and LoadRunner.",
        "Manual Testing: Understand the importance of manual testing for complex test cases.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5">
      {/* Text Section */}
      <div>
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">System Testing</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">Brief about System Testing</p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-5 lg:flex flex-col justify-between">
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

export default SystemTestingIntroduction;
