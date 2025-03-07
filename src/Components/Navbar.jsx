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
import Notification1 from "./Notification1"; // Import the Notification1 component

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarDropdown, setSidebarDropdown] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState(null);
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // State for notification panel
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth) || { user: {} };

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
    setSidebarDropdown(!sidebarDropdown);
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
    setShowDropdown(!showDropdown);
  };

  const menuItems = [
    { name: "Dashboard", href: "/user/dashboard" },
    { name: "Settings", href: "/user/Settings" },
  ];

  const allCourses = Object.values(courses).flat();

  const filteredCourses = allCourses.filter((course) =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (link) => {
    window.location.href = link;
    setQuery("");
  };

  const toggleNotificationPanel = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <>
      <Disclosure
        as="nav"
        className={`sticky font-poppins top-0 z-50 ${
          isScrolled ? "bg-gray-50 " : "bg-gray-50 "
        }`}
      >
        {({ open }) => (
          <>
            <div
              className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8${
                isScrolled ? "bg-gray-50 " : "bg-gray-50 "
              }`}
            >
              <div className="relative flex h-20 justify-between items-center">
                {/* Mobile Menu Button */}
                <div className="absolute inset-y-0 left-0 flex pl-2  mt-7 h-6 w-4 justify-center items-center lg:hidden">
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
                      className="h-18 w-[150px] lg:h-20 lg:w-56"
                      src={IMG}
                      alt="Logo"
                    />
                  </Link>
                   {/* Mobile View: Notification and Profile */}
                   <div className="lg:hidden flex items-center space-x-0 ml-4">
                    {/* Notification Icon */}
                    <button
                      onClick={toggleNotificationPanel}
                      className="relative"
                    >
                      <NotificationAdd className="text-[#0098f1] cursor-pointer text-xl" />
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative  inline-block">
                        <button
                          className={`inline-flex items-center justify-center h-10 px-2 py-2 text-sm font-medium transition-colors rounded-md ${
                            navigationMenu === "getting-started"
                              ? "border-2 border-[#0098f1]"
                              : "border-2 border-transparent"
                          }`}
                          onClick={() =>
                            toggleNavigationMenu("getting-started")
                          }
                        >
                          <p className=" flex justify-center items-center w-8 h-8 rounded-full bg-[#0098F1]  text-white cursor-pointer text-center font-bold">
                          {auth.user?.firstName ? auth.user.firstName[0].toUpperCase() : "U"}
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
                            <div className="absolute z-10 text-sm mt-1 w-48 -ml-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {menuItems.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.href}
                                  onClick={item.onClick}
                                  className=" flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                  <p className="justify-center items-center p-2 text-sm">{item.name}</p>
                                </a>
                              ))}
                              <div 
                                onClick={handleLogout}
                                className="flex px-4 py-2 border-t-2 border-grey-500 cursor-pointer"
                              >
                                <p className="flex justify-center items-center w-8 h-8 rounded-full bg-[#0098F1] text-white cursor-pointer text-center font-bold">
                                  {auth.user?.firstName?.[0]?.toUpperCase() || "U"}
                                </p>
                                <p className="justify-center items-center p-2 text-sm">Logout</p>
                              </div>
                            </div>
                          )}
                      </div>
                  </div>
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
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDropdown(true)}
                      // onMouseLeave={() => setShowDropdown(false)}
                    >
                      <button
                        className="absolute right-[1px] lg:mr-[0px] xl:mr-[30px] p-2 py-[6px] top-1/2 transform -translate-y-1/2 bg-[#0098F1] rounded-lg text-[#0098F1] flex items-center space-x-1"
                      >
                        <span className="text-white">Explore</span>
                        {showDropdown ? (
                          <FaChevronUp className="text-white" />
                        ) : (
                          <FaChevronDown className="text-white" />
                        )}
                      </button>

                      {showDropdown && (
                        <div 
                          className="absolute right-0 top-12 bg-[#0098F1] border-white border-2 rounded-xl text-white w-auto"
                          // onMouseEnter={() => setShowDropdown(true)}
                          onMouseLeave={() => setShowDropdown(false)}
                        >
                          <h3 className="lg:text-xl text-lg text-center p-4 bg-white text-[#0098F1] w-full font-bold">
                            Explore Here Courses List
                          </h3>
                          <div className="flex justify-between p-4">
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
                      )}
                    </div>
                  </div>
                </div>

                {/* User Action Buttons */}
                <div className="hidden  lg:flex items-center ml-2 px-2 space-x-3">
                  {auth.user && auth.user.firstName ? (
                    <>
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
                                onClick={handleLogout}
                                className="flex px-4 py-2 border-t-2 border-grey-500 cursor-pointer"
                              >
                                <p className="flex justify-center items-center w-10 h-10 rounded-full bg-[#0098F1] text-white cursor-pointer text-center font-bold">
                                  {auth.user?.firstName?.[0]?.toUpperCase() || "U"}
                                </p>
                                <p className="justify-center items-center p-2 text-lg">Logout</p>
                              </div>
                            </div>
                          )}
                      </div>
                      <NotificationAdd
                        onClick={toggleNotificationPanel} // Toggle notification panel on click
                        className="text-[#0098f1] cursor-pointer"
                      />
                      
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
                  <div className="flex items-center w-full justify-between px-4 py-3">
                 
                     {/* Right Side: Profile and Notification */}
                
                    <button
                      onClick={toggleSidebar}
                      className="text-[#0098F1] hover:text-[#0098F1] focus:outline-none"
                    >
                      <IoCloseSharp className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="bg-[#0098f1] pb-36  h-screen overflow-y-scroll px-4">
                    <button
                      onClick={toggleSidebarDropdown}
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

                    <div className="flex-col space-y-4 ml-1 px-2">
                      {auth.user && auth.user.firstName ? (
                        <>
                          

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

      {/* Notification Panel */}
      <Notification1 isOpen={isNotificationOpen} onClose={toggleNotificationPanel} />
    </>
  );
};

export default Navbar;