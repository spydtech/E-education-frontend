import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const data = [
  {
    id: 1,
    title: "Front-end Development with Angular",
    description:
      "Learn the essentials of Angular for building dynamic user interfaces.Explore TypeScript and how it integrates with Angular for robust development.Implement responsive design principles to ensure your applications look great on any device.",
  },
  {
    id: 2,
    title: "JavaScript Programming with Node.js",
    description:
      "Master the fundamentals of JavaScript programming.Delve into server-side development using Node.js Learn to build scalable network applications using Node.js and Express.",
  },
  {
    id: 3,
    title: "Database Management with MongoDB",
    description:
      "Get introduced to NoSQL databases with MongoDB.Learn to design and manage databases using MongoDB.Explore data modeling, schema design, and CRUD operations in MongoDB.",
  },
  {
    id: 4,
    title: "Full Stack Application Development",
    description:
      "Integrate Angular, Node.js, and MongoDB to build full stack applications.Implement RESTful APIs to connect front-end and back-end components Develop, test, and deploy MEAN stack applications.",
  },
  {
    id: 5,
    title: "Version Control with Git",
    description:
      "Understand the basics of version control with Git.Learn to manage your codebase with Git and GitHub. Collaborate on projects using branching and merging techniques.",
  },
  {
    id: 6,
    title: "Project Management and Collaboration Tools",
    description:
      "Get introduced to project management methodologies and tools Learn to use tools like JIRA, Trello, and Slack for effective team collaboration Manage project timelines, tasks, and communication efficiently.",
  },
];

const Question = ({ title, description }) => {
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
    {expanded && <p className="mt-4 text-[#0098F1]">{description}</p>}
  </article>
  );
};

export default function MeanStackDev() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="px-2 md:px-5">
      <h3 className="text-xl text-[#0098F1] font-bold text-center my-3">
        Courses We{" "}
        <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">
          Covered in this MEAN Stack
        </span>{" "}
        <span className="text-[#F6AC14]"> Development Program</span>
      </h3>
      <section className="space-y-4 text-[#0098F1] mb-5">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import Faq from "react-faq-component";

// const data = {
//   title: (
//     <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//       Courses Covered in this MEAN Stack Development Program
//     </div>
//   ),
//   rows: [
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Front-end Development with Angular
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Learn the essentials of Angular for building dynamic user
//             interfaces.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore TypeScript and how it integrates with Angular for robust
//             development.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Implement responsive design principles to ensure your applications
//             look great on any device.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           JavaScript Programming with Node.js
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Master the fundamentals of JavaScript programming.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Delve into server-side development using Node.js.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to build scalable network applications using Node.js and
//             Express.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Database Management with MongoDB
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Get introduced to NoSQL databases with MongoDB.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to design and manage databases using MongoDB.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore data modeling, schema design, and CRUD operations in
//             MongoDB.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Full Stack Application Development
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Integrate Angular, Node.js, and MongoDB to build full stack
//             applications.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Implement RESTful APIs to connect front-end and back-end components.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Develop, test, and deploy MEAN stack applications.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Version Control with Git
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Understand the basics of version control with Git.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to manage your codebase with Git and GitHub.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Collaborate on projects using branching and merging techniques.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Project Management and Collaboration Tools
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Get introduced to project management methodologies and tools.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to use tools like JIRA, Trello, and Slack for effective team
//             collaboration.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Manage project timelines, tasks, and communication efficiently.
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

// export default function MeanStackDev() {
//   return (
//     <div>
//       <Faq data={data} styles={styles} config={config} />
//     </div>
//   );
// }
