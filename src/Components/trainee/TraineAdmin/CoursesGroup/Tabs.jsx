import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchIcon } from "@heroicons/react/outline";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Tab = () => {
  const [groupUsers, setGroupUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/chat-groups/get/users/email",
          { headers: { Authorization: `Bearer ${jwt}` } }
        );

        if (Array.isArray(response.data)) {
          setGroupUsers(response.data);
          setFilteredUsers(response.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jwt]);

  // Extract unique group names
  const groupNames = ["All", ...new Set(groupUsers.map((user) => user.chatGroupName))];

  // Handle group selection
  const handleGroupChange = (e) => {
    const selected = e.target.value;
    setSelectedGroup(selected);
    setFilteredUsers(
      selected === "All"
        ? groupUsers
        : groupUsers.filter((user) => user.chatGroupName === selected)
    );
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredUsers(
      groupUsers.filter(
        (user) =>
          (selectedGroup === "All" || user.chatGroupName === selectedGroup) &&
          (user.userName.toLowerCase().includes(query) ||
            user.userEmail.toLowerCase().includes(query) ||
            user.id.toString().includes(query))
      )
    );
  };

  return (
    <div className="p-6 bg-[#f7fafc] min-h-screen font-poppins">
      {/* Group Selection Dropdown */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Select Group:
        </label>
        <select
          value={selectedGroup}
          onChange={handleGroupChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0c5955]"
        >
          {groupNames.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or ID..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0c5955]"
        />
        <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
      </div>

      {/* Learners Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#204349] mb-4">All Learners</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border border-gray-300">Learner ID</th>
                <th className="p-3 border border-gray-300">Learner’s Name</th>
                <th className="p-3 border border-gray-300">Email</th>
                <th className="p-3 border border-gray-300">Enrolled Date</th>
                <th className="p-3 border border-gray-300">Expire Date</th>
                <th className="p-3 border border-gray-300">Group Name</th>
                <th className="p-3 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center p-4">Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-red-500">Error: {error}</td>
                </tr>
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={index} className="border border-gray-200">
                    <td className="p-3 border border-gray-300">{user.id}</td>
                    <td className="flex items-center space-x-2 p-3 border border-gray-300">
                      {/* Circle with Initials */}
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-lg font-semibold">
                        {user.userName
                          ?.split(" ")
                          .map((name) => name.charAt(0))
                          .join("") || ""}
                      </span>
                      {/* Full Name */}
                      <span className="text-gray-800 font-medium">{user.userName || "Unknown User"}</span>
                    </td>
                    <td className="p-3 border border-gray-300">{user.userEmail}</td>
                    <td className="p-3 border border-gray-300">{user.joiningDate || "DD/MM/YY"}</td>
                    <td className="p-3 border border-gray-300">{user.expiryDate || "DD/MM/YY"}</td>
                    <td className="p-3 border border-gray-300">{user.chatGroupName}</td>
                    <td className="p-3 border border-gray-300">{user.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-4">No learners found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tab;
