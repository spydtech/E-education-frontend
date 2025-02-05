import React from "react";

function UsabilityTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Usability Testing",
      subheading: "Topics (16)",
      items: [
        "Overview of Usability Testing",
        "Types of Usability Testing",
        "Usability Testing Methods",
        "Usability Testing Metrics",
        "Moderated Testing",
        "Unmoderated Testing",
        "Remote Usability Testing",
        "In-person Usability Testing",
        "Think-Aloud Protocol",
        "Card Sorting",
        "Eye Tracking",
        "Heatmaps",
        "Usability Testing Best Practices",
        "Usability Testing in Agile Processes",
        "Usability Testing Challenges and Solutions",
        "Usability Testing Case Studies",
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

export default UsabilityTestingSyllabus;
