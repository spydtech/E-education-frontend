import React, { useState } from "react";

function PerformanceTestingIntroduction() {
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
      heading: "Introduction to Performance Testing",
      items: [
        "Performance testing involves evaluating the speed, responsiveness, and stability of a computer, network, software program, or device under a workload.",
        "Key Concepts: Understand the importance of performance testing in ensuring a smooth user experience.",
      ],
    },
    {
      heading: "Types of Performance Testing",
      items: [
        "Load Testing: Assessing system behavior under expected load.",
        "Stress Testing: Determining system stability beyond normal operational capacity.",
      ],
    },
    {
      heading: "Common Performance Testing Tools",
      items: [
        "JMeter: A popular open-source tool for load testing.",
        "LoadRunner: A comprehensive tool for testing application performance.",
      ],
    },
    {
      heading: "Performance Testing Metrics",
      items: [
        "Response Time: The time taken for a system to respond to a request.",
        "Throughput: The amount of data processed by the system in a given amount of time.",
      ],
    },
    {
      heading: "Best Practices for Performance Testing",
      items: [
        "Test Early and Often: Integrate performance testing into the development lifecycle.",
        "Realistic Scenarios: Simulate real-world usage to get accurate results.",
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
          <span className="text-[#f6ac14] inline pl-2">Performance Testing</span>
        </p>
      </div>
      <div>
        <p className="md:text-lg lg:text-3xl mt-2">
          Brief about Performance Testing
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

export default PerformanceTestingIntroduction;
