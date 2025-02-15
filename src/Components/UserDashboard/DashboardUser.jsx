import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Dashboard as DashboardIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { GrStatusGood } from "react-icons/gr";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240; // Define the drawer width

const menu = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon className="w-2 h-2 mr-2" />,
  },
  {
    name: "My Learning",
    path: "/",
    icon: <DashboardIcon className="w-2 h-2 mr-2" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

const DashboardUser = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSidebar = () => {
    setSideBarVisible(false);
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
      className =""
    >
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
                className="flex items-center px-4 py-3 hover:bg-[#FF9B26] hover:text-white rounded hover:bg-opacity-80 w-[200px] border-transparent transition-all duration-300"
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
    </Box>
  );

  return (

    <div className="flex h-screen relative font-poppins">
   
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
    </div>
  );
};

export default DashboardUser;