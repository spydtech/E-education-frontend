import React, { useState } from "react";

function PowerBiKeyHighlights() {
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
              <li>Comprehensive Power BI training with hands-on projects</li>
              <li>Industry-recognized certification upon completion</li>
              <li>Live sessions with experienced BI professionals</li>
              <li>Real-time dashboards and data modeling experience</li>
              <li>Includes DAX, Power Query, and data visualization</li>
              <li>Capstone project to demonstrate Power BI expertise</li>
              <li>
                Flexible learning with video tutorials and live doubt sessions
              </li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Data transformation using Power Query</li>
              <li>Data modeling and relationships</li>
              <li>DAX formulas and calculations</li>
              <li>Building interactive dashboards</li>
              <li>Using Power BI service and sharing reports</li>
              <li>Row-level security (RLS)</li>
              <li>Connecting to various data sources (Excel, SQL, APIs)</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Business Intelligence Analyst</li>
              <li>Data Analyst</li>
              <li>Reporting Analyst</li>
              <li>BI Developer</li>
              <li>Consultant (Power BI)</li>
              <li>Dashboard Developer</li>
              <li>Data Visualization Specialist</li>
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
              <li>Mastery in Power BI Desktop & Service</li>
              <li>Proficiency in DAX for advanced calculations</li>
              <li>Creating powerful visual dashboards</li>
              <li>Data cleaning and transformation using Power Query</li>
              <li>Implementing data modeling best practices</li>
              <li>End-to-end BI solutions from raw data to insights</li>
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
              <li>Students and freshers interested in data analytics</li>
              <li>Working professionals looking to switch to BI roles</li>
              <li>Excel users who want to upgrade to Power BI</li>
              <li>Managers and team leads who want to build dashboards</li>
              <li>Data enthusiasts seeking real-world analytics skills</li>
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
            Power BI Course Highlights
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

export default PowerBiKeyHighlights;
