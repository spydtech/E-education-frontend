import React, { useState } from "react";

function NetworkSecurityKeyHighights() {
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
              <li>Foundational understanding of network security principles</li>
              <li>
                Hands-on training in firewall configuration and access controls
              </li>
              <li>Threat detection and mitigation strategies</li>
              <li>Real-world use cases through labs and simulations</li>
              <li>Overview of security protocols and VPN setup</li>
              <li>Incident response basics and best practices</li>
              <li>Exposure to cybersecurity tools like Wireshark, Snort</li>
              <li>Live mentor support and resume preparation</li>
              <li>Mock interviews and career guidance</li>
              <li>Certificate upon successful completion</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Network architecture and components</li>
              <li>Types of network threats and vulnerabilities</li>
              <li>Firewall configuration and IDS/IPS</li>
              <li>Access control models (MAC, DAC, RBAC)</li>
              <li>Encryption techniques (SSL/TLS, VPN, IPsec)</li>
              <li>Security protocols (HTTPS, SSH, FTP/SFTP)</li>
              <li>Basic ethical hacking and penetration testing</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Network Security Administrator</li>
              <li>Cybersecurity Analyst</li>
              <li>Security Operations Center (SOC) Analyst</li>
              <li>IT Security Support</li>
              <li>System/Network Administrator with security focus</li>
              <li>Junior Penetration Tester</li>
              <li>Security Consultant (Entry-level)</li>
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
              <li>Securing routers, switches, and access points</li>
              <li>Implementing firewalls and intrusion detection systems</li>
              <li>Analyzing logs for unusual activity</li>
              <li>Understanding network protocols and secure configurations</li>
              <li>Conducting vulnerability assessments</li>
              <li>Responding to security breaches</li>
              <li>Hands-on use of security tools and command-line basics</li>
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
              <li>Beginners interested in a career in cybersecurity</li>
              <li>IT professionals transitioning to security roles</li>
              <li>College students pursuing IT/networking degrees</li>
              <li>Junior network/system administrators</li>
              <li>Tech enthusiasts looking to understand network threats</li>
              <li>
                Anyone preparing for certifications like CompTIA Security+ or
                CEH
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-3 md:mb-4">
      <div className="md:flex justify-around">
        <div className="bg-[#0098F1] text-white md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            Network Security Fundamentals Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`p-5 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md ${
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

export default NetworkSecurityKeyHighights;
