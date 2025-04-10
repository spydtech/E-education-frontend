import React, { useState } from "react";

function BestPracticesNetworkSecurityKeyHighights() {
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
              <li>Foundational to advanced network security principles</li>
              <li>Industry-recommended security configurations and policies</li>
              <li>
                Live demos on configuring firewalls, VPNs, and intrusion
                detection
              </li>
              <li>Case studies on real-world breaches and response tactics</li>
              <li>
                Focus on best practices in enterprise and cloud environments
              </li>
              <li>Training aligned with NIST, ISO, and CIS standards</li>
              <li>Hands-on labs with tools like Wireshark, Nmap, and Snort</li>
              <li>Threat modeling and security architecture design</li>
              <li>Incident response frameworks and playbook development</li>
              <li>
                Preparation for roles like network security analyst, SOC
                engineer
              </li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Firewall configuration and rule management</li>
              <li>Zero Trust architecture and segmentation</li>
              <li>Network monitoring and intrusion detection</li>
              <li>Patch management and vulnerability scanning</li>
              <li>Multi-factor authentication (MFA)</li>
              <li>Data encryption in transit and at rest</li>
              <li>SIEM implementation and log management</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Enterprise network hardening and access control</li>
              <li>Cloud network configuration and auditing</li>
              <li>Security Operations Center (SOC) best practices</li>
              <li>Compliance readiness for GDPR, HIPAA, PCI-DSS</li>
              <li>Remote workforce security design</li>
              <li>Intrusion response and containment strategies</li>
              <li>Operational resilience and disaster recovery planning</li>
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
              <li>Hands-on network defense using real-world tools</li>
              <li>Implementing secure network architectures</li>
              <li>Firewall and VPN setup and maintenance</li>
              <li>Log analysis and threat detection</li>
              <li>Policy writing and security documentation</li>
              <li>
                Mitigation of common attack vectors (DDoS, phishing, MITM)
              </li>
              <li>Compliance implementation and security auditing</li>
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
              <li>Network administrators and engineers</li>
              <li>Security analysts and SOC team members</li>
              <li>IT professionals transitioning to cybersecurity roles</li>
              <li>Students pursuing cybersecurity or computer networks</li>
              <li>DevOps and cloud engineers seeking secure practices</li>
              <li>Professionals preparing for CompTIA Security+, CEH, CISSP</li>
              <li>Managers wanting to strengthen network security posture</li>
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
            Network Security – Course Highlights
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

export default BestPracticesNetworkSecurityKeyHighights;
