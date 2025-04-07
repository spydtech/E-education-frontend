import React, { useState } from "react";

function BasicPhpIntroduction() {
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
      heading: "Introduction to PHP",
      items: [
        "PHP (Hypertext Preprocessor) is a widely-used open source general-purpose scripting language.",
        "It is especially suited for web development and can be embedded into HTML.",
      ],
    },
    {
      heading: "Basic Syntax",
      items: [
        "PHP scripts are executed on the server.",
        "A PHP script can be placed anywhere in the document.",
      ],
    },
    {
      heading: "Variables in PHP",
      items: [
        "A variable starts with the $ sign, followed by the name of the variable.",
        "A variable name must start with a letter or the underscore character.",
      ],
    },
    {
      heading: "PHP Data Types",
      items: [
        "String: A sequence of characters.",
        "Integer: Non-decimal number.",
        "Float: Decimal number.",
        "Boolean: True or false.",
        "Array: A collection of values.",
      ],
    },
    {
      heading: "Basic PHP Syntax",
      items: [
        "echo: Outputs one or more strings.",
        "print: Outputs a string.",
        "Comments: Single-line (//) and multi-line (/* */) comments.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5font-poppins ">
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
            <span className="text-[#f6ac14] inline pl-2">PHP</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
          Brief about PHP
          </p>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className=" lg:h-[468px]"> */}
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

export default BasicPhpIntroduction;