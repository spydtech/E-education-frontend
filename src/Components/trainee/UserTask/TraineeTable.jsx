import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
const data = [
  {
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Raghavendra",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJuUw4ajfA54wQ0kCRhPB3DvakpxYA0-yew&s",
    name: "Ratnapriya",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YhzBEZnt8CapqZWwUK6SRRfZC0Hj5PPSbw&s",
    name: "ashwini",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "2 days ago",
    active: true,
  },
  {
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    role: "Collaborator",
    lastActive: "6 days ago",
    active: false,
  },
  {
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Henry Silkeater",
    job: "Designer",
    role: "Contractor",
    lastActive: "2 days ago",
    active: false,
  },
  {
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Bill Horsefighter",
    job: "Designer",
    role: "Contractor",
    lastActive: "5 days ago",
    active: true,
  },
  {
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    role: "Manager",
    lastActive: "3 days ago",
    active: false,
  },
];

const rolesData = ["Manager", "Collaborator", "Contractor"];

function TraineeTable({ updateUsersCount }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedUsers, setSelectedUsers] = useState([]); // State for selected users
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleRoleChange = (event, name) => {
    const newRole = event.target.value;
    console.log(`Updating role for ${name} to ${newRole}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectAllUsers = () => {
    if (selectedUsers.length === data.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(data.map((user) => user.name));
    }
  };

  const handleUserSelect = (event, name) => {
    if (event.target.checked) {
      setSelectedUsers([...selectedUsers, name]);
    } else {
      setSelectedUsers(selectedUsers.filter((user) => user !== name));
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const activeCount = data.filter((user) => user.active).length;
  const inactiveCount = data.filter((user) => !user.active).length;

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const themes= localStorage.getItem("theme")

  const rows = filteredData.map((item) => (
    <tr key={item.name} className="border-b ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center ">
          <input
            type="checkbox"
            className="h-4 w-4 text-[#204349] focus:ring-[#204349] border-#204349] border-[#204349] rounded"
            checked={selectedUsers.includes(item.name)}
            onChange={(e) => handleUserSelect(e, item.name)}
          />
          <img
            className="h-10 w-10 rounded-full ml-4"
            src={item.avatar}
            alt={`Avatar of ${item.name}`}
          />
          <div className="ml-4">
            <div className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-sm font-medium text-[#204349]`}>{item.name}</div>
          </div>
        </div>
      </td>
      <td className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"}  px-6 py-4  text-[#204349] whitespace-nowrap`}>
        <h1>React js</h1>
      </td>
      <td className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} px-6 py-4 whitespace-nowrap text-[#204349] `}>{item.lastActive}</td>
      <td className="px-6 py-4 whitespace-nowrap flex items-center justify-between">
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
        <button
          className="px-4 py-2 bg-[#204349] text-white rounded-md shadow-sm hover:bg-[#204349] focus:outline-none focus:ring-2 focus:ring-[#204349] focus:ring-opacity-50 ml-4"
          onClick={openModal}
        >
          Upload
        </button>
      </td>
    </tr>
  ));
  // const themes= localStorage.getItem("theme")
  return (
    <div className={` ${themes==="dark"&&"bg-black"} mt-10 lg:m-8  shadow-xl rounded-lg`}>
      <div className=" overflow-x-auto   text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-[#204349] pt-4 mx-4 rounded-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name..."
            className="w-full md:w-[200px] px-3 py-2 placeholder:text-[#204349] bg-white border border-[#204349] rounded-md shadow-sm focus:outline-none focus:ring-[#204349] focus:border-[#204349] sm:text-sm mb-3 md:mb-0"
          />
          <button
            className="px-4 py-2 bg-[#204349] text-white rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#204349] focus:ring-opacity-50"
            onClick={handleSelectAllUsers}
          >
            Select All Users
          </button>
        </div>
         <div className="">
        <table className="min-w-full divide-y divide-gray-200  ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4  bg-[#204349] text-left text-xs font-medium text-white uppercase tracking-wider">
                Employee
              </th>
              <th className={`  px-6 py-4  bg-[#204349] text-left text-xs font-medium text-white uppercase tracking-wider`}>
                Role
              </th>
              <th className="px-6 py-4  bg-[#204349] text-left text-xs font-medium text-white uppercase tracking-wider">
                Last active
              </th>
              <th className="px-6 py-4  bg-[#204349] text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className={` ${themes==="dark"&&"bg-black"}   divide-y divide-gray-200`}>{rows}</tbody>
        </table>
      </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex justify-center items-center">
          <div className="bg-white w-full md:w-1/3 max-w-lg p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#204349] ">Upload Files</h2>
            <input type="file" className="w-full mb-4 text-[#204349]" />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-opacity-50"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="ml-4 px-4 py-2 bg-[#204349] text-white rounded-md shadow-sm hover:bg-[#204349] focus:outline-none focus:ring-2 focus:ring-[#204349] focus:ring-opacity-50"
                onClick={closeModal}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TraineeTable;
