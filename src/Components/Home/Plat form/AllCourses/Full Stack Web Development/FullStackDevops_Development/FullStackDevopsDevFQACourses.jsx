import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const data = [
    {
      id: 1,
      title: "Continuous Integration and Continuous Deployment (CI/CD)",
      description: "Learn the fundamentals of CI/CD pipelines. Explore tools like Jenkins, CircleCI, and GitLab CI for automated builds and deployments. Implement best practices for automated testing and integration."
    },
    {
      id: 2,
      title: "Containerization with Docker",
      description: "Master the basics of containerization and Docker. Learn to create, manage, and deploy containers for various applications. Explore Docker Compose and Docker Swarm for multi-container applications."
    },
    {
      id: 3,
      title: "Orchestration with Kubernetes",
      description: "Get introduced to container orchestration with Kubernetes. Learn to deploy, scale, and manage containerized applications using Kubernetes. Explore Kubernetes architecture, services, and networking."
    },
    {
      id: 4,
      title: "Cloud Computing and Infrastructure as Code (IaC)",
      description: "Understand the basics of cloud computing and services like AWS, Azure, and Google Cloud. Learn to automate infrastructure provisioning using tools like Terraform and AWS CloudFormation. Explore concepts of scalability, fault tolerance, and disaster recovery in the cloud."
    },
    {
      id: 5,
      title: "Monitoring and Logging",
      description: "Learn to implement monitoring and logging for infrastructure and applications. Explore tools like Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana). Implement best practices for proactive system monitoring and troubleshooting."
    },
    {
      id: 6,
      title: "Security and Compliance",
      description: "Understand the importance of security in the DevOps lifecycle. Learn to integrate security practices into CI/CD pipelines. Explore tools and techniques for ensuring compliance and security in cloud environments."
    },
  ];

const Question = ({ title,  description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border rounded-lg shadow-md p-4 mb-4">
      <header className="flex justify-between items-center">
        <h4
          onClick={() => setExpanded(!expanded)}
          className={`text-lg font-semibold cursor-pointer ${
            expanded ? "text-[#0098F1]" : "text-[#0098F1]"
          }`}
        >
          {title}
        </h4>
        <button className="text-2xl" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <IoIosArrowUp className="text-[#F6AC14]" />
          ) : (
            <IoIosArrowDown className="text-[#0098F1]" />
          )}
        </button>
      </header>
      {expanded && <p className="mt-4 text-[#0098F1]">{info}</p>}
    </article>
  );
};


export default function FullStackDevopsDevFQACourses() {
  const [questions, setQuestions] = useState(data);
  return (

    <div className="px-2 md:px-5">
      <h3 className="text-xl text-[#0098F1] font-bold text-center my-3">
        Courses We{" "}
        <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">
          Covered in this Full Stack
        </span>{" "}
        <span className="text-[#F6AC14]">DevOps Development Program</span>
      </h3>
      <section className="space-y-4 text-[#0098F1] mb-5">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
};



// import React from "react";
// import Faq from "react-faq-component";

// const data = {
//   title: (
//     <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//       Courses Covered in this Full Stack DevOps Development Program
//     </div>
//   ),
//   rows: [
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Continuous Integration and Continuous Deployment (CI/CD)
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Learn the fundamentals of CI/CD pipelines.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore tools like Jenkins, CircleCI, and GitLab CI for automated
//             builds and deployments.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Implement best practices for automated testing and integration.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Containerization with Docker
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Master the basics of containerization and Docker.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to create, manage, and deploy containers for various
//             applications.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore Docker Compose and Docker Swarm for multi-container
//             applications.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Orchestration with Kubernetes
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Get introduced to container orchestration with Kubernetes.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to deploy, scale, and manage containerized applications using
//             Kubernetes.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore Kubernetes architecture, services, and networking.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Cloud Computing and Infrastructure as Code (IaC)
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Understand the basics of cloud computing and services like AWS,
//             Azure, and Google Cloud.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to automate infrastructure provisioning using tools like
//             Terraform and AWS CloudFormation.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore concepts of scalability, fault tolerance, and disaster
//             recovery in the cloud.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Monitoring and Logging
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to implement monitoring and logging for infrastructure and
//             applications.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore tools like Prometheus, Grafana, ELK Stack (Elasticsearch,
//             Logstash, Kibana).
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Implement best practices for proactive system monitoring and
//             troubleshooting.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Security and Compliance
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Understand the importance of security in the DevOps lifecycle.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to integrate security practices into CI/CD pipelines.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore tools and techniques for ensuring compliance and security in
//             cloud environments.
//           </p>
//         </div>
//       ),
//     },
//   ],
// };

// const styles = {
//   bgColor: "white",
//   rowContentColor: "grey",
// };

// const config = {
//   animate: true,
//   tabFocus: true,
// };

// export default function FullStackDevOps() {
//   return (
//     <div>
//       <Faq data={data} styles={styles} config={config} />
//     </div>
//   );
// }
