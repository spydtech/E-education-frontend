import React, { useState, useEffect } from "react";
import TraineeCourseTable1 from "./TraineeCoursesTable1"
import TraineeCourseTable2 from "./TraineeCoursesTable2"
import TraineeCourseTable3 from "./TraineeCoursesTable3"

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  const courses = [
    { id: 1, name: "React js" },
    { id: 2, name: "Java" },
    { id: 3, name: "Python" },
  ];

  const numberOfCourses = courses.length;

  useEffect(() => {
    localStorage.setItem("numberOfCourses", numberOfCourses);
  }, [numberOfCourses]);

  const activeClasses = "border-l border-t border-r rounded-t text-blue-700";
  const inactiveClasses = "text-blue-500 hover:text-blue-700";

  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };

  return (
    <div className="p-6 overflow-x-auto">
      <p className="float-end">Number of Courses: {numberOfCourses}</p>
      <ul className="flex flex-wrap border-b">
        {courses.map((course) => (
          <li
            key={course.id}
            onClick={() => handleTabClick(course.id)}
            className={`mr-1 ${openTab === course.id ? "-mb-px" : ""}`}
          >
            <a
              href="#"
              className={`bg-white inline-block py-2 px-4 font-semibold ${
                openTab === course.id ? activeClasses : inactiveClasses
              }`}
            >
              {course.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full">
        {openTab === 1 && <TraineeCourseTable1 />}
        {openTab === 2 && <TraineeCourseTable2 />}
        {openTab === 3 && <TraineeCourseTable3 />}
        {/* Add more conditions for additional tabs */}
      </div>
    </div>
  );
};

export default Tabs;