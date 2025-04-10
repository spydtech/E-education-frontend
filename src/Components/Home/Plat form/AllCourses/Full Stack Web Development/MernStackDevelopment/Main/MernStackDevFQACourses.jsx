import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Front-end Development with React",
    description:
      "Learn the core concepts of React for building dynamic user interfaces. Explore JSX, components, props, and state management. Implement responsive design to create mobile-friendly applications.",
  },
  {
    id: 2,
    title: "JavaScript Programming with Node.js",
    description:
      "Master JavaScript fundamentals and dive into server-side development using Node.js. Learn to build scalable backend applications using Node.js and Express.js.",
  },
  {
    id: 3,
    title: "Database Management with MongoDB",
    description:
      "Understand the basics of NoSQL databases with MongoDB. Learn how to design schemas, perform CRUD operations, and manage collections effectively.",
  },
  {
    id: 4,
    title: "Full Stack Application Development",
    description:
      "Integrate React, Express, and MongoDB with Node.js to develop full-stack applications. Build RESTful APIs to connect frontend and backend components seamlessly.",
  },
  {
    id: 5,
    title: "Version Control with Git",
    description:
      "Learn Git for version control and GitHub for collaborative development. Understand branching, merging, pull requests, and effective code management.",
  },
  {
    id: 6,
    title: "Project Management and Collaboration Tools",
    description:
      "Explore tools like JIRA, Trello, and Slack for managing tasks and team communication. Understand Agile methodologies and efficient project tracking.",
  },
];

const Question = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border rounded-lg shadow-md p-4 mb-4">
      <header className="flex justify-between items-center">
        <h4
          onClick={() => setExpanded(!expanded)}
          className={`text-lg font-semibold cursor-pointer text-[#0098F1]`}
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
      {expanded && <p className="mt-4 text-[#0098F1]">{description}</p>}
    </article>
  );
};

export default function MernStackDev() {
  return (
    <div className="px-2 md:px-5">
      <h3 className="text-xl text-[#0098F1] font-bold text-center my-3">
        Courses We{" "}
        <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">
          Covered in this MERN Stack
        </span>{" "}
        <span className="text-[#F6AC14]"> Development Program</span>
      </h3>
      <section className="space-y-4 text-[#0098F1] mb-5">
        {data.map((item) => (
          <Question key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}
