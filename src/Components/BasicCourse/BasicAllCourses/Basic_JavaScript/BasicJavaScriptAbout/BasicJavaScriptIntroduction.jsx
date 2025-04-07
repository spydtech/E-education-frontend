import React, { useState } from "react";

function BasicJavaScriptIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8 font-poppins">
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
      heading: "Introduction to JavaScript",
      items: [
        "JavaScript is a versatile programming language primarily used for web development.",
        "It allows you to implement complex features on web pages.",
      ],
    },
    {
      heading: "Basic Syntax",
      items: [
        "JavaScript is case-sensitive and uses the Unicode character set.",
        "Statements are separated by semicolons.",
      ],
    },
    {
      heading: "Variables in JavaScript",
      items: [
        "Variables can be declared using var, let, or const.",
        "Variable names must start with a letter, underscore (_), or dollar sign ($).",
      ],
    },
    {
      heading: "JavaScript Data Types",
      items: [
        "String: A sequence of characters.",
        "Number: Numeric values.",
        "Boolean: True or false.",
        "Object: A collection of properties.",
        "Array: An ordered list of values.",
      ],
    },
    {
      heading: "Basic JavaScript Functions",
      items: [
        "Functions are defined with the function keyword.",
        "They can accept parameters and return values.",
        "Functions can be stored in variables and passed as arguments to other functions.",
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
            <span className="text-[#f6ac14] inline pl-2"> JavaScript</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
          Brief about JavaScript
          </p>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className=" lg:h-[468px]"> */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-5 lg:flex flex-col justify-between font-poppins">
        <div className="flex text-white ">
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

export default BasicJavaScriptIntroduction;