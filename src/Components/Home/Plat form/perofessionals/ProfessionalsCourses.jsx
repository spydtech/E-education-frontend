import React from "react";
import { SiSemanticweb } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiAlwaysdata } from "react-icons/si";
import { GrVirtualMachine } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { SiCyberdefenders } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { FaMixcloud } from "react-icons/fa";
import { SiNintendonetwork } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
import { GrBook } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BsTelephoneOutbound } from "react-icons/bs";

import { IoRemoveOutline } from "react-icons/io5";
import { GiPreviousButton } from "react-icons/gi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

const courses = [
  {
    title: "Full Stack Web Development",
    description:
      "Master full-stack web development with a comprehensive bootcamp course on E-education.",
    link: "/fullStack_WebDevelopment",
    icon: <SiSemanticweb style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Mobile App Development",
    description:
      "Start your journey in iOS app development with expert guidance.",
    link: "/fullStackMobileAppDevelopment",
    icon: <FaMobile style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Python Programming",
    description: "Unlock the power of Python programming with E-education.",
    link: "/fullStack_WebDevelopment/fullStack-Python-Development",
    icon: <FaPython style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Java Programming",
    description:
      "Build a solid foundation in Java programming with an engaging course on E-education.",
    link: "/fullStack_WebDevelopment/fullStack-Java-Development",
    icon: <FaJava style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Data Science and Analytics",
    description:
      "Dive deep into data science and analytics with a specialized course.",
    link: "/data_Science/data-Analatics",
    icon: <SiAlwaysdata style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Machine Learning",
    description: "Explore machine learning with hands-on Python & R training .",
    link: "/data_Science/machine-Learning",
    icon: <GrVirtualMachine style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Data Visualization",
    description:
      "Master the art of data visualization with Python and Matplotlib in a course.",
    link: "/data_Science/data-visualization",
    icon: <AiFillDatabase style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Big Data",
    description:
      "Conquer big data challenges with specialized training  on E-education.",
    link: "/data_Science/big-data-analysis",
    icon: <DiDatabase style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Cybersecurity",
    description:
      "Embark on a journey into cybersecurity fundamentals  on E-education.",
    link: "/cyber_security",
    icon: <SiCyberdefenders style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Ethical Hacking",
    description:
      "Learn the art of ethical hacking through comprehensive training on E-education.",
    link: "/ethical_Hacking",
    icon: <GiGraduateCap style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Network Security",
    description:
      "Master network security essentials with a comprehensive course on Pluralsight.",
    link: "/network_security",
    icon: <MdOutlineNetworkCheck style={{ width: "40px", height: "40px" }} />,
  },
  // {
  //   title: "Certified Information Systems Security Professional (CISSP)",
  //   description:
  //     "Prepare for the CISSP certification exam with official training  E-education.",
  //   link: "link-to-the-course",
  //   icon: <GrShieldSecurity style={{ width: '40px', height: '40px' }} />,
  // },
  {
    title: "Cloud Computing",
    description: "Embark on a journey into cloud computing with E-education.",
    link: "/cloud-testing",
    icon: <FaMixcloud style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "IT and Networking",
    description:
      "Master IT and networking essentials with courses on E-education.",
    link: "/network_security/advance-network-secuity",
    icon: <SiNintendonetwork style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "Database Management",
    description:
      "Unlock the potential of database management with E-education.",
    link: "/database",
    icon: <FaDatabase style={{ width: "40px", height: "40px" }} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Master the principles of UI/UX design with courses on E-education.",
    link: "/ui_ux_design",
    icon: <FaComputer style={{ width: "40px", height: "40px" }} />,
  },
  // {
  //   title: "Software Engineering Practices",
  //   description:
  //     "Learn agile, scrum, testing, and DevOps courses on E-education.",
  //   link: "link-to-the-course",
  //   icon: <SiPaloaltosoftware  style={{ width: '40px', height: '40px' }} />,
  // },
  // Add more courses here with respective icons
];

function ProfessionalsCourses() {
  return (
    <>
      <div
        id="heading"
        className="md:mt-20  flex flex-col justify-center items-center mt-16 gap-y-4"
      >
        <div className="text-center text-xl md:lg:sm:w-auto w-96 text-black">
          Best Selling Courses in India
        </div>
        <div className="text-center font-bold text-4xl md:lg:sm:w-auto w-96 text-violet-800">
          Highly Demanded Skill Enhancement Courses
        </div>
        <div className="flex justify-center md:lg:sm:w-auto w-96 text-cyan-500">
          <IoRemoveOutline className="text-[40px]" />
          <IoReorderThreeOutline className="text-[40px]" />{" "}
          <IoRemoveOutline className="text-[40px]" />
        </div>
      </div>
      <div className="flex   justify-center items-center ">
        <div
          id="submain"
          className=" h-auto w-full grid  md:grid-cols-2 lg:grid-cols-3  grid-cols-1 place-items-center gap-8"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="  group hover:bg-white border-2  rounded "
            >
              <div className="flex rounded justify-center bg-gray-200  px-16 w-auto h-36 items-center text-4xl cursor-pointer relative before:absolute group-hover:before:bg-[#f6ac14] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.0] group-hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
                <div className="border-b-2 mx-16 px-8 absolute border-[#023047] bg-white  group-hover:border-none h-[80px] md:w-[350px]  flex items-center justify-between">
                  <div className="font-bold   text-base">{course.title}</div>
                  <div id="logo" className="">
                    {course.icon}
                  </div>
                </div>
              </div>
              <div className=" h-32 w-96 rounded ">
                <div className="text-start  font-medium pl-4 py-4 ">
                  {course.description}
                </div>

                <Link to={course.link}>
                  <div className="font-bold gap-4 md:w-[390px] border-none flex justify-center items-center  hover:text-white bg-[#2a9d8f] hover:bg-[#0098f1] transition duration-500 p-2">
                    <div className="">
                      <FaLocationArrow className="w-8 h-8 " />
                    </div>{" "}
                    Explore Now
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfessionalsCourses;
