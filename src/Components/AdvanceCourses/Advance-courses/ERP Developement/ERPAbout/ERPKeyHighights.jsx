import React, { useState } from "react";

function ERPKeyHighlights() {
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
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Comprehensive ERP training with real-time case studies</li>
              <li>Integration of core business processes using ERP tools</li>
              <li>
                Hands-on with popular ERP platforms like SAP, Oracle, and
                Microsoft Dynamics
              </li>
              <li>Live sessions with industry professionals</li>
              <li>Project-based learning with real-life business scenarios</li>
              <li>Access to ERP simulations and sandbox environments</li>
              <li>End-to-end understanding of ERP lifecycle implementation</li>
              <li>Support for ERP certification preparation</li>
              <li>Mock interviews and career guidance</li>
              <li>Alumni network and lifetime access to materials</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>ERP Architecture and Modules</li>
              <li>Business Process Mapping</li>
              <li>Master Data Management</li>
              <li>ERP Implementation Lifecycle</li>
              <li>Change Management in ERP</li>
              <li>Integration with other IT systems</li>
              <li>Customization and Configuration</li>
              <li>Security and Compliance in ERP</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>ERP Consultant</li>
              <li>Functional Analyst</li>
              <li>ERP Project Manager</li>
              <li>Business Systems Analyst</li>
              <li>SAP/Oracle Functional Consultant</li>
              <li>ERP Developer or Technical Analyst</li>
              <li>Supply Chain or Finance Process Owner</li>
              <li>IT Manager overseeing ERP operations</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>ERP configuration and customization</li>
              <li>End-to-end business process analysis</li>
              <li>
                Functional knowledge of ERP modules (Finance, SCM, HR, etc.)
              </li>
              <li>Database management and data migration</li>
              <li>Analytical and problem-solving skills</li>
              <li>Understanding of ERP implementation methodologies</li>
              <li>Hands-on with ERP reporting tools</li>
              <li>Stakeholder and change management</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Graduates and postgraduates looking to enter ERP roles</li>
              <li>Working professionals aiming to switch to ERP consulting</li>
              <li>Finance, HR, and Supply Chain professionals</li>
              <li>IT professionals seeking ERP technical knowledge</li>
              <li>Managers involved in digital transformation initiatives</li>
              <li>
                Entrepreneurs and business owners seeking process optimization
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-6 md:mb-4 mb-5">
      <div className="md:flex justify-around">
        <div className="bg-[#0098F1] text-white pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            ERP Course Highlights
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

export default ERPKeyHighlights;
