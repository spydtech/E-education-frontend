import React, { useState } from "react";

function DataAnalyticsKeyHighlights() {
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
              <li>Industry-aligned Data Analytics curriculum</li>
              <li>Live sessions with data science experts</li>
              <li>Hands-on projects using Python, SQL & Power BI</li>
              <li>Real-time business case studies</li>
              <li>
                Career support including resume building & mock interviews
              </li>
              <li>Certification from top education partners</li>
              <li>Flexible EMI options available</li>
              <li>Interactive doubt clearing sessions</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Data Wrangling & Cleaning</li>
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Statistical Analysis</li>
              <li>Data Visualization (Power BI/Tableau)</li>
              <li>SQL for Data Queries</li>
              <li>Excel for Data Reporting</li>
              <li>Basic Predictive Modeling</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Business Intelligence Analyst</li>
              <li>Data Analyst</li>
              <li>Marketing Analyst</li>
              <li>Operations Analyst</li>
              <li>Financial Analyst</li>
              <li>Product Analyst</li>
              <li>Customer Insights Analyst</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Data interpretation and storytelling</li>
              <li>Proficiency in Excel, SQL, Python & Power BI</li>
              <li>Problem solving using data</li>
              <li>Report automation</li>
              <li>Stakeholder communication with data-driven insights</li>
              <li>Dashboards and performance tracking</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-4 space-y-2 md:p-6 lg:p-8">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Freshers aspiring for data roles</li>
              <li>
                Working professionals looking to transition into analytics
              </li>
              <li>Entrepreneurs and business owners</li>
              <li>Managers looking to leverage data in decision making</li>
              <li>
                Non-tech professionals seeking upskilling in data analytics
              </li>
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
        <div className="bg-[#0098F1] text-white md:w-[460px] lg:w-[520px]">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            E-Education Course Highlights
          </p>
          {data.map((item, index) => (
            <ul className="list-none" key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`p-3 md:p-4 lg:p-5 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md ${
                  selectedItem === index
                    ? "bg-[#0098F1] text-white border-none"
                    : "border-white"
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

export default DataAnalyticsKeyHighlights;
