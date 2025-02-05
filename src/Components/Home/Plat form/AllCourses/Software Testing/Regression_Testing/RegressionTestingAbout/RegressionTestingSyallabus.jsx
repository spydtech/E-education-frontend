import React from "react";

function RegressionTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Regression Testing",
      subheading: "Topics (14)",
      items: [
        "Overview of Regression Testing",
        "Importance of Regression Testing",
        "Regression Testing Tools",
        "Regression Testing Metrics",
        "Test Automation Frameworks for Regression Testing",
        "Scripting and Coding for Regression Testing",
        "Test Execution and Reporting in Regression Testing",
        "Continuous Integration and Regression Testing",
        "Selective Regression Testing",
        "Retest-all Regression Testing",
        "Corrective Regression Testing",
        "Progressive Regression Testing",
        "Automation Best Practices for Regression Testing",
        "Regression Testing Case Studies",
      ],
    },
  ];

  return (
    <>
      <div className=" px-4 mb-2 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10">
        <div className=" mb-3 md:w-2/5">
          <h2 className="md:text-2xl text-[#0098F1] font-bold mb-2">
            Discover What You Will Learn
          </h2>
          <p className="md:text-lg text-gray-500">
            Dive into the comprehensive curriculum covering key concepts,
            practical applications, and advanced topics in Regression Testing.
          </p>
        </div>

        {data.map((category, index) => (
          <div
            key={index}
            className="text-white bg-[#0098f1] rounded-md p-3 md:w-2/4"
          >
            <h3 className="md:text-3xl font-semibold mb-2">
              {category.heading}
            </h3>
            <h4 className=" md:text-xl font-medium mb-2">
              {category.subheading}
            </h4>
            <ul className="list-disc ml-4">
              {category.items.map((item, idx) => (
                <li key={idx} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default RegressionTestingSyllabus;
