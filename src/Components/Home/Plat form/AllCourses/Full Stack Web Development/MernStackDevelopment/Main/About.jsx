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
          Mastering MEAN Stack Development involves becoming proficient in all
          aspects of the MEAN stack, which includes MongoDB, Express.js,
          Angular, and Node.js. This comprehensive skill set allows developers
          to handle both the front-end and back-end of web applications. Here's
          a breakdown of what it entails:
        </p>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Front-End Development
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">Angular:</span>{" "}
            Expertise in Angular is crucial for creating dynamic, single-page
            applications with robust user interfaces and efficient performance.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">HTML/CSS:</span>{" "}
            Mastery of HTML and CSS is essential for structuring web pages and
            applying styles to create visually appealing and responsive designs.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              JavaScript/TypeScript:
            </span>{" "}
            A deep understanding of JavaScript and TypeScript is necessary for
            building interactive web applications and enhancing Angular
            development.
          </p>
        </div>

        <div className="my-3 md:text-lg ">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Back-End Development
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">Node.js:</span>{" "}
            Proficiency in Node.js is vital for building scalable server-side
            applications using JavaScript, allowing for seamless integration
            with front-end development.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">Express.js:</span>{" "}
            Understanding Express.js is important for creating robust APIs and
            handling HTTP requests efficiently.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Database Management:
            </span>{" "}
            Knowledge of MongoDB and its integration with Node.js is essential
            for managing NoSQL databases and performing CRUD operations.
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
              Prepare for the MEAN Stack Development interview
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
              Learn about MEAN Stack Development including managing access,
              defining organizational structure/policies, configuring network
              security, and analyzing logs.
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
              Learn the skills needed to be successful in a MEAN Stack
              Development role
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
