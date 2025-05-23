import React, { useState } from "react";

function BasicJavaKeyHighlights() {
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
              <li>Comprehensive introduction to Java programming</li>
              <li>Object-Oriented Programming fundamentals</li>
              <li>Hands-on coding exercises and projects</li>
              <li>Java Development Kit (JDK) setup and configuration</li>
              <li>Integrated Development Environment (IDE) usage</li>
              <li>Java syntax and core libraries</li>
              <li>Debugging and exception handling</li>
              <li>Best practices and coding standards</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Variables, data types, and operators</li>
              <li>Control structures (if-else, loops, switch)</li>
              <li>Methods and functions</li>
              <li>Classes and objects</li>
              <li>Inheritance and polymorphism</li>
              <li>Interfaces and abstract classes</li>
              <li>Collections framework</li>
              <li>Exception handling</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Desktop application development</li>
              <li>Android app development (with Android SDK)</li>
              <li>Web application backends</li>
              <li>Enterprise software development</li>
              <li>Scientific computing applications</li>
              <li>Banking and financial systems</li>
              <li>Big data technologies (Hadoop, Spark)</li>
              <li>Embedded systems programming</li>
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
              <li>Object-Oriented Programming principles</li>
              <li>Algorithm design and implementation</li>
              <li>Problem-solving with Java</li>
              <li>Memory management understanding</li>
              <li>Debugging and testing techniques</li>
              <li>Code organization and documentation</li>
              <li>Understanding of Java Virtual Machine (JVM)</li>
              <li>Basic understanding of multithreading</li>
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
              <li>Beginner programmers starting with Java</li>
              <li>Computer science students</li>
              <li>Professionals transitioning to Java development</li>
              <li>Android developers needing Java fundamentals</li>
              <li>Self-taught programmers looking to formalize knowledge</li>
              <li>IT professionals expanding their skill set</li>
              <li>Hobbyists interested in programming</li>
              <li>Anyone preparing for Java certification exams</li>
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
            Java Programming Course Highlights
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

export default BasicJavaKeyHighlights;