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
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>
                Our mobile application is designed to simplify your daily tasks.
              </li>
              <li>Offers a seamless, user-centric digital experience.</li>
              <li>
                Bridges the gap between users and services through real-time
                interactions.
              </li>
              <li>Built for scalability, reliability, and speed.</li>
              <li>Supports both Android and iOS platforms.</li>
              <li>Secured with industry-standard encryption protocols.</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Features</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Instant login with biometric support</li>
              <li>Interactive dashboards and insights</li>
              <li>Personalized notifications</li>
              <li>In-app chat and support</li>
              <li>Dark mode and theme customization</li>
              <li>Multi-language support</li>
              <li>Data sync across multiple devices</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Functionality</p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Real-time data processing and display</li>
              <li>Secure payments and wallet integration</li>
              <li>Smart search and filters</li>
              <li>Cloud-based data backup</li>
              <li>Offline access with background sync</li>
              <li>Geo-location based services</li>
              <li>QR code scanning for quick actions</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              User Experience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Smooth onboarding and intuitive navigation</li>
              <li>Minimalistic and clean interface</li>
              <li>Fast load times and responsive design</li>
              <li>Accessible design for all user groups</li>
              <li>Easy access to help and support</li>
              <li>Regular updates based on feedback</li>
              <li>Interactive tutorials and walkthroughs</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6 text-white">
              <li>Busy professionals managing daily tasks</li>
              <li>Tech-savvy individuals looking for smart solutions</li>
              <li>Small business owners streamlining workflows</li>
              <li>Students aiming for better productivity</li>
              <li>Travelers needing on-the-go access to services</li>
              <li>Remote workers and freelancers</li>
              <li>Anyone seeking a more efficient lifestyle</li>
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
        <div className="bg-[#0098F1] text-white md:w-[460px] lg:w-[520px] p-2">
          {renderContent()}
        </div>
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
