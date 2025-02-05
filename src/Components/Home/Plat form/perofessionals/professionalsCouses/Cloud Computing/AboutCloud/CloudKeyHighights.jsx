import React, { useState } from "react";

function CloudKeyHighights() {
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
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Introduction to cloud computing fundamentals</li>
              <li>Benefits and advantages of cloud computing</li>
              <li>Overview of cloud service models and deployment models</li>
              <li>Real-world examples of cloud computing applications</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Infrastructure as a Service (IaaS)</li>
              <li>Platform as a Service (PaaS)</li>
              <li>Software as a Service (SaaS)</li>
              <li>Public, private, and hybrid cloud models</li>
              <li>Cloud security and compliance</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Web and mobile application development</li>
              <li>Big data analytics and processing</li>
              <li>Artificial intelligence and machine learning</li>
              <li>Internet of Things (IoT) platforms</li>
              <li>Enterprise resource planning (ERP) systems</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Understanding of cloud computing principles and practices</li>
              <li>Proficiency in deploying and managing cloud services</li>
              <li>
                Ability to design scalable and resilient cloud architectures
              </li>
              <li>
                Experience with cloud-based development and deployment tools
              </li>
              <li>Knowledge of cloud security best practices</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Software developers and engineers</li>
              <li>System administrators and IT professionals</li>
              <li>Cloud architects and solution architects</li>
              <li>Enterprise decision-makers and business leaders</li>
              <li>Students and aspiring cloud professionals</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="px-3 md:mb-4">
        <div className="md:flex justify-around  ">
          <div className="bg-[#0098F1] text-white md:w-2/5">
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
                  className={`p-5 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md  ${
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
    </>
  );
}

export default CloudKeyHighights;
