import React from "react";

function CloudComputingSyllabus() {
  const data = [
    {
      heading: "Introduction to Cloud Computing with AWS",
      subheading: "Topics (12)",
      items: [
        "Overview of Cloud Computing",
        "Introduction to AWS",
        "AWS Global Infrastructure",
        "Compute Services (EC2, Lambda)",
        "Storage Services (S3, EBS)",
        "Database Services (RDS, DynamoDB)",
        "Networking Services (VPC, Route 53)",
        "Security Services (IAM, KMS)",
        "Monitoring and Management Tools (CloudWatch, CloudTrail)",
        "Deployment and Automation (Elastic Beanstalk, CloudFormation)",
        "Serverless Computing with AWS Lambda",
        "Best Practices for Cloud Architecture on AWS",
      ],
    },
  ];

  return (
    <div className=" px-4 mb-2 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10">
      <div className=" mb-3 md:w-2/5">
        <h2 className="md:text-2xl text-[#0098F1] font-bold mb-2">
          Discover What You Will Learn
        </h2>
        <p className="md:text-lg text-gray-500">
          Top-notch and up-to-date curriculum taught by renowned professors and
          industry experts using videos, case studies, hands-on projects, and
          live sessions.
        </p>
      </div>

      {data.map((category, index) => (
        <div
          key={index}
          className="text-white bg-[#0098f1] rounded-md p-3 md:w-2/4"
        >
          <h3 className="md:text-3xl font-semibold mb-2">{category.heading}</h3>
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
  );
}

export default CloudComputingSyllabus;
