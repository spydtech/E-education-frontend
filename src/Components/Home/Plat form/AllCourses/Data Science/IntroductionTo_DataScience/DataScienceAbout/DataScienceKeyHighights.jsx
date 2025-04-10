import React, { useState } from "react";

function DataScienceKeyHighlights() {
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
              <li>Comprehensive introduction to Data Science fundamentals</li>
              <li>Hands-on projects with real-world datasets</li>
              <li>Guided learning with expert instructors</li>
              <li>
                Case studies covering multiple domains like healthcare, finance,
                and retail
              </li>
              <li>
                Certificate of completion from industry-recognized platform
              </li>
              <li>Access to Python, NumPy, Pandas, and Matplotlib tools</li>
              <li>Interactive quizzes and coding assessments</li>
              <li>Industry-relevant capstone project</li>
              <li>Resume and interview preparation support</li>
              <li>AI integration with data science workflows</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Introduction to Data Science Lifecycle</li>
              <li>Data Collection and Cleaning</li>
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Data Visualization using Matplotlib & Seaborn</li>
              <li>Probability and Statistics for Data Science</li>
              <li>Machine Learning Foundations</li>
              <li>Model Evaluation & Validation Techniques</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Data Analyst</li>
              <li>Junior Data Scientist</li>
              <li>Business Intelligence Analyst</li>
              <li>Machine Learning Intern</li>
              <li>Research Analyst</li>
              <li>Data Engineer (Entry-level)</li>
              <li>AI/ML Product Assistant</li>
              <li>Statistical Analyst</li>
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
              <li>Python programming for data manipulation</li>
              <li>Data wrangling with Pandas and NumPy</li>
              <li>Data visualization with Matplotlib and Seaborn</li>
              <li>Understanding of key statistical concepts</li>
              <li>Building and evaluating simple machine learning models</li>
              <li>Problem-solving using real-world datasets</li>
              <li>Storytelling through data and dashboards</li>
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
              <li>Students and freshers curious about data-driven careers</li>
              <li>Professionals from non-tech backgrounds exploring data</li>
              <li>Excel users and analysts transitioning to data science</li>
              <li>Software engineers upskilling in data and ML</li>
              <li>Entrepreneurs and decision-makers seeking data insights</li>
              <li>Anyone looking to start a career in analytics</li>
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
            Data Science Course Highlights
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

export default DataScienceKeyHighlights;
