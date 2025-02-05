import React from "react";

function SecurityTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Security Testing",
      subheading: "Topics (16)",
      items: [
        "Overview of Security Testing",
        "Types of Security Testing",
        "Security Testing Tools",
        "Security Testing Metrics",
        "Vulnerability Scanning",
        "Penetration Testing",
        "Security Audits",
        "Risk Assessment",
        "Threat Modeling",
        "Static Application Security Testing (SAST)",
        "Dynamic Application Security Testing (DAST)",
        "Interactive Application Security Testing (IAST)",
        "Runtime Application Self-Protection (RASP)",
        "Security Testing Best Practices",
        "Security Testing in CI/CD Pipelines",
        "Security Testing Case Studies",
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

export default SecurityTestingSyllabus;
