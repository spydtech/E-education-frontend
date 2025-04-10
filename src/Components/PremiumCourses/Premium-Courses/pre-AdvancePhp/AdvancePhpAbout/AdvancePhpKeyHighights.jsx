import React, { useState } from "react";

function AdvancePhpKeyHighlights() {
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
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>
                In-depth PHP programming including object-oriented concepts
              </li>
              <li>Real-world project implementation using PHP & MySQL</li>
              <li>Integration with modern front-end frameworks</li>
              <li>Learn to build APIs and RESTful services</li>
              <li>
                Security practices like input sanitization and session handling
              </li>
              <li>Hands-on with Composer and PHP package management</li>
              <li>Live project mentoring and Git version control training</li>
              <li>Job-ready resume preparation and interview training</li>
              <li>Certification on completion with lifetime content access</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Advanced OOP in PHP (Inheritance, Traits, Interfaces)</li>
              <li>Laravel and CodeIgniter framework basics</li>
              <li>PHP MVC Architecture</li>
              <li>Database interaction with PDO and MySQLi</li>
              <li>Authentication, Authorization & Sessions</li>
              <li>REST API development</li>
              <li>Error handling and debugging</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>PHP Web Developer</li>
              <li>Full Stack Developer (PHP + JavaScript)</li>
              <li>Backend Engineer</li>
              <li>API Developer</li>
              <li>Laravel Developer</li>
              <li>Freelancer for custom CMS or E-commerce projects</li>
              <li>Support/Maintenance Engineer for legacy PHP apps</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Advanced PHP syntax and backend logic implementation</li>
              <li>RESTful API creation and integration</li>
              <li>Form validation, session management, and cookies</li>
              <li>Connecting PHP with MySQL using PDO/MySQLi</li>
              <li>Deploying PHP apps on live servers</li>
              <li>Debugging, logging, and performance optimization</li>
              <li>Using Git for version control and collaboration</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Students with basic PHP knowledge wanting to go advanced</li>
              <li>Junior developers aiming to become backend experts</li>
              <li>Web designers transitioning to full stack development</li>
              <li>Freelancers building dynamic web apps</li>
              <li>IT professionals wanting to upgrade their backend skills</li>
              <li>Startup founders or entrepreneurs developing MVPs</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4">
      <div className="md:flex justify-around">
        <div className="bg-[#0098F1] text-white pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            Advanced PHP Course Highlights
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

export default AdvancePhpKeyHighlights;
