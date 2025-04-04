// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import { SiGooglemeet } from "react-icons/si";
// import MeetSlider from "../../Meeting/MeetSlider";
// import { MdOutlineDashboardCustomize } from "react-icons/md";
// import { useTheme } from "@mui/material";
// import { SlCalender } from "react-icons/sl";
// import { FaLayerGroup, FaUserAlt } from "react-icons/fa";
// import { TbReportAnalytics } from "react-icons/tb";
// import ApprovalIcon from "@mui/icons-material/Approval";
// import Traineeprofile from "../../../assets/Calender/traineeprofile.png";
// import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";
// import { IoSettingsSharp } from "react-icons/io5";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Trainee_Home from "../home/Home";
// import Navigation from "../TraineAdmin/navigation/navigation";
// import NewTaskForm from "../UserTask/NewTaskForm";
// import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
// import UserAccount from "../UsersSection/usernavigation/navigation";
// import StatusPage from "../UserTask/StatusPage";
// import Events from "../TraineeCalendar/Calendar";
// import { getTrainee, logout } from "../../../State/Auth/Action";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"; 
// import ThemeToggle from "./Theamtoggle";
// import ProfileSection from "../TraineAdmin/profilesection/ProfileSection";
// import TraineeStatus from "../../../Admin/Components/status/TraineeStatus";
// import Gcalender from "../../Meeting/Gcalender";
// const TraineeDashboard = () => {
//   const theme = useTheme();
//   const location = useLocation();
//   const redirect = location?.state?.redirect;
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [isLogoutOpen, setLogoutOpen] = useState(false); // State to manage logout options visibility
//   const [isSidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
//   const jwt = localStorage.getItem("jwt");
//    const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState(redirect ? redirect : "home"); // State to manage active tab
//   const [isMeetSidebarOpen, setMeetSidebarOpen] = useState(false);
// // const themes = localStorage.getItem("theme");


//   const themesBackGroundColor = [
//     { value: "light", colorClass: "bg-light-theme" },
//     { value: "dark", colorClass: "bg-dark-theme" },
//   ];

  
//   const [themeBg, setThemeBg] = useState(() => {
//     return localStorage.getItem("theme") || "light";
//   });
  
//   useEffect(() => {
//     const selectedTheme = themesBackGroundColor.find((t) => t.value === themeBg);
//     if (selectedTheme) {
//       document.body.className = selectedTheme.colorClass;
//     }
//   }, [themeBg]); // Now properly watches themeBg
  

//   useEffect(() => {
//      if (jwt) {
//        dispatch(getTrainee(jwt));
//      }
//    }, [jwt, dispatch]);
   
   
  
  
 


   

//   // Function to toggle the meet sidebar
//   const toggleMeetSidebar = () => {
//     setMeetSidebarOpen(!isMeetSidebarOpen);
//   };
//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
//   };

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//     if (isSidebarOpen) {
//       setSidebarOpen(false); // Close sidebar on mobile after clicking
//     }
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("jwt");
//     navigate("/trainee"); // Redirect to the login page
//   };

//   useEffect(() => {
//     if (redirect) setActiveTab(redirect);
//   }, [redirect]);

  
//   const renderContent = () => {
//     switch (activeTab) {
//       case "home":
//         return <Trainee_Home />;
//       case "courses":
//         return <COursesGroup />;
//       case "calendar":
//         return <Events />;
//       case "reports":
//         return <StatusPage />;
//       case "approvals":
//         return <NewTaskForm />;
//       case "user":
//         return <UserAccount />;
//         case "status":
//           return <TraineeStatus />;
//       case "settings":
//         return <Navigation />;
//       default:
//         return null;
//     }
//   };
//   const themes = localStorage.getItem("theme");
//   //${themes==="dark"&&"bg-black"}

//   const [profilePic, setProfilePic] = useState(null); // State to store the profile picture

//   // Function to handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfilePic(URL.createObjectURL(file)); // Create a URL for the uploaded image
//     }
//   };

//   // Function to trigger the file input click
//   const handleProfileClick = () => {
//     document.getElementById("profileInput").click(); // Trigger the hidden file input
//   };
//   return (
//     <>
//       <div
//         className={`${
//           themesBackGroundColor.find((t) => t.value === theme)?.colorClass || ""
//         }  flex h-screen `}
//         // className={` ${
//         //   themes === "dark" && "bg-black text-white"
//         // }  bg-gradient-to-b from-[#4CA1AF] to-[#204349] flex h-screen`}
//       >
//         {/* Sidebar for larger screens */}
//         <div
//           className={`${
//             themes === "dark" && "bg-black text-white"
//           } hidden md:flex flex-col w-64  `}
//         >
//           <div
//             className={` ${
//               themes === "dark" && "bg-black"
//             } flex items-center  justify-center h-16`}
//           >
//             <img
//               src={Eeducationlogo}
//               className="h-24 w-auto"
//               alt="E-Education Logo"
//             />
//           </div>
//           <div
//             className={` ${
//               themes === "dark" && "bg-black"
//             } flex flex-col flex-1 overflow-y-auto`}
//           >
//             <nav className={`  flex-1 px-2 py-4`}>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "home"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("home")}
//               >
//                 <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "courses"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("courses")}
//               >
//                 <FaLayerGroup className="h-6 w-6 mr-2" />
//                 Courses
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "calendar"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("calendar")}
//               >
//                 <SlCalender className="h-6 w-6 mr-2" />
//                 Calendar
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "reports"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("reports")}
//               >
//                 <TbReportAnalytics className="h-6 w-6 mr-2" />
//                 Reports
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "approvals"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("approvals")}
//               >
//                 <ApprovalIcon className="h-6 w-6 mr-2" />
//                 Approvals
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "user"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("user")}
//               >
//                 <FaUserAlt className="h-6 w-6 mr-2" />
//                 User
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "status"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("status")}
//               >
//                 <FaUserAlt className="h-6 w-6 mr-2" />
//                 Status
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "settings"
//                     ? " border-[#204349]"
//                     : "border-transparent "
//                 }`}
//                 onClick={() => handleTabClick("settings")}
//               >
//                 <IoSettingsSharp className="h-6 w-6 mr-2" />
//                 Settings
//               </a>
//               <div className="pt-10">
              
//               </div>
//             </nav>
//           </div>

//           {/* Logout Button */}
//           <Link to="/trainelogin">
//             <div
//               className={` ${
//                 themes === "dark" && "bg-black"
//               } flex items-end justify-center p-4`}
//             >
//               <button
//                 className="p-2 border-2  px-20 py-2  rounded-md "
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           </Link>

//           {/* Trainee Info */}
         
//         </div>

//         <div className="flex flex-col flex-1 overflow-y-auto">
//           <div
//             className={`  flex flex-col md:flex-row items-center  h-20 py-4  px-4`}
//           >
//             <div className="flex items-center md:justify-start  w-full">
//               <button
//                 className="md:hidden text-gray-500  hover:text-gray-700 focus:outline-none"
//                 onClick={toggleSidebar}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={` flex items-center justify-center md:ml-4 mt-4 md:mt-0`}
//               >
//                 {/* <img src={Traineeprofile} className="h-10 w-10 rounded-full" alt="Trainee Profile" /> */}
//                 {/* Make profile image clickable */}
//                 <img
//                   src={profilePic || Traineeprofile} // Display dynamic or default profile image
//                   className="h-10 w-10 rounded-full cursor-pointer" // Cursor pointer to indicate clickable
//                   alt="Profile"
//                   onClick={handleProfileClick} // Trigger file input on click
//                 />
//           <h2 className={`pl-4 font-bold text-[#FF9B26]`}>
//   {auth?.trainee && auth?.trainee.firstName && auth?.trainee.lastName
//     ? `${auth.trainee.firstName} ${auth.trainee.lastName}`
//     : "Loading..."}
// </h2>



//                 {/* Hidden file input for image upload */}
//                 <input
//                   type="file"
//                   id="profileInput"
//                   accept="image/*"
//                   className="hidden" // Hide the input
//                   onChange={handleImageUpload} // Handle the file upload
//                 />
//               </div>
//             </div>

//             <div className="items-center hidden md:flex mt-4">
//               <SiGooglemeet
//                 className="h-6 w-6 text-black "
//                 onClick={toggleMeetSidebar}
//               />
//             </div>
//           </div>

//           {/* Render Content based on active tab */}
//           <div
//             className={`  ${
//               themes === "dark"
//                 ? "bg-black text-white border-white"
//                 : "text-[#204349]"
//             } flex-1 p-4 bg-gray-100`}
//           >
//             {renderContent()}
//           </div>
//           {isMeetSidebarOpen && (
//             <div className="fixed inset-0 z-40  transition-opacity">
//               <div className="fixed inset-y-0 right-0 bg-white w-64 p-4 overflow-y-auto">
               

//                 <button
//                   onClick={toggleMeetSidebar}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   Close
//                 </button>
//                 <Gcalender />
//                 {/* Add more sidebar content as needed */}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Sidebar for small screens */}
//         <div
//           className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity md:hidden ${
//             isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//           aria-hidden="true"
//         >
//           <div
//             className={`fixed inset-0 bg-white w-64 p-4 overflow-y-auto transition-transform ${
//               isSidebarOpen ? "transform-none" : "transform -translate-x-full"
//             }`}
//           >
//             <button
//               type="button"
//               className="text-gray-500 hover:text-gray-700"
//               onClick={toggleSidebar}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <div className="flex flex-col mt-8">
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "home"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("home")}
//               >
//                 <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "courses"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("courses")}
//               >
//                 <FaLayerGroup className="h-6 w-6 mr-2" />
//                 Courses
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "calendar"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("calendar")}
//               >
//                 <SlCalender className="h-6 w-6 mr-2" />
//                 Calendar
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "reports"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("reports")}
//               >
//                 <TbReportAnalytics className="h-6 w-6 mr-2" />
//                 Reports
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "approvals"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("approvals")}
//               >
//                 <ApprovalIcon className="h-6 w-6 mr-2" />
//                 Approvals
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "user"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("user")}
//               >
//                 <FaUserAlt className="h-6 w-6 mr-2" />
//                 User
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "status"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("user")}
//               >
//                 <FaUserAlt className="h-6 w-6 mr-2" />
//                 Status
//               </a>
//               <a
//                 href="#"
//                 className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
//                   activeTab === "settings"
//                     ? "bg-white text-[#204349] border-[#204349]"
//                     : "border-transparent text-[#204349]"
//                 }`}
//                 onClick={() => handleTabClick("settings")}
//               >
//                 <IoSettingsSharp className="h-6 w-6 mr-2" />
//                 Settings
//               </a>
//               <Link to="/trainelogin">
//                 <button
//                   className="w-auto mt-4 px-20 py-2 bg-gray-800 text-[#FF9B26] rounded-md hover:bg-gray-700"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TraineeDashboard;





import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Trainee_Home from "../home/Home";
import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
import Events from "../TraineeCalendar/Calendar";
import StatusPage from "../UserTask/StatusPage";
import NewTaskForm from "../UserTask/NewTaskForm";
import UserAccount from "../UsersSection/usernavigation/navigation";
import TraineeStatus from "../../../Admin/Components/status/TraineeStatus";
import Navigation from "../TraineAdmin/navigation/navigation";
import Gcalender from "../../Meeting/Gcalender";
import { getTrainee, logout } from "../../../State/Auth/Action";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { TbReportAnalytics } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { TbLockAccess, TbReport } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FaLayerGroup, FaUserAlt } from "react-icons/fa";
import ApprovalIcon from "@mui/icons-material/Approval";
import { IoSettingsSharp } from "react-icons/io5";
import Traineeprofile from "../../../assets/Calender/traineeprofile.png";
import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";
import AssignmentOverview from "../UserTask/AssignmentOverview";
import TraineeSettings from "../traineesettings/TraineeSettings "
import VideoList from "../uploadSessions/VideoList";
import VideoUploadForm from "../uploadSessions/videosData";
import VideoStatus from "../uploadSessions/VideoStatus";

const themesBackGroundColor = [
  { value: "light", colorClass: "bg-light-theme" },
  { value: "dark", colorClass: "bg-dark-theme" },
];

const menu = [
  {
    name: "Dashboard",
    path: "/traineedashbord",
    icon: <DashboardIcon className="w-6 h-6 mr-2" />,
  },
  {
    name: "Courses Group",
    path: "/traineedashbord/courses",
    icon: <FaLayerGroup className="w-6 h-6 mr-2" />,
  },
  {
    name: "Calendars",
    path: "/traineedashbord/calendar",
    icon: <SlCalender className="w-6 h-6 mr-2" />,
  },
  {
    name: "Submission Overview",
    path: "/traineedashbord/reports",
    icon: <TbReportAnalytics className="w-6 h-6 mr-2" />,
  },
  {
    name: "Task panel",
    path: "/traineedashbord/approvals",
    icon: <ApprovalIcon className="w-6 h-6 mr-2" />,
  },
  {
    name: "Upload Session",
    path: "/traineedashbord/uploadsession",
    icon: <FaUserAlt className="w-6 h-6 mr-2" />,
  },
  {
    name: "Status",
    path: "/traineedashbord/status",
    icon: <GrStatusGood className="w-6 h-6 mr-2" />,
  },
  {
    name: "Settings",
    path: "/traineedashbord/settings",
    icon: <IoSettingsSharp className="w-6 h-6 mr-2" />,
  },
];

const TraineeDashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const drawerWidth = 235;
  const themes = localStorage.getItem("theme");
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  const [themeBg, setThemeBg] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (jwt) {
      dispatch(getTrainee(jwt));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    const selectedTheme = themesBackGroundColor.find((t) => t.value === themeBg);
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass;
    }
  }, [themeBg]);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSidebar = () => {
    setSideBarVisible(false);
  };

  
  // const handleLogout = () => {
  //   dispatch(logout());
  //   localStorage.removeItem("jwt");
  //   navigate("/trainelogin"); // Redirect to the login page
  // };

  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    const menuItem = menu.find((item) => item.path === currentPath);
    return menuItem ? menuItem.name : "Home";
  };

  const drawer = (
    <Box
      sx={{
        overflow: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: drawerWidth,
      }}
      className={`${
        themesBackGroundColor.find((t) => t.value === theme)?.colorClass || ""
      } max-w-46 lg:block bg-[#006666] text-white justify-center items-center font-poppins`}
    >
      <div className="py-4 flex relative">
        <div className="pl-2">
          <img className="h-[78px] w-auto" src={Eeducationlogo} alt="Logo" />
        </div>
      </div>

      {/* <div className="p-2">
        <div className="flex items-center justify-center mb-4">
          <div className="w-[60px] h-[60px] rounded-full bg-white shadow-lg cursor-pointer">
            {profilePic ? (
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={profilePic}
                alt="Profile"
              />
            ) : (
              <p>No Photo</p>
            )}
          </div>
          <h1 className="pl-2">
            {auth.trainee
              ? `${auth.trainee.firstName} ${auth.trainee.lastName}`
              : "Loading..."}
          </h1>
        </div>
      </div> */}

      <div className="flex-grow justify-center items-center text-center">
        <ul>
          {menu.map((item, index) => (
            <li key={item.name} className="relative">
              <button
                onClick={() => {
                  if (item.subMenu) {
                    toggleSubMenu(index);
                  } else {
                    navigate(item.path);
                  }
                }}
                className="flex items-center  py-3 px-2 hover:bg-[#FF9B26] hover:text-white rounded hover:bg-opacity-80 w-[200px] border-transparent transition-all duration-300"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
                {item.subMenu && (
                  <span className="ml-auto">
                    {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                  </span>
                )}
              </button>
              {item.subMenu && openSubMenu === index && (
                <ul>
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.name} className="relative">
                      <button
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center space-x-2 px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80 border-l-8 border-transparent hover:border-[#001510] transition-all duration-300"
                      >
                        <span className="text-sm pl-8">{subItem.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="px-4 py-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 w-full bg-blue-500 transition-all duration-300 rounded-md"
        >
          Logout
        </button>
      </div> */}
    </Box>
  );

  return (
    <div className="flex h-screen relative font-poppins ">
      {(isSmallScreen ? sideBarVisible : true) && (
        <div
          className={`fixed   inset-0 z-40 ${
            sideBarVisible || !isSmallScreen ? "block" : "hidden"
          } md:static md:block`}
          style={{ width: drawerWidth }}
        >
          {drawer}
        </div>
      )}

      <div className="flex-grow h-screen overflow-auto">
        <Box
          component="header"
          className={`p-2 flex items-center justify-center bg-[#006666] text-white space-x-[60%]`}
        >
          <h1 className="">{getCurrentPageName()}</h1>

          {!isSmallScreen && (
            <div className="flex items-center justify-center px-4 space-x-4">
              <div className="flex items-center justify-end space-x-10 ml-auto">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7521 1.914C14.1918 2.68512 13.852 3.59423 13.7692 4.5438C13.6864 5.49337 13.8636 6.44758 14.282 7.30406C14.7003 8.16054 15.3439 8.88697 16.1437 9.40543C16.9436 9.92389 17.8695 10.2148 18.8221 10.247V10.258C18.8371 10.456 18.8521 10.659 18.8721 10.855C19.1091 13.102 19.6491 14.645 20.1681 15.658C20.5131 16.333 20.8521 16.781 21.0921 17.052C21.1974 17.1715 21.311 17.2834 21.4321 17.387L21.4421 17.393C21.5704 17.4861 21.6659 17.6175 21.7149 17.7683C21.7639 17.9191 21.7638 18.0815 21.7147 18.2323C21.6656 18.383 21.57 18.5143 21.4416 18.6074C21.3132 18.7004 21.1586 18.7503 21.0001 18.75H3.00009C2.84189 18.7498 2.6878 18.6996 2.55986 18.6066C2.43192 18.5135 2.33667 18.3824 2.28775 18.232C2.23882 18.0815 2.23872 17.9195 2.28745 17.769C2.33619 17.6184 2.43127 17.4872 2.55909 17.394L2.56709 17.387L2.63109 17.333C2.69109 17.279 2.78809 17.188 2.90809 17.052C3.14809 16.782 3.48709 16.334 3.83209 15.659C4.52209 14.31 5.25009 12.03 5.25009 8.4C5.25009 6.519 5.95009 4.706 7.21009 3.362C8.47209 2.016 10.1941 1.25 12.0001 1.25C12.3828 1.25 12.7604 1.28367 13.1331 1.351C13.3711 1.394 14.1511 1.637 14.7521 1.914Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.25 5C15.25 4.00544 15.6451 3.05161 16.3484 2.34835C17.0516 1.64509 18.0055 1.25 19 1.25C19.9946 1.25 20.9484 1.64509 21.6517 2.34835C22.3549 3.05161 22.75 4.00544 22.75 5C22.75 5.99456 22.3549 6.94839 21.6517 7.65165C20.9484 8.35491 19.9946 8.75 19 8.75C18.0055 8.75 17.0516 8.35491 16.3484 7.65165C15.6451 6.94839 15.25 5.99456 15.25 5ZM9.89404 20.351C9.97926 20.3016 10.0734 20.2695 10.171 20.2565C10.2687 20.2435 10.3679 20.2498 10.4631 20.2752C10.5583 20.3005 10.6475 20.3444 10.7258 20.4042C10.804 20.4641 10.8697 20.5388 10.919 20.624C11.0289 20.8133 11.1867 20.9704 11.3764 21.0796C11.5661 21.1889 11.7811 21.2464 12 21.2464C12.2189 21.2464 12.434 21.1889 12.6237 21.0796C12.8134 20.9704 12.9711 20.8133 13.081 20.624C13.1305 20.5388 13.1962 20.4641 13.2745 20.4043C13.3528 20.3445 13.4421 20.3007 13.5373 20.2754C13.6326 20.2501 13.7319 20.2438 13.8295 20.2568C13.9272 20.2699 14.0213 20.3021 14.1065 20.3515C14.1918 20.4009 14.2664 20.4667 14.3262 20.545C14.3861 20.6233 14.4299 20.7126 14.4552 20.8078C14.4805 20.903 14.4868 21.0023 14.4737 21.1C14.4607 21.1976 14.4285 21.2918 14.379 21.377C14.1373 21.7938 13.7903 22.1399 13.3728 22.3804C12.9553 22.6209 12.4819 22.7476 12 22.7476C11.5182 22.7476 11.0448 22.6209 10.6273 22.3804C10.2097 22.1399 9.86274 21.7938 9.62104 21.377C9.5715 21.2917 9.53926 21.1975 9.52617 21.0998C9.51308 21.002 9.51939 20.9027 9.54475 20.8074C9.57011 20.7121 9.61401 20.6227 9.67394 20.5444C9.73388 20.4661 9.80867 20.4004 9.89404 20.351Z"
                    fill="white"
                  />
                  <circle cx="19" cy="5" r="4" fill="#E00606" />
                </svg>

                <div className="flex items-center justify-end space-x-2">
                  {profilePic ? (
                    <img
                      className="w-[60px] h-[60px] rounded-full object-cover"
                      src={profilePic}
                      alt="Profile"
                    />
                  ) : (
                    <p>No Photo</p>
                  )}

                  <h3>
                    {auth.trainee
                      ? `${auth.trainee.firstName} ${auth.trainee.lastName}`
                      : "Loading..."}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </Box>

        <Routes>
          <Route path="/" element={<Trainee_Home />} />
          <Route path="/courses" element={<COursesGroup />} />
          <Route path="/calendar" element={<Events />} />
          <Route path="/reports" element={<StatusPage />} />
          <Route path="/approvals" element={<NewTaskForm />} />
          <Route path="/user" element={<UserAccount />} />
          <Route path="/status" element={<TraineeStatus />} />
          {/* <Route path="/settings" element={<Navigation />} /> */}
          <Route path="/uploadsession" element={<VideoList />} />
          <Route path="/video-status/:id" element={<VideoStatus />} />
          <Route path="/upload-data" element={<VideoUploadForm />} />
          <Route path="/settings" element={<TraineeSettings />} />
          <Route path="/assignmentoverview/:id" element={<AssignmentOverview />} />

        </Routes>
      </div>
    </div>
  );
};

export default TraineeDashboard;




