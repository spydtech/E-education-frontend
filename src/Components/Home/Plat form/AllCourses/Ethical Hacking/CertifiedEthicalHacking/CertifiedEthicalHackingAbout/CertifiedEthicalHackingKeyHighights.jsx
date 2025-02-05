import React, { useState } from "react";

function CertifiedEthicalHackingKeyHighlights() {
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
              <li>
                Comprehensive modules covering all aspects of ethical hacking
              </li>
              <li>
                Certificate accredited by leading cybersecurity institutions
              </li>
              <li>Access to live hacking simulations and workshops</li>
              <li>15+ Case Studies and real-world projects</li>
              <li>Earn Certified Ethical Hacker (CEH) certification</li>
              <li>Extensive library of hacking tools and resources</li>
              <li>Mentor-led guidance and coaching sessions</li>
              <li>Personalized resume feedback</li>
              <li>Mock interviews conducted by industry experts</li>
              <li>
                Explore the latest tools and techniques in ethical hacking
              </li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Introduction to ethical hacking and penetration testing</li>
              <li>Footprinting and reconnaissance techniques</li>
              <li>Scanning networks and identifying vulnerabilities</li>
              <li>Enumeration and gaining unauthorized access</li>
              <li>Maintaining access and covering tracks</li>
              <li>Web application and network hacking</li>
              <li>Wireless network security</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Penetration Tester</li>
              <li>Security Consultant</li>
              <li>Network Security Engineer</li>
              <li>Security Analyst</li>
              <li>Information Security Manager</li>
              <li>Incident Responder</li>
              <li>Threat Hunter</li>
              <li>Vulnerability Assessor</li>
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
              <li>
                Proficiency in various ethical hacking tools and techniques
              </li>
              <li>In-depth knowledge of network security and protocols</li>
              <li>Ability to identify and exploit system vulnerabilities</li>
              <li>Expertise in web application security</li>
              <li>Skills in wireless network security</li>
              <li>Incident response and forensic analysis skills</li>
              <li>Strong problem-solving and analytical abilities</li>
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
              <li>IT professionals seeking to enhance their security skills</li>
              <li>Individuals aspiring to become ethical hackers</li>
              <li>Network and security administrators</li>
              <li>Security enthusiasts and hobbyists</li>
              <li>Anyone interested in learning about cybersecurity</li>
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

export default CertifiedEthicalHackingKeyHighlights;
