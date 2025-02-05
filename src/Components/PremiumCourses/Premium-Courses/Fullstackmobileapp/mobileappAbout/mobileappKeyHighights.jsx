import React, { useState } from "react";

function MobileAppKeyHighlights() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { label: "Overview" },
    { label: "Key Features" },
    { label: "Functionality" },
    { label: "User Experience" },
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
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Introduction to the mobile app and its significance.</li>
              <li>Understanding modern mobile app development practices.</li>
              <li>Exploring latest mobile app development frameworks and tools.</li>
              <li>Utilizing mobile app development in various domains.</li>
              <li>Integration with backend services and APIs.</li>
              <li>Introduction to cross-platform development tools.</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Key Features</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Responsive UI Design</li>
              <li>Offline Functionality with Data Sync</li>
              <li>Push Notifications and Alerts</li>
              <li>Integration with Device Features (Camera, GPS, etc.)</li>
              <li>Security Measures and Data Encryption</li>
              <li>Scalability and Performance Optimization</li>
              <li>Analytics and User Engagement</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Functionality</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>User Authentication and Authorization</li>
              <li>Data Storage and Management</li>
              <li>Real-time Communication</li>
              <li>Location-based Services</li>
              <li>Payment Gateway Integration</li>
              <li>Social Media Integration</li>
              <li>Customizable Settings and Preferences</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">User Experience</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Intuitive and User-friendly Interface</li>
              <li>Smooth Navigation and Gestures</li>
              <li>Optimized Performance and Loading Times</li>
              <li>Personalization and Customization Options</li>
              <li>Accessibility and Inclusivity</li>
              <li>Feedback Mechanisms and Support Channels</li>
              <li>Continuous Improvement and Updates</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2 ">
            <p className="text-xl font-medium text-white pl-2">Target Audience</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Mobile App Developers seeking advanced skills.</li>
              <li>UI/UX Designers interested in mobile app design principles.</li>
              <li>Product Managers overseeing mobile app projects.</li>
              <li>Entrepreneurs and Startups building mobile-first solutions.</li>
              <li>Students aspiring to enter the mobile app industry.</li>
              <li>Freelancers offering mobile app development services.</li>
              <li>Business Owners aiming to expand their digital presence.</li>
              <li>Tech Enthusiasts exploring mobile technology trends.</li>
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
        <div className="bg-[#0098F1] text-white md:w-[460px] lg:w-[520px] p-2">{renderContent()}</div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            Mobile App Key Highlights
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

export default MobileAppKeyHighlights;
