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
          Mastering Full Stack Java Development involves becoming proficient in
          both front-end and back-end aspects using Java and its associated
          technologies. Here's a breakdown of what it entails:
        </p>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Front-End Development
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">HTML/CSS:</span>{" "}
            Mastery of HTML and CSS is essential for structuring web pages and
            applying styles to create visually appealing and responsive designs.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">JavaScript:</span> A
            deep understanding of JavaScript is necessary for building
            interactive web applications and enhancing frontend development.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Angular/React:
            </span>{" "}
            Expertise in Angular or React allows for the creation of dynamic and
            efficient user interfaces for web applications.
          </p>
        </div>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Back-End Development
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">Java:</span>{" "}
            Proficiency in Java is vital for building scalable server-side
            applications and handling complex business logic efficiently.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Spring Framework:
            </span>{" "}
            Understanding the Spring framework is important for creating robust
            APIs and handling HTTP requests efficiently in Java.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Database Management:
            </span>{" "}
            Knowledge of SQL or NoSQL databases and their integration with Java
            is essential for managing data and performing CRUD operations.
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
              Prepare for Full Stack Java Development interviews
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
              Learn about Java web development including managing databases,
              handling user authentication, and deploying web applications.
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
              Gain the skills needed to excel in a Full Stack Java Development
              role
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
