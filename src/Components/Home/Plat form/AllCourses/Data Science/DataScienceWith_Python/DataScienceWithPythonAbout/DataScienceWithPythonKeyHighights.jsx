import React, { useState } from "react";

function DataScienceWithPythonKeyHighlights() {
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
              <li>Master data science foundations using Python programming</li>
              <li>Gain hands-on experience through real-world projects</li>
              <li>
                Work with key libraries like NumPy, Pandas, Matplotlib &
                Scikit-learn
              </li>
              <li>Explore machine learning algorithms and model deployment</li>
              <li>Learn to clean, analyze, and visualize data efficiently</li>
              <li>Certificate from a recognized e-education platform</li>
              <li>Weekly mentoring sessions with industry professionals</li>
              <li>
                Career services including mock interviews & resume support
              </li>
              <li>Capstone project aligned with industry use cases</li>
              <li>Build AI-driven applications using Python</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Python programming basics & syntax</li>
              <li>Data analysis using Pandas & NumPy</li>
              <li>Data visualization with Matplotlib & Seaborn</li>
              <li>Statistics and probability for data science</li>
              <li>Supervised and unsupervised learning</li>
              <li>Model evaluation and tuning</li>
              <li>Working with APIs and web scraping</li>
              <li>Deploying ML models using Flask</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Data Analyst</li>
              <li>Machine Learning Engineer</li>
              <li>Data Scientist (Entry-level)</li>
              <li>Business Intelligence Analyst</li>
              <li>AI Engineer (Python-based)</li>
              <li>Data Engineer (ETL-focused)</li>
              <li>Product Analyst</li>
              <li>Research Analyst</li>
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
              <li>Proficiency in Python and data handling libraries</li>
              <li>Data cleaning, transformation, and visualization</li>
              <li>Ability to build and evaluate machine learning models</li>
              <li>Statistical reasoning and hypothesis testing</li>
              <li>Model deployment using Flask or Streamlit</li>
              <li>Handling real-time datasets and API integrations</li>
              <li>Structured problem-solving with data</li>
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
              <li>Beginners aiming to start a career in data science</li>
              <li>Students and recent graduates with basic Python knowledge</li>
              <li>Working professionals transitioning to data-related roles</li>
              <li>
                Engineers, analysts, or developers exploring machine learning
              </li>
              <li>Anyone passionate about data-driven decision making</li>
              <li>Business professionals interested in analytics and Python</li>
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
            Data Science with Python Course Highlights
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

export default DataScienceWithPythonKeyHighlights;
