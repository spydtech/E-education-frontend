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
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Explore real-time threat landscapes and cyber attack simulations</li>
              <li>Hands-on labs using industry tools like Burp Suite and Nmap</li>
              <li>Interactive modules built in partnership with cybersecurity firms</li>
              <li>Project-based learning to build offensive and defensive skills</li>
              <li>Join an active peer community for discussion and collaboration</li>
              <li>Flexible learning with on-demand videos and weekend live classes</li>
              <li>Dedicated career coach for cybersecurity job transitions</li>
              <li>Earn globally recognized CEH/CompTIA Security+ preparation</li>
              <li>Learn how zero trust and endpoint protection strategies are used</li>
              <li>Access alumni resources, webinars, and hackathons</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Cyber Kill Chain & MITRE ATT&CK Framework</li>
              <li>SIEM tools & log analysis (e.g., Splunk, ELK stack)</li>
              <li>Endpoint Detection & Response (EDR) systems</li>
              <li>Mobile and IoT Security Fundamentals</li>
              <li>Cloud architecture security (AWS, Azure)</li>
              <li>Zero Trust & Multi-Factor Authentication (MFA)</li>
              <li>Secure Software Development Lifecycle (SSDLC)</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Red Team vs Blue Team Exercises</li>
              <li>Real-time log analysis & breach response</li>
              <li>Security audits and penetration testing projects</li>
              <li>Cloud misconfiguration identification and remediation</li>
              <li>Threat hunting and intelligence gathering assignments</li>
              <li>Incident playbook creation and tabletop simulations</li>
              <li>Compliance mapping with frameworks (e.g., PCI-DSS, GDPR)</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Skills Developed</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Threat detection and SIEM alert triaging</li>
              <li>Firewall configuration and network segmentation</li>
              <li>Writing and deploying security policies and protocols</li>
              <li>Using automation for incident response (SOAR)</li>
              <li>Performing forensic analysis of compromised systems</li>
              <li>Applying encryption techniques for secure communication</li>
              <li>Mitigating social engineering and phishing threats</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Target Audience</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Fresh graduates pursuing a cybersecurity career</li>
              <li>Network engineers looking to upskill in security</li>
              <li>IT administrators aiming to move into SOC roles</li>
              <li>Professionals preparing for CEH, CISSP, or Security+ exams</li>
              <li>Entrepreneurs & small business owners seeking to secure their systems</li>
              <li>Law enforcement & digital forensics professionals</li>
              <li>Anyone curious about hacking, security, and ethical defense</li>
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
