import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AdminDashBoard from "./AdminDashBoard";
import Orders from "../Views/Orders";
import PaymentDashboard from "./pymentData/MainDashBoard";
import SealsReports from "./Reports/TableforAdmin";
import CreateGroup from "../Views/FilterUsers";
import ExistingGroup from "../Views/TraineeCourses";
import AccessField from "./AccessField";
import RegisterEmployee from "./Register/RegisterEmployee";
import RegisterTrainee from "./Register/RegisterTraniee";
import Meeting from "./Meet/Meeting";
import ThemeToggle from "../../Components/trainee/TraineeDashboard/Theamtoggle";
import IMG from "../../assets/logo/E-educationlogo.png";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { GrStatusGood } from "react-icons/gr";
import { TbLockAccess, TbReport } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { getUser, logout } from "../../State/Auth/Action";
import AdminSettings from "./adminsettings/AdminSettings ";
import EmployeeTable from "./Staffing/EmployeeTable";
import TraineeTable121 from "./Staffing/TraineeTable121";
import EmployeeStatus from "./status/EmployeeStatus";
import { useLocation } from "react-router-dom";
import TraineeStatus from "./status/TraineeStatus";

const themesBackGroundColor = [
  { value: "light", colorClass: "bg-light-theme" },
  { value: "dark", colorClass: "bg-dark-theme" },
];

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardIcon className="w-2 h-2 mr-2" />,
  },
  {
    name: "Access Field",
    path: "/admin/accessField",
    icon: <TbLockAccess className="w-6 h-6 mr-2" />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <UsersIcon className="w-6 h-6 mr-2" />,
    subMenu: [
      { name: "Create Group", path: "/admin/users/create-group" },
      { name: "Go to Existing Group", path: "/admin/users/existing-group" },
    ],
  },
  {
    name: "Payment Data",
    path: "/admin/payment-data",
    icon: <MdOutlinePayment className="w-6 h-6 mr-2" />,
  },
  {
    name: "Sales Report",
    path: "/admin/sales-report",
    icon: <TbReport className="w-6 h-6 mr-2" />,
  },
  {
    name: "Meet",
    path: "/admin/meeting",
    icon: <SiGooglemeet className="w-5 h-5 mr-3" />,
  },
  {
    name: "Stoffing",
    path: "/admin/stoping",
    icon: <TbReport className="w-6 h-6 mr-2" />,
    subMenu: [
      { name: "TraineeTable",
         path: "/admin/trainee-table" },
      { name: "EmployeeTable",
        path: "/admin/employee-table", },
    ],
  },
  {
    name: "Status",
    path: "/admin/status",
    icon: <GrStatusGood className="w-6 h-6 mr-2" />,
    subMenu: [
      { name: "Trainee", path: "/admin/status/trainee" },
      { name: "Employee", path: "/admin/status/employee" },
    ],
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <SettingsIcon className="w-6 h-6 mr-2" />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  // const [adminName, setAdminName] = useState("Admin Name");
  const [profilePic, setProfilePic] = useState(null);

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const drawerWidth = 235;
  const themes = localStorage.getItem("theme");
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();
  ///////////////////////////////////////////
  const [themeBg, setThemeBg] = useState(() => {
    // Get the theme from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });
  //////////////////////////////////////////////
  // Fetch admin name and image
  useEffect(() => {
    if (jwt) {
        dispatch(getUser(jwt));
    }
}, [jwt, dispatch]);


// useEffect(() => {
//   // Apply the theme on mount
//   const selectedTheme = themesBackGroundColor.find((t) => t.value === theme);
//   if (selectedTheme) {
//     document.body.className = selectedTheme.colorClass;
//   }
// }, [themeBg]);
 
 const [formData, setFormData] = useState({});
 useEffect(() => {
   const fetchUserProfile = async () => {
     try {
       const profilePhotoResponse = await axios.get(`http://localhost:8080/api/users/${auth.user?.email}/profile-photo`, {
         responseType: 'arraybuffer',  // Ensures we get the binary data for the image
         headers: {
           Authorization: `Bearer ${jwt}`,
         },
       });

       const profilePhotoBlob = new Blob([profilePhotoResponse.data], { type: 'image/jpeg' });
       const profilePhotoUrl = URL.createObjectURL(profilePhotoBlob);
       setProfilePic(profilePhotoUrl); // Directly set the image URL
     } catch (error) {
       console.error("Error fetching user profile data:", error);
     }
   };

   fetchUserProfile();
 }, [jwt, auth.user?.email]);



  // bg theme /////////////////////////////////
  useEffect(() => {
    // Apply the theme on mount
    const selectedTheme = themesBackGroundColor.find((t) => t.value === theme);
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass;
    }
  }, [themeBg]);

  ///////////////////////////////////////
  console.log("User Data:", auth.user);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSidebar = () => {
    setSideBarVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/admin_login");
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
      // className={` ${
      //   themes === "dark"
      //     ? "bg-black text-white"
      //     : "text-white bg-gradient-to-b from-[#001510] to-[#00BF8F]"
      // } max-w-46 lg:block border-r-2 border-black  `}
      className={`${
        themesBackGroundColor.find((t) => t.value === theme)?.colorClass || ""
      }   max-w-46 lg:block border-r-4 border-black `}
    >
      {/* Sidebar Logo */}
      <div className="py-4 flex relative">
        <div className="pl-2">
          <img className="h-[78px] w-auto" src={IMG} alt="Logo" />
        </div>
        {isSmallScreen && (
          <button className="absolute top-2 right-2" onClick={closeSidebar}>
            <IoCloseCircle className="text-3xl text-white" />
          </button>
        )}
      </div>

      {/* Sidebar Admin Info */}
      <div className="p-2">
        <div className="flex items-center mb-4">
        <div className="w-[60px] h-[60px] rounded-full bg-white shadow-lg cursor-pointer">
        {profilePic ? (
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={profilePic} // Directly using profilePic state
                alt="Profile"
              />
            ) : (
              <p>No Photo</p> // Fallback if no photo is available
            )}
      </div>
          <h1 className="pl-2">
            {auth.user
              ? `${auth.user.firstName} ${auth.user.lastName}`
              : "Loading..."}
          </h1>
        </div>
      </div>

      <div className="flex-grow">
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
                className="flex items-center px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80 w-full border-l-8 border-transparent hover:border-[#001510] transition-all duration-300 "
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
                        className="flex items-center space-x-2 px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80 w-full border-l-8 border-transparent hover:border-[#001510] transition-all duration-300 "
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

      {/* Logout Button */}
      <div className="px-4 py-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 w-full bg-blue-500 transition-all duration-300 rounded-md"
        >
          Logout
        </button>
      </div>
    </Box>
  );

  return (
    <div className="flex h-screen relative">
      <CssBaseline />
      {isSmallScreen && (
        <AiOutlineMenu
          onClick={handleDrawerToggle}
          className="text-3xl md:hidden mt-4 ml-4 font-medium absolute flex text-black"
        />
      )}
      {(isSmallScreen ? sideBarVisible : true) && (
        <div
          className={`fixed inset-0 z-40 ${
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
          className={` p-2 flex items-center justify-between`}
        >
          {!isSmallScreen && (
            <div className="flex items-center justify-between px-4 space-x-2 w-full">
              <div className="flex items-center space-x-2">
              <div className="w-[60px] h-[60px] rounded-full bg-white shadow-lg cursor-pointer">
  {profilePic ? (
    <img
      className="w-[60px] h-[60px] rounded-full object-cover"
      src={profilePic} // Directly use profilePic
      alt="Profile"
    />
  ) : (
    <p>No Photo</p> // Fallback text or you can provide a default image URL here
  )}
</div>

                <h3>
                  {auth.user
                    ? `${auth.user.firstName} ${auth.user.lastName}`
                    : "Loading..."}
                </h3>
              </div>
              <div className="items-end justify-end">
                {/* <ThemeToggle /> */}
              </div>
            </div>
          )}
        </Box>

        <Routes>
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment-data" element={<PaymentDashboard />} />
          <Route path="/sales-report" element={<SealsReports />} />
          <Route path="/users/create-group" element={<CreateGroup />} />
          <Route path="/users/existing-group" element={<ExistingGroup />} />
          <Route path="/accessField" element={<AccessField />} />
          <Route path="/register-employee" element={<RegisterEmployee />} />
          <Route path="/register-trainee" element={<RegisterTrainee />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/employee-table" element={<EmployeeTable />} />
          <Route path="/trainee-table" element={<TraineeTable121 />} />
          <Route path="/status/employee" element={<EmployeeStatus />} />
          <Route path="/status/trainee" element={<TraineeStatus />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
