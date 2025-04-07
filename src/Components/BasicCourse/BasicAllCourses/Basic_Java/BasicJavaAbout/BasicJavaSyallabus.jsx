import React from "react";

function BasicJavaSyllabus() {
  const data = [
    {
      heading: "Introduction to Basic Java",
      subheading: "Topics (16)",
      items: [
        "Introduction to Java",
        "Setting Up the Environment",
        "Basic Syntax and Structure",
        "Variables and Data Types",
        "Operators and Expressions",
        "Control Structures (if, else, switch)",
        "Loops (for, while, do-while, enhanced for loop)",
        "Methods and Parameters",
        "Arrays and ArrayLists",
        "String Manipulation",
        "Object-Oriented Programming (Classes and Objects)",
        "Inheritance and Polymorphism",
        "Exception Handling",
        "File I/O",
        "Java Collections Framework",
        "Java Best Practices and Coding Standards",
      ],
    },
  ];

  return (
    <div className=" px-4 mb-2 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10 font-poppins">
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

export default BasicJavaSyllabus;
