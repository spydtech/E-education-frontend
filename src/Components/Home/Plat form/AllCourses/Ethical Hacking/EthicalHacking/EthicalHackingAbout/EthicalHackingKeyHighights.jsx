import React, { useState } from "react";

function EthicalHackingKeyHighlights() {
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
              <li className="">Introduction to Ethical Hacking</li>
              <li>Advanced hacking techniques and methodologies</li>
              <li>Real-world case studies and hands-on labs</li>
              <li>Access to industry-leading tools and resources</li>
              <li>Expert-led live sessions and Q&A</li>
              <li>Certification preparation and guidance</li>
              <li>Networking opportunities with professionals</li>
              <li>Personalized career advice and mentorship</li>
              <li>Practical assignments and projects</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Ethical hacking principles and techniques</li>
              <li>Network security and penetration testing</li>
              <li>Vulnerability assessment and management</li>
              <li>Cryptography and encryption</li>
              <li>Malware analysis and mitigation</li>
              <li>Incident response and handling</li>
              <li>Ethical and legal considerations</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Ethical Hacker/Consultant</li>
              <li>Security Analyst</li>
              <li>Penetration Tester</li>
              <li>Network Security Engineer</li>
              <li>Information Security Manager</li>
              <li>Cybersecurity Specialist</li>
              <li>Incident Responder</li>
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
              <li>Advanced ethical hacking techniques and tools</li>
              <li>In-depth understanding of network security</li>
              <li>
                Ability to conduct comprehensive vulnerability assessments
              </li>
              <li>
                Proficiency in cryptographic methods and security protocols
              </li>
              <li>Skills in malware analysis and incident response</li>
              <li>Knowledge of legal and ethical hacking standards</li>
              <li>Preparation for industry-recognized certifications</li>
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
              <li>IT professionals looking to transition to cybersecurity</li>
              <li>Students and graduates in computer science</li>
              <li>Network and system administrators</li>
              <li>Security enthusiasts and aspiring ethical hackers</li>
              <li>Individuals aiming for cybersecurity certifications</li>
              <li>Business owners interested in protecting their assets</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4">
      <div className="md:flex justify-around  ">
        <div className="bg-[#0098F1] text-white md:w-2/5">{renderContent()}</div>
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
  );
}

export default EthicalHackingKeyHighlights;
