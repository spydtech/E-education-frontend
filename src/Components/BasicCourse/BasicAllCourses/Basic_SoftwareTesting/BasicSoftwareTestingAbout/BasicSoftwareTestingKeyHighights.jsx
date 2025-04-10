import React, { useState } from "react";

function BasicSoftwareTestingKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Introduction to Software Testing</li>
              <li>
                Importance of testing in the software development lifecycle
              </li>
              <li>Identifying and managing software bugs</li>
              <li>Ensuring software quality and reliability</li>
              <li>Manual and Automated testing techniques</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Types of Testing: Unit, Integration, System, Acceptance</li>
              <li>Testing Techniques: Black-box, White-box, Grey-box</li>
              <li>Test Cases, Test Plans, and Bug Reports</li>
              <li>Defect Life Cycle</li>
              <li>Regression and Smoke Testing</li>
              <li>STLC (Software Testing Life Cycle)</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Quality assurance in software development</li>
              <li>Test automation in CI/CD pipelines</li>
              <li>Performance and load testing of web applications</li>
              <li>Security testing of applications</li>
              <li>Enhancing user experience through usability testing</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Designing effective test cases and plans</li>
              <li>Executing manual and automated tests</li>
              <li>Using tools like Selenium, JIRA, Postman</li>
              <li>Reporting and tracking bugs efficiently</li>
              <li>Understanding of STLC and SDLC</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Aspiring QA engineers and testers</li>
              <li>Developers interested in quality assurance practices</li>
              <li>IT professionals looking to switch to software testing</li>
              <li>Students and beginners entering the tech industry</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4 font-poppins">
      <div className="md:flex justify-around  ">
        <div className="bg-[#0098F1] text-white  pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            E-Education Course Highlights
          </p>
          {data.map((item, index) => (
            <ul className="">
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={`pt-4 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md text-center  ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                {item.label}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BasicSoftwareTestingKeyHighlights;
