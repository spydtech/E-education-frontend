import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import MeetSlider from "../../Meeting/MeetSlider";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useTheme } from "@mui/material";
import { SlCalender } from "react-icons/sl";
import { FaLayerGroup, FaUserAlt } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import ApprovalIcon from "@mui/icons-material/Approval";
import Traineeprofile from "../../../assets/Calender/traineeprofile.png";
import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";
import { IoSettingsSharp } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import Trainee_Home from "../home/Home";
import Navigation from "../TraineAdmin/navigation/navigation";
import TraineUpload from "../UserTask/traineuploads";
import COursesGroup from "../TraineAdmin/CoursesGroup/Tabs";
import UserAccount from "../UsersSection/usernavigation/navigation";
import StatusPage from "../UserTask/StatusPage";
import Calendar from "../TraineeCalendar/Calendar";
import { getTrainee, logout } from "../../../State/Auth/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; 
import ThemeToggle from "./Theamtoggle";
import ProfileSection from "../TraineAdmin/profilesection/ProfileSection";
import TraineeStatus from "../../../Admin/Components/status/TraineeStatus";
import Gcalender from "../../Meeting/Gcalender";
const TraineeDashboard = () => {
  const theme = useTheme();
  const location = useLocation();
  const redirect = location?.state?.redirect;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false); // State to manage logout options visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
  const jwt = localStorage.getItem("jwt");
   const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(redirect ? redirect : "home"); // State to manage active tab
  const [isMeetSidebarOpen, setMeetSidebarOpen] = useState(false);
// const themes = localStorage.getItem("theme");


  const themesBackGroundColor = [
    { value: "light", colorClass: "bg-light-theme" },
    { value: "dark", colorClass: "bg-dark-theme" },
  ];

  
  const [themeBg, setThemeBg] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  
  useEffect(() => {
    const selectedTheme = themesBackGroundColor.find((t) => t.value === themeBg);
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass;
    }
  }, [themeBg]); // Now properly watches themeBg
  

  useEffect(() => {
     if (jwt) {
       dispatch(getTrainee(jwt));
     }
   }, [jwt, dispatch]);
   
   
  
  
 


   

  // Function to toggle the meet sidebar
  const toggleMeetSidebar = () => {
    setMeetSidebarOpen(!isMeetSidebarOpen);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (isSidebarOpen) {
      setSidebarOpen(false); // Close sidebar on mobile after clicking
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/trainee"); // Redirect to the login page
  };

  useEffect(() => {
    if (redirect) setActiveTab(redirect);
  }, [redirect]);

  
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Trainee_Home />;
      case "courses":
        return <COursesGroup />;
      case "calendar":
        return <Calendar />;
      case "reports":
        return <StatusPage />;
      case "approvals":
        return <TraineUpload />;
      case "user":
        return <UserAccount />;
        case "status":
          return <TraineeStatus />;
      case "settings":
        return <Navigation />;
      default:
        return null;
    }
  };
  const themes = localStorage.getItem("theme");
  //${themes==="dark"&&"bg-black"}

  const [profilePic, setProfilePic] = useState(null); // State to store the profile picture

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Create a URL for the uploaded image
    }
  };

  // Function to trigger the file input click
  const handleProfileClick = () => {
    document.getElementById("profileInput").click(); // Trigger the hidden file input
  };
  return (
    <>
      <div
        className={`${
          themesBackGroundColor.find((t) => t.value === theme)?.colorClass || ""
        }  flex h-screen `}
        // className={` ${
        //   themes === "dark" && "bg-black text-white"
        // }  bg-gradient-to-b from-[#4CA1AF] to-[#204349] flex h-screen`}
      >
        {/* Sidebar for larger screens */}
        <div
          className={`${
            themes === "dark" && "bg-black text-white"
          } hidden md:flex flex-col w-64  `}
        >
          <div
            className={` ${
              themes === "dark" && "bg-black"
            } flex items-center  justify-center h-16`}
          >
            <img
              src={Eeducationlogo}
              className="h-24 w-auto"
              alt="E-Education Logo"
            />
          </div>
          <div
            className={` ${
              themes === "dark" && "bg-black"
            } flex flex-col flex-1 overflow-y-auto`}
          >
            <nav className={`  flex-1 px-2 py-4`}>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "home"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("home")}
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "courses"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("courses")}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "calendar"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("calendar")}
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calendar
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "reports"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("reports")}
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "approvals"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("approvals")}
              >
                <ApprovalIcon className="h-6 w-6 mr-2" />
                Approvals
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "user"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("user")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "status"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("status")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                Status
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "settings"
                    ? " border-[#204349]"
                    : "border-transparent "
                }`}
                onClick={() => handleTabClick("settings")}
              >
                <IoSettingsSharp className="h-6 w-6 mr-2" />
                Settings
              </a>
              <div className="pt-10">
              
              </div>
            </nav>
          </div>

          {/* Logout Button */}
          <Link to="/trainelogin">
            <div
              className={` ${
                themes === "dark" && "bg-black"
              } flex items-end justify-center p-4`}
            >
              <button
                className="p-2 border-2  px-20 py-2  rounded-md "
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </Link>

          {/* Trainee Info */}
         
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div
            className={`  flex flex-col md:flex-row items-center  h-20 py-4  px-4`}
          >
            <div className="flex items-center md:justify-start  w-full">
              <button
                className="md:hidden text-gray-500  hover:text-gray-700 focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <div
                className={` flex items-center justify-center md:ml-4 mt-4 md:mt-0`}
              >
                {/* <img src={Traineeprofile} className="h-10 w-10 rounded-full" alt="Trainee Profile" /> */}
                {/* Make profile image clickable */}
                <img
                  src={profilePic || Traineeprofile} // Display dynamic or default profile image
                  className="h-10 w-10 rounded-full cursor-pointer" // Cursor pointer to indicate clickable
                  alt="Profile"
                  onClick={handleProfileClick} // Trigger file input on click
                />
          <h2 className={`pl-4 font-bold text-[#FF9B26]`}>
  {auth?.trainee && auth?.trainee.firstName && auth?.trainee.lastName
    ? `${auth.trainee.firstName} ${auth.trainee.lastName}`
    : "Loading..."}
</h2>



                {/* Hidden file input for image upload */}
                <input
                  type="file"
                  id="profileInput"
                  accept="image/*"
                  className="hidden" // Hide the input
                  onChange={handleImageUpload} // Handle the file upload
                />
              </div>
            </div>

            <div className="items-center hidden md:flex mt-4">
              <SiGooglemeet
                className="h-6 w-6 text-black "
                onClick={toggleMeetSidebar}
              />
            </div>
          </div>

          {/* Render Content based on active tab */}
          <div
            className={`  ${
              themes === "dark"
                ? "bg-black text-white border-white"
                : "text-[#204349]"
            } flex-1 p-4 bg-gray-100`}
          >
            {renderContent()}
          </div>
          {isMeetSidebarOpen && (
            <div className="fixed inset-0 z-40  transition-opacity">
              <div className="fixed inset-y-0 right-0 bg-white w-64 p-4 overflow-y-auto">
               

                <button
                  onClick={toggleMeetSidebar}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
                <Gcalender />
                {/* Add more sidebar content as needed */}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar for small screens */}
        <div
          className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity md:hidden ${
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        >
          <div
            className={`fixed inset-0 bg-white w-64 p-4 overflow-y-auto transition-transform ${
              isSidebarOpen ? "transform-none" : "transform -translate-x-full"
            }`}
          >
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col mt-8">
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "home"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("home")}
              >
                <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                Home
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "courses"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("courses")}
              >
                <FaLayerGroup className="h-6 w-6 mr-2" />
                Courses
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "calendar"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("calendar")}
              >
                <SlCalender className="h-6 w-6 mr-2" />
                Calendar
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "reports"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("reports")}
              >
                <TbReportAnalytics className="h-6 w-6 mr-2" />
                Reports
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "approvals"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("approvals")}
              >
                <ApprovalIcon className="h-6 w-6 mr-2" />
                Approvals
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "user"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("user")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                User
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "status"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("user")}
              >
                <FaUserAlt className="h-6 w-6 mr-2" />
                Status
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 px-4 py-4 w-full rounded-tr-3xl rounded-br-3xl border-l-8 transition-all duration-300 ${
                  activeTab === "settings"
                    ? "bg-white text-[#204349] border-[#204349]"
                    : "border-transparent text-[#204349]"
                }`}
                onClick={() => handleTabClick("settings")}
              >
                <IoSettingsSharp className="h-6 w-6 mr-2" />
                Settings
              </a>
              <Link to="/trainelogin">
                <button
                  className="w-auto mt-4 px-20 py-2 bg-gray-800 text-[#FF9B26] rounded-md hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraineeDashboard;
