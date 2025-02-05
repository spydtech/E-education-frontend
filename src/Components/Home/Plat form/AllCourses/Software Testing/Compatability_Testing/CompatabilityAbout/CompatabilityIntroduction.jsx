import React, { useState } from "react";

function CompatabilityIntroduction() {
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
      heading: "Introduction to Compatibility Testing",
      items: [
        "Compatibility testing ensures that your software works seamlessly across different browsers, devices, and operating systems.",
        "Key Concepts: Understand the importance of compatibility testing and its role in delivering a consistent user experience.",
      ],
    },
    {
      heading: "Browser Compatibility Testing",
      items: [
        "Cross-browser testing: Learn how to test your application on different web browsers to ensure consistent behavior.",
        "Browser tools: Explore tools like BrowserStack and Selenium for effective cross-browser testing.",
      ],
    },
    {
      heading: "Device Compatibility Testing",
      items: [
        "Mobile testing: Understand the challenges of testing on various mobile devices and platforms.",
        "Device farms: Learn about services that provide access to a wide range of real devices for testing.",
      ],
    },
    {
      heading: "Operating System Compatibility Testing",
      items: [
        "OS-specific testing: Ensure your software performs well on different operating systems like Windows, macOS, Linux, iOS, and Android.",
        "Virtual machines: Use virtual machines to simulate different operating systems for testing purposes.",
      ],
    },
    {
      heading: "Tools and Techniques for Compatibility Testing",
      items: [
        "Automated Testing: Leverage automated testing tools to streamline compatibility testing processes.",
        "Manual Testing: Understand the role of manual testing in identifying compatibility issues that automated tests might miss.",
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
              Compatibility Testing?
            </span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Compatibility Testing
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
  );
}

export default CompatabilityIntroduction;
