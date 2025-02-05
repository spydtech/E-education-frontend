import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "C# Programming Fundamentals",
    description:
      "Learn the basics of C# programming language. Understand object-oriented programming (OOP) concepts in C#. Explore data types, control structures, and functions in C#.",
  },
  {
    id: 2,
    title: "ASP.NET Web Development",
    description:
      "Build dynamic web applications using ASP.NET framework. Understand the MVC (Model-View-Controller) architecture in ASP.NET. Implement server-side logic and data validation in ASP.NET.",
  },
  {
    id: 3,
    title: "Database Management with Entity Framework",
    description:
      "Learn to interact with databases using Entity Framework. Understand ORM (Object-Relational Mapping) concepts. Perform CRUD operations using Entity Framework.",
  },
  {
    id: 4,
    title: "Web API Development with .NET Core",
    description:
      "Build RESTful APIs using .NET Core framework. Implement authentication and authorization in Web APIs. Handle HTTP requests and responses in .NET Core.",
  },
  {
    id: 5,
    title: "Version Control with Git",
    description:
      "Understand the basics of version control with Git. Learn to manage your codebase with Git and GitHub. Collaborate on projects using branching and merging techniques.",
  },
  {
    id: 6,
    title: "Software Development Life Cycle (SDLC)",
    description:
      "Understand the phases of the software development life cycle. Learn about Agile and Waterfall methodologies. Implement best practices for software development.",
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
          Covered in this
        </span>{" "}
        <span className="text-[#F6AC14]"> .NET Development Program</span>
      </h3>
      <section className="space-y-4 text-[#0098F1] mb-5">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
}

// import React from "react";
// import Faq from "react-faq-component";

// const data = {
//   title: (
//     <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//       Courses Covered in this .NET Development Program
//     </div>
//   ),
//   rows: [
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           C# Programming Fundamentals
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Learn the basics of C# programming language.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Understand object-oriented programming (OOP) concepts in C#.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Explore data types, control structures, and functions in C#.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           ASP.NET Web Development
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Build dynamic web applications using ASP.NET framework.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Understand the MVC (Model-View-Controller) architecture in ASP.NET.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Implement server-side logic and data validation in ASP.NET.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Database Management with Entity Framework
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Learn to interact with databases using Entity Framework.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Understand ORM (Object-Relational Mapping) concepts.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Perform CRUD operations using Entity Framework.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           Web API Development with .NET Core
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Build RESTful APIs using .NET Core framework.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Implement authentication and authorization in Web APIs.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Handle HTTP requests and responses in .NET Core.
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
//           Software Development Life Cycle (SDLC)
//         </div>
//       ),
//       content: (
//         <div>
//           <p className="text-base text-gray-600 text-md font">
//             Understand the phases of the software development life cycle.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Learn about Agile and Waterfall methodologies.
//           </p>
//           <p className="text-base text-gray-600 text-md font">
//             Implement best practices for software development.
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

// // export default function DotNetDev() {
// //   return (
// //     <div>
// //       <Faq data={data} styles={styles} config={config} />
// //     </div>
// //   );
// // }

// export default function MeanStackDev() {
//   return (
//     <div>
//       <Faq data={data} styles={styles} config={config} />
//     </div>
//   );
// }
