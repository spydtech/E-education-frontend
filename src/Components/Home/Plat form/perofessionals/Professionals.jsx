import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { FaPython, FaJava, FaDatabase, FaComputer } from "react-icons/fa6";
import {
  SiAlwaysdata,
  SiCyberdefenders,
  SiNintendonetwork,
} from "react-icons/si";
import { GrVirtualMachine } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { FaMixcloud } from "react-icons/fa";
import image1 from "../../../../assetss/Home/FeaturesAssets/Professionalimage1.png";
import ProfessionalsCourses from "./ProfessionalsCourses";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Professionals = () => {
  // const courses = [
  //   {
  //     title: "Full Stack Web Development",
  //     description: "Master full-stack web development with a comprehensive bootcamp course on E-education.",
  //     link: "/fullStack_WebDevelopment",
  //     icon: <SiSemanticweb className="text-[#f6ac14] w-[40px] h-[40px]" />,

  //   },
  //   {
  //     title: "Mobile App Development",
  //     description: "Start your journey in iOS app development with expert guidance.",
  //     link: "/fullStackMobileAppDevelopment",
  //     icon: <FaMobile className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Python Programming",
  //     description: "Unlock the power of Python programming with E-education.",
  //     link: "/fullStack_WebDevelopment/fullStack-Python-Development",
  //     icon: <FaPython className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Java Programming",
  //     description: "Build a solid foundation in Java programming with an engaging course on E-education.",
  //     link: "/fullStack_WebDevelopment/fullStack-Java-Development",
  //     icon: <FaJava className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Data Science and Analytics",
  //     description: "Dive deep into data science and analytics with a specialized course.",
  //     link: "/data_Science/data-Analatics",
  //     icon: <SiAlwaysdata className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Machine Learning",
  //     description: "Explore machine learning with hands-on Python & R training.",
  //     link: "/data_Science/machine-Learning",
  //     icon: <GrVirtualMachine className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Data Visualization",
  //     description: "Master the art of data visualization with Python and Matplotlib in a course.",
  //     link: "/data_Science/data-visualization",
  //     icon: <AiFillDatabase className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Big Data",
  //     description: "Conquer big data challenges with specialized training on E-education.",
  //     link: "/data_Science/big-data-analysis",
  //     icon: <DiDatabase className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Cybersecurity",
  //     description: "Embark on a journey into cybersecurity fundamentals on E-education.",
  //     link: "/cyber_security",
  //     icon: <SiCyberdefenders className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Ethical Hacking",
  //     description: "Learn the art of ethical hacking through comprehensive training on E-education.",
  //     link: "/ethical_Hacking",
  //     icon: <GiGraduateCap className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Network Security",
  //     description: "Master network security essentials with a comprehensive course on Pluralsight.",
  //     link: "/network_security",
  //     icon: <MdOutlineNetworkCheck className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Cloud Computing",
  //     description: "Embark on a journey into cloud computing with E-education.",
  //     link: "/cloud-testing",
  //     icon: <FaMixcloud className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "IT and Networking",
  //     description: "Master IT and networking essentials with courses on E-education.",
  //     link: "/network_security/advance-network-secuity",
  //     icon: <SiNintendonetwork className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "Database Management",
  //     description: "Unlock the potential of database management with E-education.",
  //     link: "/database",
  //     icon: <FaDatabase className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  //   {
  //     title: "UI/UX Design",
  //     description: "Master the principles of UI/UX design with courses on E-education.",
  //     link: "/ui_ux_design",
  //     icon: <FaComputer className="text-[#f6ac14] w-[40px] h-[40px]" />,
  //   },
  // ];

  const courses = [
    {
      title: "Full Stack Web ",
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
      description:
        "Explore machine learning with hands-on Python & R training .",
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

  return (
    <>
      <Navbar />
      <div className=" px-4 py-4">
        <div className="flex lg:px-10  flex-col-reverse lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left my-4 lg:w-1/2">
            <div className=" lg:pt-10 sm:mx-10 lg:mx-0  pb-4">
              <p className=" md:lg:xl:text-lg text-sm text-left">
                Elevate your career with our curated professional courses
                designed to sharpen your skills and propel you towards success.
                Embrace the flexibility of online learning and seize the
                opportunity to grow, no matter where you are located.
              </p>
              <p className=" md:lg:xl:text-lg text-sm text-left">
                In today's dynamic job market, staying ahead requires continuous
                learning. Our professional courses provide targeted skills and
                knowledge to propel your career forward.
              </p>
            </div>

            <div className="my-4  ">
              <button className="bg-[#0098f1] text-white text-lg    p-4  rounded-lg hover:shadow-lg  font-medium ">
                Explore Course
              </button>
            </div>
          </div>

          <div className="flex justify-center  mb-4 lg:mb-6">
            <img
              src={image1}
              alt="People learning"
              className="md:w-[400px] w-auto h-96   shadow-md"
            />
          </div>
        </div>
        {/* <div className="text-center pb-2 p-6 mb-6">
          <h2 className="text-4xl pb-6 font-bold">
            <span className="text-[#f6ac14]">Explore</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              New{" "}
            </span>
            <span className="text-[#0098f1]">Horizons</span>
          </h2>
          <p className="md:lg:xl:text-xl text-sm">
            Our courses empower tech professionals with specialized knowledge
            and practical skills, ensuring they excel in their careers.
          </p>
          <p className="pb-8 md:lg:xl:text-xl text-sm">
            {" "}
            Dive deep into emerging technologies and master industry-relevant
            tools.
          </p>
          <button className="bg-[#0098F1] text-white text-sm font-medium md:lg:xl:text-2xl md:lg:xl:font-bold md:lg:xl:w-[260px] md:lg:xl:h-[80px]  py-2 px-4 rounded-xl hover:shadow-lg w-48 h-16 mt-4">
            Find a class
          </button>
        </div> */}

        <div className="text-center my-8">
          <h2 className=" text:lg md:text-3xl pt-4 font-bold">
            <span className="text-[#f6ac14]">Highly</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Demanded Skill Enhancement{" "}
            </span>
            <span className="text-[#0098f1]">Courses</span>
          </h2>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-6  ">
          {courses.map((course, index) => (
            <div
              key={index}
              className=" w-full rounded-lx group duration-600 ease-out transform bg-[#0098f1] text-white relative rounded-2xl shadow-md p-4 flex flex-col justify-between transition-transform duration-500 hover:scale-105 before:absolute before:w-1/5 before:h-1/5 before:bg-[#f6ac14] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px] after:absolute after:w-1/5 after:h-1/5 after:bg-[#f6ac14] after:bg-opacity-0 after:transition-all after:duration-500 after:bottom-0 after:left-0 after:rounded-tl-[100%] after:rounded-br-[15px] hover:after:w-full hover:after:h-full hover:after:rounded-[15px]"
            >
              <div className="flex items-center mb-4 z-10">
                <div className="border-2 bg-white bg-opacity-50 rounded-full w-[80px] h-[80px] flex items-center justify-center  ">
                  {course.icon}
                </div>
                <h3 className="text-lg lg:text-lg font-semibold ml-3">
                  {course.title}
                </h3>
              </div>
              <p className="mt-4 z-10 text-base lg:text-lg">
                {course.description}
              </p>
              <div className="flex justify-center z-10 mt-4">
                <Link
                  to={course.link}
                  className="flex bg-white bg-opacity-30 text-white hover:bg-[#0098f1] hover:bg-opacity-80 py-4 px-4 justify-center rounded-md w-full text-lg lg:text-xl font-medium"
                >
                  Explore Now{" "}
                  <MdArrowOutward className="text-white text-2xl  lg:text-3xl ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex justify-center">
          <div
            id="maindiv"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-4 justify-center items-center"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                id="card"
                className="w-full sm:w-[317px] lg:w-[340px] mx-2 h-[360px] lg:h-[360px] rounded-lx p-4 group  duration-600 ease-out transform bg-[#0098f1] text-white relative rounded-2xl shadow-md  flex flex-col justify-between transition-transform duration-500 hover:scale-105 before:absolute before:w-1/5 before:h-1/5 before:bg-[#f6ac14] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px] after:absolute after:w-1/5 after:h-1/5 after:bg-[#f6ac14] after:bg-opacity-0 after:transition-all after:duration-500 after:bottom-0 after:left-0 after:rounded-tl-[100%] after:rounded-br-[15px] hover:after:w-full hover:after:h-full hover:after:rounded-[15px] "
              >
                <div>
                  <div className="rounded-full w-[80px] h-[80px] bg-[#d2efff]  relative flex justify-center items-center mb-4">
                    {/* <div alt={course.title} className="w-[48px] h-[48px]">
                      {course.icon}
                    </div> */}
                    {course.icon}
                  </div>
                  <div className=" relative z-10 ">
                    <p className="text-white  text-[20px] font-bold mt-4">
                      {course.title}
                    </p>
                    <p className="text-white mt-4">{course.description}</p>
                  </div>
                  <div className="flex justify-center items-center mt-10 relative z-10 rounded-lg">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg w-[265px] bg-[#d2efff] group-hover:bg-[#fed19c] h-[70px] px-4 text-2xl group flex justify-center items-center gap-1.5 text-[#0098f1] py-2 transition-colors"
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

      <Footer />
    </>
  );
};

export default Professionals;

// import React from "react";
// import Navbar from "../../../Navbar";
// import Footer from "../../footer/Footer";
// import { MdArrowOutward } from "react-icons/md";
// import { SiSemanticweb } from "react-icons/si";
// import { FaMobile } from "react-icons/fa";
// import { FaPython } from "react-icons/fa6";
// import { FaJava } from "react-icons/fa6";
// import { SiAlwaysdata } from "react-icons/si";
// import { GrVirtualMachine } from "react-icons/gr";
// import { AiFillDatabase } from "react-icons/ai";
// import { DiDatabase } from "react-icons/di";
// import { SiCyberdefenders } from "react-icons/si";
// import { GiGraduateCap } from "react-icons/gi";
// import { MdOutlineNetworkCheck } from "react-icons/md";
// import { FaMixcloud } from "react-icons/fa";
// import { SiNintendonetwork } from "react-icons/si";
// import { FaDatabase } from "react-icons/fa6";
// import { FaComputer } from "react-icons/fa6";
// import image1 from '../../../../assetss/Home/FeaturesAssets/Professionalimage1.png';

// const Professionals = () => {
//   const courses = [
//     {
//       title: "Full Stack Web Development",
//       description: "Master full-stack web development with a comprehensive bootcamp course on E-education.",
//       link: "/fullStack_WebDevelopment",
//       icon: <SiSemanticweb className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Mobile App Development",
//       description: "Start your journey in iOS app development with expert guidance.",
//       link: "/fullStackMobileAppDevelopment",
//       icon: <FaMobile className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Python Programming",
//       description: "Unlock the power of Python programming with E-education.",
//       link: "/fullStack_WebDevelopment/fullStack-Python-Development",
//       icon: <FaPython className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Java Programming",
//       description: "Build a solid foundation in Java programming with an engaging course on E-education.",
//       link: "/fullStack_WebDevelopment/fullStack-Java-Development",
//       icon: <FaJava className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Data Science and Analytics",
//       description: "Dive deep into data science and analytics with a specialized course.",
//       link: "/data_Science/data-Analatics",
//       icon: <SiAlwaysdata className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Machine Learning",
//       description: "Explore machine learning with hands-on Python & R training.",
//       link: "/data_Science/machine-Learning",
//       icon: <GrVirtualMachine className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Data Visualization",
//       description: "Master the art of data visualization with Python and Matplotlib in a course.",
//       link: "/data_Science/data-visualization",
//       icon: <AiFillDatabase className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Big Data",
//       description: "Conquer big data challenges with specialized training on E-education.",
//       link: "/data_Science/big-data-analysis",
//       icon: <DiDatabase className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Cybersecurity",
//       description: "Embark on a journey into cybersecurity fundamentals on E-education.",
//       link: "/cyber_security",
//       icon: <SiCyberdefenders className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Ethical Hacking",
//       description: "Learn the art of ethical hacking through comprehensive training on E-education.",
//       link: "/ethical_Hacking",
//       icon: <GiGraduateCap className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Network Security",
//       description: "Master network security essentials with a comprehensive course on Pluralsight.",
//       link: "/network_security",
//       icon: <MdOutlineNetworkCheck  className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Cloud Computing",
//       description: "Embark on a journey into cloud computing with E-education.",
//       link: "/cloud-testing",
//       icon: <FaMixcloud className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "IT and Networking",
//       description: "Master IT and networking essentials with courses on E-education.",
//       link: "/network_security/advance-network-secuity",
//       icon: <SiNintendonetwork className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Database Management",
//       description: "Unlock the potential of database management with E-education.",
//       link: "/database",
//       icon: <FaDatabase className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "UI/UX Design",
//       description: "Master the principles of UI/UX design with courses on E-education.",
//       link: "/ui_ux_design",
//       icon: <FaComputer className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <div className="bg-gray-100 w-full ">
//         <div className="flex">
//           <div className="flex text-center my-4">
//             <div className="text-xl p-6  min-w-[280px] text-wrap text-left">
//             <p>
//               Elevate your career with our curated professional courses designed
//               to sharpen your skills and propel you towards success. Embrace the
//               flexibility of online learning and seize the opportunity to grow,
//               no matter where you are located.
//               </p>
//             <p>
//             In today's dynamic job market, staying ahead requires continuous
//               learning. Our professional courses provide targeted skills and
//               knowledge to propel your career forward. Experience the
//               convenience and effectiveness of online learning, tailored to suit
//               your busy schedule and professional goals.
//             </p>
//             <div className="flex justify-center p-4  mb-6">
//               <button className="bg-[#0098f1] text-white text-2xl font-bold w-[260px] h-[80px] py-2 px-4 rounded-xl hover:shadow-lg mr-4">Discover Course</button>
//               <button className="bg-[#0098f1] text-white text-2xl font-bold w-[260px] h-[80px] py-2 px-4 rounded-xl hover:shadow-lg">Explore Course</button>
//             </div>
//           </div>
//           <div className="flex justify-center pl-6 mb-6">
//             <img src={image1} alt="People learning" className=" min-w-[580px] h-[482px] shadow-md" />
//           </div>
//           </div>
//         </div>
//         <div className="text-center pb-2 p-6 mb-6">
//           <h2 className="text-4xl pb-6 font-bold">
//             <span className="text-[#f6ac14]">Explore</span>
//             <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent"> New </span>
//             <span className="text-[#0098f1]">Horizons</span>
//           </h2>
//           <p className=" text-xl">
//            Our courses empower tech professionals with specialized knowledge and practical skills, ensuring they excel in their careers.
//           </p>
//           <p className="pb-8 text-xl"> Dive deep into emerging technologies and master industry-relevant tools.</p>
//           <button className="bg-[#0098F1] text-white text-2xl font-bold w-[260px] h-[80px] py-2 px-4 rounded-xl hover:shadow-lg mt-4">Find A Class</button>
//         </div>

//         <div className="text-center my-6">
//           <h2 className="text-4xl pt-4 font-bold">
//             <span className="text-[#f6ac14]">Highly</span>
//             <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent"> Demanded Skill Enhancement </span>
//             <span className="text-[#0098f1]">Course</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-24 py-6 gap-8">
//           {courses.map((course, index) => (
//             <div key={index} className="bg-[#0098f1] text-white  relative   rounded-2xl w-full h-[372px] shadow-md p-6 flex flex-col justify-between  transition-all duration-500 hover:scale-105  before:absolute before:w-1/5 before:h-1/5 before:bg-[#f6ac14] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px]  after:absolute after:w-1/5 after:h-1/5 after:bg-[#f6ac14] after:bg-opacity-0 after:transition-all after:duration-500 after:bottom-0 after:left-0  after:rounded-tl-[100%] after:rounded-br-[15px] hover:after:w-full hover:after:h-full hover:after:rounded-[15px]">
//               <div className="flex z-10 items-center mb-4">
//                 <div className="border-2  bg-white bg-opacity-50 rounded-full w-[100px] h-[100px] flex items-center justify-center">{course.icon}</div>
//                 <h3 className="text-xl font-semibold ml-4">{course.title}</h3>
//               </div>
//               <p className="mt-4 z-10 text-lg">{course.description}</p>
//              <div className=" flex z-10 justify-center  ">
//              <a href={course.link} className="flex bg-[#FFFFFF] bg-opacity-30 text-white hover:bg-[#0098f1] hover:bg-opacity-80 py-2 px-4 justify-center rounded-md w-[252px] h-[54px] text-2xl font-medium mt-4">
//                 Explore Now <MdArrowOutward className="text-white text-3xl" />
//               </a>
//              </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Professionals;

//main
// import React from "react";
// import Navbar from "../../../Navbar";
// import Footer from "../../footer/Footer";
// import { MdArrowOutward } from "react-icons/md";
// import { SiSemanticweb } from "react-icons/si";
// import { FaMobile } from "react-icons/fa";
// import { FaPython } from "react-icons/fa6";
// import { FaJava } from "react-icons/fa6";
// import { SiAlwaysdata } from "react-icons/si";
// import { GrVirtualMachine } from "react-icons/gr";
// import { AiFillDatabase } from "react-icons/ai";
// import { DiDatabase } from "react-icons/di";
// import { SiCyberdefenders } from "react-icons/si";
// import { GiGraduateCap } from "react-icons/gi";
// import { MdOutlineNetworkCheck } from "react-icons/md";
// import { FaMixcloud } from "react-icons/fa";
// import { SiNintendonetwork } from "react-icons/si";
// import { FaDatabase } from "react-icons/fa6";
// import { FaComputer } from "react-icons/fa6";
// import image1 from '../../../../assetss/Home/FeaturesAssets/Professionalimage1.png';

// const Professionals = () => {
//   const courses = [
//     {
//       title: "Full Stack Web Development",
//       description: "Master full-stack web development with a comprehensive bootcamp course on E-education.",
//       link: "/fullStack_WebDevelopment",
//       icon: <SiSemanticweb className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Mobile App Development",
//       description: "Start your journey in iOS app development with expert guidance.",
//       link: "/fullStackMobileAppDevelopment",
//       icon: <FaMobile className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Python Programming",
//       description: "Unlock the power of Python programming with E-education.",
//       link: "/fullStack_WebDevelopment/fullStack-Python-Development",
//       icon: <FaPython className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Java Programming",
//       description: "Build a solid foundation in Java programming with an engaging course on E-education.",
//       link: "/fullStack_WebDevelopment/fullStack-Java-Development",
//       icon: <FaJava className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Data Science and Analytics",
//       description: "Dive deep into data science and analytics with a specialized course.",
//       link: "/data_Science/data-Analatics",
//       icon: <SiAlwaysdata className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Machine Learning",
//       description: "Explore machine learning with hands-on Python & R training.",
//       link: "/data_Science/machine-Learning",
//       icon: <GrVirtualMachine className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Data Visualization",
//       description: "Master the art of data visualization with Python and Matplotlib in a course.",
//       link: "/data_Science/data-visualization",
//       icon: <AiFillDatabase className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Big Data",
//       description: "Conquer big data challenges with specialized training on E-education.",
//       link: "/data_Science/big-data-analysis",
//       icon: <DiDatabase className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Cybersecurity",
//       description: "Embark on a journey into cybersecurity fundamentals on E-education.",
//       link: "/cyber_security",
//       icon: <SiCyberdefenders className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Ethical Hacking",
//       description: "Learn the art of ethical hacking through comprehensive training on E-education.",
//       link: "/ethical_Hacking",
//       icon: <GiGraduateCap className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Network Security",
//       description: "Master network security essentials with a comprehensive course on Pluralsight.",
//       link: "/network_security",
//       icon: <MdOutlineNetworkCheck  className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Cloud Computing",
//       description: "Embark on a journey into cloud computing with E-education.",
//       link: "/cloud-testing",
//       icon: <FaMixcloud className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "IT and Networking",
//       description: "Master IT and networking essentials with courses on E-education.",
//       link: "/network_security/advance-network-secuity",
//       icon: <SiNintendonetwork className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "Database Management",
//       description: "Unlock the potential of database management with E-education.",
//       link: "/database",
//       icon: <FaDatabase className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//     {
//       title: "UI/UX Design",
//       description: "Master the principles of UI/UX design with courses on E-education.",
//       link: "/ui_ux_design",
//       icon: <FaComputer className="text-[#f6ac14] w-[70px] h-[70px]" />,
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <div className="bg-gray-50 ">
//         <div className="flex">
//           <div className="grid text-center my-4">
//             <h1 className="text-xl p-6 max-w-[680px] text-wrap text-left">
//               Elevate your career with our curated professional courses designed
//               to sharpen your skills and propel you towards success. Embrace the
//               flexibility of online learning and seize the opportunity to grow,
//               no matter where you are located.
//               <span className=""></span>
//             <p>
//             In today's dynamic job market, staying ahead requires continuous
//               learning. Our professional courses provide targeted skills and
//               knowledge to propel your career forward. Experience the
//               convenience and effectiveness of online learning, tailored to suit
//               your busy schedule and professional goals.
//             </p>
//             </h1>

//             <div className="flex justify-center  mb-6">
//               <button className="bg-[#0098f1] text-white text-2xl font-bold w-[260px] h-[80px] py-2 px-4 rounded-xl hover:shadow-lg mr-4">Discover Course</button>
//               <button className="bg-[#0098f1] text-white text-2xl font-bold w-[260px] h-[80px] py-2 px-4 rounded-xl hover:shadow-lg">Explore Course</button>
//             </div>
//           </div>

//           <div className="flex justify-center pl-6 mb-6">
//             <img src={image1} alt="People learning" className="w-[834px] h-[482px] shadow-md" />
//           </div>
//         </div>
//         <div className="text-center pb-2 p-6 mb-6">
//           <h2 className="text-4xl pb-6 font-bold">
//             <span className="text-[#f6ac14]">Explore</span>
//             <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent"> New </span>
//             <span className="text-[#0098f1]">Horizons</span>
//           </h2>
//           <p className=" text-xl">
//            Our courses empower tech professionals with specialized knowledge and practical skills, ensuring they excel in their careers.
//           </p>
//           <p className="pb-8 text-xl"> Dive deep into emerging technologies and master industry-relevant tools.</p>
//           <button className="bg-[#0098F1] text-white text-2xl font-bold w-[260px] h-[80px] py-2 px-4 rounded-xl hover:shadow-lg mt-4">Find A Class</button>
//         </div>

//         <div className="text-center my-6">
//           <h2 className="text-4xl pt-4 font-bold">
//             <span className="text-[#f6ac14]">Highly</span>
//             <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent"> Demanded Skill Enhancement </span>
//             <span className="text-[#0098f1]">Course</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-24 py-6 gap-8">
//           {courses.map((course, index) => (
//             <div key={index} className="bg-[#0098f1] text-white  relative   rounded-2xl w-full h-[372px] shadow-md p-6 flex flex-col justify-between  transition-all duration-500 hover:scale-105  before:absolute before:w-1/5 before:h-1/5 before:bg-[#f6ac14] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px]  after:absolute after:w-1/5 after:h-1/5 after:bg-[#f6ac14] after:bg-opacity-0 after:transition-all after:duration-500 after:bottom-0 after:left-0  after:rounded-tl-[100%] after:rounded-br-[15px] hover:after:w-full hover:after:h-full hover:after:rounded-[15px]">
//               <div className="flex z-10 items-center mb-4">
//                 <div className="border-2  bg-white bg-opacity-50 rounded-full w-[100px] h-[100px] flex items-center justify-center">{course.icon}</div>
//                 <h3 className="text-xl font-semibold ml-4">{course.title}</h3>
//               </div>
//               <p className="mt-4 z-10 text-lg">{course.description}</p>
//              <div className=" flex z-10 justify-center  ">
//              <a href={course.link} className="flex bg-[#FFFFFF] bg-opacity-30 text-white hover:bg-[#0098f1] hover:bg-opacity-80 py-2 px-4 justify-center rounded-md w-[252px] h-[54px] text-2xl font-medium mt-4">
//                 Explore Now <MdArrowOutward className="text-white text-3xl" />
//               </a>
//              </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Professionals;

// import React from "react";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import ProfessionalsCourses from "./ProfessionalsCourses";
// import Navbar from "../../../Navbar";
// import ProfessionalsCard from "./ProfessionalsCard";
// import Footer from "../../footer/Footer";
// const Professionals = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <ProfessionalsCard />
//       <div className="container md:mt-32 mt-4">
//         <section className="w-full px-2 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 max-w-6xl mx-auto">
//           <ShuffleGrid />
//           <div className="pl-4">
//             <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
//               Elevate Your Skills
//             </span>
//             <h3 className="text-4xl md:text-6xl font-semibold text-gradient">
//               Explore New Horizons
//             </h3>
//             <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
//               Broaden your expertise with advanced courses and hands-on
//               projects. Stay ahead in the ever-evolving tech landscape.
//             </p>
//             <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 ">
//               Our courses are designed to empower tech professionals with
//               specialized knowledge and practical skills. Dive deep into
//               emerging technologies and master industry-relevant tools.
//             </p>
//             <button className="bg-[#264653] text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
//               Find a class
//             </button>
//           </div>
//         </section>
//       </div>
//       <ProfessionalsCourses />
//       <Footer />
//     </>
//   );
// };

// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const squareData = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: 2,
//     src: "https://images.shiksha.com/mediadata/images/articles/1576227666phpqUHpt1.jpeg",
//   },
//   {
//     id: 3,
//     src: "https://s39613.pcdn.co/wp-content/uploads/2020/12/Teaching-Technology-Courses-to-Online-College-Students.jpg",
//   },
//   {
//     id: 4,
//     src: "https://elearningindustry.com/wp-content/uploads/2022/09/Shutterstock_1639424710.jpg",
//   },
//   {
//     id: 5,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQkHYqcUR4Wekv2r3-067Nf70Vmdj_jlwZs-AgafUBTQCUWxStBODDfj-FcfOiSQXrGA&usqp=CAU",
//   },
//   {
//     id: 6,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cG5Zy8R25mpBWz98vZ9AFKNallo4KhgAHnKs50ny2bRYeaGpqa91K3tvYK5LBL8hFLc&usqp=CAU",
//   },
//   {
//     id: 7,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHesMz3qjo5crLrI3lkp14qy07089L2JLfqvT3WtABblRfsjPb0r789PZcpjDCxPJ_N4&usqp=CAU",
//   },
//   {
//     id: 8,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHA_RKH1ILSgoT6Q3owqkXTT5PakoR6VXq0RJbJmOgxYtSmXfT-n1P8dgdxe9y29ZVnA&usqp=CAU",
//   },
//   {
//     id: 9,
//     src: "https://thumbs.dreamstime.com/b/digital-transformation-technology-strategy-ideas-adoption-business-age-enhancing-global-capabilities-215266548.jpg",
//   },
//   {
//     id: 10,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyfnbD4qtXUy7rgq6wH2etlz9Jso3DBxrVxJuVk2BIWYDbPOnQTsK97NHC2Jztyr2Ca4&usqp=CAU",
//   },
//   {
//     id: 11,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOMn7FKT9M20lLxZ4Q1V-KjL-8ILyJ7v68BVMjHmQALriNipbDZGOBpqhQTAtsig4P00&usqp=CAU",
//   },
//   {
//     id: 12,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx9YhZk799H6IQX8I3roQtsh8Wdzr0C5Q23E9Z-PEog&s",
//   },
//   {
//     id: 13,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2UYSFfcfEVdRJjj6KGImZeAUgwTqf23MNuHSYEQCpw&s",
//   },
//   {
//     id: 14,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefeZWNqGQ5Df56H81h0DwrEHa-AOtJWVTQWOtWWY_7hfCotGOvtLTWucBT7lYb38yrDk&usqp=CAU",
//   },
//   {
//     id: 15,
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmF7ePM7HPu7yD9DY9H7Kbo3M6eDEv6rfJ1kYHQu2nGy1GYSt9-XwEClV6cQZKb436qto&usqp=CAU",
//   },
//   {
//     id: 16,
//     src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww",
//   },
// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 md:mt-32">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

// export default Professionals;
