import React from "react";

function AdvancephpSyllabus() {
  const data = [
    {
      heading: "Advanced PHP Development",
      subheading: "Topics (16)",
      items: [
        "Introduction to Advanced PHP",
        "PHP 7+ Features and Improvements",
        "Advanced Object-Oriented Programming (OOP)",
        "Namespaces and Autoloading",
        "Dependency Injection",
        "Using Composer for Dependency Management",
        "Design Patterns in PHP",
        "PHP Frameworks (Laravel, Symfony)",
        "Building RESTful APIs with PHP",
        "Error Handling and Exception Management",
        "Security Best Practices in PHP",
        "Unit Testing and Test-Driven Development (TDD)",
        "Working with Databases and ORMs",
        "Using PHP in Microservices Architecture",
        "Performance Optimization Techniques",
        "Integrating PHP with Frontend Technologies",
      ],
    },
  ];

  return (
    <>
      <div
        id="subdiv"
        className="grid grid-cols-1 md:lg:grid-cols-2 gap-x-6 bg-[#d90429] mb-12 font-poppins"
      >
        <div
          id="div1"
          className="flex items-center justify-center xl:lg:md:w-auto"
        >
          <div id="headings" className="grid grid-cols-1 text-start px-20">
            <div>
              <p className="text-[#f9ac13] text-xl font-medium">Syllabus</p>
            </div>
            <div className="py-5">
              <p className="text-6xl font">
                Discover What You
                <p className="text-[#f9ac13] inline pl-2">Will Learn</p>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-300">
                Dive into the comprehensive curriculum covering key concepts,
                practical applications, and advanced topics in PHP development.
              </p>
            </div>
          </div>
        </div>
        <div
          id="div2"
          className="space-y-5 flex justify-center px-10 p-4 my-2 mx-2 mb-2 border-2 border-opacity-15 rounded overflow-hidden bg-gray-200 shadow-2xl"
        >
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-4xl font-semibold mb-2 text-[#f9ac13]">
                  {category.heading}
                </h2>
                <h3 className="text-2xl font-medium mb-2">
                  {category.subheading}
                </h3>
                <ul className="list-disc ml-6 text-[16px]">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancephpSyllabus;
