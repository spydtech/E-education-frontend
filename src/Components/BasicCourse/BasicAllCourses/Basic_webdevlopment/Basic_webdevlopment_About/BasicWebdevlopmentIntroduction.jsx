import React, { useState } from "react";

function BasicWebdevlopmentIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
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
      heading: "Introduction to Web Development",
      items: [
        "Web development involves building and maintaining websites and web applications.",
        "It encompasses frontend (client-side) and backend (server-side) development.",
      ],
    },
    {
      heading: "Core Technologies",
      items: [
        "HTML: The structure and content of web pages.",
        "CSS: The styling and visual presentation.",
        "JavaScript: The behavior and interactivity.",
      ],
    },
    {
      heading: "Frontend Development",
      items: [
        "Focuses on what users see and interact with.",
        "Includes responsive design, accessibility, and user experience.",
        "Popular frameworks: React, Angular, Vue.js.",
      ],
    },
    {
      heading: "Backend Development",
      items: [
        "Handles server-side logic and database interactions.",
        "Common languages: JavaScript (Node.js), Python, PHP, Java.",
        "Includes APIs, authentication, and data processing.",
      ],
    },
    {
      heading: "Modern Web Development",
      items: [
        "Single Page Applications (SPAs) for fluid user experiences.",
        "Progressive Web Apps (PWAs) for mobile-like experiences.",
        "Component-based architecture for maintainable code.",
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
            <span className="text-[#f6ac14] inline pl-2">Web Development</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Fundamentals of Building Websites
          </p>
        </div>
      </div>

      {/* Slider Section */}
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

export default BasicWebdevlopmentIntroduction;