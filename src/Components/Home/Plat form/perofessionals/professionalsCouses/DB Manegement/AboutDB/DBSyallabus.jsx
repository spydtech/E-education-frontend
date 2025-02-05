import React from "react";

function DBSyllabus() {
  const data = [
    {
      heading: "Introduction to Database Management",
      subheading: "Topics (16)",
      items: [
        "Overview of Database Management Systems (DBMS)",
        "Types of Databases (Relational, NoSQL, In-Memory)",
        "Database Architecture and Components",
        "Data Modeling and Database Design",
        "SQL Basics and Advanced Queries",
        "Normalization and Denormalization",
        "Transactions and Concurrency Control",
        "Database Security and Encryption",
        "Backup and Recovery Strategies",
        "Performance Tuning and Optimization",
        "Stored Procedures, Triggers, and Functions",
        "NoSQL Databases: MongoDB, Cassandra",
        "Big Data and Distributed Databases",
        "Data Warehousing and OLAP",
        "Database Administration and Maintenance",
        "Future Trends in Database Technology",
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
              Dive into the comprehensive curriculum covering key concepts,
              practical applications, and advanced topics in database management.
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

export default DBSyllabus;
