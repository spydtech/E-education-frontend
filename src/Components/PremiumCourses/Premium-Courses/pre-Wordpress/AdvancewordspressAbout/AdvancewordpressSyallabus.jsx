import React from "react";

function AdvancewordpressSyllabus() {
  const data = [
    {
      heading: "Advanced Wordpress Development",
      subheading: "Topics (16)",
      items: [
        "Introduction to Advanced Wordpress",
        "Wordpress 7+ Features and Improvements",
        "Advanced Object-Oriented Programming (OOP)",
        "Namespaces and Autoloading",
        "Dependency Injection",
        "Using Composer for Dependency Management",
        "Design Patterns in Wordpress",
        "Wordpress Frameworks (Laravel, Symfony)",
        "Building RESTful APIs with Wordpress",
        "Error Handling and Exception Management",
        "Security Best Practices in Wordpress",
        "Unit Testing and Test-Driven Development (TDD)",
        "Working with Databases and ORMs",
        "Using Wordpress in Microservices Architecture",
        "Performance Optimization Techniques",
        "Integrating Wordpress with Frontend Technologies",
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

export default AdvancewordpressSyllabus;
