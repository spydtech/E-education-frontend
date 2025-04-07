import React, { useState } from "react";

function Ui_UxIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8 font-poppins">
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
          heading: "Introduction to UI/UX Design",
          items: [
            "UI (User Interface) design focuses on the look and layout of a product.",
            "UX (User Experience) design emphasizes the overall feel and usability of a product.",
          ],
        },
        {
          heading: "Principles of Good UI Design",
          items: [
            "Consistency: Uniform design elements across the application.",
            "Clarity: Clear and understandable elements and interactions.",
            "Feedback: Informing users of actions and results.",
          ],
        },
        {
          heading: "Principles of Good UX Design",
          items: [
            "User-Centric: Focusing on the needs and goals of the user.",
            "Accessibility: Ensuring the product is usable by people of all abilities.",
            "Simplicity: Keeping the design as simple and intuitive as possible.",
          ],
        },
        {
          heading: "Tools for UI/UX Design",
          items: [
            "Wireframing tools like Balsamiq and Figma.",
            "Prototyping tools like InVision and Sketch.",
            "User testing tools like UserTesting and Lookback.",
          ],
        },
        {
          heading: "UI/UX Design Trends",
          items: [
            "Dark Mode: Increasingly popular for its aesthetic and energy-saving benefits.",
            "Microinteractions: Small animations that enhance user experience.",
            "Voice User Interfaces: Designing for voice-activated systems.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5 font-poppins">
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
            <span className="text-[#f6ac14] inline pl-2">UI/UX Design</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
          Brief about UI/UX
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

export default Ui_UxIntroduction;