import React, { useState, useEffect } from "react";
import { MenuIcon } from "@heroicons/react/outline"; // Ensure you have Heroicons installed

import TraineeCourseTable1 from "./TraineeCourseTable1";
import TraineeCourseTable2 from "./TraineeCourseTable2";
import TraineeCourseTable3 from "./TraineeCourseTable3";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    { id: 1, name: "React js" },
    { id: 2, name: "Java" },
    { id: 3, name: "Python" },
  ];

  const numberOfCourses = courses.length;

  useEffect(() => {
    localStorage.setItem("numberOfCourses", numberOfCourses);
  }, [numberOfCourses]);

  const activeClasses =
    "bg-[#204349] text-white border-l border-t border-r rounded-t";
  const inactiveClasses =
    "text-[#204349] hover:bg-[#204349] hover:text-white";

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
    setIsMenuOpen(false); // Close menu when a tab is clicked
  };
  const themes= localStorage.getItem("theme")
  return (
    <div className={`p-4 sm:p-6 overflow-x-auto ${themes==="dark"&&"bg-black"}`}>
      <div className="flex items-center justify-between mb-4">
      <h1 className={`${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#204349] font-semibold text-[16px] sm:text-xl md:text-3xl p-2 sm:p-4`}>
  Trainee name - Sumithra
</h1>

        {/* <button
          className="block sm:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="w-6 h-6 text-[#FF9B26]" />
        </button> */}
        <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#204349] text-sm sm:text-base`}>
          Number of Courses: {numberOfCourses}
        </p>
      </div> 
      <button
          className="block sm:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="w-6 h-6 text-[#204349]" />
        </button>
      <div className={`flex flex-col  sm:flex-row border-b ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className="flex flex-col  text-white sm:flex-row">
          {courses.map((course) => (
            <li
              key={course.id}
              onClick={() => handleTabClick(course.id)}
              className={`mb-2 sm:mb-0 ${openTab === course.id ? "-mb-px" : ""}`}
            >
              <a
                href="#"
                className={`inline-block py-2 px-3 sm:py-2 sm:px-4 font-semibold ${
                  openTab === course.id ? activeClasses : inactiveClasses
                }`}
              >
                {course.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`  ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"}  w-full mt-4`}>
        {openTab === 1 && <TraineeCourseTable1 />}
        {openTab === 2 && <TraineeCourseTable2 />}
        {openTab === 3 && <TraineeCourseTable3 />}
        {/* Add more conditions for additional tabs */}
      </div>
    </div>
  );
};

export default Tabs;
