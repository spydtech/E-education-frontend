import React, { useState } from "react";

function AdvancephpKeyHighlights() {
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
          <>
            <ul className="space-y-2 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl mb-12 font-poppins">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Overview
              </p>
              <li>
                Introduction to advanced PHP programming and its importance.
              </li>
              <li>Understanding modern PHP development practices.</li>
              <li>Exploring PHP 7+ features and improvements.</li>
              <li>Utilizing PHP in web development and beyond.</li>
              <li>Integration with databases and other technologies.</li>
              <li>Introduction to PHP frameworks and tools.</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl font-poppins">
              <p className="text-2xl font-medium text-orange-600 py-4">
                Key Concepts
              </p>
              <li>Advanced Object-Oriented Programming (OOP) in PHP.</li>
              <li>Namespaces and autoloading with Composer.</li>
              <li>Traits and reusable code patterns.</li>
              <li>Dependency Injection and Service Containers.</li>
              <li>RESTful API development with PHP.</li>
              <li>Security best practices in PHP.</li>
              <li>Error handling and debugging techniques.</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl font-poppins">
              <p className="text-2xl font-medium text-orange-600">
                Applications
              </p>
              <li>Web Application Development</li>
              <li>API Development and Integration</li>
              <li>Command Line Interface (CLI) Scripts</li>
              <li>Data Processing and ETL tasks</li>
              <li>Content Management Systems (CMS)</li>
              <li>E-commerce platforms</li>
              <li>Microservices Architecture</li>
              <li>Custom Frameworks and Libraries</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl font-poppins">
              <p className="text-2xl font-medium text-orange-600">
                Skills Developed
              </p>
              <li>Proficiency in modern PHP syntax and features.</li>
              <li>Understanding of advanced OOP principles.</li>
              <li>Ability to develop and consume RESTful APIs.</li>
              <li>Experience with PHP frameworks like Laravel or Symfony.</li>
              <li>Knowledge of security best practices in PHP.</li>
              <li>Ability to write efficient and maintainable code.</li>
              <li>Proficiency in database integration and ORM.</li>
              <li>Understanding of testing and debugging techniques.</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <ul className="space-y-3 pt-4 font-normal text-[16px] list-disc pl-16 bg-gray-200 shadow-2xl font-poppins">
              <p className="text-2xl font-medium text-orange-600">
                Target Audience
              </p>
              <li>PHP Developers looking to deepen their knowledge.</li>
              <li>Web Developers aiming to master backend development.</li>
              <li>Software Engineers interested in PHP frameworks.</li>
              <li>IT professionals transitioning to PHP development.</li>
              <li>Students pursuing a career in web development.</li>
              <li>Freelancers building complex PHP applications.</li>
              <li>
                Project managers wanting to understand PHP development better.
              </li>
              <li>Technology enthusiasts exploring server-side scripting.</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div id="main" className="md:lg:xl:px-20 bg-[#d90429] mb-12 font-poppins">
        <div id="subdiv1" className="pt-4">
          <div id="h1" className="">
            <p className="md:lg:w-auto w-96 font-semibold text-xl p-2 text-[#f9ac13]">
              Advanced PHP Key Highlights
            </p>
          </div>
          <div
            id="h2"
            className="md:lg:flex pl-2 space-x-3 md:lg:w-auto lg:md:h-auto w-96 h-auto"
          >
            <p className="text-5xl font-bold">What does this</p>
            <p className="text-5xl font-bold text-[#f9ac13] inline">
              Course have to offer?
            </p>
          </div>
        </div>
        <div
          id="subdiv2"
          className="justify-between grid grid-cols-1 lg:md:grid-cols-2"
        >
          {/* content start */}
          <div id="content1" className="">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`hover:text-yellow-500 p-5 text-start hover:cursor-pointer text-xl font-medium my-6 mx-4 h-16 w-80 lg:md:h-16 lg:md:w-[400px] flex items-center border-2 border-opacity-15 rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${
                  selectedItem === index
                    ? "bg-[#f9ac13] text-white hover:text-white border-none"
                    : ""
                }`}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div
            id="content2"
            className="md:lg:w-auto md:lg:h-auto md:lg:xl:w-[400px] h-auto pt-4 md:lg:xl:pl-4 text-xl"
          >
            {renderContent()}
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

export default AdvancephpKeyHighlights;
