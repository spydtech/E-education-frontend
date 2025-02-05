import React from "react";

function CompatabilitySyllabus() {
  const data = [
    {
      heading: "Introduction to Compatibility Testing",
      subheading: "Topics (16)",
      items: [
        "Overview of Compatibility Testing",
        "Types of Compatibility Testing",
        "Cross-Browser Compatibility",
        "Cross-Platform Compatibility",
        "Mobile Device Compatibility",
        "Backward Compatibility",
        "Forward Compatibility",
        "Browser Version Compatibility",
        "Localization and Internationalization",
        "Tools for Compatibility Testing"
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
          Dive into the comprehensive curriculum covering key concepts,
          practical applications, and advanced topics in compatibility testing.
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

export default CompatabilitySyllabus;
