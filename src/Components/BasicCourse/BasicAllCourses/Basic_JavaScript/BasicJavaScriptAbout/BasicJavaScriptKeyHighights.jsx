import React, { useState } from "react";

function BasicJavaScriptKeyHighlights() {
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
              <li>Comprehensive JavaScript fundamentals course</li>
              <li>Hands-on coding exercises and projects</li>
              <li>Modern ES6+ features included</li>
              <li>Browser APIs and DOM manipulation</li>
              <li>Asynchronous programming concepts</li>
              <li>Error handling and debugging techniques</li>
              <li>Best practices and coding standards</li>
              <li>Real-world application examples</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Variables, data types, and operators</li>
              <li>Functions and scope</li>
              <li>Objects and arrays</li>
              <li>Control structures and loops</li>
              <li>Event handling</li>
              <li>Prototypes and classes</li>
              <li>Promises and async/await</li>
              <li>Modules and imports</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Web application development</li>
              <li>Interactive website features</li>
              <li>Front-end frameworks foundation</li>
              <li>Browser extensions</li>
              <li>Simple game development</li>
              <li>Form validation</li>
              <li>Dynamic content loading</li>
              <li>API integration</li>
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
              <li>Problem-solving with code</li>
              <li>Algorithmic thinking</li>
              <li>Debugging and troubleshooting</li>
              <li>Code organization and structure</li>
              <li>Browser developer tools proficiency</li>
              <li>Understanding of web technologies</li>
              <li>Version control basics</li>
              <li>Code documentation</li>
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
              <li>Beginner programmers</li>
              <li>Web designers expanding to development</li>
              <li>Career switchers to tech</li>
              <li>Students studying computer science</li>
              <li>Professionals needing web skills</li>
              <li>Entrepreneurs building web products</li>
              <li>Hobbyists interested in coding</li>
              <li>Anyone curious about programming</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4 font-poppins">
      <div className="md:flex justify-around">
        <div className="bg-[#0098F1] text-white pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            JavaScript Course Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`pt-4 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md text-center ${
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

export default BasicJavaScriptKeyHighlights;