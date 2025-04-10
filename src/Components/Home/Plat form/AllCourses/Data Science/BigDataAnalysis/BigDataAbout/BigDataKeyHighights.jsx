import React, { useState } from "react";

function BigDataKeyHighights() {
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
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Overview</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Comprehensive coverage of Big Data ecosystem</li>
              <li>Hands-on learning with Hadoop, Spark, Hive, and Kafka</li>
              <li>Generative AI integration for intelligent data insights</li>
              <li>Live capstone projects with real-world datasets</li>
              <li>Certification from top E-Education partner</li>
              <li>Interactive mentor-led sessions</li>
              <li>Resume building and mock interviews</li>
              <li>Access to Big Data toolkits & 90+ video tutorials</li>
              <li>
                Preparation for Big Data certifications (Cloudera, AWS, etc.)
              </li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Key Concepts</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Hadoop Distributed File System (HDFS)</li>
              <li>MapReduce Programming Model</li>
              <li>Apache Spark for In-Memory Processing</li>
              <li>Data Ingestion Tools – Kafka, Flume, Sqoop</li>
              <li>Data Warehousing with Hive and Pig</li>
              <li>NoSQL Databases – HBase, Cassandra</li>
              <li>Data Lake Concepts and Architecture</li>
              <li>Machine Learning with Big Data</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">Applications</p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Real-time Fraud Detection in Finance</li>
              <li>Predictive Analytics in Healthcare</li>
              <li>Customer Segmentation in Retail</li>
              <li>Operational Analytics in Manufacturing</li>
              <li>Sentiment Analysis in Social Media</li>
              <li>Risk Analysis in Insurance</li>
              <li>Recommendation Engines for E-commerce</li>
              <li>Smart Cities and IoT Analytics</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Skills Developed
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Designing distributed Big Data solutions</li>
              <li>Data wrangling, cleaning, and transformation</li>
              <li>Building real-time streaming pipelines</li>
              <li>Analyzing large datasets with Hive/Spark SQL</li>
              <li>Visualizing Big Data with BI tools</li>
              <li>Deploying scalable Big Data apps on cloud platforms</li>
              <li>Integrating AI models for predictive analytics</li>
              <li>Understanding Big Data security and governance</li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div className="p-3 space-y-2">
            <p className="text-xl font-medium text-white pl-2">
              Target Audience
            </p>
            <ul className="space-y-2 font-normal list-disc pl-6">
              <li>Software Engineers & Data Engineers</li>
              <li>Data Scientists and Analysts</li>
              <li>Cloud and DevOps Professionals</li>
              <li>Business Intelligence Experts</li>
              <li>Students pursuing Data Science/Analytics</li>
              <li>Project Managers handling data-centric projects</li>
              <li>Professionals shifting into data-focused roles</li>
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
        <div className="bg-[#0098F1] text-white pb-5 md:w-2/5">
          {renderContent()}
        </div>
        <div className="my-3">
          <p className="font-bold underline-offset-2 underline text-xl text-[#0098F1]">
            Big Data Analytics Course Highlights
          </p>
          {data.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => handleClick(index)}
                className={`pt-4 hover:cursor-pointer text-xl my-2 md:h-16 md:w-[210px] border-2 rounded-md text-center ${
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

export default BigDataKeyHighights;
