


import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";


const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Raghavendra",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJuUw4ajfA54wQ0kCRhPB3DvakpxYA0-yew&s",
    name: "Ratnapriya",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YhzBEZnt8CapqZWwUK6SRRfZC0Hj5PPSbw&s",
    name: "ashwini",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "6 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Henry Silkeater",
    job: "Designer",
    role: "Contractor",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Bill Horsefighter",
    job: "Designer",
    role: "Contractor",
    lastActive: "5 days ago",
    active: true,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    role: "Manager",
    lastActive: "3 days ago",
    active: false,
  },
];

const rolesData = ["Manager", "Collaborator", "Contractor"];

function ActiveUsers({ updateUsersCount }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const handleRoleChange = (event, name) => {
    const newRole = event.target.value;
    console.log(`Updating role for ${name} to ${newRole}`);
  };

  // Calculate active and inactive user counts
  const activeCount = data.filter((user) => user.active).length;
  const inactiveCount = data.filter((user) => !user.active).length;

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const themes= localStorage.getItem("theme")

  const rows = filteredData.map((item) => (
    <tr key={item.name} className="border-b text-[#204349]">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full text-[#204349]"
            src={item.avatar}
            alt={`Avatar of ${item.name}`}
          />
          <div className="ml-4">
            <div className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-sm font-medium text-[#204349]`}>{item.name}</div>
          </div>
        </div>
      </td>
      <td className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"}  px-6 py-4 whitespace-nowrap`}>
        {item.job}
      </td>
      <td className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} px-6 py-4 whitespace-nowrap`}>{item.lastActive}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {item.active ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
            Active
          </span>
        ) : (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
            <XCircleIcon className="h-5 w-5 mr-1.5" aria-hidden="true" />
            Inactive
          </span>
        )}
      </td>
    </tr>
  ));
  // const themes= localStorage.getItem("theme")
  return (
    <div className={`  overflow-x-auto  ml-4 mr-4 sm:ml-10 sm:mr-10`}>
      <div >
        <h1 className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-center text-2xl font-semibold  text-[#204349]`}>Active Users</h1>
        <div className="flex justify-center mb-4">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name..."
            className="w-full max-w-xs sm:max-w-md px-3 py-2 bg-white border border-[#204349] placeholder:text-[#204349] rounded-md shadow-sm focus:outline-none focus:ring-[#204349] focus:border-[#204349]"
          />
        </div>
        <div className="overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#204349]">
        <table className="min-w-full divide-y divide-gray-200 overflow-x-scroll">
          <thead className="">
            <tr>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-white bg-[#204349] uppercase tracking-wider">
                Employee
              </th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-white bg-[#204349] uppercase tracking-wider">
                Role
              </th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-white bg-[#204349] uppercase tracking-wider">
                Last active
              </th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-white bg-[#204349] uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className={ ` ${themes==="dark"&&"bg-black"} divide-y divide-gray-200`}>{rows}</tbody>
        </table>
        </div>
      </div>
    </div> 
   
  );
}

export default ActiveUsers;
