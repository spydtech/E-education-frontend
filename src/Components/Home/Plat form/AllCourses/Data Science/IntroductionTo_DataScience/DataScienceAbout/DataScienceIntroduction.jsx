import React, { useState } from "react";

function DataScienceIntroduction() {
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
      heading: "Introduction to Data Science",
      items: [
        "Data Science is an interdisciplinary field focused on extracting knowledge and insights from structured and unstructured data.",
        "Key Concepts: Understand the importance of data science in solving complex problems.",
      ],
    },
    {
      heading: "Data Science Basics",
      items: [
        "Data Collection: Learn about various methods of data collection and the importance of data quality.",
        "Data Cleaning: Understand techniques for cleaning and preprocessing data to ensure accuracy.",
      ],
    },
    {
      heading: "Data Science Tools",
      items: [
        "Programming Languages: Explore Python and R as primary tools for data science.",
        "Libraries and Frameworks: Learn about essential libraries like Pandas, NumPy, and Scikit-learn.",
      ],
    },
    {
      heading: "Data Visualization",
      items: [
        "Visualization Tools: Get introduced to tools like Matplotlib, Seaborn, and Tableau for data visualization.",
        "Effective Communication: Learn how to present data findings clearly and effectively.",
      ],
    },
    {
      heading: "Machine Learning Basics",
      items: [
        "Supervised Learning: Understand algorithms for supervised learning such as linear regression and classification.",
        "Unsupervised Learning: Learn about clustering and association techniques in unsupervised learning.",
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
            <span className="text-[#f6ac14] inline pl-2">Data Science</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Data Science
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

export default DataScienceIntroduction;
