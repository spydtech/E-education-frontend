import React, { useState } from "react";

function CybersecurityKeyHighlights() {
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
              <li>Comprehensive curriculum covering foundational to advanced topics</li>
              <li>Certification provided through E-Education and industry partners</li>
              <li>Interactive live sessions with experienced cybersecurity professionals</li>
              <li>20+ real-world projects and threat simulations</li>
              <li>Exclusive access to global cybersecurity forums and communities</li>
              <li>Video tutorials on 50+ cybersecurity tools and practices</li>
              <li>Bi-weekly mentorship from cybersecurity experts</li>
              <li>Personalized resume building and career coaching</li>
              <li>Mock interviews with real-time feedback from hiring managers</li>
              <li>Introductory training on AI tools in cyber threat detection</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Network Security and Firewalls</li>
              <li>Cryptography and Data Encryption</li>
              <li>Threat Intelligence and Risk Management</li>
              <li>Incident Response and Digital Forensics</li>
              <li>Vulnerability Assessment and Penetration Testing</li>
              <li>Security Operations and SIEM</li>
              <li>Cloud Security Essentials</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Cybersecurity Analyst</li>
              <li>Penetration Tester</li>
              <li>Security Consultant</li>
              <li>Network Security Engineer</li>
              <li>Incident Responder</li>
              <li>Security Auditor</li>
              <li>Threat Intelligence Specialist</li>
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
              <li>Hands-on skills with Wireshark, Metasploit, and Burp Suite</li>
              <li>Ability to analyze, detect, and mitigate cyber threats</li>
              <li>Proficiency in using SIEM tools like Splunk and QRadar</li>
              <li>Understanding of compliance frameworks (GDPR, ISO 27001, etc.)</li>
              <li>Communication skills for effective security reporting</li>
              <li>Security architecture and design knowledge</li>
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
              <li>Beginners aspiring to enter the cybersecurity field</li>
              <li>IT professionals looking to upskill</li>
              <li>Network and system administrators</li>
              <li>Security analysts and enthusiasts</li>
              <li>Students from engineering or computer science backgrounds</li>
              <li>Anyone interested in securing digital assets and systems</li>
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

export default CybersecurityKeyHighlights;
