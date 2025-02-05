import React, { useState } from "react";

function AdvanceEthicalHackingIntroduction() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = ({ heading, items }) => {
    return (
      <div className="w-full flex-shrink-0 px-4 py-8">
        <div className="h-auto flex justify-center">
          <div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 text-white font-sans">
              {heading}
            </h2>
            <ul className="list-disc list-outside pl-5 text-md lg:text-xl text-white">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const slidesData = [
    {
      heading: "Introduction to Ethical Hacking",
      items: [
        "Ethical hacking involves assessing computer systems, networks, or applications to identify vulnerabilities and weaknesses that malicious hackers could exploit.",
        "Key Concepts: Learn about penetration testing, vulnerability assessment, and ethical hacking methodologies.",
      ],
    },
    {
      heading: "Ethical Hacking Techniques",
      items: [
        "Footprinting and Reconnaissance: Gather information about the target system or network to identify potential entry points.",
        "Exploitation and Post-Exploitation: Use various tools and techniques to exploit vulnerabilities and gain unauthorized access.",
      ],
    },
    {
      heading: "Network Security Fundamentals",
      items: [
        "Understanding Network Protocols: Explore common network protocols and their security implications.",
        "Firewalls and Intrusion Detection Systems: Learn about network security devices and their role in preventing unauthorized access.",
      ],
    },
    {
      heading: "Web Application Security",
      items: [
        "SQL Injection and Cross-Site Scripting (XSS): Understand common web application vulnerabilities and how to mitigate them.",
        "Secure Coding Practices: Learn about best practices for writing secure code to prevent common security issues.",
      ],
    },
    {
      heading: "Ethical Hacking Tools",
      items: [
        "Penetration Testing Tools: Explore popular tools like Nmap, Metasploit, and Wireshark used by ethical hackers for testing.",
        "Forensic Analysis Tools: Learn about tools used for digital forensics and incident response.",
      ],
    },
  ];

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < slidesData.length - 1 ? prevSlide + 1 : prevSlide
    );
  };

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:justify-around md:items-center lg:h-[450px] px-3 md:mb-9 mb-5 ">
      {/* Text Section */}
      <div className="">
        <div>
          <p className="text-[#0098F1] underline-offset-2 underline md:text-2xl lg:text-4xl font-bold">
            Introduction
          </p>
        </div>
        <div className="mt-2">
          <p className="md:text-lg lg:text-3xl">
            So what is
            <span className="text-[#f6ac14] inline pl-2">Ethical Hacking</span>
          </p>
        </div>
        <div>
          <p className="md:text-lg lg:text-3xl mt-2">
            Brief about Ethical Hacking
          </p>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className=" lg:h-[468px]"> */}
      <div className="bg-[#0098f1] md:w-[400px] lg:w-[550px] lg:min-h-[420px] md:p-5 lg:flex flex-col justify-between ">
        <div className="flex text-white">
          <Slide
            heading={slidesData[currentSlide].heading}
            items={slidesData[currentSlide].items}
          />
        </div>

        <div className="flex justify-between max-md:p-4">
          <button
            onClick={goToPreviousSlide}
            className="text-white hover:text-black font-bold  rounded"
          >
            Previous
          </button>
          <div className="text-white text-sm">{`Page ${currentSlide + 1}/${
            slidesData.length
          }`}</div>
          <button
            onClick={goToNextSlide}
            className="text-white hover:text-black font-bold  rounded"
          >
            Next
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AdvanceEthicalHackingIntroduction;
