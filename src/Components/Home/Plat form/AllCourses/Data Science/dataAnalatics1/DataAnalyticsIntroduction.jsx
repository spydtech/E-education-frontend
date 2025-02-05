import React, { useState } from "react";

function DataAnalyticsIntroduction() {
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
      heading: "Introduction",
      items: [
        "Data analytics is the process of examining large datasets to uncover patterns, correlations, trends, and other useful insights...",
      ],
    },
    {
      heading: "Basics of Data Analytics",
      items: [
        "What is Data?: Define data and distinguish between structured and unstructured data.",
        "Types of Data Analytics: Introduce descriptive analytics, predictive analytics, and prescriptive analytics.",
      ],
    },
    {
      heading: "Tools and Technologies",
      items: [
        "Popular Data Analytics Tools: Provide an overview of commonly used tools like Python, R, SQL...",
        "Introduction to Machine Learning: Briefly introduce the concept of machine learning and its role in data analytics.",
      ],
    },
    {
      heading: "Data Collection and Preparation",
      items: [
        "Data Collection Methods: Explain various methods of data collection...",
        "Data Cleaning and Preprocessing: Discuss the importance of cleaning and preprocessing data...",
      ],
    },
    {
      heading: "Exploratory Data Analysis (EDA)",
      items: [
        "Understanding the Dataset: Explain the initial steps involved in exploring and understanding the dataset.",
        "Basic Statistical Analysis: Introduce basic statistical techniques...",
        "Data Visualization Techniques: Showcase different visualization techniques...",
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
            <span className="text-[#f6ac14] inline pl-2">Data Analytics</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">Brief about Data Analytics</p>
        </div>
      </div>

      {/* Slider Section */}
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
          <div className="text-white text-sm">{`Page ${currentSlide + 1}/${slidesData.length}`}</div>
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

export default DataAnalyticsIntroduction;
