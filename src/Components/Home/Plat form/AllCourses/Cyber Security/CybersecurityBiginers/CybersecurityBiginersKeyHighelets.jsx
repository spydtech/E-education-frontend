import React, { useState } from "react";

function CybersecurityBiginersKeyHighlights() {
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
              <li>Comprehensive Cybersecurity curriculum for beginners to advanced learners</li>
              <li>Official certification in collaboration with upGrad</li>
              <li>Live sessions with certified cybersecurity professionals</li>
              <li>20+ real-world labs and simulation projects</li>
              <li>Alumni access to exclusive cybersecurity communities</li>
              <li>Toolkits covering Wireshark, Metasploit, Nmap, and more</li>
              <li>One-on-one mentoring sessions from industry experts</li>
              <li>Personalized career support including resume reviews</li>
              <li>Mock interviews tailored for cybersecurity job roles</li>
              <li>Explore Generative AI use in threat detection</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Cybersecurity fundamentals and architecture</li>
              <li>Ethical hacking and penetration testing</li>
              <li>Network security and firewalls</li>
              <li>Cryptography and data protection</li>
              <li>Threat intelligence and malware analysis</li>
              <li>Incident response and digital forensics</li>
              <li>Cloud and application security</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Cybersecurity Analyst</li>
              <li>Penetration Tester</li>
              <li>Security Operations Center (SOC) Engineer</li>
              <li>Incident Responder</li>
              <li>Threat Intelligence Analyst</li>
              <li>Security Consultant</li>
              <li>Governance, Risk, and Compliance (GRC) Specialist</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Skills Developed</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Network scanning and vulnerability assessment</li>
              <li>Using tools like Kali Linux, Burp Suite, and Nessus</li>
              <li>Secure coding practices and patch management</li>
              <li>Real-time threat monitoring and log analysis</li>
              <li>Incident response planning and reporting</li>
              <li>Critical thinking and problem-solving under pressure</li>
              <li>Hands-on lab experience in simulated environments</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Target Audience</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Students and freshers aiming to enter cybersecurity</li>
              <li>IT professionals looking to transition into security roles</li>
              <li>Network administrators and support engineers</li>
              <li>Ethical hacking and bug bounty enthusiasts</li>
              <li>Professionals preparing for certifications like CEH, CompTIA Security+, CISSP</li>
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

export default CybersecurityBiginersKeyHighlights;
