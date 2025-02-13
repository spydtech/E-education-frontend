// import React, { useState, useEffect, useRef } from "react";
// import { FaArrowCircleDown, FaCaretDown, FaCaretUp } from "react-icons/fa";

// const StatusPage = () => {
//   const acceptedFiles = JSON.parse(localStorage.getItem("acceptedFiles")) || [];
//   const rejectedFiles = JSON.parse(localStorage.getItem("rejectedFiles")) || [];
  
//   const [selectedOption, setSelectedOption] = useState("accepted");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleDownload = (file) => {
//     fetch(file.url)
//       .then((res) => res.blob())
//       .then((blob) => {
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = file.url.split("/").pop();
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       });
//   };

//   const handleDropdownChange = (option) => {
//     setSelectedOption(option);
//     setIsDropdownOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   const themes= localStorage.getItem("theme")
//   return (
//     <div className={` ${themes==="dark"&&"bg-black"}  h-screen container mx-auto p-4`}>
//       <div className={`  flex flex-col md:flex-row md:justify-between items-center mb-4`}>
//         <h1 className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-2xl font-bold text-[#204349] mb-2 md:mb-0`}>File Status</h1>
//         <div className="relative" ref={dropdownRef}>
//           <button
//             onClick={toggleDropdown}
//             className="flex items-center bg-[#204349] text-white p-2 rounded text-sm md:text-base"
//           >
//             {selectedOption === "accepted" ? "Accepted Files" : "Rejected Files"}
//             {isDropdownOpen ? (
//               <FaCaretUp className="ml-2" />
//             ) : (
//               <FaCaretDown className="ml-2" />
//             )}
//           </button>
//           {isDropdownOpen && (
//             <ul className="absolute right-0 mt-2 w-48 border-2 border-[#204349] text-[#204349] rounded shadow-lg bg-white">
//               <li
//                 className="cursor-pointer text-[#204349] p-2 hover:bg-[#204349] hover:text-white transition"
//                 onClick={() => handleDropdownChange("accepted")}
//               >
//                 Accepted Files
//               </li>
//               <hr className="border-1 border-[#204349]"/>
//               <li
//                 className="cursor-pointer p-2 hover:bg-[#204349] hover:text-white transition"
//                 onClick={() => handleDropdownChange("rejected")}
//               >
//                 Rejected Files
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {selectedOption === "accepted" ? (
//           <div>
//             <h2 className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-xl font-semibold mb-2 text-[#204349]`}>Accepted Files</h2>
//             {acceptedFiles.length > 0 ? (
//               acceptedFiles.map((file, index) => (
//                 <div className="p-2" key={index}>
//                   <div
//                     className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between hover:bg-gray-100 transition"
//                     onClick={() => handleDownload(file)}
//                   >
//                     <div className="flex items-center">
//                       <FaArrowCircleDown className="w-8 h-8 mr-2 text-[#204349] " />
//                       <div className="flex flex-col text-[#204349]">
//                         <span className="font-medium text-sm md:text-base text-[#204349]">{file.name}</span>
//                         <span className="text-gray-500 text-xs md:text-sm">
//                           {file.description}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-[#204349]">No accepted files.</p>
//             )}
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-xl font-semibold mb-2 text-[#204349]">Rejected Files</h2>
//             {rejectedFiles.length > 0 ? (
//               rejectedFiles.map((file, index) => (
//                 <div className="p-2" key={index}>
//                   <div
//                     className="bg-white shadow-md rounded flex p-4 h-full cursor-pointer items-center justify-between hover:bg-gray-100 transition"
//                     onClick={() => handleDownload(file)}
//                   >
//                     <div className="flex items-center">
//                       <FaArrowCircleDown className="w-8 h-8 mr-2 text-[#204349]" />
//                       <div className="flex flex-col text-[#204349]">
//                         <span className="font-medium text-[#204349] text-sm md:text-base">{file.name}</span>
//                         <span className="text-[#204349] text-xs md:text-sm">
//                           {file.description}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-[#204349]">No rejected files.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StatusPage;



import React, { useState, } from "react";
import { Search } from "lucide-react"; // Import search icon from lucide-react
import { useNavigate, Link } from "react-router-dom";



const learnersData = [
  {
    id: 45436,
    name: "Ruben Runte",
    group: "Group 1",
    assignedDate: "DD/MM/YYYY",
    dueDate: "DD/MM/YYYY",
    submissionStatus: "Pending",
    approvalStatus: "Pending",
  },
  {
    id: 45436,
    name: "Ruben Runte",
    group: "Group 1",
    assignedDate: "DD/MM/YYYY",
    dueDate: "DD/MM/YYYY",
    submissionStatus: "Submitted",
    approvalStatus: "Pending",
  },
  {
    id: 45436,
    name: "Ruben Runte",
    group: "Group 1",
    assignedDate: "DD/MM/YYYY",
    dueDate: "DD/MM/YYYY",
    submissionStatus: "Submitted",
    approvalStatus: "Approved",
  },
  {
    id: 45436,
    name: "Ruben Runte",
    group: "Group 1",
    assignedDate: "DD/MM/YYYY",
    dueDate: "DD/MM/YYYY",
    submissionStatus: "Pending",
    approvalStatus: "Pending",
  },
  {
    id: 45436,
    name: "Ruben Runte",
    group: "Group 1",
    assignedDate: "DD/MM/YYYY",
    dueDate: "DD/MM/YYYY",
    submissionStatus: "Submitted",
    approvalStatus: "Rejected",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Pending":
      return "bg-red-100 text-red-500";
    case "Submitted":
      return "bg-green-100 text-green-500";
    case "Approved":
      return "bg-green-100 text-green-500";
    case "Rejected":
      return "bg-red-100 text-red-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
};

const StatusPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLearners = learnersData.filter(
    (learner) =>
      learner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      learner.id.toString().includes(searchQuery)
  );

  const navigate = useNavigate();

  return (
    <div className="p-2  font-poppins ">
      {/* Search Bar */}
      <div className="relative w-full max-w-lg mx-auto mb-6 ml-5  mt-10">
        <input
          type="text"
          placeholder="Search by name, user ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <Search className="absolute   left-3 top-3 w-5 h-5 text-gray-500" />
      </div>

      {/* Learner's Table */}
      <div className=" p-6  ">
        <div className="overflow-x-auto">
          <table className="w-full  ">
            {/* Table Head */}
            <thead>
              <tr className="border-b-black border text-left text-gray-700">
                <th className="p-3  ">Learner's ID</th>
                <th className="p-3 ">Learner’s Name</th>
                <th className="p-3 ">Group Name</th>
                <th className="p-3 ">Assigned Date</th>
                <th className="p-3">Due Date</th>
                <th className="p-3 ">Assignment Submission Status</th>
                <th className="p-3">Approved / Rejected</th>
                <th className="p-3 ">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {filteredLearners.map((learner, index) => (
                <tr key={index} className={` ${index % 2 === 0 ? "" : ""}`}>
                  <td className="p-3 ">{learner.id}</td>
                  <td className="p-3 ">{learner.name}</td>
                  <td className="p-3 ">{learner.group}</td>
                  <td className="p-3 ">{learner.assignedDate}</td>
                  <td className="p-3 ">{learner.dueDate}</td>
                  
                  {/* Submission Status */}
                  <td className="p-3  ">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusClass(learner.submissionStatus)}`}>
                      {learner.submissionStatus}
                    </span>
                  </td>

                  {/* Approval Status */}
                  <td className="p-3 ">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusClass(learner.approvalStatus)}`}>
                      {learner.approvalStatus}
                    </span>
                  </td>

                  {/* Action Icon */}
                  <td className="p-3  text-center">
                    <Link to="/traineedashbord/assignmentoverview">
                    
                    <button 
                    //  onClick={() => navigate('/traineedashbord/user/assignmentoverview')}
                    className="text-gray-500 hover:text-teal-600">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.625 4H6.625C6.09457 4 5.58586 4.21071 5.21079 4.58579C4.83571 4.96086 4.625 5.46957 4.625 6V18C4.625 18.5304 4.83571 19.0391 5.21079 19.4142C5.58586 19.7893 6.09457 20 6.625 20H18.625C19.1554 20 19.6641 19.7893 20.0392 19.4142C20.4143 19.0391 20.625 18.5304 20.625 18V14M12.625 12L20.625 4M20.625 4V9M20.625 4H15.625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* No Results Found */}
          {filteredLearners.length === 0 && (
            <div className="text-center text-gray-500 py-4">No learners found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
