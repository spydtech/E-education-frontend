import React, { useState } from "react";

function DBIntro() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 pb-8 pt-6">
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
      heading: "Introduction to Database Management",
      items: [
        "Database management involves the use of software to store and organize data.",
        "Key Concepts: Understand the fundamental principles and benefits of database systems.",
      ],
    },
    {
      heading: "Types of Database Management Systems",
      items: [
        "Relational Database Management System (RDBMS): Uses structured query language (SQL) for data manipulation.",
        "NoSQL Database: Designed for large-scale data storage and for massively-parallel data processing across a large number of commodity servers.",
        "In-Memory Database: Stores data in the main memory rather than on disk to provide faster query responses.",
      ],
    },
    {
      heading: "Database Design and Architecture",
      items: [
        "Schema Design: The logical structure of a database, including tables, columns, and relationships.",
        "Normalization: The process of organizing data to reduce redundancy and improve data integrity.",
        "Data Warehousing: A system used for reporting and data analysis, integrating data from multiple sources.",
      ],
    },
    // Add more slides as needed
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
    <div className="flex flex-col md:flex-row md:justify-around md:items-center lg:h-[450px] px-8 md:mb-9 mb-5">
      <div>
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-3xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-2xl">
            Welcome to
            <span className="text-[#f6ac14] inline pl-2">Database Management!</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-2xl mt-2 text-wrap">
            Gain insights into the foundational concepts and principles of database management.
          </p>
        </div>
      </div>

      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:h-[470px] mt-4 md:px-5 md:pb-3 lg:flex flex-col justify-between">
        <div className="flex text-whitess">
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

export default DBIntro;
