import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const About = () => {
  return (
    <>
      <div className="px-2 md:px-5">
        <h1 className="font-bold text-2xl text-[#0098F1] ">
          About this Course
        </h1>
        <p className="pt-2 leading-1 text-gray-700 md:text-lg">
          Mastering JavaScript Full Stack Development involves becoming
          proficient in both front-end and back-end technologies, enabling
          developers to build scalable and dynamic web applications. Here's a
          breakdown of the essential skills:
        </p>
        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Front-End Development
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">React.js:</span>{" "}
            Mastery of React.js is essential for building interactive user
            interfaces and single-page applications, leveraging component-based
            architecture.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">HTML/CSS:</span>{" "}
            Proficiency in HTML and CSS is necessary for structuring web pages
            and styling them to create visually appealing designs.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">JavaScript:</span> A
            strong understanding of JavaScript is fundamental for implementing
            client-side logic and enhancing user experiences.
          </p>
        </div>

        <div className="my-3 md:text-lg ">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Back-End Development:
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">Node.js:</span>{" "}
            Proficiency in Node.js is crucial for building scalable server-side
            applications using JavaScript, facilitating seamless communication
            between the front-end and back-end.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">Express.js:</span>{" "}
            Understanding Express.js is essential for creating robust APIs and
            handling HTTP requests efficiently in Node.js applications.
          </p>{" "}
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Database Management:
            </span>{" "}
            Knowledge of databases like MongoDB or SQL databases and their
            integration with Node.js is essential for managing data and
            performing CRUD operations.
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
              Master the skills needed for JavaScript Full Stack Development.
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
              Build scalable and dynamic web applications from scratch.
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
              Gain proficiency in both front-end and back-end technologies for
              comprehensive development expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
