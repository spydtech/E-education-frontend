import React, { useState } from "react";

function EthicalHackingIntroduction() {
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
        "Ethical hacking involves the authorized testing of computer systems and networks to identify potential vulnerabilities and weaknesses. It is conducted by trained professionals with the goal of improving security by fixing these weaknesses before malicious hackers can exploit them.",
      ],
    },
    {
      heading: "Basics of Ethical Hacking",
      items: [
        "Definition of Ethical Hacking: Define ethical hacking and differentiate it from malicious hacking.",
        "Legal and Ethical Considerations: Discuss the ethical and legal framework surrounding ethical hacking, including permissions, consent, and confidentiality.",
      ],
    },
    {
      heading: "Tools and Techniques",
      items: [
        "Common Ethical Hacking Tools: Provide an overview of widely used tools such as Nmap, Metasploit, Wireshark, etc., for network scanning, penetration testing, and exploitation.",
        "Social Engineering: Introduce social engineering techniques used to manipulate individuals into divulging confidential information or performing actions that compromise security.",
      ],
    },
    {
      heading: "Vulnerability Assessment and Penetration Testing (VAPT)",
      items: [
        "Vulnerability Assessment: Explain the process of identifying and assessing vulnerabilities in systems and networks.",
        "Penetration Testing: Discuss the methodology of simulating cyberattacks to evaluate the security posture of an organization.",
      ],
    },
    {
      heading: "Cybersecurity Best Practices",
      items: [
        "Security Measures: Highlight essential security practices such as regular software updates, strong password policies, and network segmentation.",
        "Incident Response: Outline the steps involved in responding to security incidents, including detection, containment, eradication, and recovery.",
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

        <div className="flex justify-between items-center max-md:p-4">
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

export default EthicalHackingIntroduction;
