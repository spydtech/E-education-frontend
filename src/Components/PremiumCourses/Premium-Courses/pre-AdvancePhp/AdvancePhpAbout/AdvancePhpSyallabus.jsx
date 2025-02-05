import React from "react";

function AdvancePhpSyllabus() {
  const data = [
    {
      heading: "Advanced PHP Concepts",
      subheading: "Topics (12)",
      items: [
        "Object-Oriented Programming in PHP",
        "MVC Architecture and Frameworks",
        "Database Management with PHP",
        "Error Handling and Debugging",
        "Security Best Practices",
        "RESTful API Development",
        "Performance Optimization Techniques",
        "Asynchronous Processing in PHP",
        "Working with XML and JSON Data",
        "Integration with External APIs",
        "Deployment and Server Configuration",
        "Project Development and Collaboration",
      ],
    },
  ];

  return (
    <div className=" px-4 mb-5 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10">
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
          className="text-white bg-[#0098f1] rounded-md p-6 md:w-2/4"
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

export default AdvancePhpSyllabus;
