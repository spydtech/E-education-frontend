import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="px-2 md:px-5 italic">
        <h1 className="font-bold text-2xl text-[#0098F1] ">
          About this Course
        </h1>
        <p className="pt-2 leading-1 text-gray-700 md:text-lg italic">
          Mastering Full Stack DevOps Development involves becoming proficient
          in continuous integration, deployment, and infrastructure management
          using a variety of tools and technologies. Here's a breakdown of what
          it entails:
        </p>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Continuous Integration
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              CI/CD Pipelines: &nbsp;
            </span>
            Mastery of CI/CD pipelines is essential for automating the build,
            test, and deployment processes, ensuring smooth and rapid delivery
            of software updates.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className="text-[#F6AC14] font-semibold">
              Version Control: &nbsp;
            </span>
            A deep understanding of version control systems like Git is
            necessary for managing code changes and collaborating effectively
            with team members.
          </p>
        </div>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Containerization and Orchestration
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Docker: &nbsp;
            </span>
            Proficiency in Docker is vital for creating, managing, and deploying
            containerized applications efficiently.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className="text-[#F6AC14] font-semibold">
              Kubernetes: &nbsp;
            </span>
            Understanding Kubernetes is important for orchestrating and managing
            containerized applications across a cluster of machines.
          </p>
        </div>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Infrastructure Management
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Infrastructure as Code (IaC): &nbsp;
            </span>
            Knowledge of IaC tools like Terraform or Ansible is essential for
            automating the setup and management of infrastructure.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className="text-[#F6AC14] font-semibold">
              Cloud Platforms: &nbsp;
            </span>
            Familiarity with cloud platforms such as AWS, Azure, or GCP is
            crucial for deploying and managing applications in the cloud.
          </p>
        </div>

        <div className="md:text-lg">
          <h1 className="font-bold text-[#0098F1] md:text-2xl">
            What you'll learn
          </h1>
          <div className="flex my-2 gap-x-2">
            <div>
              <MdOutlineKeyboardDoubleArrowRight
                size={30}
                className=" font-bold text-[#F6AC14]"
              />
            </div>
            <p className="text-[#0098F1]">
              Prepare for Full Stack DevOps Development interviews
            </p>
          </div>
          <div className="flex my-2 gap-x-2">
            <div>
              <MdOutlineKeyboardDoubleArrowRight
                size={30}
                className=" font-bold text-[#F6AC14]"
              />
            </div>
            <p className="text-[#0098F1]">
              Learn about CI/CD pipelines, containerization, orchestration, and
              cloud deployments.
            </p>
          </div>
          <div className="flex my-2 gap-x-2">
            <div>
              <MdOutlineKeyboardDoubleArrowRight
                size={30}
                className=" font-bold text-[#F6AC14]"
              />
            </div>
            <p className="text-[#0098F1]">
              Gain the skills needed to excel in a Full Stack DevOps Development
              role
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
