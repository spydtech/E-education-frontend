import React from "react";


function BestPracticesNetworkSecuritySyllabus() {
  const data = [
    {
      heading: "Network Security Best Practices",
      subheading: "Topics (16)",
      items: [
        "Introduction to Network Security",
        "Types of Network Threats",
        "Firewall and VPN Technologies",
        "Intrusion Detection and Prevention Systems",
        "Encryption and Secure Communications",
        "Access Control and Authentication",
        "Wireless Network Security",
        "Network Security Protocols (SSL/TLS, IPSec)",
        "Network Segmentation and Isolation",
        "Security Information and Event Management (SIEM)",
        "Incident Response and Management",
        "Security Policies and Procedures",
        "Threat Intelligence and Analysis",
        "Zero Trust Architecture",
        "Cloud Network Security",
        "Future Trends in Network Security",
      ],
    },
  ];

  return (
    <>
      <div className=" px-4 mb-5 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10">
        <div className=" mb-3 md:w-2/5">
          <h2 className="md:text-2xl text-[#0098F1] font-bold mb-2">
            Discover What You Will Learn
          </h2>
          <p className="md:text-lg text-gray-500">
            Top-notch and up-to-date curriculum taught by renowned professors
            and industry experts using videos, case studies, hands-on projects,
            and live sessions.
          </p>
        </div>

        {data.map((category, index) => (
          <div
            key={index}
            className="text-white bg-[#0098f1] rounded-md p-3 md:w-2/4"
          >
            <h3 className="md:text-3xl font-semibold mb-2">
              {category.heading}
            </h3>
            <h4 className=" md:text-xl font-medium mb-2">
              {category.subheading}
            </h4>
            <ul className="list-disc ml-4">
              {category.items.map((item, idx) => (
                <li key={idx} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default BestPracticesNetworkSecuritySyllabus;
