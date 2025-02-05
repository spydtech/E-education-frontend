import React from "react";

function CloudSyallabus() {
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
    <>
      <div className=" px-4 mb-2 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10">
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

export default CloudSyallabus;
