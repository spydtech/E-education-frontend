import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import {
  ExpandLess,
  ExpandMore,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { FaCalendarAlt } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import Dashboard from "./userComponents/Dashboard";
import MyLearning from "./userComponents/mylearning/MyLearning";
import CourseGroup from "./userComponents/CourseGroup";
import Assignment from "./userComponents/Assignment";
import Notes_Highlights from "./userComponents/Notes_Highlights";
import UCalendar from "./userComponents/Calendar";
import Settings from "./userComponents/Settings";
import Navbar from "../Navbar";
import { MdSpaceDashboard } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import AssignmentDetais from "./userComponents/AssignmentDetail";
const menu = [
  { name: "Dashboard", path: "/user/dashboard", icon: <MdSpaceDashboard /> },
  { name: "My Learning", path: "/user/mylearning", icon: <MdMenuBook /> },
  {
    name: "Course and Group",
    path: "/user/coursegroup",
    icon: <MdGroup />,
  },
  { name: "Assignment", path: "/user/assignment", icon: <MdAssignment /> },
  {
    name: "Notes/HighLights",
    path: "/user/notes/highlights",
    icon: <FaRegBookmark />,
  },
  { name: "Calendar Sync", path: "/user/calendar", icon: <FaCalendarAlt /> },
  { name: "Settings", path: "/user/settings", icon: <MdOutlineSettings /> },
];

const User = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     dispatch(getUser(jwt));
  //   }
  // }, [dispatch]);

  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    return menu.find((item) => item.path === currentPath)?.name || "Dashboard";
  };

  return (
    <>
      <Navbar />
      <div className="flex relative overflow-hidden h-[90vh]  font-poppins">
        <motion.div
          className={`fixed inset-0 z-40 ${
            isSmallScreen ? "block" : "hidden"
          } md:static md:block bg-[#6AC8FF]  text-white w-64`}
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="mt-10 space-y-4">
            {menu.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  animate={
                    isActive
                      ? { scale: 1.1, fontSize: "1rem" }
                      : { scale: 1, fontSize: "0.8rem" }
                  }
                  transition={{ duration: 0.3 }}
                  className={`p-3 mx-5 flex items-center cursor-pointer rounded-md space-x-2 
                  ${isActive ? "bg-[#0098F1] text-white " : "text-black"}`}
                  onClick={() => navigate(item.path)}
                >
                  {item.icon} <span>{item.name}</span>
                  {item.subMenu &&
                    (openSubMenu === index ? <ExpandLess /> : <ExpandMore />)}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <div className="flex-grow h-[90vh] overflow-y-scroll">
          {/* <Box
          component="header"
          className="p-2 bg-gray-800 text-white text-center"
        >
          <h1>{getCurrentPageName()}</h1>
        </Box> */}
          <Box component="main" className="p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mylearning" element={<MyLearning />} />
              <Route path="/coursegroup" element={<CourseGroup />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/notes/highlights" element={<Notes_Highlights />} />
              <Route path="/calendar" element={<UCalendar />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/assignment/viewassignments" element={<AssignmentDetais />} />
            </Routes>
          </Box>
        </div>
      </div>
    </>
  );
};

export default User;
