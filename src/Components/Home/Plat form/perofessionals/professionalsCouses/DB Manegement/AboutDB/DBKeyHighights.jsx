import React, { useState } from "react";

function DBKeyHighlights() {
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
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Introduction to database management systems (DBMS)</li>
              <li>Importance and benefits of effective database management</li>
              <li>Overview of different types of database systems</li>
              <li>Real-world applications of database management</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Relational Database Management Systems (RDBMS)</li>
              <li>NoSQL Databases</li>
              <li>Data Modeling and Database Design</li>
              <li>SQL and Query Optimization</li>
              <li>Database Security and Integrity</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Data Warehousing and Business Intelligence</li>
              <li>Web and Mobile Application Databases</li>
              <li>Big Data Analytics</li>
              <li>Enterprise Resource Planning (ERP) Systems</li>
              <li>Customer Relationship Management (CRM) Systems</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">Skills Developed</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Proficiency in SQL and database querying</li>
              <li>Ability to design and normalize database schemas</li>
              <li>Understanding of database management and optimization</li>
              <li>Experience with NoSQL databases</li>
              <li>Knowledge of database security best practices</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">Target Audience</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Database Administrators and Managers</li>
              <li>Software Developers and Engineers</li>
              <li>Data Analysts and Scientists</li>
              <li>IT Professionals and System Administrators</li>
              <li>Students and Aspiring Database Professionals</li>
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
        <div className="bg-[#0098F1] text-white md:w-[460px] lg:w-[520px]">{renderContent()}</div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            Mobile App Key Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`p-5 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md ${
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

export default DBKeyHighlights;
