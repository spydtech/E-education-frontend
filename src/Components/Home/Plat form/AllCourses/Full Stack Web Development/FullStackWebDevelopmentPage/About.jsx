import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const About = () => {
  return (
    <div className="px-2 md:px-5 italic" >
      <h1 className="font-bold text-2xl text-[#0098F1] ">About this Course</h1>
      <p className="pt-2 leading-1 text-gray-700 md:text-lg">
        Mastering Full Stack Web Development involves becoming proficient in
        both the front-end and back-end aspects of web development. This
        includes understanding various programming languages, frameworks,
        databases, and deployment techniques. Here's a breakdown of what it
        entails:
      </p>
      
      <div className="my-3 md:text-lg">
        <h1 className="text-[#0098F1] font-bold md:text-2xl">
          Front-End Development:
        </h1>
        <p className="  text-[#0098F1] my-2">
          <span className=" text-[#F6AC14] font-semibold">
            HTML/CSS : &nbsp;
          </span>
          Proficiency in at least one back-end programming language such as
          JavaScript (Node.js), Python (Django or Flask), Ruby (Ruby on Rails),
          or Java (Spring Boot).
        </p>
        <p className="  text-[#0098F1] my-2">
          <span className="text-[#F6AC14] font-semibold">
            JavaScript : &nbsp;
          </span>
          A deep understanding of JavaScript is crucial for creating interactive
          and dynamic web experiences. This includes modern frameworks/libraries
          like React, Angular, or Vue.js.
        </p>
        <p className="  text-[#0098F1] my-2">
          <span className="text-[#F6AC14] font-semibold">
            Responsive Design : &nbsp;
          </span>
          Ability to create websites that adapt and look good on various devices
          and screen sizes
        </p>
      </div>

      <div className="my-3 md:text-lg ">
        <h1 className="text-[#0098F1] font-bold md:text-2xl">
          Back-End Development:
        </h1>
        <p className="  text-[#0098F1] my-2">
          <span className=" text-[#F6AC14] font-semibold">
            Programming Languages : &nbsp;
          </span>
          Mastery of HTML and CSS is fundamental for structuring web pages and
          styling them effectively. Proficiency in at least one back-end
          programming language such as JavaScript (Node.js), Python (Django or
          Flask).
        </p>
        <p className="  text-[#0098F1] my-2">
          <span className="text-[#F6AC14] font-semibold">
            DB Management : &nbsp;
          </span>
          Understanding of database systems like MySQL, PostgreSQL, MongoDB, or
          SQLite, and how to interact with them using SQL or NoSQL queries.
        </p>
        <p className="  text-[#0098F1] my-2">
          <span className="text-[#F6AC14] font-semibold">
            API Development : &nbsp;
          </span>
          Ability to create websites that adapt and look good on various devices
          and screen sizes.
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
            Prepare for the Full Stack Web Development interview
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
            Learn about Full Stack Web Development including managing access,
            defining organizational structure/ policies, configuring network
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
            Learn the skills needed to be successful in a Full Stack Web
            Development role
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
