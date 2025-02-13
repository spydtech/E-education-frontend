import React, { useState } from "react";
import sales from "../../assetss/admindashboard/analysis.png";
import revenue from "../../assetss/admindashboard/revenue.png";
import students from "../../assetss/admindashboard/students.png";
import courses from "../../assetss/admindashboard/courses.png";
import { TfiStatsUp } from "react-icons/tfi";
import TotalPayments from "./pymentData/TotalPayments";
// import { useDispatch, useSelector } from "react-redux";
// import { setTheme } from '../../../State/Theme/Theme';
import { setTheme } from "../../State/Theme/Theme";
// import adminimg from "../../assetss/Home/Admin.png";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "../../Components/trainee/TraineeDashboard/Theamtoggle";
const data = [
  { img: sales, alt: "Sales", value: "2,42,000", text: "Sales" },
  { img: courses, alt: "Courses", value: "90", text: "Courses" },
  { img: students, alt: "Students", value: "3,00,000", text: "Students" },
  { img: revenue, alt: "Revenue", value: "2,42,000", text: "Revenue" },
];

const statistics = [
  { title: "New Students", value: "5060", bgColor: "bg-[#FFF4DE]" },
  { title: "No.Of Students", value: "305060", bgColor: "bg-[#DCFCE7]" },
  { title: "No.Of Trainees", value: "450", bgColor: "bg-[#FFE2E5]" },
  { title: "No.Of Employees", value: "250", bgColor: "bg-[#F3E8FF]" },
];

const AdminDashBoard = () => {
  // const theme = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const themes = localStorage.getItem("theme");
  return (
    <div className=" grid  ml-5">
      <div
        id="div1"
        className={`  bg-white text-black   h-auto     rounded-lg  sm:ml-5 mt-8  lg:ml-3 p-3 text-start  lg:w-auto max-w-[1140px] md:w-[500px]  `}
      >
{/*        
        <div id="subdiv1" className={`   flex flex-wrap justify-around mt-6`}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`  p-8 flex items-center sm:justify-center justify-between w-auto md:w-[250px] h-auto md:h-[100px] lg:w-[180px] lg:h-[100px]  space-x-2`}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-14 h-14 md:w-16 md:h-16 border-white border-2 rounded-full"
              />

              <div>
                <p className="text-sm md:text-base ">{item.text}</p>
                <p className="text-sm md:text-base ">{item.value}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <div
        id="div2"
        className={`  flex flex-wrap  lg:justify-between w-full xl:max-w-6xl lg:max-w-[1140px] ml-3  pb-10`}
      >
        {statistics.map((stat, index) => (
          <div
            key={index}
            className={`  flex flex-col items-center justify-center  rounded-lg w-72 sm:w-64  md:m-2 lg:m-0 xl:w-[240px]  lg:w-[180px] md:w-[240px] md:h-[150px]  h-36  ${stat.bgColor}`}
          >
            <p className=" md:text-base  sm:text-lg font-semibold">
              {stat.title}
            </p>
            <p className=" md:text-base sm:text-xl">{stat.value}</p>
          </div>
        ))}
      </div>

      <TotalPayments className="mt-10 p-10" />
    </div>
  );
};

export default AdminDashBoard;
