import React, { useState } from "react";

function MobileappIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-4">
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
      heading: "UI/UX Design Principles",
      items: [
        "Learn the fundamentals of UI/UX design for mobile applications.",
        "Understand user interface design, usability, and user experience principles.",
      ],
    },
    {
      heading: "Mobile App Development Tools",
      items: [
        "Explore essential tools and technologies for mobile app development.",
        "Get hands-on experience with popular frameworks like React Native and Flutter.",
      ],
    },
    {
      heading: "Mobile App Architecture",
      items: [
        "Understand different mobile app architectures such as MVC, MVP, and MVVM.",
        "Learn best practices for structuring and organizing mobile app code.",
      ],
    },
    {
      heading: "Testing and Deployment",
      items: [
        "Implement mobile app testing strategies for ensuring quality and reliability.",
        "Learn about the deployment process to app stores like Google Play and Apple App Store.",
      ],
    },
    {
      heading: "Performance Optimization",
      items: [
        "Optimize mobile app performance for speed, responsiveness, and efficiency.",
        "Implement techniques to reduce app size, improve loading times, and enhance user experience.",
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
      <div>
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-3xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-2xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">Mobile App Development?</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-2xl mt-2 text-wrap">
            Discover the deeper aspects of mobile app development
          </p>
        </div>
      </div>

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

export default MobileappIntroduction;
