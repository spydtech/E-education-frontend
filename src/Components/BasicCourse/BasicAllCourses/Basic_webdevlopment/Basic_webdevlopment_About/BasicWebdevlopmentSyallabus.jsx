import React from "react";

function BasicWebdevlopmentSyallabus() {
  const data = [
    {
      heading: "UI/UX with Web Development",
      subheading: "Topics (16)",
      items: [
        "Introduction to UI/UX Principles",
        "User Research and Personas",
        "Information Architecture",
        "Wireframing and Prototyping",
        "UI Design Tools (Figma, Adobe XD)",
        "Color Theory and Typography",
        "Responsive Design Fundamentals",
        "HTML5 and Semantic Markup",
        "CSS3 and Modern Layouts (Flexbox, Grid)",
        "JavaScript for Interactive UI",
        "Accessibility Standards (WCAG)",
        "Design Systems and Component Libraries",
        "User Testing Methods",
        "Frontend Frameworks (React/Vue Basics)",
        "Performance Optimization",
        "Portfolio Project: End-to-End Design to Development"
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
          Comprehensive curriculum covering both design and development, taught by industry experts using real-world projects, design exercises, and coding workshops.
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

export default BasicWebdevlopmentSyallabus;