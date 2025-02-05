import React from "react";

function DataScienceSyllabus() {
  const data = [
    {
      heading: "Introduction to Data Science",
      subheading: "Topics (16)",
      items: [
        "Introduction to Data Science",
        "Data Science Tools and Technologies",
        "Data Collection Methods",
        "Data Cleaning and Preparation",
        "Exploratory Data Analysis",
        "Data Visualization Techniques",
        "Introduction to Machine Learning",
        "Supervised Learning Algorithms",
        "Unsupervised Learning Algorithms",
        "Feature Engineering",
        "Model Evaluation and Validation",
        "Data Science Project Lifecycle",
        "Big Data and Data Science",
        "Data Ethics and Privacy",
        "Deploying Data Science Solutions",
        "Real-world Data Science Applications",
      ],
    },
  ];

  return (
    <div className=" px-4 mb-2 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10">
      <div className=" mb-3 md:w-2/5">
        <h2 className="md:text-2xl text-[#0098F1] font-bold mb-2">
          Discover What You Will Learn
        </h2>
        <p className="md:text-lg text-gray-500">
          Top-notch and up-to-date curriculum taught by renowned professors and
          industry experts using videos, case studies, hands-on projects, and
          live sessions.
        </p>
      </div>

      {data.map((category, index) => (
        <div
          key={index}
          className="text-white bg-[#0098f1] rounded-md p-3 md:w-2/4"
        >
          <h3 className="md:text-3xl font-semibold mb-2">{category.heading}</h3>
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
  );
}

export default DataScienceSyllabus;
