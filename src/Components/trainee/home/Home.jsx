

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



import { useState } from "react";
import StatusButtonTrainee  from "../status/StatusButtonTrainee";

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

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Hi, Welcome Back</h1>
        <StatusButtonTrainee />
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card className="bg-yellow-200 text-center"><p>My Students</p><h2 className="text-2xl">3,056,78</h2></Card>
        <Card className="bg-green-200 text-center"><p>Enrolled Groups</p><h2 className="text-2xl">3</h2></Card>
        <Card className="bg-red-200 text-center"><p>Completed Course</p><h2 className="text-2xl">6</h2></Card>
        <Card className="bg-purple-200 text-center"><p>Total Hrs</p><h2 className="text-2xl">12hrs 30 min</h2></Card>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Card>
          <h3 className="text-lg font-semibold">Task Overview</h3>
          <div className="grid grid-cols-3 text-center mt-2">
            <div><p>Total task created</p><h2>17</h2></div>
            <div><p>No of Evaluated Task</p><h2>17</h2></div>
            <div><p>Under Review</p><h2>17</h2></div>
          </div>
        </Card>
        <Card className="bg-blue-100">
          <h3 className="font-semibold">Upcoming Meeting</h3>
          <p className="font-bold">UI/UX Fundamentals</p>
          <p>dD/MM/YYYY HH:MM:SS</p>
          <p>Group - UI/UX</p>
          <p className="text-red-500">Starts in 30min</p>
          <a href="#" className="text-blue-500 underline">Click here to join</a>
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
