import React, { useState } from "react";

function BasicC_CplusIntroduction() {
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
          heading: "Introduction to C & C++",
          items: [
            "C is a general-purpose programming language that has been around since the 1970s.",
            "C++ is an extension of C with object-oriented features, developed in the 1980s.",
          ],
        },
        {
          heading: "Basic Syntax",
          items: [
            "C and C++ programs start with a main function.",
            "Statements end with a semicolon.",
            "Code blocks are enclosed in curly braces.",
          ],
        },
        {
          heading: "Variables and Data Types",
          items: [
            "Variables must be declared before use.",
            "Common data types include int, float, double, and char.",
            "C++ introduces additional data types like bool and string.",
          ],
        },
        {
          heading: "Control Structures",
          items: [
            "Conditional statements include if, else if, and else.",
            "Loops include for, while, and do-while.",
            "Switch statements are used for multi-way branching.",
          ],
        },
        {
          heading: "Functions",
          items: [
            "Functions are blocks of code that perform a specific task.",
            "Functions must be declared and defined.",
            "Functions can return values and accept parameters.",
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
            <span className="text-[#f6ac14] inline pl-2">C & C++</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
          Brief about C & C++
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

export default BasicC_CplusIntroduction;




