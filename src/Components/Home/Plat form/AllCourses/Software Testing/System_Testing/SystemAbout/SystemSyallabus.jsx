import React from "react";

function SystemTestingSyllabus() {
  const data = [
    {
      heading: "Introduction to Cloud Computing",
      subheading: "Topics (16)",
      items: [
        "Overview of Cloud Computing",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Cloud Deployment Models (Public, Private, Hybrid)",
        "Cloud Infrastructure Components",
        "Virtualization in Cloud Computing",
        "Scalability and Elasticity",
        "Security in Cloud Computing",
        "Identity and Access Management (IAM)",
        "Data Privacy and Compliance",
        "Cloud Networking Fundamentals",
        "Load Balancing and Content Delivery Networks (CDNs)",
        "High Availability and Disaster Recovery",
        "Serverless Computing",
        "Big Data and Analytics in the Cloud",
        "Artificial Intelligence and Machine Learning in the Cloud",
        "Future Trends in Cloud Computing",
      ],
    },
  ];

  return (
    <div className="py-1">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-10">
          <div className="text-start">
            <h2 className="text-2xl text-[#0098f1] font-bold mb-4">
              Discover What You Will Learn
            </h2>
            <p className="text-lg text-gray-500">
              Top-notch and up-to-date curriculum taught by renowned professors
              and industry experts using videos, case studies, hands-on
              projects, and live sessions.
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
                <h4 className="text-xl md:text-2xl font-medium mb-2 text-white">
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

export default SystemTestingSyllabus;
