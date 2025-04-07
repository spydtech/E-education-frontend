// import React from "react";

// function BasicPhpSyllabus() {
//   const data = [
//     {
//       heading: "Introduction to Basic PHP",
//       subheading: "Topics (16)",
//       items: [
//         "Introduction to PHP",
//         "Setting Up the Environment",
//         "Basic Syntax and Tags",
//         "Variables and Data Types",
//         "Operators and Expressions",
//         "Control Structures (if, else, switch)",
//         "Loops (for, while, do-while, foreach)",
//         "Functions and Parameters",
//         "Arrays and Array Functions",
//         "String Manipulation",
//         "Forms and User Input",
//         "Session Management",
//         "Working with Files",
//         "PHP and MySQL Integration",
//         "Error Handling",
//         "PHP Best Practices and Coding Standards",
//       ],
//     },
//   ];

//   return (
//     <div className="py-8">
//       <div className="flex flex-col lg:flex-row items-center justify-between px-4">
//         <div className="lg:w-1/2 w-full mb-8 lg:mb-0 px-10">
//           <div className="text-start">
//             <h2 className="text-2xl text-[#f6ac14] font-bold mb-4">
//               Discover What You Will Learn
//             </h2>
//             <p className="text-lg text-gray-500">
//               Top-notch and up-to-date curriculum taught by renowned professors
//               and industry experts using videos, case studies, hands-on
//               projects, and live sessions.
//             </p>
//           </div>
//         </div>
//         <div className="lg:w-[700px] w-full bg-[#0098f1] p-6 pl-20 rounded-lg">
//           <div className="container mx-auto">
//             {data.map((category, index) => (
//               <div key={index} className="mb-6">
//                 <h3 className="text-3xl font-semibold mb-2 text-[#ffffff]">
//                   {category.heading}
//                 </h3>
//                 <h4 className="text-xl md:text-2xl font-medium mb-2 text-[#ffffff]">
//                   {category.subheading}
//                 </h4>
//                 <ul className="list-disc ml-4 text-base md:text-lg text-[#ffffff] text-opacity-80">
//                   {category.items.map((item, idx) => (
//                     <li key={idx} className="mb-1">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BasicPhpSyllabus;



import React from "react";

function BasicPhpSyllabus() {
  const data = [
    {
      heading: "Introduction to Basic PHP",
      subheading: "Topics (16)",
      items: [
        "Introduction to PHP",
        "Setting Up the Environment",
        "Basic Syntax and Tags",
        "Variables and Data Types",
        "Operators and Expressions",
        "Control Structures (if, else, switch)",
        "Loops (for, while, do-while, foreach)",
        "Functions and Parameters",
        "Arrays and Array Functions",
        "String Manipulation",
        "Forms and User Input",
        "Session Management",
        "Working with Files",
        "PHP and MySQL Integration",
        "Error Handling",
        "PHP Best Practices and Coding Standards",
      ],
    },
  ];

  return (
    <div className=" px-4 mb-2 flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 md:px-10 font-poppins">
      <div className=" mb-3 md:w-2/5">
        <h2 className="md:text-2xl text-[#0098F1] font-bold mb-2">
          Discover What You Will Learn
        </h2>
        <p className="md:text-lg text-gray-500">
          Top-notch and up-to-date curriculum taught by renowned professors and
          industry experts using videos, case studies, hands-on projects, and
          live sessions.
        </p>
      </div>

      {data.map((category, index) => (
        <div
          key={index}
          className="text-white bg-[#0098f1] rounded-md p-3 md:w-2/4"
        >
          <h3 className="md:text-3xl font-semibold mb-2">{category.heading}</h3>
          <h4 className=" md:text-xl font-medium mb-2">
            {category.subheading}
          </h4>
          <ul className="list-disc ml-4">
            {category.items.map((item, idx) => (
              <li key={idx} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BasicPhpSyllabus;
