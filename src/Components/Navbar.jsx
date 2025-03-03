// import React, { useEffect, useState } from "react";
// import { Disclosure } from "@headlessui/react";
// import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import IMG from "../assets/logo/E-educationlogo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, logout } from "../State/Auth/Action";
// import { NotificationAdd } from "@mui/icons-material";
// import { MdKeyboardArrowRight } from "react-icons/md";
// const Navbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false); // State for dropdown
//   const [sidebarDropdown, setSidebarDropdown] = useState(false);
//   const [isBasicCoursesOpen, setIsBasicCoursesOpen] = useState(false);
//   const [isAdvanceCoursesOpen, setIsAdvanceCoursesOpen] = useState(false);
//   const [isPremiumCoursesOpen, setIsPremiumCoursesOpen] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [navigationMenu, setNavigationMenu] = useState(null);
//   const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 64) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const navigation = [{ name: "Explore", current: false }];
//   if (auth.user) {
//     navigation.push(
//       { name: "My Learning", href: "/mylearning", current: false },
//       { name: "Course", href: "/Mycourse", current: false },
//       { name: "About US", href: "/about_us", current: false }
//     );
//   }

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 1024) {
//         setShowDropdown(false);
//       }
//     };

//     // Detect scroll and toggle background color

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("jwt");
//     navigate("/");
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const toggleSidebarDropdown = () => {
//     setSidebarDropdown(!sidebarDropdown); // Toggle the sidebar dropdown
//   };

//   const toggleNavigationMenu = (menuName) => {
//     if (navigationMenuOpen && navigationMenu === menuName) {
//       setNavigationMenuOpen(false);
//       setNavigationMenu(null);
//     } else {
//       setNavigationMenuOpen(true);
//       setNavigationMenu(menuName);
//     }
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown); // Toggle the dropdown
//   };

//   const toggleBasicCourses = () => setIsBasicCoursesOpen(!isBasicCoursesOpen);
//   const toggleAdvanceCourses = () =>
//     setIsAdvanceCoursesOpen(!isAdvanceCoursesOpen);
//   const togglePremiumCourses = () =>
//     setIsPremiumCoursesOpen(!isPremiumCoursesOpen);

//   return (
//     <>
//       <Disclosure
//         as="nav"
//         className={`sticky top-0 z-50 ${
//           isScrolled ? "bg-white " : "bg-white "
//         }`}
//       >
//         {({ open }) => (
//           <>
//             <div
//               className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8${
//                 isScrolled ? "bg-white " : "bg-white "
//               }`}
//             >
//               <div className="relative flex h-16 justify-between items-center">
//                 {/* Mobile Menu Button */}
//                 <div className="absolute inset-y-0 left-0 flex pl-2  mt-5 h-6 w-4 justify-center items-center lg:hidden">
//                   <Disclosure.Button
//                     onClick={toggleSidebar}
//                     className="inline-flex items-center justify-center p-2  text-[#0098F1] hover:bg-[#0098F1] hover:text-white focus:outline-none"
//                   >
//                     {open ? (
//                       <FaBars className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <FaBars className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>

//                 {/* Logo */}
//                 <div className="flex items-center lg:justify-between flex-1 pl-8 justify-center">
//                   <Link to="/" className="flex-shrink-0 ">
//                     <img

//                       className="h-20 w-40 lg:h-20 lg:w-56"
//                       src={IMG}
//                       alt="Logo"
//                     />
//                   </Link>

//                   {/* Desktop Search Bar */}
//                   <div className="hidden lg:flex relative w-full max-w-lg items-center ml-10">
//                     <input
//                       type="text"
//                       placeholder="Want to learn?"
//                       className="w-full border border-zinc-300 h-10 rounded-lg pl-10 pr-12 focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
//                     />
//                     <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={toggleDropdown} // Toggle dropdown on Explore click
//                       className="absolute right-[1px] mr-[1px] p-2 py-[6px] top-1/2 transform -translate-y-1/2 bg-[#0098F1]   rounded-lg text-[#0098F1]  flex items-center space-x-1"
//                     >
//                       <span className="text-white">Explore</span>
//                       {showDropdown ? (
//                         <FaChevronUp className="text-white" />
//                       ) : (
//                         <FaChevronDown className="text-white" />
//                       )}
//                     </button>
//                     {/* Dropdown Menu */}
//                   </div>
//                   {showDropdown && (
//                     <div className=" h-auto  absolute right-20   top-14   justify-center items-center flex">
//                       <div className=" bg-[#0098F1] border-white border-2 rounded-xl  text-white h-auto w-auto   ">
//                         <h3 className="lg:text-xl text-lg text-center p-4 bg-white  text-[#0098F1] w-full font-bold ">
//                           Explore Here Courses List
//                         </h3>
//                         <div className="grid ">
//                           {/* Column 1: Courses */}
//                           <div className="flex  justify-between  ">
//                             <div className="p-4  text-nowrap text-start mx-4 my-2">
//                               <h4 className="font-bold text-white text-start ml-4 mb-2 text-lg">
//                                 Basic
//                               </h4>
//                               <ul className="grid text-[16px] ">
//                                 <li className="py-[2px] ">
//                                   <Link
//                                     className="group   text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/php"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Php
//                                     </span>
//                                   </Link>
//                                 </li>

//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/java"
//                                   >
//                                     <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Java
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/c_c++"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black  ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       C/C++
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/wordpress"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Wordpress
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/javascript"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       JavaScript
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/ui_ux_design"
//                                   >
//                                     <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       UI/UX Design
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className=" py-[2px]">
//                                   <Link
//                                     className="group   transition-all duration-100 ease-in-out"
//                                     to="/fullStack_WebDevelopment/fullStack-Web-Development"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black  ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Web Development
//                                     </span>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>

//                             {/* Column 3: Premium Courses */}
//                             <div className="p-4  text-start text-nowrap  mx-4 my-2">
//                               <h4 className="font-bold text-white mb-2 text-start ml-4 text-lg ">
//                                 Premium
//                               </h4>
//                               <ul className="grid text-[16px] ">
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/cyber_security"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Cyber Security
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/ethical_hacking"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Ethical Hacking
//                                     </span>
//                                   </Link>
//                                 </li>

//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/cloud-computing"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Cloud with AWS
//                                     </span>
//                                   </Link>
//                                 </li>

//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/fullStack_WebDevelopment/fullStack-Devops"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       DevOps Mastery
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/reactjs"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       ReactJs Mastery
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/software_testing"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Software Testing
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/fullStack_WebDevelopment/fullStack-Web-Development"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Full Stack Development
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/blockchain"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Blockchain Development
//                                     </span>
//                                   </Link>
//                                 </li>

//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/data_Science/machine-Learning"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Machine Learning with AI
//                                     </span>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                             {/* Column 2: Advance Courses */}

//                             <div className="p-2 text-lg text-start text-nowrap  mx-4 my-2">
//                               <h4 className="font-bold text-white mb-2 pt-2  text-start ml-4  text-lg ">
//                                 Advance
//                               </h4>
//                               <ul className="grid text-[16px] ">
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/power-bi"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Power BI
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/data_Science"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Data Science
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/fullStack_WebDevelopment/mean-Stack-Developer"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       MEAN Stack
//                                     </span>
//                                   </Link>
//                                 </li>

//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/fullStack_WebDevelopment/fullStack-Java-Development"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Java Mastery
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/erp"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       ERP-Software
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/advancedPhpProgramming"
//                                   >
//                                     <span className="flex pb-[2px] text-white">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Advance PHP
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/network_security"
//                                   >
//                                     <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Network Security
//                                     </span>
//                                   </Link>
//                                 </li>

//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/fullStack_WebDevelopment/full-stack-javascript"
//                                   >
//                                     <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Advance JavaScript
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/masteringWordPressDevelopment"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Mastering Wordpress
//                                     </span>
//                                   </Link>
//                                 </li>
//                                 <li className="py-[2px]">
//                                   <Link
//                                     className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                     to="/fullStackMobileAppDevelopment"
//                                   >
//                                     <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                       <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                       Full Stack Mobile App
//                                     </span>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* for width above 1024 */}

//                 {/* User Action Buttons */}
//                 <div className="hidden  lg:flex items-center ml-2 px-2 space-x-3">
//                   {auth.user && auth.user.firstName ? (
//                     <>
//                       {/* <Link
//                         className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                         to="/mylearning"
//                       >
//                         <span className="block pb-[2px] hover:text-[#0098f1]   text-black   bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                           My Learning
//                         </span>
//                       </Link> */}

//                       <Link
//                         className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                         to="/QuestionForm"
//                       >
//                         <span className="block pb-[2px] hover:text-[#0098f1]   text-black  bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                           Ask Me Later
//                         </span>
//                       </Link>

//                       <Link
//                         className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                         to="/PostFeeds"
//                       >
//                         <span className="block pb-[2px] hover:text-[#0098f1]   text-black   bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                           Feeds
//                         </span>
//                       </Link>
//                       {/* <Link
//                         className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                         to="/mylearning"
//                       >
//                         <span className="block pb-[2px] hover:text-[#0098f1]   text-black   bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
//                           My Learning
//                         </span>
//                       </Link> */}

//                       {/* <Link
//                         to="/QuestionForm"
//                         className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//                       ></Link> */}
//                       <div className="relative  inline-block">
//                         <button
//                           className={`inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
//                             navigationMenu === "getting-started"
//                               ? "border-2 border-[#0098f1]"
//                               : "border-2 border-transparent"
//                           }`}
//                           onClick={() =>
//                             toggleNavigationMenu("getting-started")
//                           }
//                         >
//                           {/* <span className="p-3 w-12 rounded-full bg-blue-400 text-white font-bold text-center cursor-pointer">
//                             {auth.user.firstName[0].toUpperCase()}
//                           </span> */}
//                           <p className=" flex justify-center items-center w-10 h-10 rounded-full bg-[#0098F1]  text-white cursor-pointer text-center font-bold">
//                             {auth.user.firstName[0].toUpperCase()}
//                           </p>

//                           <svg
//                             className={`relative top-[1px] text-[#0098f1] ml-1 h-5 w-5 ease-out duration-300 ${
//                               navigationMenuOpen &&
//                               navigationMenu === "getting-started"
//                                 ? "-rotate-180"
//                                 : ""
//                             }`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             aria-hidden="true"
//                           >
//                             <polyline points="6 9 12 15 18 9"></polyline>
//                           </svg>
//                         </button>

//                         {navigationMenuOpen &&
//                           navigationMenu === "getting-started" && (
//                             <div className="absolute z-10 mt-1 w-48 -ml-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                               <a
//                                 href="/MyCourse"
//                                 className="block mr-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 My Courses
//                               </a>
//                               <a
//                                 href="/Purchases"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Purchases
//                               </a>
//                               <a
//                                 href="/Profile"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Profile
//                               </a>
//                               <a
//                                 href="/Settings"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Settings
//                               </a>
//                               <a
//                                 href="/"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Updates
//                               </a>
//                               <a
//                                 href="/WSpace"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 WorkSpace
//                               </a>
//                               <a
//                                 href="#"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Accomplishments
//                               </a>
//                               <a
//                                 href="#"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                               >
//                                 Help Center
//                               </a>
//                               <a
//                                 href="/login"
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 onClick={handleLogout}
//                               >
//                                 Logout
//                               </a>
//                             </div>
//                           )}
//                       </div>
//                       <NotificationAdd
//                         onMouseOver={() => setShowTooltip(true)}
//                         onMouseOut={() => setShowTooltip(false)}
//                         className="text-[#0098f1] cursor-pointer"
//                       />
//                       {showTooltip && (
//                         <div className="absolute  right-0  z-50  top-16 mt-1 transform  mb-2 px-2 py-1 bg-[#0098f1] text-white text-sm rounded shadow-lg">
//                           Notifications
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <>
//                       <Link to="/trainee" className="text-black text-lg pl-4 ">
//                         Trainee
//                       </Link>
//                       <Link to="/login" className="text-black text-lg ">
//                         Log In
//                       </Link>
//                       <button
//                         onClick={() => navigate("/signup")}
//                         className="px-4 py-2 bg-[#0098F1] text-white rounded-lg"
//                       >
//                         Sign Up
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Tablet & Mobile Sidebar */}
//             {showSidebar && (
//               <div className="lg:hidden fixed  inset-0  z-50 flex">
//                 <div
//                   className="bg-white opacity-50 hidden w-full h-full"
//                   onClick={toggleSidebar}
//                 ></div>
//                 <div className="   bg-white w-80 h-16 shadow-lg">
//                   <div className="flex items-center justify-between px-4 py-3">
//                     <div className="ml-24 h-10">
//                       <Link to="/" className="flex-shrink-0 hidden  ">
//                         <img className="h-10 w-auto" src={IMG} alt="Logo" />
//                       </Link>
//                     </div>
//                     <button
//                       onClick={toggleSidebar}
//                       className="text-[#0098F1] hover:text-[#0098F1] focus:outline-none"
//                     >
//                       <IoCloseSharp className="h-6 w-6" />
//                     </button>
//                   </div>
//                   {/* imp */}
//                   <div className="bg-[#0098f1] pb-36  h-screen overflow-y-scroll px-4">
//                     <button
//                       onClick={toggleSidebarDropdown} // Toggle sidebar dropdown
//                       className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
//                     >
//                       <span className="text-white">Explore</span>
//                       {sidebarDropdown ? (
//                         <FaChevronUp className="text-white" />
//                       ) : (
//                         <FaChevronDown className="text-white" />
//                       )}
//                     </button>
//                     {sidebarDropdown && (
//                       <div className=" ">
//                         <button
//                           onClick={toggleBasicCourses} // Toggle sidebar dropdown
//                           className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
//                         >
//                           <span className="font-bold text-white ">Basic</span>
//                           {isBasicCoursesOpen ? (
//                             <FaChevronUp className="text-white" />
//                           ) : (
//                             <FaChevronDown className="text-white" />
//                           )}
//                         </button>
//                         {isBasicCoursesOpen && (
//                           <div className="  text-nowrap md:text-wrap">
//                             <ul className="grid text-[16px] ">
//                               <li className="py-[2px] ">
//                                 <Link
//                                   className="group   text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/php"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Php
//                                   </span>
//                                 </Link>
//                               </li>

//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/java"
//                                 >
//                                   <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Java
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/c_c++"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black    ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     C/C++
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/wordpress"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Wordpress
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/javascript"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     JavaScript
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/ui_ux_design"
//                                 >
//                                   <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     UI/UX Design
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className=" py-[2px]">
//                                 <Link
//                                   className="group   transition-all duration-100 ease-in-out"
//                                   to="/fullStack_WebDevelopment/fullStack-Web-Development"
//                                 >
//                                   <span className="flex pb-[2px]   text-white hover:text-black  ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Web Development
//                                   </span>
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         )}

//                         {/* Column 2: Advance Courses */}

//                         <button
//                           onClick={toggleAdvanceCourses} // Toggle sidebar dropdown
//                           className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
//                         >
//                           <span className="font-bold text-white">Advance</span>
//                           {isAdvanceCoursesOpen ? (
//                             <FaChevronUp className="text-white" />
//                           ) : (
//                             <FaChevronDown className="text-white" />
//                           )}
//                         </button>
//                         {isAdvanceCoursesOpen && (
//                           <div className="  text-nowrap">
//                             <ul className="grid text-[16px] ">
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/power-bi"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Power BI
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/data_Science"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Data Science
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/fullStack_WebDevelopment/mean-Stack-Developer"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     MEAN Stack
//                                   </span>
//                                 </Link>
//                               </li>

//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/fullStack_WebDevelopment/fullStack-Java-Development"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Java Mastery
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/erp"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     ERP-Software
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/advancedPhpProgramming"
//                                 >
//                                   <span className="flex pb-[2px] text-white">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Advance PHP
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/network_security"
//                                 >
//                                   <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Network Security
//                                   </span>
//                                 </Link>
//                               </li>

//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/fullStack_WebDevelopment/full-stack-javascript"
//                                 >
//                                   <span className=" flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Advance JavaScript
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/masteringWordPressDevelopment"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Mastering Wordpress
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/fullStackMobileAppDevelopment"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Full Stack Mobile App
//                                   </span>
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         )}

//                         {/* Column 3: Premium Courses */}

//                         <button
//                           onClick={togglePremiumCourses} // Toggle sidebar dropdown
//                           className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
//                         >
//                           <span className="font-bold text-white">Premium</span>
//                           {isPremiumCoursesOpen ? (
//                             <FaChevronUp className="text-white" />
//                           ) : (
//                             <FaChevronDown className="text-white" />
//                           )}
//                         </button>
//                         {isPremiumCoursesOpen && (
//                           <div className="  text-nowrap ">
//                             <ul className="grid text-[16px] ">
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/cyber_security"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Cyber Security
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/ethical_hacking"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Ethical Hacking
//                                   </span>
//                                 </Link>
//                               </li>

//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/cloud-computing"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Cloud with AWS
//                                   </span>
//                                 </Link>
//                               </li>

//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/fullStack_WebDevelopment/fullStack-Devops"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     DevOps Mastery
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/reactjs"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     ReactJs Mastery
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/software_testing"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Software Testing
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/fullStack_WebDevelopment/fullStack-Web-Development"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Full Stack Development
//                                   </span>
//                                 </Link>
//                               </li>
//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/blockchain"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Blockchain Development
//                                   </span>
//                                 </Link>
//                               </li>

//                               <li className="py-[2px]">
//                                 <Link
//                                   className="group  text-blue-400 transition-all duration-100 ease-in-out"
//                                   to="/data_Science/machine-Learning"
//                                 >
//                                   <span className="flex pb-[2px]    text-white hover:text-black   ">
//                                     <MdKeyboardArrowRight className="text-[#ff9b26]  mt-1 w-5 h-5 text-center" />{" "}
//                                     Machine Learning with AI
//                                   </span>
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     {/* <button
//                     onClick={handleLogout}
//                     className="block hover:text-gray-700 hover:bg-[#0098F1] text-white p-3 rounded-lg"
//                   >
//                     Logout
//                   </button> */}

//                     {/* width below 1024 */}
//                     <div className="flex-col space-y-4     ml-1 px-2">
//                       {auth.user && auth.user.firstName ? (
//                         <>
//                           <span className="block">
//                             <button
//                               className={`absolute top-1   text-[#0098f1] text-center  inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
//                                 navigationMenu === "getting-started"
//                                   ? "border-2 border-[#0098f1]"
//                                   : "border-2 border-transparent"
//                               }`}
//                               onClick={() =>
//                                 toggleNavigationMenu("getting-started")
//                               }
//                             >
//                               {/* <span className="p-3 w-12 rounded-full bg-blue-400 text-white font-bold text-center cursor-pointer">
//                               {auth.user.firstName[0].toUpperCase()}
//                             </span> */}
//                               <p className=" flex justify-center items-center w-10 h-10 rounded-full text-white  bg-[#0098f1] cursor-pointer text-center font-bold">
//                                 {auth.user.firstName[0].toUpperCase()}
//                               </p>
//                               <svg
//                                 className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${
//                                   navigationMenuOpen &&
//                                   navigationMenu === "getting-started"
//                                     ? "-rotate-180"
//                                     : ""
//                                 }`}
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 aria-hidden="true"
//                               >
//                                 <polyline points="6 9 12 15 18 9"></polyline>
//                               </svg>
//                             </button>
//                           </span>
//                           {navigationMenuOpen &&
//                             navigationMenu === "getting-started" && (
//                               <div className="absolute z-10 top-14 mt-1 w-48  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                 <a
//                                   href="/MyCourse"
//                                   className="block mr-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   My Courses
//                                 </a>
//                                 <a
//                                   href="/Purchases"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   Purchases
//                                 </a>
//                                 <a
//                                   href="/Profile"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   Profile
//                                 </a>
//                                 <a
//                                   href="/Settings"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   Settings
//                                 </a>
//                                 <a
//                                   href="/"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   Updates
//                                 </a>
//                                 <a
//                                   href="/WSpace"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   WorkSpace
//                                 </a>
//                                 <a
//                                   href="#"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   Accomplishments
//                                 </a>
//                                 <a
//                                   href="#"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                 >
//                                   Help Center
//                                 </a>
//                                 <a
//                                   href="/login"
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                                   onClick={handleLogout}
//                                 >
//                                   Logout
//                                 </a>
//                               </div>
//                             )}

//                           <span className="text-white">
//                             Notifications{" "}
//                             {/* <NotificationAdd className="text-white cursor-pointer" /> */}
//                           </span>

//                           <Link
//                             to="/QuestionForm"
//                             className="block hover:text-gray-700 hover:bg-[#0098F1] text-white  rounded-lg"
//                           >
//                             Ask Me Later
//                           </Link>
//                           <Link
//                             to="/PostFeeds"
//                             className="block  hover:text-gray-700 hover:bg-[#0098F1] text-white  rounded-lg"
//                           >
//                             Feeds
//                           </Link>
//                           {/* <Link
//                             to="/QuestionForm"
//                             className="block hover:text-gray-700 hover:bg-[#0098F1] text-white  rounded-lg"
//                           >
//                             Ask Me
//                           </Link> */}
//                         </>
//                       ) : (
//                         <></>
//                       )}
//                     </div>

//                     <div className="w-auto absolute bg-[#0098f1] items-end flex  bottom-0 py-4   px-2 space-x-7">
//                       {auth.user ? (
//                         <>
//                           <div className="w-72   ">
//                             <button
//                               onClick={handleLogout}
//                               className="bg-white p-2 rounded-lg text-[#0098f1]"
//                             >
//                               Logout
//                             </button>
//                           </div>
//                         </>
//                       ) : (
//                         <>
//                           <Link
//                             to="/trainee"
//                             className="text-white text-lg pl-4 "
//                           >
//                             Trainee
//                           </Link>
//                           <Link
//                             to="/login"
//                             className="px-3 py-2 bg-white text-[#0098f1] rounded-lg "
//                           >
//                             Log In
//                           </Link>
//                           <button
//                             onClick={() => navigate("/signup")}
//                             className="px-3 py-2 bg-white text-[#0098f1] rounded-lg"
//                           >
//                             Sign Up
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </Disclosure>
//     </>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import IMG from "../assets/logo/E-educationlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../State/Auth/Action";
import { NotificationAdd } from "@mui/icons-material";
import { MdKeyboardArrowRight } from "react-icons/md";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown
  const [sidebarDropdown, setSidebarDropdown] = useState(false);

  const [showTooltip, setShowTooltip] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState(null);
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [openCategory, setOpenCategory] = useState(null);
  const [query, setQuery] = useState("");
  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigation = [{ name: "Explore", current: false }];
  if (auth.user) {
    navigation.push(
      { name: "My Learning", href: "/mylearning", current: false },
      { name: "Course", href: "/Mycourse", current: false },
      { name: "About US", href: "/about_us", current: false }
    );
  }
  const courses = {
    Basic: [
      { name: "PHP", link: "/php" },
      { name: "Java", link: "/java" },
      { name: "C/C++", link: "/c_c++" },
      { name: "WordPress", link: "/wordpress" },
      { name: "JavaScript", link: "/javascript" },
      { name: "UI/UX Design", link: "/ui_ux_design" },
      {
        name: "Web Development",
        link: "/fullStack_WebDevelopment/fullStack-Web-Development",
      },
    ],
    Premium: [
      { name: "Cyber Security", link: "/cyber_security" },
      { name: "Ethical Hacking", link: "/ethical_hacking" },
      { name: "Cloud with AWS", link: "/cloud-computing" },
      {
        name: "DevOps Mastery",
        link: "/fullStack_WebDevelopment/fullStack-Devops",
      },
      { name: "ReactJs Mastery", link: "/reactjs" },
      { name: "Software Testing", link: "/software_testing" },
      {
        name: "Full Stack Development",
        link: "/fullStack_WebDevelopment/fullStack-Web-Development",
      },
      { name: "Blockchain Development", link: "/blockchain" },
      {
        name: "Machine Learning with AI",
        link: "/data_Science/machine-Learning",
      },
    ],
    Advance: [
      { name: "Power BI", link: "/power-bi" },
      { name: "Data Science", link: "/data_Science" },
      {
        name: "MEAN Stack",
        link: "/fullStack_WebDevelopment/mean-Stack-Developer",
      },
      {
        name: "Java Mastery",
        link: "/fullStack_WebDevelopment/fullStack-Java-Development",
      },
      { name: "ERP Software", link: "/erp" },
      { name: "Advance PHP", link: "/advancedPhpProgramming" },
      { name: "Network Security", link: "/network_security" },
      {
        name: "Advance JavaScript",
        link: "/fullStack_WebDevelopment/full-stack-javascript",
      },
      { name: "Mastering WordPress", link: "/masteringWordPressDevelopment" },
      { name: "Full Stack Mobile App", link: "/fullStackMobileAppDevelopment" },
    ],
  };

  
  
  useEffect(() => {
    if (auth.user && auth.user.role === "customer") {
      getUser(auth.user.id);
    }
  }, [auth.user]);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowDropdown(false);
      }
    };

    // Detect scroll and toggle background color

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleSidebarDropdown = () => {
    setSidebarDropdown(!sidebarDropdown); // Toggle the sidebar dropdown
  };

  const toggleNavigationMenu = (menuName) => {
    if (navigationMenuOpen && navigationMenu === menuName) {
      setNavigationMenuOpen(false);
      setNavigationMenu(null);
    } else {
      setNavigationMenuOpen(true);
      setNavigationMenu(menuName);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown
  };
  const menuItems = [
    { name: "Dashboard", href: "/user/dashboard" },
    
    { name: "Settings", href: "/user/Settings" },
   
    // { name: "Logout", href: "/login", onClick: handleLogout },
  ];

  const allCourses = Object.values(courses).flat();

  const filteredCourses = allCourses.filter((course) =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (link) => {
    window.location.href = link;
    setQuery(""); // Clear input after selection
  };
  return (
    <>
      <Disclosure
        as="nav"
        className={`sticky font-poppins top-0 z-50 ${
          isScrolled ? "bg-white " : "bg-white "
        }`}
      >
        {({ open }) => (
          <>
            <div
              className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8${
                isScrolled ? "bg-white " : "bg-white "
              }`}
            >
              <div className="relative flex h-16 justify-between items-center">
                {/* Mobile Menu Button */}
                <div className="absolute inset-y-0 left-0 flex pl-2  mt-5 h-6 w-4 justify-center items-center lg:hidden">
                  <Disclosure.Button
                    onClick={toggleSidebar}
                    className="inline-flex items-center justify-center p-2  text-[#0098F1] hover:bg-[#0098F1] hover:text-white focus:outline-none"
                  >
                    {open ? (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo */}
                <div className="flex items-center lg:justify-between flex-1 pl-8 justify-center">
                  <Link to="/" className="flex-shrink-0 ">
                    <img
                      className="h-20 w-40 lg:h-20 lg:w-56"
                      src={IMG}
                      alt="Logo"
                    />
                  </Link>

                  {/* Desktop Search Bar */}
                  <div className="hidden  lg:flex relative w-full max-w-lg items-center ml-10">
                    <div className="relative w-full max-w-md mx-auto">
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Want to learn?"
                        className="w-full border border-zinc-300 h-10 rounded-lg pl-4 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
                      />

                      {query &&
                        (filteredCourses.length > 0 ? (
                          <ul className="absolute w-full bg-white bg-opacity-100 border border-zinc-300 rounded-lg shadow-md mt-1 max-h-60 overflow-y-auto">
                            {filteredCourses.map((course, index) => (
                              <li
                                key={index}
                                onClick={() => handleSelect(course.link)}
                                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                              >
                                {course.name}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="absolute w-full bg-white bg-opacity-60 border border-zinc-300 rounded-lg shadow-md mt-1 p-4 text-center text-zinc-500">
                            No results found
                          </div>
                        ))}
                    </div>
                    {/* <button className="absolute left-10 top-1/2 transform -translate-y-1/2 text-zinc-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button> */}
                    <button
                      onClick={toggleDropdown} // Toggle dropdown on Explore click
                      className="absolute right-[1px] lg:mr-[32px] xl:mr-[32px] p-2 py-[6px] top-1/2 transform -translate-y-1/2 bg-[#0098F1]   rounded-lg text-[#0098F1]  flex items-center space-x-1"
                    >
                      <span className="text-white">Explore</span>
                      {showDropdown ? (
                        <FaChevronUp className="text-white" />
                      ) : (
                        <FaChevronDown className="text-white" />
                      )}
                    </button>
                    {/* Dropdown Menu */}
                  </div>
                  {showDropdown && (
                    <div className="h-auto absolute right-20 top-14 justify-center items-center flex">
                      <div className="bg-[#0098F1] border-white border-2 rounded-xl text-white h-auto w-auto">
                        <h3 className="lg:text-xl text-lg text-center p-4 bg-white text-[#0098F1] w-full font-bold">
                          Explore Here Courses List
                        </h3>
                        <div className="flex justify-between">
                          {Object.entries(courses).map(
                            ([category, courseList], index) => (
                              <div
                                key={index}
                                className="p-4 text-nowrap text-start mx-4 my-2"
                              >
                                <h4 className="font-bold text-white text-start ml-4 mb-2 text-lg">
                                  {category}
                                </h4>
                                <ul className="grid text-[16px]">
                                  {courseList.map((course, idx) => (
                                    <li key={idx} className="py-[2px]">
                                      <Link
                                        className="group transition-all duration-100 ease-in-out"
                                        to={course.link}
                                      >
                                        <span className="flex pb-[2px] text-white hover:text-black">
                                          <MdKeyboardArrowRight className="text-[#ff9b26] mt-1 w-5 h-5 text-center" />
                                          {course.name}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* for width above 1024 */}

                {/* User Action Buttons */}
                <div className="hidden  lg:flex items-center ml-2 px-2 space-x-3">
                  {auth.user && auth.user.firstName ? (
                    <>
                      {/* <Link
                        className="group  text-blue-400 transition-all duration-100 ease-in-out"
                        to="/mylearning"
                      >
                        <span className="block pb-[2px] hover:text-[#0098f1]   text-black   bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          My Learning
                        </span>
                      </Link> */}

                      <Link
                        className="group  text-blue-400 transition-all duration-100 ease-in-out"
                        to="/QuestionForm"
                      >
                        <span className="block pb-[2px] hover:text-[#0098f1]   text-black  bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Ask Me Later
                        </span>
                      </Link>

                      <Link
                        className="group  text-blue-400 transition-all duration-100 ease-in-out"
                        to="/PostFeeds"
                      >
                        <span className="block pb-[2px] hover:text-[#0098f1]   text-black   bg-left-bottom ml-1 bg-gradient-to-r from-[#0098f1] to-[#0098f1] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Feeds
                        </span>
                      </Link>

                      <div className="relative  inline-block">
                        <button
                          className={`inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                            navigationMenu === "getting-started"
                              ? "border-2 border-[#0098f1]"
                              : "border-2 border-transparent"
                          }`}
                          onClick={() =>
                            toggleNavigationMenu("getting-started")
                          }
                        >
                          <p className=" flex justify-center items-center w-10 h-10 rounded-full bg-[#0098F1]  text-white cursor-pointer text-center font-bold">
                            {auth.user.firstName[0].toUpperCase()}
                          </p>

                          <svg
                            className={`relative top-[1px] text-[#0098f1] ml-1 h-5 w-5 ease-out duration-300 ${
                              navigationMenuOpen &&
                              navigationMenu === "getting-started"
                                ? "-rotate-180"
                                : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>

                        {navigationMenuOpen &&
                          navigationMenu === "getting-started" && (
                            <div className="absolute z-10 mt-1 w-48 -ml-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {menuItems.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.href}
                                  onClick={item.onClick}
                                  className=" flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                 
                                
                                 <p className="justify-center items-center p-2 text-lg">{item.name}</p>
                                </a>
                              ))}
                             <div 
  onClick={handleLogout}  // ✅ Use `onClick` (not `onclick`)
  className="flex px-4 py-2 border-t-2 border-grey-500 cursor-pointer"
>
  <p className="flex justify-center items-center w-10 h-10 rounded-full bg-[#0098F1] text-white cursor-pointer text-center font-bold">
    {auth.user?.firstName?.[0]?.toUpperCase() || "U"}  {/* ✅ Prevent crash if `auth.user` is null */}
  </p>
  <p className="justify-center items-center p-2 text-lg">Logout</p>
</div>

                            </div>
                          )}
                      </div>
                      <NotificationAdd
                        onMouseOver={() => setShowTooltip(true)}
                        onMouseOut={() => setShowTooltip(false)}
                        className="text-[#0098f1] cursor-pointer"
                      />
                      {showTooltip && (
                        <div className="absolute  right-0  z-50  top-16 mt-1 transform  mb-2 px-2 py-1 bg-[#0098f1] text-white text-sm rounded shadow-lg">
                          Notifications
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <Link to="/trainee" className="text-black text-lg pl-4 ">
                        Trainee
                      </Link>
                      <Link to="/login" className="text-black text-lg ">
                        Log In
                      </Link>
                      <button
                        onClick={() => navigate("/signup")}
                        className="px-4 py-2 bg-[#0098F1] text-white rounded-lg"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Tablet & Mobile Sidebar */}
            {showSidebar && (
              <div className="lg:hidden fixed  inset-0  z-50 flex">
                <div
                  className="bg-white opacity-50 hidden w-full h-full"
                  onClick={toggleSidebar}
                ></div>
                <div className="   bg-white w-80 h-16 shadow-lg">
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="ml-24 h-10">
                      <Link to="/" className="flex-shrink-0 hidden  ">
                        <img className="h-10 w-auto" src={IMG} alt="Logo" />
                      </Link>
                    </div>
                    <button
                      onClick={toggleSidebar}
                      className="text-[#0098F1] hover:text-[#0098F1] focus:outline-none"
                    >
                      <IoCloseSharp className="h-6 w-6" />
                    </button>
                  </div>
                  {/* imp */}
                  <div className="bg-[#0098f1] pb-36  h-screen overflow-y-scroll px-4">
                    <button
                      onClick={toggleSidebarDropdown} // Toggle sidebar dropdown
                      className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
                    >
                      <span className="text-white">Explore</span>
                      {sidebarDropdown ? (
                        <FaChevronUp className="text-white" />
                      ) : (
                        <FaChevronDown className="text-white" />
                      )}
                    </button>
                    {sidebarDropdown && (
                      <div>
                        {Object.keys(courses).map((category) => (
                          <div key={category}>
                            <button
                              onClick={() => toggleCategory(category)}
                              className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-[#0098F1] hover:text-white rounded-lg"
                            >
                              <span className="font-bold text-white">
                                {category}
                              </span>
                              {openCategory === category ? (
                                <FaChevronUp className="text-white" />
                              ) : (
                                <FaChevronDown className="text-white" />
                              )}
                            </button>

                            {openCategory === category && (
                              <ul className="grid text-[16px] text-nowrap md:text-wrap">
                                {courses[category].map((course) => (
                                  <li key={course.link} className="py-[2px]">
                                    <Link
                                      to={course.link}
                                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    >
                                      <span className="flex pb-[2px] text-white hover:text-black">
                                        <MdKeyboardArrowRight className="text-[#ff9b26] mt-1 w-5 h-5 text-center" />
                                        {course.name}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* <button
                    onClick={handleLogout}
                    className="block hover:text-gray-700 hover:bg-[#0098F1] text-white p-3 rounded-lg"
                  >
                    Logout
                  </button> */}

                    {/* width below 1024 */}
                   {/* width below 1024 */}
<div className="flex-col space-y-4 ml-1 px-2">
  {auth.user && auth.user.firstName ? (
    <>
      {/* User Profile Button */}
      <span className="block">
        <button
          className={`inline-flex items-center justify-center h-14 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
            navigationMenu === "getting-started"
              ? "border-2 border-[#0098f1]"
              : "border-2 border-transparent"
          }`}
          onClick={() => toggleNavigationMenu("getting-started")}
        >
          <p className="flex justify-center items-center w-10 h-10 rounded-full text-white bg-[#0098f1] cursor-pointer text-center font-bold">
            {auth.user.firstName[0].toUpperCase()}
          </p>
          <svg
            className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${
              navigationMenuOpen && navigationMenu === "getting-started"
                ? "-rotate-180"
                : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </span>

      {/* Dropdown Menu */}
      {navigationMenuOpen && navigationMenu === "getting-started" && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={item.onClick}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Notifications */}
      <span className="text-white">
        Notifications
      </span>

      {/* Links */}
      <Link
        to="/QuestionForm"
        className="block hover:text-gray-700 hover:bg-[#0098F1] text-white rounded-lg"
      >
        Ask Me Later
      </Link>
      <Link
        to="/PostFeeds"
        className="block hover:text-gray-700 hover:bg-[#0098F1] text-white rounded-lg"
      >
        Feeds
      </Link>
    </>
  ) : (
    // If user is not logged in, show nothing
    <></>
  )}
</div>

                    <div className="w-auto absolute bg-[#0098f1] items-end flex  bottom-0 py-4   px-2 space-x-7">
                      {auth.user ? (
                        <>
                          <div className="w-72   ">
                            <button
                              onClick={handleLogout}
                              className="bg-white p-2 rounded-lg text-[#0098f1]"
                            >
                              Logout
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/trainee"
                            className="text-white text-lg pl-4 "
                          >
                            Trainee
                          </Link>
                          <Link
                            to="/login"
                            className="px-3 py-2 bg-white text-[#0098f1] rounded-lg "
                          >
                            Log In
                          </Link>
                          <button
                            onClick={() => navigate("/signup")}
                            className="px-3 py-2 bg-white text-[#0098f1] rounded-lg"
                          >
                            Sign Up
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;

