import React from "react";
import { Link } from "react-router-dom";
import fullstack from "../../assetss/student/studentCourses/full_stack.png";
import science from "../../assetss/student/studentCourses/data-science.png";
import cyber from "../../assetss/student/studentCourses/cyber-security (1).png";
import ethical from "../../assetss/student/studentCourses/hacker.png";
import testing from "../../assetss/student/studentCourses/testing.png";
import security from "../../assetss/student/studentCourses/cyber-security.png";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const CourseCard = () => {
  const courses = [
    {
      title: " Web Development",
      image: fullstack,
      description:
        "Build and maintain websites using various programming languages and frameworks.",
      link: "/webdevelopment",
    },
    {
      title: "Software Testing",
      image: science,
      description:" Master techniques and tools for effective software testing and quality assurance.",
      link: "/software_Testing",
    },
    {
      title: " Php",
      image: cyber,
      description:
        " Develop dynamic and server-side applications using the PHP scripting language.",
      link: "/php",
    },
    {
      title: " Java",
      image: ethical,
      description:
        "Write platform-independent applications using the robust and versatile Java programming language.",
      link: "/java",
    },
    {
      title: "Wordpress",
      image: testing,
      description:
        "Create and manage websites and blogs with the WordPress content management system.",
      link: "/wordpress",
    },
    {
      title: " JavaScript",
      image: security,
      description:
        " Enhance web interactivity and functionality using the versatile JavaScript language.",
      link: "/javaScript",
    },
    {
      title: " C/C++",
      image: testing,
      description:
        "Develop high-performance applications and system software with C and C++.",
      link: "/c_c++",
    },
    {
      title: "UI/UX Design",
      image: testing,
      description:
        " Design user interfaces and experiences that are intuitive, engaging, and visually appealing.",
      link: "/ui_ux_design",
    },
  ];

  return (

     <>
    <div className="my-10 mb-16">
  <div className="text-center text-black text-3xl font-bold m-4 my-10">
    <span className="text-[#f6ac14]"> Explore </span>
    <span className="bg-gradient-to-r from-[#f6ac14] to-[#0098f1] bg-clip-text text-transparent">
      Basic
    </span>
    <span className="text-[#0098f1]"> Courses</span>
  </div>
  <div className="flex justify-center">
    <div
      id="maindiv"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-4 justify-center items-center"
    >
      {courses.map(({ image, title, description, link }, index) => (
        <div
          key={index}
          id="card"
          className="w-[310px] sm:w-[310px] md:w-[317px] lg:w-[340px] mx-2 h-[360px] lg:h-[360px] rounded-lx p-4 group duration-600 ease-out transform bg-[#0098f1] text-white relative rounded-2xl shadow-md flex flex-col justify-between transition-transform duration-500 hover:scale-105 before:absolute before:w-1/5 before:h-1/5 before:bg-[#f6ac14] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px] after:absolute after:w-1/5 after:h-1/5 after:bg-[#f6ac14] after:bg-opacity-0 after:transition-all after:duration-500 after:bottom-0 after:left-0 after:rounded-tl-[100%] after:rounded-br-[15px] hover:after:w-full hover:after:h-full hover:after:rounded-[15px]"
        >
          <div className="flex-grow">
            <div className="rounded-full w-[80px] h-[80px] bg-[#d2efff] relative flex justify-center items-center mb-4">
              <img
                src={image}
                alt={`Course titled ${title}`} // Improved alt text
                className="w-[48px] h-[48px]"
              />
            </div>
            <div className="relative z-10">
              <p className="text-white text-[20px] font-bold mt-4">{title}</p>
              <p className="text-white mt-4">{description}</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 relative z-10 rounded-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg w-[265px] bg-[#d2efff] group-hover:bg-[#fed19c] h-[70px] px-4 text-2xl group flex justify-center items-center gap-1.5 text-[#0098f1] py-2 transition-colors"
            >
              <Link
                to={link}
                className="flex items-center gap-1.5 group-hover:text-white"
              >
                Start Learning
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </Link>
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    </>
  );
};
export default CourseCard;
