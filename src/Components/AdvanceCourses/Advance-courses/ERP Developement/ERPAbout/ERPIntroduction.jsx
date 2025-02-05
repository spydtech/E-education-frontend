// ERPIntroduction.jsx
import React, { useState } from "react";

function ERPIntroduction() {
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
      heading: "Introduction to ERP",
      items: [
        "ERP (Enterprise Resource Planning) is a type of software used by organizations to manage day-to-day business activities such as accounting, procurement, project management, and manufacturing.",
        "An ERP system integrates various functions into one complete system to streamline processes and information across the organization.",
      ],
    },
    {
      heading: "Benefits of ERP Systems",
      items: [
        "Improved Efficiency: Automates repetitive tasks and streamlines business processes.",
        "Enhanced Visibility: Provides real-time data access and reporting capabilities.",
        "Better Collaboration: Centralized data facilitates better communication and collaboration among departments.",
        "Scalability: Can grow and adapt with the business, adding new functionalities as needed.",
      ],
    },
    {
      heading: "Key Features of ERP Systems",
      items: [
        "Financial Management: General ledger, accounts payable, accounts receivable, and fixed assets management.",
        "Human Resources: Payroll, time tracking, and employee data management.",
        "Supply Chain Management: Inventory, procurement, and logistics management.",
        "Customer Relationship Management (CRM): Sales, customer service, and marketing automation.",
        "Manufacturing: Production planning, scheduling, and quality control.",
        "Project Management: Planning, execution, and monitoring of projects.",
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
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-12 mb-5">
      <div>
      <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">

            Introduction
          </p>
        </div>
        <div className="mt-2">

          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">ERP?</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-2xl mt-2">
          Brief overview of ERP systems and their benefits

          </p>
        </div>
      </div>
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:h-[480px] px-4 pb-4 lg:flex flex-col justify-between">
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
            aria-label="Previous Slide"
          >
            Previous
          </button>
          <div className="text-white text-sm">{`Page ${
            currentSlide + 1
          }/${slidesData.length}`}</div>
          <button
            onClick={goToNextSlide}
            className="text-white hover:text-black font-bold rounded"
            aria-label="Next Slide"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ERPIntroduction;
