import React, { useState } from "react";
import ActiveUsers from "../users/Activeusers";
// import InactiveUsers from "../users/Inactiveusers";

const UserNavigation = () => {
  const sections = [""];
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionChange = (index) => {
    setCurrentSection(index);
  };
  const themes= localStorage.getItem("theme")
  return (
    <>
      <div className="flex flex-col items-center min-h-screen pt-4">
        <nav className=" flex flex-col sm:flex-row w-full sm:w-auto max-w-full md:max-w-xl mx-4 rounded-lg  overflow-hidden">
          {/* {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleSectionChange(index)}
              className={`flex-1 sm:flex-none sm:w-auto flex justify-center items-center font-medium px-5 py-3 transition-colors duration-300 ${
                currentSection === index
                  ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              } ${
                index === 0 ? "rounded-t sm:rounded-l sm:rounded-t-none" : ""
              } ${
                index === sections.length - 1
                  ? "rounded-b sm:rounded-r sm:rounded-b-none"
                  : ""
              }`}
            >
              {section}
            </button>
          ))} */}
        </nav>
        <div className={`${themes==="dark"&&"bg-black"} container mx-auto p-4 mt-4  shadow-lg rounded-lg`}>
          {currentSection === 0 && <ActiveUsers />}
          {/* {currentSection === 1 && <InactiveUsers />} */}
        </div>
      </div>
    </>
  );
};

export default UserNavigation;
