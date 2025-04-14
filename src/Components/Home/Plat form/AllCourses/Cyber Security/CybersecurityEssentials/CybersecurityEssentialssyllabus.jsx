import React from "react";

function CybersecuritySyllabus() {
  const data = [
    {
      heading: "Cybersecurity Essentials",
      subheading: "Syllabus Overview (16 Modules)",
      items: [
        "Foundations of Cybersecurity & Digital Safety",
        "Operating Systems & Command Line Fundamentals",
        "Understanding Cyber Threats & Vulnerabilities",
        "Secure Network Architecture & Protocols",
        "Firewalls, VPNs & IDS/IPS Systems",
        "Web & Application Security (OWASP Top 10)",
        "Introduction to Ethical Hacking & Kali Linux",
        "Penetration Testing Lifecycle & Tools",
        "Data Protection & Cryptography",
        "Cloud Security (AWS, Azure, GCP Security)",
        "Endpoint Security & Mobile Device Management",
        "Security Operations Center (SOC) & SIEM Tools",
        "Incident Handling & Digital Forensics",
        "Cyber Laws, Regulations & Compliance (GDPR, ISO 27001)",
        "Risk Management, BCP & Disaster Recovery",
        "Capstone Project: Red Team vs Blue Team Simulation"
      ],
    },
  ];

  return (
    <div className="px-4 mb-2 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10">
      <div className="mb-3 md:w-2/5">
        <h2 className="md:text-2xl text-[#0098F1] font-bold mb-2">
          Discover What You Will Learn
        </h2>
        <p className="md:text-lg text-gray-500">
          Dive into a future-ready cybersecurity curriculum crafted by experts. Learn through hands-on labs, ethical hacking simulations, threat analysis, and real-world case studies to become job-ready.
        </p>
      </div>

      {data.map((category, index) => (
        <div
          key={index}
          className="text-white bg-[#0098f1] rounded-md p-3 md:w-2/4"
        >
          <h3 className="md:text-3xl font-semibold mb-2">{category.heading}</h3>
          <h4 className="md:text-xl font-medium mb-2">
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
  );
}

export default CybersecuritySyllabus;
