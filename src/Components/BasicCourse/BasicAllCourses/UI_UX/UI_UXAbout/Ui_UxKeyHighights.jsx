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
            <li>Introduction to UI/UX design principles</li>
              <li>Focus on user-centered design and usability</li>
              <li>Hands-on projects and real-world applications</li>
              <li>Access to industry-leading design tools and resources</li>
              <li>Expert-led workshops and training sessions</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>Basics of C and C++ syntax</li>
              <li>Object-oriented programming in C++</li>
              <li>Memory management and pointers</li>
              <li>Data structures and algorithms</li>
              <li>File handling and error management</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 font-poppins">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
            <li>User Experience (UX) design fundamentals</li>
              <li>User Interface (UI) design best practices</li>
              <li>Wireframing and prototyping techniques</li>
              <li>Usability testing and feedback integration</li>
              <li>Design systems and component libraries</li>
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
            <li>UI/UX Designer</li>
              <li>Product Designer</li>
              <li>Interaction Designer</li>
              <li>Usability Analyst</li>
              <li>UX Researcher</li>
              <li>Visual Designer</li>
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
            <li>Proficiency in design tools like Figma and Adobe XD</li>
              <li>Strong understanding of UX research and testing methods</li>
              <li>Ability to create user-friendly and visually appealing interfaces</li>
              <li>Experience with wireframing and prototyping</li>
              <li>Capability to design responsive and adaptive layouts</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4 font-poppins">
    <div className="md:flex justify-around  ">
      <div className="bg-[#0098F1] text-white  pb-5 md:w-2/5">
        {renderContent()}
      </div>
      <div className="my-3">
        <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
          E-Education Course Highlights
        </p>
        {data.map((item, index) => (
          <ul className="">
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`pt-4 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md text-center  ${
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
