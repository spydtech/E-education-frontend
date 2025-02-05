import React, { useState } from "react";

function DataScienceWithPythonIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => (
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

  const slidesData = [
    {
      heading: "Introduction to Data Science with Python",
      items: [
        "Data Science with Python involves using Python programming language to perform data analysis, data manipulation, and data visualization.",
        "Key Concepts: Learn why Python is a popular choice for data science and its capabilities in handling and analyzing data.",
      ],
    },
    {
      heading: "Python Basics for Data Science",
      items: [
        "Introduction to Python: Learn the basics of Python programming.",
        "Data Structures: Understand Python data structures such as lists, dictionaries, and tuples.",
      ],
    },
    {
      heading: "Data Manipulation with Pandas",
      items: [
        "Pandas Library: Introduction to Pandas for data manipulation.",
        "DataFrames: Learn to create and manipulate DataFrames for data analysis.",
      ],
    },
    {
      heading: "Data Visualization with Matplotlib and Seaborn",
      items: [
        "Matplotlib: Learn to create basic plots and visualizations.",
        "Seaborn: Create advanced visualizations with Seaborn.",
      ],
    },
    {
      heading: "Machine Learning with Scikit-Learn",
      items: [
        "Introduction to Scikit-Learn: Learn the basics of machine learning with Scikit-Learn.",
        "Building Models: Understand how to build and evaluate machine learning models.",
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
          <span className="text-[#f6ac14] inline pl-2">Data Science with Python</span>
        </p>
      </div>
      <div>
        <p className="md:text-lg lg:text-3xl mt-2">
          Brief about Data Science with Python
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

export default DataScienceWithPythonIntroduction;
