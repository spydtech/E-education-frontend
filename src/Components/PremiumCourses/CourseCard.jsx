import React from "react";
// import fullstack from "../../../assetss/studentCourses/full stack.png";
// import science from "../../../assetss/studentCourses/data-science.png";
// import cyber from "../../../assetss/studentCourses/cyber-security (1).png";
// import ethical from "../../../assetss/studentCourses/hacker.png";
// import testing from "../../../assetss/studentCourses/testing.png";
// import security from "../../../assetss/studentCourses/cyber-security.png";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const CourseCard = () => {
  const courses = [
    {
      title: "Full Stack Development",
      description:
        " Learn to build complete web applications, covering both frontend and backend development.",
      image: "https://cdn-icons-png.flaticon.com/128/8361/8361113.png",
      link: "/fullStack_WebDevelopment/fullStack-Web-Development",
    },
    {
      title: "Software Testing",
      description:
        "Unlock expert-level techniques and tools for reliable software testing and quality assurance",
      image: "https://cdn-icons-png.flaticon.com/128/9160/9160777.png",
      link: "/software_testing",
    },
    {
      title: "Machine Learning with AI",
      description:
        "Gain expertise in machine learning algorithms and artificial intelligence models.",
      image: "https://cdn-icons-png.flaticon.com/128/17632/17632048.png",
      link: "/data_Science/machine-Learning",
    },
    {
      title: "DevOps Mastery",
      description:
        " Combine development and operations practices to enhance software delivery and reliability",
      image: "https://cdn-icons-png.flaticon.com/128/6419/6419097.png",
      link: "/fullStack_WebDevelopment/fullStack-Devops",
    },
    {
      title: "Blockchain Development",
      description:
        "Build cutting-edge DApps with blockchain infrastructure and smart contract automation",
      image: "https://cdn-icons-png.flaticon.com/128/3985/3985639.png",
      link: "/blockchain",
    },
    {
      title: "Cloud with AWS",
      description:
        "Unlock the potential of cloud computing and AWS for scalable and optimized app development.",
      image: "https://cdn-icons-png.flaticon.com/128/3305/3305673.png",
      link: "/cloud-computing",
    },
    {
      title: "Data Science Techniques",
      description:
        "Methods for extracting insights from data, such as machine learning, statistical analysis, and data visualization.",
      image: "https://cdn-icons-png.flaticon.com/128/2821/2821637.png",
      link: "/data_Science",
    },
    {
      title: "Ethical Hacking",
      description:
        "Gain ethical hacking knowledge to identify and neutralize cyber threats in systems and networks.",
      image: "https://cdn-icons-png.flaticon.com/128/13763/13763528.png",
      link: "/ethical_Hacking",
    },
    {
      title: "Cyber Security",
      description:
        "Understand and implement strategies to protect digital assets and data from cyber attacks.",
      image: "https://cdn-icons-png.flaticon.com/128/1691/1691940.png",
      link: "/cyber_security",
    },
    // {
    //   title: "Artificial Intelligence",
    //   description:
    //     "Dive deep into neural networks, NLP, computer vision, and more to master the world of AI.",
    //   image: "https://cdn-icons-png.flaticon.com/128/3105/3105798.png",
    //   link: "/artificial_intelligence",
    // },
  ];


  return (
    <>
      <div className="my-10 mb-16">
        <div className="text-center text-black text-3xl font-bold m-4 my-10">
          <span className="text-[#f6ac14]">Explore </span>
          <span className="bg-gradient-to-r  from-[#f6ac14] to-[#0098f1] bg-clip-text text-transparent">
            Premium
          </span>
          <span className="text-[#0098f1]"> Courses</span>
        </div>
        <div className="flex justify-center">
          <div
            id="maindiv"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-4 justify-center items-center"
          >
            {courses.map((course, index) => (
            <div
            key={index}
            id="card"
            className="w-[300px] sm:w-[300px] md:w-[317px] lg:w-[340px] mx-2 h-[340px] lg:h-[360px] rounded-lx p-4 group duration-600 ease-out transform bg-[#0098f1] text-white relative rounded-2xl shadow-md flex flex-col justify-between transition-transform duration-500 hover:scale-105 before:absolute before:w-1/5 before:h-1/5 before:bg-[#f6ac14] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px] after:absolute after:w-1/5 after:h-1/5 after:bg-[#f6ac14] after:bg-opacity-0 after:transition-all after:duration-500 after:bottom-0 after:left-0 after:rounded-tl-[100%] after:rounded-br-[15px] hover:after:w-full hover:after:h-full hover:after:rounded-[15px]"
              >
                <div>
                  <div className="rounded-full w-[80px] h-[80px] bg-[#d2efff] relative flex justify-center items-center mb-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-[48px] h-[48px]"
                    />
                  </div>
                  <div className=" relative z-10 ">
                    <p className="text-white  text-[20px] font-bold mt-4">
                      {course.title}
                    </p>
                    <p className="text-whitemt-4">{course.description}</p>
                  </div>
                  <div className="flex justify-center items-center mt-10 relative z-10 rounded-lg ">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg md:w-[265px] bg-[#d2efff] group-hover:bg-[#fed19c] md:h-[70px] px-4  sm:text-lg md:text-2xl text-lg group flex justify-center items-center gap-1.5 text-[#0098f1] py-2 transition-colors"
                  >

                      <Link
                        to={course.link}
                        className="flex items-center gap-1.5 group-hover:text-white"
                      >
                        Start Learning
                        <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                      </Link>
                    </motion.button>
                  </div>
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
