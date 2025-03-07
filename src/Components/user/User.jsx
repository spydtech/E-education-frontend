import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Sidebar Toggle Icons
import { MdSpaceDashboard, MdMenuBook, MdAssignment, MdGroup, MdOutlineSettings } from "react-icons/md";
import { FaRegBookmark, FaCalendarAlt } from "react-icons/fa";
import Navbar from "../Navbar";
import UserDashboard from "./userComponents/Dashboard";
import MyLearning from "./userComponents/mylearning/MyLearning";
import CourseGroup from "./userComponents/CourseGroup";
import Assignment from "./userComponents/Assignment";
import Notes_Highlights from "./userComponents/Notes_Highlights";
import UCalendar from "./userComponents/Calendar";
import Settings from "./userComponents/Settings";
import Profile from "../Profile/Profile";
import UserSupport from "./userComponents/UserSupport";
import AssignmentDetais from "./userComponents/AssignmentDetail";

const menu = [
  { name: "Dashboard", path: "/user/dashboard", icon: <MdSpaceDashboard /> },
  { name: "My Learning", path: "/user/mylearning", icon: <MdMenuBook /> },
  { name: "Course & Group", path: "/user/coursegroup", icon: <MdGroup /> },
  { name: "Assignment", path: "/user/assignment", icon: <MdAssignment /> },
  { name: "Notes/Highlights", path: "/user/notes/highlights", icon: <FaRegBookmark /> },
  { name: "Calendar Sync", path: "/user/calendar", icon: <FaCalendarAlt /> },
  { name: "Support", path: "/user/support", icon: <MdOutlineSettings /> },
  { name: "Settings", path: "/user/settings", icon: <MdOutlineSettings /> },
];

const User = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div className="flex relative h-[90vh] font-poppins">
        
        {/* Sidebar Toggle Button (Only for Mobile & Tablet) */}
        {isMobile || isTablet ? (
          <button
            onClick={toggleSidebar}
            className="absolute top-0 left-4 z-50  text-gray-600 p-2 rounded-md"
          >
            {sidebarOpen ? <IoMdClose size={16} /> : <IoMdMenu size={16} />}
          </button>
        ) : null}

        {/* Sidebar Navigation */}
        <motion.div
          className={`fixed top-18 left-0 z-40 h-full w-64 bg-blue-500 text-white md:static md:block transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300`}
        >
          <ul className="mt-10 space-y-4 px-4">
            {menu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  className={`p-3 flex items-center cursor-pointer rounded-md space-x-2 ${
                    isActive ? "bg-blue-700 text-white" : "text-white"
                  }`}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                >
                  {item.icon} <span>{item.name}</span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* Main Content Area */}
        <div
          className={`flex-grow h-[90vh] overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <Box component="main" className="p-4">
            <Routes>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/mylearning" element={<MyLearning />} />
              <Route path="/coursegroup" element={<CourseGroup />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/notes/highlights" element={<Notes_Highlights />} />
              <Route path="/calendar" element={<UCalendar />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/support" element={<UserSupport />} />
              <Route path="/assignment/viewassignments" element={<AssignmentDetais />} />
            </Routes>
          </Box>
        </div>
      </div>
    </>
  );
};

export default User;
