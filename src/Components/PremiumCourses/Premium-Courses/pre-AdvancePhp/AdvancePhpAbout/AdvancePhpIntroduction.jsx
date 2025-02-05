import React, { useState } from "react";

function AdvancePhpIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => (
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

  const slidesData = [
    {
      heading: "Advanced PHP Concepts",
      items: [
        "Object-Oriented Programming in PHP.",
        "MVC Architecture for PHP web applications.",
        "Working with databases using PHP (e.g., MySQL).",
        "Error handling and exception handling in PHP.",
        "Integration of PHP with frontend technologies like React or Angular.",
      ],
    },
    {
      heading: "Server-Side Scripting",
      items: [
        "Difference between client-side and server-side scripting.",
        "Server-side validation and form handling in PHP.",
      ],
    },
    {
      heading: "PHP Security",
      items: [
        "Common security vulnerabilities in PHP applications.",
        "Best practices for securing PHP code.",
        "Protection against SQL injection and XSS attacks.",
      ],
    },
    {
      heading: "Advanced PHP Functions",
      items: [
        "Creating custom functions in PHP.",
        "Working with PHP libraries and packages.",
        "Handling file uploads and processing in PHP.",
      ],
    },
    {
      heading: "Performance Optimization",
      items: [
        "Caching strategies for PHP applications.",
        "Optimizing database queries in PHP.",
        "Using asynchronous processing in PHP applications.",
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
      <div className="">
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">AdvancePHP</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about AdvancePHP
          </p>
        </div>
      </div>

      {/* <div className=" lg:h-[468px]"> */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-3 lg:flex flex-col justify-between ">
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

export default AdvancePhpIntroduction;
