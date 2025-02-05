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
          Mastering .NET Full Stack Development involves becoming proficient in
          both front-end and back-end technologies, enabling developers to build
          scalable and dynamic web applications. Here's a breakdown of the
          essential skills:
        </p>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Front-End Development:
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">ASP.NET Core:</span>{" "}
            Mastery of ASP.NET Core is essential for building interactive user
            interfaces and single-page applications, leveraging component-based
            architecture.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold"> HTML/CSS:</span>{" "}
            Proficiency in HTML and CSS is necessary for structuring web pages
            and styling them to create visually appealing designs.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">JavaScript:</span> A
            strong understanding of JavaScript is fundamental for implementing
            client-side logic and enhancing user experiences.
          </p>
        </div>

        <div className="my-3 md:text-lg">
          <h1 className="text-[#0098F1] font-bold md:text-2xl">
            Back-End Development:
          </h1>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">.NET Core:</span>{" "}
            Proficiency in .NET Core is crucial for building scalable
            server-side applications, facilitating seamless communication
            between the front-end and back-end.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Entity Framework:
            </span>{" "}
            Understanding Entity Framework is essential for creating robust APIs
            and handling database operations efficiently in .NET applications.
          </p>
          <p className="  text-[#0098F1] my-2">
            <span className=" text-[#F6AC14] font-semibold">
              Database Management:
            </span>{" "}
            Knowledge of databases like SQL Server or other relational databases
            and their integration with .NET is essential for managing data and
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
              Master the skills needed for .NET Full Stack Development.
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

// import React from "react";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// const About = () => {
//   return (
//     <>
//       <div>
//       <div className="fone-bold text-[#0098F1] md:text-5xl font text-2xl font-bold">
//           About this Course
//         </div>
//         <div className="pt-4 text-[#0098F1] font">

//         </div>
//         <div className="py-2 gap-4">
//           <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">

//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 text-base font-bold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               ASP.NET Core:
//             </span>{" "}
//             Mastery of ASP.NET Core is essential for building interactive user
//             interfaces and single-page applications, leveraging component-based
//             architecture.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 text-base font-bold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               HTML/CSS:
//             </span>{" "}
//             Proficiency in HTML and CSS is necessary for structuring web pages
//             and styling them to create visually appealing designs.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 text-base font-bold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               JavaScript:
//             </span>{" "}
//             A strong understanding of JavaScript is fundamental for implementing
//             client-side logic and enhancing user experiences.
//           </div>
//         </div>
//         <div className="py-2 gap-4">
//           <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
//             Back-End Development
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 font-bold text-base text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               .NET Core:
//             </span>{" "}
//             Proficiency in .NET Core is crucial for building scalable
//             server-side applications, facilitating seamless communication
//             between the front-end and back-end.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 font-bold text-base text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               Entity Framework:
//             </span>{" "}
//             Understanding Entity Framework is essential for creating robust APIs
//             and handling database operations efficiently in .NET applications.
//           </div>
//           <div className="text-[#0098F1] text-base font">
//             <span className="mt-3 font-bold text-base text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               Database Management:
//             </span>{" "}
//             Knowledge of databases like SQL Server or other relational databases
//             and their integration with .NET is essential for managing data and
//             performing CRUD operations.
//           </div>
//         </div>

//         <div className="py-8">
//           <hr className="border-t border-[#0098F1]" />
//         </div>
//         <div className="mt-3 font-extrabold text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//           What you'll learn
//         </div>
//         <div>
//           <div className="flex justify-start items-center font mt-2">
//             <div>
//             <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
//             </div>
//             <div className="text-[#0098F1] text-lg font">
//               Master the skills needed for .NET Full Stack Development.
//             </div>
//           </div>
//           <div className="flex justify-start items-center font mt-2">
//             <div>
//             <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
//             </div>
//             <div className="text-[#0098F1] text-lg font">
//               Build scalable and dynamic web applications from scratch.
//             </div>
//           </div>
//           <div className="flex justify-start items-center font mt-2">
//             <div>
//             <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
//             </div>
//             <div className="text-[#0098F1] text-lg font">
//               Gain proficiency in both front-end and back-end technologies for
//               comprehensive development expertise.
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About; */}
