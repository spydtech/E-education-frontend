import React, { useState } from "react";

function AdvancedNetworkSecurityKeyHighights() {
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
              <li>Advanced threat intelligence and security analytics</li>
              <li>
                Hands-on labs with tools like Wireshark, Metasploit, and Nmap
              </li>
              <li>Red teaming and blue teaming simulation environments</li>
              <li>Zero Trust architecture and implementation</li>
              <li>VPN, IPsec, SSL/TLS secure communications training</li>
              <li>Cloud security, container security (Docker, Kubernetes)</li>
              <li>Incident handling & digital forensics fundamentals</li>
              <li>SIEM, SOAR, and automated security response</li>
              <li>Mentorship with industry experts and resume building</li>
              <li>Prepares for certifications like CISSP, CEH, OSCP</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Advanced firewalls and next-gen IDS/IPS</li>
              <li>Encryption techniques and key management</li>
              <li>Public Key Infrastructure (PKI)</li>
              <li>Penetration testing methodologies</li>
              <li>Secure SDLC and DevSecOps principles</li>
              <li>Advanced persistent threats (APTs) and threat hunting</li>
              <li>Security compliance frameworks (NIST, ISO, GDPR)</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Security Architect / Network Security Engineer</li>
              <li>Threat Intelligence Analyst</li>
              <li>Red Team / Blue Team Specialist</li>
              <li>Penetration Tester / Ethical Hacker</li>
              <li>Cloud Security Engineer</li>
              <li>SOC Analyst (Tier 2/3)</li>
              <li>Incident Response Specialist</li>
              <li>Security Compliance and Governance Officer</li>
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
              <li>Advanced penetration testing using Kali Linux</li>
              <li>Threat modeling and risk assessment</li>
              <li>Hardening systems and networks</li>
              <li>Security automation using Python and Bash</li>
              <li>SIEM and log analysis using tools like Splunk, ELK</li>
              <li>Developing zero-day defenses and malware analysis</li>
              <li>Security policies and governance planning</li>
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
              <li>Security professionals looking to upskill</li>
              <li>System admins transitioning into security roles</li>
              <li>Penetration testers and ethical hackers</li>
              <li>Cloud and DevOps engineers learning security</li>
              <li>
                IT professionals preparing for certifications like CISSP, CEH,
                OSCP
              </li>
              <li>Graduate students in cybersecurity or computer science</li>
              <li>Blue team / SOC analysts aiming for senior roles</li>
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
            Advanced Network Security Course Highlights
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

export default AdvancedNetworkSecurityKeyHighights;
