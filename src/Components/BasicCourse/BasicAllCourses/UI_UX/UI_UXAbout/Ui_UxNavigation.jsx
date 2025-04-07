import React, { useState, useEffect } from "react";
import Ui_UxKeyHighights from "./Ui_UxKeyHighights";
import Ui_UxCertificate from "./Ui_UxCertificate";
import Ui_UxCareersOutcomes from "./Ui_UxCareersOutcomes";
import Ui_UxAbout from "./Ui_UxAbout";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaBars, FaTimes } from "react-icons/fa";
import Ui_UxSyallabus from "./Ui_UxSyallabus";
import Ui_UxIntroduction from "./Ui_UxIntroduction";
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Ui_UxNavigation = () => {
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
      setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    } else if (direction === "prev") {
      setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
     <nav className="flex justify-between items-center p-2 bg-[#0098f1] shadow-xl rounded-t-2xl mb-5 lg:px-28 lg:py-3 mx-5 font-poppins">
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
      {/* Section Content */}
      <div className="mx-5 font-poppins">
        {currentSection === 0 && <Ui_UxIntroduction />}
        {currentSection === 1 && <Ui_UxKeyHighights />}
        {currentSection === 2 && <Ui_UxCareersOutcomes />}
        {currentSection === 3 && <Ui_UxAbout />}
        {currentSection === 4 && <Ui_UxCertificate />}
        {currentSection === 5 && <Ui_UxSyallabus />}
      </div>
    </>
  );
};

export default Ui_UxNavigation;
