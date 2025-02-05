import React, { useState, useEffect } from "react";
import SystemTestingKeyHighlights from "./SystemKeyHighights";
import SystemTestingCertificate from "./SystemCertificate";
import SystemTestingAbout from "./SystemAbout";
import SystemTestingCareersOutcomes from "./SystemCareersOutcomes";
import SystemTestingSyllabus from "./SystemSyallabus";
import SystemTestingIntroduction from "./Systemntroduction";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"; // Matching icons for navigation

const SystemTestingNavigation = () => {
  const sections = [
    "Introduction",
    "Key Highlights",
    "Career Outcomes",
    "About the Program",
    "Certificate",
    "Syllabus",
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sectionId = sections[currentSection];
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [currentSection, sections]);

  const handleNextSection = (direction) => {
    if (direction === "next") {
      setCurrentSection((prev) =>
        prev === sections.length - 1 ? 0 : prev + 1
      );
    } else if (direction === "prev") {
      setCurrentSection((prev) =>
        prev === 0 ? sections.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      {/* <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28">
        <button
          className={`text-white ${currentSection === 0 ? "invisible" : ""}`}
          onClick={() => handleNextSection("prev")}
        >
          <FaAngleDoubleLeft size={24} />
        </button>

        <ul className="text-md flex justify-center items-center w-full md:justify-around">
          <li className="max-md:hidden lg:hidden">
            <button
              className="transition duration-300 text-gray-200 rounded"
              onClick={() => setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)}
            >
              {sections[(currentSection - 1 + sections.length) % sections.length]}
            </button>
          </li>

          <li className="lg:hidden">
            <button
              className="transition duration-300 text-white rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection]}
            </button>
          </li>

          <li className="max-md:hidden lg:hidden">
            <button
              className="transition duration-300 text-gray-200 rounded"
              onClick={() => setCurrentSection((prev) => (prev + 1) % sections.length)}
            >
              {sections[(currentSection + 1) % sections.length]}
            </button>
          </li>

          {sections.map((section, index) => (
            <li key={index} className="hidden lg:block">
              <button
                className={`transition duration-300 text-white ${currentSection === index ? "underline underline-offset-8" : ""} rounded`}
                onClick={() => setCurrentSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`text-white ${currentSection === sections.length - 1 ? "invisible" : ""}`}
          onClick={() => handleNextSection("next")}
        >
          <FaAngleDoubleRight size={24} />
        </button>
      </nav> */}
      <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28 lg:py-3 mx-5">
        {/* Left button */}
        <button
          className={`text-white ${currentSection === 0 ? "invisible" : ""}`}
          onClick={() => handleNextSection("prev")}
        >
          <FaAngleDoubleLeft size={24} />
        </button>

        <ul className="text-md flex justify-center items-center w-full md:justify-around">
          {/* Show only the current section on small screens */}
          <li className="block md:hidden">
            <button
              className="transition duration-300 text-white rounded"
              onClick={() => setCurrentSection(currentSection)}
            >
              {sections[currentSection]}
            </button>
          </li>

          {/* Show current, previous, and next sections on medium screens */}
          {sections.map((section, index) => (
            <li
              key={index}
              className={`${
                index >= currentSection - 1 && index <= currentSection + 1
                  ? "md:block"
                  : "md:hidden"
              } hidden lg:hidden`}
            >
              <button
                className={`transition duration-300 text-white ${
                  currentSection === index ? "underline underline-offset-8" : ""
                } rounded`}
                onClick={() => setCurrentSection(index)}
              >
                {section}
              </button>
            </li>
          ))}

          {/* Show all sections on large screens */}
          {sections.map((section, index) => (
            <li key={index} className="hidden lg:block">
              <button
                className={`transition duration-300 text-white ${
                  currentSection === index ? "underline underline-offset-8" : ""
                } rounded`}
                onClick={() => setCurrentSection(index)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        {/* Right button */}
        <button
          className={`text-white ${
            currentSection === sections.length - 1 ? "invisible" : ""
          }`}
          onClick={() => handleNextSection("next")}
        >
          <FaAngleDoubleRight size={24} />
        </button>
      </nav>
      <div className="mx-5">
        {currentSection === 0 && <SystemTestingIntroduction />}
        {currentSection === 1 && <SystemTestingKeyHighlights />}
        {currentSection === 2 && <SystemTestingCareersOutcomes />}
        {currentSection === 3 && <SystemTestingAbout />}
        {currentSection === 4 && <SystemTestingCertificate />}
        {currentSection === 5 && <SystemTestingSyllabus />}
      </div>
    </>
  );
};

export default SystemTestingNavigation;
