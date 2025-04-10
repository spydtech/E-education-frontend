import React, { useState } from "react";

function DatavisualisationKeyHighights() {
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
              <li>Comprehensive modules on data storytelling & dashboarding</li>
              <li>Hands-on projects using real-world datasets</li>
              <li>Training with tools like Tableau, Power BI, and D3.js</li>
              <li>
                Interactive visualizations using Python (Matplotlib, Seaborn)
              </li>
              <li>Live mentoring sessions from industry professionals</li>
              <li>Certificate of completion from top e-learning platforms</li>
              <li>
                Use of Generative AI to enhance visualization and insights
              </li>
              <li>Resume building and interview preparation support</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Principles of Data Visualization</li>
              <li>Charts, Graphs, and Plot Types</li>
              <li>Storytelling with Data</li>
              <li>Data Cleaning and Preparation</li>
              <li>Design Thinking and UX for Dashboards</li>
              <li>Dynamic and Interactive Visualizations</li>
              <li>Visual Analytics using BI Tools</li>
              <li>Custom Visuals with JavaScript Libraries</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Business Intelligence Reporting</li>
              <li>Market Research and Analysis</li>
              <li>Data Journalism and Infographics</li>
              <li>Performance Monitoring Dashboards</li>
              <li>Healthcare Data Dashboards</li>
              <li>Sales and Marketing Analytics</li>
              <li>Public Policy and Open Data Visuals</li>
              <li>Finance and Risk Management Visualization</li>
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
              <li>Proficiency in tools like Tableau, Power BI, and Excel</li>
              <li>Creating effective data stories for decision-making</li>
              <li>Designing user-centric and responsive dashboards</li>
              <li>Visualizing complex datasets with clarity and impact</li>
              <li>Using Python libraries (Seaborn, Plotly, Matplotlib)</li>
              <li>Building interactive visualizations with D3.js</li>
              <li>Effective communication of insights through visuals</li>
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
              <li>Data analysts and business analysts</li>
              <li>Marketing professionals and product managers</li>
              <li>Beginners exploring data visualization</li>
              <li>Developers and engineers interested in BI tools</li>
              <li>Students in data science, analytics, and design</li>
              <li>Professionals making data-driven decisions</li>
              <li>Designers working on data-infused visuals</li>
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
            Data Visualization Course Highlights
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

export default DatavisualisationKeyHighights;
