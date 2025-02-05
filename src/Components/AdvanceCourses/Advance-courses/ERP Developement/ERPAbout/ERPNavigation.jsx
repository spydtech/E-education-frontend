import React, { useState, useEffect } from "react";
import ERPKeyHighlights from "./ERPKeyHighights";
import ERPCertificate from "./ERPCertificate";
import ERPCareersOutcomes from "./ERPCareersOutcomes";
import ERPAbout from "./ERPAbout";
import ERPSyllabus from "./ERPSyallabus";
import ERPIntroduction from "./ERPIntroduction";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ERPNavigation = () => {
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
      <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28 lg:py-1 mx-5">
        <button
          className={`text-white ${currentSection === 0 ? "invisible" : ""}`}
          onClick={() => handleNextSection("prev")}
          aria-label="Previous Section"
        >
          <FaAngleDoubleLeft size={24} />
        </button>

        {/* Navigation Links */}
        <ul className="text-md flex justify-center items-center w-full md:justify-around">
          {/* Show only the current section on small screens */}
          <li className="block md:hidden">
            <button
              className={`transition duration-300 text-white ${
                currentSection === 0 ? "underline underline-offset-8" : ""
              } rounded`}
              onClick={() => setCurrentSection(currentSection)}
              aria-label={`Go to ${sections[currentSection]}`}
            >
              {sections[currentSection]}
            </button>
          </li>

          {/* Show current, previous, and next sections on medium screens */}
          {sections.map((section, index) => (
            <li
              key={index}
              className={`${
                index === currentSection ||
                index === currentSection - 1 ||
                index === currentSection + 1
                  ? "md:block"
                  : "md:hidden"
              } hidden lg:hidden`}
            >
              <button
                className={`transition duration-300 text-white ${
                  currentSection === index
                    ? "underline underline-offset-8"
                    : ""
                } rounded px-2 py-1 sm:px-4 sm:py-2`}
                onClick={() => setCurrentSection(index)}
                aria-label={`Go to ${section}`}
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
                  currentSection === index
                    ? "underline underline-offset-8"
                    : ""
                } rounded px-2 py-1 sm:px-4 sm:py-2`}
                onClick={() => setCurrentSection(index)}
                aria-label={`Go to ${section}`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <button
          className={`text-white ${
            currentSection === sections.length - 1 ? "invisible" : ""
          }`}
          onClick={() => handleNextSection("next")}
          aria-label="Next Section"
        >
          <FaAngleDoubleRight size={24} />
        </button>
      </nav>

      {/* Main Content */}
      <div>
        {currentSection === 0 && <ERPIntroduction />}
        {currentSection === 1 && <ERPKeyHighlights />}
        {currentSection === 2 && <ERPCareersOutcomes />}
        {currentSection === 3 && <ERPAbout />}
        {currentSection === 4 && <ERPCertificate />}
        {currentSection === 5 && <ERPSyllabus />}
      </div>
    </>
  );
};

export default ERPNavigation;
