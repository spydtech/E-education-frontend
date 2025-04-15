import React, { useState } from "react";

function Ui_UxKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Concepts" },
    { label: "Applications" },
    { label: "Skills Developed" },
    { label: "Target Audience" },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 0:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Comprehensive introduction to UI/UX design principles</li>
              <li>Focus on user-centered design and usability</li>
              <li>Hands-on projects with real-world applications</li>
              <li>Access to industry-standard design tools (Figma, Adobe XD)</li>
              <li>Expert-led workshops and design critiques</li>
              <li>Portfolio-building exercises</li>
              <li>Understanding of design thinking process</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>User research methods and personas</li>
              <li>Information architecture and navigation</li>
              <li>Wireframing and prototyping techniques</li>
              <li>Visual design principles (color, typography, hierarchy)</li>
              <li>Interaction design and micro-interactions</li>
              <li>Usability testing and heuristic evaluation</li>
              <li>Responsive and adaptive design</li>
              <li>Design systems and component libraries</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Website and mobile app design</li>
              <li>Dashboard and data visualization interfaces</li>
              <li>E-commerce and product design</li>
              <li>Enterprise software interfaces</li>
              <li>Interactive prototypes and proof-of-concepts</li>
              <li>Design documentation and specifications</li>
              <li>Accessibility-compliant designs</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Proficiency in design tools (Figma, Adobe XD, Sketch)</li>
              <li>User research and persona development</li>
              <li>Wireframing and prototyping skills</li>
              <li>Visual design and interface styling</li>
              <li>Usability testing and analysis</li>
              <li>Information architecture organization</li>
              <li>Design system creation</li>
              <li>Collaboration with developers and stakeholders</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Aspiring UI/UX designers</li>
              <li>Graphic designers transitioning to digital</li>
              <li>Front-end developers wanting design skills</li>
              <li>Product managers seeking design understanding</li>
              <li>Marketing professionals involved in digital products</li>
              <li>Entrepreneurs building their own products</li>
              <li>Career changers entering tech design fields</li>
              <li>Students exploring design careers</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4 font-poppins">
      <div className="md:flex justify-around">
        <div className="bg-[#0098F1] text-white pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            UI/UX Design Course Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`pt-4 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md text-center ${
                  selectedItem === index
                    ? "bg-[#0098f1] text-white border-none"
                    : ""
                }`}
              >
                {item.label}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ui_UxKeyHighlights;