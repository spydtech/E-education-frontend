import React, { useState } from "react";

function StressTestingKeyHighlights() {
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
          <ul className="space-y-2 pt-4 pl-8 font-normal text-[16px] list-disc">
            <p className="text-2xl font-medium text-white py-4">Overview</p>
            <li>Advanced modules with Generative AI fusion</li>
            <li>E-education certificate via upGrad collaboration</li>
            <li>Access to live training sessions by Meta Blueprint trainers</li>
            <li>15+ Case Studies, Live projects</li>
            <li>Earn E-Education Executive Alumni Status</li>
            <li>90+ Tool Video Library</li>
            <li>Industry mentor-led fortnightly coaching</li>
            <li>Tailored resume feedback</li>
            <li>Mock Interview by managers</li>
            <li>Explore ChatGPT in digital marketing tutorials</li>
          </ul>
        );
      case 1:
        return (
          <ul className="space-y-3 pt-4 font-normal pl-8 text-[16px] list-disc">
            <p className="text-xl font-medium text-white ">Key Concepts</p>
            <li>Generative AI in digital marketing</li>
            <li>SEO</li>
            <li>Search and Display advertising</li>
            <li>Social and Display advertising</li>
            <li>Content Marketing</li>
            <li>Branding</li>
            <li>Web Analytics</li>
          </ul>
        );
      case 2:
        return (
          <ul className="space-y-3 pt-4 font-normal pl-8 text-[16px] list-disc">
            <p className="text-2xl font-medium text-white py-4">Applications</p>
            <li>Digital Marketing Manager</li>
            <li>SEM Manager</li>
            <li>SEO Manager</li>
            <li>Social Media and Content Manager</li>
            <li>Associate</li>
            <li>Consultant</li>
            <li>Business Analyst</li>
            <li>(Sr.) Associate-Digital Marketing</li>
          </ul>
        );
      case 3:
        return (
          <ul className="space-y-3 pt-4 font-normal pl-8 text-[16px] list-disc">
            <p className="text-2xl font-medium text-white py-4">
              Skills Developed
            </p>
            <li>List of target audience goes here...</li>
            <li>Explore 2 tracks & 5 specializations for diverse learning.</li>
            <li>Experience seamless integration with Gen AI modules.</li>
            <li>
              Attain E-education Executive Alumni Status for exclusive benefits.
            </li>
            <li>Access EMI at RS. 2,879/month for greater flexibility.</li>
            <li>
              A voucher worth $50 for Meta's "Digital Marketing Associate"
              certificate exam, free of cost.
            </li>
          </ul>
        );
      case 4:
        return (
          <ul className="space-y-3 pt-4 font-normal pl-8 text-[16px] list-disc">
            <p className="text-2xl font-medium text-white py-4">
              Target Audience
            </p>
            <li>
              Utilise ChatGPT to assist in creating unique content, planning
              strategies, building calendars, and more.
            </li>
            <li>Generative SEO-optimized content with ChatGPT</li>
            <li>
              Gain insights into your social media analytics by using ChatGPT
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <>
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
    </>
  );
}

export default StressTestingKeyHighlights;
