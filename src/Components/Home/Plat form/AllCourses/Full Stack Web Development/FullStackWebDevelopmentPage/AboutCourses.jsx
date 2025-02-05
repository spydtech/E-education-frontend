import React, { useState, useEffect } from "react";
import About from "./About";
import Outcomes from "./Outcomes";
import FullStackWebDevFQACourses from "./FullStackWebDevFQACourses";
import FullStackWebDevelopmentTestimonioals from "./FullStackWebDevelopmentTestimonioals";
import { IoMenu } from "react-icons/io5";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const AboutCourses = () => {
  const sections = ["About", "Outcomes", "Courses", "Testimonials"];

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
    <div>
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
        {currentSection === 0 && <About />}
        {currentSection === 1 && <Outcomes />}
        {currentSection === 2 && <FullStackWebDevFQACourses />}
        {currentSection === 3 && <FullStackWebDevelopmentTestimonioals />}
      </div>
    </div>
  );
};

export default AboutCourses;

// import React, { useState, useEffect } from "react";
// import About from "./About";
// import Outcomes from "./Outcomes";
// import FullStackWebDevFQACourses from "./FullStackWebDevFQACourses";
// import FullStackWebDevelopmentTestimonioals from "./FullStackWebDevelopmentTestimonioals";
// import { IoMenu } from "react-icons/io5";
// const AboutCourses = () => {
//   const [activeTab, setActiveTab] = useState("tab1");
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     // Initialize the first tab
//     showTab("tab1");
//   }, []);

//   function showTab(tabId) {
//     // Update active tab
//     setActiveTab(tabId);
//   }

//   return (
//     <>
//       <div className="w-full  pl-4"></div>
//       <div className="w-full  px-28">
//         {/* Menu Icon */}
//         <div className="block lg:hidden mb-4">
//           <button
//             className="px-4 py-2 font-semibold border rounded-lg text-[#F6AC14]   focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <IoMenu />
//           </button>
//         </div>

//         {/* Tab Buttons */}
//         <div
//           className={`p-2   rounded-t-lg jus pt-8  lg:flex lg:space-x-4 ${
//             menuOpen ? "block" : "hidden"
//           }`}
//         >
//           <div className="flex justify-between  w-3/4 items-center">
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14] focus:outline-none tab-button ${
//                 activeTab === "tab1" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab1")}
//               style={{
//                 backgroundColor: activeTab === "tab1" ? "#F6AC14" : "",
//                 color: activeTab === "tab1" ? "white" : "",
//               }}
//             >
//               About
//             </button>
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14]   focus:outline-none tab-button ${
//                 activeTab === "tab2" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab2")}
//               style={{
//                 backgroundColor: activeTab === "tab2" ? "#F6AC14" : "",
//                 color: activeTab === "tab2" ? "white" : "",
//               }}
//             >
//               Outcomes
//             </button>
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14]   focus:outline-none tab-button ${
//                 activeTab === "tab3" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab3")}
//               style={{
//                 backgroundColor: activeTab === "tab3" ? "#F6AC14" : "",
//                 color: activeTab === "tab3" ? "white" : "",
//               }}
//             >
//               Courses
//             </button>
//             <button
//               className={`px-4 py-2 font-semibold text-xl rounded-r-lg text-[#F6AC14]   focus:outline-none tab-button ${
//                 activeTab === "tab4" ? "active" : ""
//               }`}
//               onClick={() => showTab("tab4")}
//               style={{
//                 backgroundColor: activeTab === "tab4" ? "#F6AC14" : "",
//                 color: activeTab === "tab4" ? "white" : "",
//               }}
//             >
//               Testimonials
//             </button>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="rounded-lg pb-5">
//           <div
//             id="tab1"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab1" ? "" : "hidden"
//             }`}
//           >
//             <About />
//           </div>
//           <div
//             id="tab2"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab2" ? "" : "hidden"
//             }`}
//           >
//             <Outcomes />
//           </div>
//           <div
//             id="tab3"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab3" ? "" : "hidden"
//             }`}
//           >
//             <FullStackWebDevFQACourses />
//           </div>
//           <div
//             id="tab4"
//             className={`p-4 tab-content bg-white rounded-lg ${
//               activeTab === "tab4" ? "" : "hidden"
//             }`}
//           >
//             <FullStackWebDevelopmentTestimonioals />
//           </div>
//           {/* Add more tabs here */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutCourses;
