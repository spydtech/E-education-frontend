import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Front-end Development Fundamentals",
    info: "front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces. Explore responsive web design principles for seamless experiences across devices. Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly.",
  },
  {
    id: 2,
    title: "JavaScript Programming Basics",
    info: "JavaScript is a high-level, interpreted programming language used to make web pages interactive. Key concepts include: Variables: Used to store data values (let, const, var). Data Types: Includes strings, numbers, booleans, objects, and arrays. Operators: Arithmetic (+, -, *, /), comparison (==, ===, !=, !==), and logical (&&, ||, !). Functions: Blocks of code designed to perform a task, defined using the function keyword or arrow functions (()=>{}). Control Structures: if, else, switch, for, while, and do-while loops. DOM Manipulation: Methods to interact with HTML elements (getElementById, querySelector, addEventListener).",
  },
  {
    id: 3,
    title: "Responsive Web Design Techniques",
    info: 'Responsive web design ensures that web pages look good on all devices. Techniques include: Media Queries: CSS techniques to apply styles based on screen size (@media). Flexible Grids: Using CSS Grid or Flexbox to create flexible layouts. Fluid Images: Ensuring images resize appropriately (max-width: 100%). Viewport Meta Tag: Ensuring the page is scaled correctly on different devices (<meta name="viewport" content="width=device-width, initial-scale=1.0">).',
  },
  {
    id: 4,
    title: "Introduction to Front-end Frameworks",
    info: "Front-end frameworks streamline the process of building complex UIs. Popular frameworks include: React: A library for building user interfaces using components and a virtual DOM. Angular: A framework for building dynamic single-page applications using TypeScript. Vue.js: A progressive framework for building UIs with an easy-to-understand syntax.",
  },
  {
    id: 5,
    title: "Back-end Development Concepts",
    info: "Back-end development focuses on server-side logic, databases, and application integration. Key concepts include: Servers: Machines that handle requests and serve responses (e.g., Node.js, Apache). APIs: Application Programming Interfaces, which allow different software systems to communicate. Databases: Systems to store and retrieve data (e.g., SQL and NoSQL databases). Authentication: Verifying user identities using methods like JWT, OAuth.",
  },
  {
    id: 6,
    title: "Server-side Scripting Languages",
    info: "Server-side scripting involves writing code that runs on the server. Common languages include: Node.js: JavaScript runtime built on Chrome's V8 engine. PHP: A popular server-side scripting language especially for web development. Python: Widely used for web development (with frameworks like Django and Flask). Ruby: Known for its elegant syntax and used with Rails framework.",
  },
  {
    id: 7,
    title: "Database Management Systems (SQL and NoSQL)",
    info: "Databases are used to store, manage, and retrieve data. SQL Databases: Use structured query language for defining and manipulating data (e.g., MySQL, PostgreSQL, SQLite). NoSQL Databases: Designed for unstructured data, offering flexibility and scalability (e.g., MongoDB, Cassandra, Redis).",
  },
  {
    id: 8,
    title: "Version Control Systems (e.g., Git)",
    info: "Version control systems track changes in code and facilitate collaboration. Git: A distributed version control system that records changes to a file or set of files over time. GitHub/GitLab/Bitbucket: Platforms for hosting and collaborating on Git repositories. Basic Commands: git init, git clone, git commit, git push, git pull, git branch, git merge.",
  },
  {
    id: 9,
    title: "Project Management and Collaboration Tools",
    info: "Tools that help teams plan, track, and collaborate on projects. Jira: A tool for issue tracking and project management. Trello: A visual tool for organizing tasks and projects. Slack: A messaging platform for team communication. Asana: A tool for managing tasks, projects, and workflows.",
  },
];

const Question = ({ title, info }) => {
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

const FullStackWebDev = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="px-2 md:px-5">
      <h3 className="text-xl text-[#0098F1] font-bold text-center my-3">
        Courses We{" "}
        <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">
          Covered in this Full Stack
        </span>{" "}
        <span className="text-[#F6AC14]"> Web Development Program</span>
      </h3>
      <section className="space-y-4 text-[#0098F1] mb-5">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
};

export default FullStackWebDev;
