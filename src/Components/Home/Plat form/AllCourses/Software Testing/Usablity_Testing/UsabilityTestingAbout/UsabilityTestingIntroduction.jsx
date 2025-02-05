import React, { useState } from "react";

function UsabilityTestingIntroduction() {
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
      heading: "Introduction to Usability Testing",
      items: [
        "Usability testing evaluates how easy and intuitive it is for users to interact with a system or application.",
        "Key Concepts: Understand the importance of usability testing in enhancing user experience.",
      ],
    },
    {
      heading: "Types of Usability Testing",
      items: [
        "Moderated Testing: Conducted with a facilitator guiding participants.",
        "Unmoderated Testing: Participants complete tasks independently.",
      ],
    },
    {
      heading: "Common Usability Testing Methods",
      items: [
        "Think-Aloud Protocol: Participants verbalize their thoughts while using the system.",
        "Eye Tracking: Monitoring where and how long users look at different parts of the interface.",
      ],
    },
    {
      heading: "Usability Testing Metrics",
      items: [
        "Task Success Rate: The percentage of correctly completed tasks.",
        "Time on Task: The amount of time taken to complete a task.",
      ],
    },
    {
      heading: "Best Practices for Usability Testing",
      items: [
        "Test Early and Often: Integrate usability testing into the development lifecycle.",
        "Diverse User Base: Test with a variety of users to identify different usability issues.",
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
              Usability Testing?
            </span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Usability Testing
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

export default UsabilityTestingIntroduction;
