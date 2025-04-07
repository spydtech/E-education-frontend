import React, { useState } from "react";

function BasicPhpKeyHighlights() {
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
          <div className="p-3 space-y-2 font-poppins ">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>Introduction to PHP programming</li>
              <li>Basics of server-side scripting</li>
              <li>Database integration with MySQL</li>
              <li>Building dynamic websites</li>
              <li>Error handling and debugging</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2  font-poppins">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>PHP Syntax and Operators</li>
              <li>Control Structures</li>
              <li>Functions and Arrays</li>
              <li>Sessions and Cookies</li>
              <li>File Handling</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>Web Application Development</li>
              <li>Content Management Systems (CMS)</li>
              <li>E-commerce Platforms</li>
              <li>Custom Web Solutions</li>
              <li>API Development</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2  font-poppins">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>Develop dynamic and interactive websites</li>
              <li>Integrate PHP with databases</li>
              <li>Implement security measures in web applications</li>
              <li>Debug and troubleshoot PHP code</li>
              <li>Create and manage sessions and cookies</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2  font-poppins">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>Beginner programmers interested in server-side scripting</li>
              <li>Web developers looking to enhance their skills with PHP</li>
              <li>Individuals aiming to build dynamic web applications</li> 
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
export default BasicPhpKeyHighlights;
