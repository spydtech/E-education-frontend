

// import React, { useState } from "react";
// import { TfiArrowTopRight } from "react-icons/tfi";
// import { Link } from "react-router-dom";
// import { RxDoubleArrowRight } from "react-icons/rx";
// import CourseCompletionTable from "./CourseCompletionTable";
// import StatusButtonTrainee from "../status/StatusButtonTrainee";
// function HomeTrainee() {
//   const filessent = localStorage.getItem("filessent") || 0;
//   const Activeusers = localStorage.getItem("Activeusers") || 0;
//   const Inactiveusers = localStorage.getItem("Inactiveusers") || 0;
//   const [theam ,setTheam ]=useState(localStorage.getItem("theme"))
//   const firstdata = [
//     {
//       title: "Courses",
//       value: "1",
//     },
//   ];
//   const users = [
//     {
//       title: "Active",
//       value: Activeusers.toString(),
//     },
//     {
//       title: "Inactive",
//       value: Inactiveusers.toString(),
//     },
//   ];
//   const userTasks = [
//     {
//       value: filessent.toString(),
//     },
//   ];

//   // Calculate the total value
//   const total = firstdata.reduce((acc, item) => acc + parseInt(item.value), 0);
//   const usertotal = users.reduce((acc, item) => acc + parseInt(item.value), 0);
//    const themes= localStorage.getItem("theme")
//   //  console.log(themes)
//   return (
//     <div id="container bg-white " >
      
     
//       <StatusButtonTrainee />
//       {/* Container for the cards */}
//       <div className={`  grid grid-cols-1     lg:grid-cols-3 gap-4 p-4`}>
//         <Link to="/traineedashboard" state={{ redirect: "courses" }}>
         
//             <div className={` ${themes === "dark" ? "bg-black text-white" : ""} card1 lg:h-44 shadow-lg p-4 rounded-lg flex flex-col items-center justify-between`}>
//     <p className={` ${themes === "dark" ? "text-white" : "text-[#4CA1AF]"} font-semibold text-sm sm:text-base lg:text-lg text-center`}>
//     Completed last 30 days
//     </p>

//             <ul className="list-none pl-4 text-[#4CA1AF] text-sm sm:text-base lg:text-lg text-center">
//               {firstdata.map((data, index) => (
//                 <li key={index} className={`${themes === "dark" ? "bg-black text-white" : ""}`}>
//                   {data.title}: {data.value}
//                 </li>
//               ))}
//             </ul>
//             <div className={`${themes === "dark" ? "bg-black text-white border-white" : ""} text-xl font-semibold text-[#4CA1AF] w-20 h-20 md:w-16 md:h-16   border-4 border-[#4CA1AF] rounded-full flex items-center justify-center mt-4`}>
//               {total}
//             </div>
//           </div>
//         </Link>

//         <Link to="/traineedashboard" state={{ redirect: "user" }} className="">
//           <div className={`  ${themes==="dark"&&"bg-black"}  ${themes === "dark" ? "bg-black text-white border-white" : ""}card2 lg:h-44   shadow-lg p-4 rounded-lg flex flex-col items-center justify-between`}>
//             <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#4CA1AF] font-semibold text-sm sm:text-base lg:text-lg`}>
//               User Accounts
//             </p>
//             <ul className=" flex list-none flex-wrap justify-center  text-[#4CA1AF] ">
//               {users.map((data, index) => (
//                 <li
//                   key={index}
//                   className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} flex-shrink-0 text-center list-t md:text-left px-2 py-1`}
//                 >
//                   {data.title}: {data.value}
//                 </li>
//               ))}
//             </ul>
//             <div className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-xl  font-semibold text-[#4CA1AF] w-20 h-20 md:w-16 md:h-16  border-4 border-[#4CA1AF] rounded-full flex items-center justify-center mt-4`}>
//               {usertotal}
//             </div>
//           </div>
//         </Link>

//         <Link to="/traineedashboard" state={{ redirect: "approvals" }}>
//           <div
//             id="right-card"
//             className={` ${themes==="dark"&&"bg-black"}  shadow-lg items-center  justify-center overflow-y-auto h-44   rounded-lg flex flex-col  md:order-1`}
//           >
//             <p className={`${themes === "dark" ? "bg-black text-white border-white" : ""} text-center  text-[#4CA1AF] text-nowrap font-semibold text-sm sm:text-base lg:text-md`}>
//               Submissions to Approve
//             </p>
//             <div className=" flex md:items-center mt-3 justify-center max-md:items-center gap-2 flex-wrap">
//               <TfiArrowTopRight className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#4CA1AF] lg:size-5 `}/>
//               <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} font-semibold text-sm sm:text-base text-[#4CA1AF] lg:text-lg`}>
//                 User Tasks
//               </p>
             
//             </div>
//             {userTasks.map((data, index) => (
//                 <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} mt-3 text-sm text-center text-[#4CA1AF] sm:text-base text-nowrap`} key={index}>
//                   {data.value} - Submissions to Approve
//                 </p>
//               ))}
//           </div>
//         </Link>
//       </div>

//       {/* Container for the two remaining cards */}
//       <div className={ `  grid grid-cols-2 gap-2 px-4  max-lg:grid-cols-1`}>
//         <div className={`card3 ${themes==="dark"&&"bg-black"}  h-44 p-4 text-[#4CA1AF] shadow-lg rounded-lg`}>
//           <div className={`flex  justify-between  p-2`}>
//             <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#4CA1AF] font-semibold text-sm sm:text-base lg:text-lg`}>
//               Saved Reports
//             </p>
//             <Link>
//               <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#4CA1AF] text-sm sm:text-base lg:text-lg`}>
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 View All
//               </p>
//             </Link>
//           </div>
//           <div className="mt-4 text-[#4CA1AF] text-sm sm:text-base lg:text-lg">
//             <Link>
//               <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} underline-offset-2 underline text-sm sm:text-base lg:text-lg`}>
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 Expiring Tasks within 30 days
//               </p>
//             </Link>
//             <Link>
//               <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} underline-offset-2 underline text-sm sm:text-base lg:text-lg`}>
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 General Induction Status
//               </p>
//             </Link>
//           </div>
//         </div>
//         <div className={` ${themes==="dark"&&"bg-black"} card4  p-4 h-44 shadow-lg rounded-lg`}>
//           <div className="flex  justify-between p-4 text-[#4CA1AF]">
//             <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#4CA1AF] font-semibold text-sm sm:text-base lg:text-lg`}>
//               Scheduled Reports
//             </p>
//             <Link>
//               <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-[#4CA1AF] text-sm sm:text-base lg:text-lg`}>
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 Manage
//               </p>
//             </Link>
//           </div>
//           <div className="mt-4 text-[#4CA1AF]   text-sm sm:text-base lg:text-lg">
//             <Link to="/todo">
//               <p className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} underline-offset-2 underline text-sm sm:text-base lg:text-lg`}>
//                 <RxDoubleArrowRight className="inline w-6 h-6" />
//                 Schedule Monthly Tasks
//               </p>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div id="table-card " className={`${themes==="dark"&&"bg-black"} p-4 my-4  shadow-lg rounded-lg`}>
//         <CourseCompletionTable />
//       </div>
//     </div>
//   );
// }

// export default HomeTrainee;



import { useState, useEffect } from "react";
import StatusButtonTrainee  from "../status/StatusButtonTrainee";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";
import dayjs from "dayjs";

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
);

const Progress = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-4">
    <div className="bg-blue-500 h-4 rounded-full transition-all" style={{ width: `${value}%` }}></div>
  </div>
);

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ${className}`}
  >
    {children}
  </button>
);

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Develop strategies for analyzing text structure, purpose, and tone", completed: false },
    { id: 2, text: "Develop strategies for analyzing text structure, purpose, and tone", completed: false },
    { id: 3, text: "Develop strategies for analyzing text structure, purpose, and tone", completed: false },
  ]);
  const [usersCount, setUserCount] = useState(0);
  const [enrolledGroups, setEnrolledGroups] = useState(0);
  const [completedGroups, setCompletedGroups] = useState(0);
  const [taskOverview, setTaskOverview] = useState({
    totalTasks: 0,
    evaluatedTasks: 0,
    underReview: 0
  });
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [duration, setDuration] = useState("0h 0m"); 

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const jwt = localStorage.getItem("jwt");  // 🔥 Get JWT from storage
        const response = await axios.get(`${API_BASE_URL}/api/groups/get/count`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        // ✅ Extract `data` from response
        const { payload } = response.data;  // 🔥 Fix: Use `response.data.payload`
  
        // ✅ Update state with correct values
        setUserCount(payload.usersCount || 0);
        setEnrolledGroups(payload.enrolledGroups || 0);
        setCompletedGroups(payload.completedGroups || 0);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };
  
    fetchCounts();
  }, []);

  useEffect(() => {
    const fetchTaskOverview = async () => {
      try {
        const jwt = localStorage.getItem("jwt");  // Get JWT from storage
        const response = await axios.get(`${API_BASE_URL}/api/task/taskOverview`, {
          headers: { Authorization: `Bearer ${jwt}` }
        });
  
        if (response.status === 200) {
          setTaskOverview({
            totalTasks: response.data.totalTasks || 0,
            evaluatedTasks: response.data.evaluatedTasks || 0,
            underReview: response.data.underReviewTasks || 0
          });
        }
      } catch (error) {
        console.error("Error fetching Task Overview:", error);
      }
    };
  
    fetchTaskOverview();
  }, []);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const jwt = localStorage.getItem("jwt");
        if (!jwt) {
          setError("User not authenticated");
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/api/meeting/getAll/upcoming/meetings`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });

        if (response.status === 200) {
          setMeetings(response.data || []);
        } else {
          setError("Failed to fetch meetings");
        }
      } catch (err) {
        setError("Error fetching meetings");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);
  

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="p-6 bg-white min-h-screen font-poppins">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Hi, Welcome Back</h1>
        <StatusButtonTrainee  setDuration={setDuration} />
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-6">
      <Card className="bg-[#f8e6c0] text-center">
          <p>My Students</p>
          <h2 className="text-2xl">{usersCount.toLocaleString()}</h2>
        </Card>
        <Card className="bg-[#d9f6e3] text-center">
          <p>Enrolled Groups</p>
          <h2 className="text-2xl">{enrolledGroups}</h2>
        </Card>
        <Card className="bg-[#f4d3d6] text-center">
          <p>Completed Courses</p>
          <h2 className="text-2xl">{completedGroups}</h2>
        </Card>
        <Card className="bg-[#e4d4f6] text-center">
          <p>Total Hrs</p>
          
          <h2 className="text-2xl">{duration}</h2> {/* 🔥 Show session duration */}
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
      <Card>
    <h3 className="text-lg font-semibold">Task Overview</h3>
    <div className="grid grid-cols-3 text-center mt-2">
      <div>
        <p>Total Tasks Created</p>
        <h2>{taskOverview.totalTasks}</h2>
      </div>
      <div>
        <p>Evaluated Tasks</p>
        <h2>{taskOverview.evaluatedTasks}</h2>
      </div>
      <div>
        <p>Under Review</p>
        <h2>{taskOverview.underReview}</h2>
      </div>
    </div>
  </Card>
  <Card className="bg-blue-100 p-4 rounded-lg shadow">
      <h3 className="font-semibold">{meetings.title}</h3>
      <p className="font-bold">{meetings.topic}</p>
      <p>{dayjs(meetings.startTime).format("DD/MM/YYYY")}</p>
      <p>Group - {meetings.group}</p>
      <p className="text-red-500">
        Starts in {dayjs(meetings.startTime).diff(dayjs(), "minute")} min
      </p>
      <a href={meetings.link} className="text-blue-500 underline">
        Click here to join
      </a>
    </Card>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {[10, 45, 0].map((progress, index) => (
          <Card key={index} className="text-center">
            <p>Course group {index + 1}</p>
            <Progress value={progress} />
            <p>{progress}% completed</p>
          </Card>
        ))}
      </div>

      <Card className="bg-yellow-100 mt-6">
        <h3 className="font-semibold">To - do List</h3>
        <p className="text-gray-500">14 June 2024</p>
        {tasks.map(task => (
          <div key={task.id} className="flex items-center gap-2 mt-2">
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
