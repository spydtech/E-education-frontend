import React, { useState } from "react";

function BasicWebdevlopmentKeyHighlights() {
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
              <li>Comprehensive introduction to modern web development</li>
              <li>Frontend and backend development fundamentals</li>
              <li>Responsive design principles</li>
              <li>Client-server architecture</li>
              <li>Version control with Git</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>HTML5 semantic structure</li>
              <li>CSS3 styling and animations</li>
              <li>JavaScript ES6+ fundamentals</li>
              <li>DOM manipulation</li>
              <li>RESTful APIs and AJAX</li>
              <li>React.js framework basics</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Building responsive websites</li>
              <li>Creating interactive web applications</li>
              <li>Developing single-page applications (SPAs)</li>
              <li>Implementing progressive web apps (PWAs)</li>
              <li>API integration and development</li>
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
              <li>Write clean, semantic HTML and CSS</li>
              <li>Implement responsive layouts with Flexbox/Grid</li>
              <li>Build interactive features with JavaScript</li>
              <li>Debug and optimize web performance</li>
              <li>Deploy websites to production environments</li>
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
              <li>Beginners starting their web development journey</li>
              <li>Designers transitioning to development</li>
              <li>Professionals looking to upskill in modern web technologies</li>
              <li>Entrepreneurs wanting to build their own websites</li>
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
            Web Development Highlights
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

export default BasicWebdevlopmentKeyHighlights;