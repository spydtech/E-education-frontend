import React from "react";

function MobileAppSyllabus() {
  const data = [
    {
      heading: "Mobile App Development Fundamentals",
      subheading: "Topics (14)",
      items: [
        "Introduction to Mobile App Development",
        "Understanding Mobile Platforms (iOS, Android)",
        "UI/UX Design Principles for Mobile Apps",
        "Responsive Design and Adaptability",
        "Mobile App Navigation Patterns",
        "Introduction to Cross-Platform Development",
        "Using Frameworks like React Native, Flutter",
        "Mobile App Architecture and Components",
        "Data Management in Mobile Apps",
        "Integrating with Device Features (Camera, GPS)",
        "Push Notifications and Alerts",
        "Security Measures in Mobile App Development",
        "Testing and Debugging Mobile Apps",
        "Publishing and Distribution on App Stores",
      ],
    },
  ];

  return (
    <div className="py-1 mb-5">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-10">
          <div className="text-start">
            <h2 className="text-2xl text-[#0098f1] font-bold mb-4">
              Discover What You Will Learn
            </h2>
            <p className="text-lg text-gray-500">
              Dive into the comprehensive curriculum covering key concepts,
              practical applications, and advanced topics in mobile app development.
            </p>
          </div>
        </div>
        <div className="lg:w-[700px] w-full bg-[#0098f1] p-6 pl-10 rounded-lg">
          <div className="container mx-auto">
            {data.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-3xl font-semibold mb-2 text-[#ffffff]">
                  {category.heading}
                </h3>
                <h4 className="text-xl md:text-2xl font-medium mb-2 text-[#ffffff]">
                  {category.subheading}
                </h4>
                <ul className="list-disc ml-4 text-base md:text-lg text-[#ffffff] text-opacity-80">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppSyllabus;
