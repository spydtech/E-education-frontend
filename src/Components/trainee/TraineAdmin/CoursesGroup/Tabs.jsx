import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchIcon } from "@heroicons/react/outline";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Tab = () => {
  const [groupUsers, setGroupUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const jwt = localStorage.getItem("jwt");

  // Function to calculate course progress
   // Function to calculate course progress
   const getCourseProgress = (joiningDate, expiryDate) => {
    if (!joiningDate || !expiryDate) return [{ name: "Completed", value: 0 }, { name: "Pending", value: 100 }];

    const startDate = new Date(joiningDate);
    const endDate = new Date(expiryDate);
    const currentDate = new Date();

    const totalDuration = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    const completedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const pendingDays = Math.max(totalDuration - completedDays, 0);

    return [
      { name: "Completed", value: Math.max(completedDays, 0) },
      { name: "Pending", value: pendingDays },
    ];
  };
  const progressData = getCourseProgress(); // Call the function inside the component

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/chat-groups/get/users/email", {
          headers: { Authorization: `Bearer ${jwt}` },
        });

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

  // Extract unique group names from the fetched data
  const groupNames = [...new Set(groupUsers.map((user) => user.chatGroupName))];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredUsers(
      groupUsers.filter(
        (user) =>
          user.userName.toLowerCase().includes(query) ||
          user.userEmail.toLowerCase().includes(query) ||
          user.id.toString().includes(query)
      )
    );
  };

  const COLORS = ["#FF928A", "#8979FF"]; // Colors for pending and completed

  return (
    <div className="p-6 bg-[#f7fafc] min-h-screen font-poppins">
      {/* Group Cards with Donut Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
  {groupNames.map((group, index) => (
    <div key={index} className="bg-[#0c5955] p-4 rounded-lg shadow-md text-white text-center">
      <h3 className="text-lg font-semibold mb-4">{group}</h3> {/* Added margin-bottom */}
      {/* Donut Chart */}
      <PieChart 
      className=""
      width={180} height={180}>
        <Pie
          data={progressData}
          dataKey="value"
          nameKey="name"
          cx="40%"
          cy="40%"
          outerRadius={50}
          innerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
        >
          {progressData.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
          ))}
        </Pie>
        <Legend
          className="legend-style " // Added class for custom styling
          verticalAlign="center" // Align vertically in the middle

          align="left" // Align to the right
          iconSize={10} // Adjust icon size
          iconType="circle" // Use circle icons
          layout="horizontal" // Display legend items vertically
          wrapperStyle={{ marginLeft: "200px", marginTop: "50px" }} // Add margin to the left
        />
       <Tooltip
  content={({ active, payload }) => {
    if (!active || !payload || payload.length === 0) return null; // Prevent rendering invalid tooltip
    return (
      <div style={{ 
        padding: "8px", 
        backgroundColor: "#fff", 
        border: "", 
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
        {payload.map((entry, idx) => (
          <p key={idx} style={{ margin: "4px 0", color: "#333" }}>
            {entry.name}: {entry.value} days
          </p>
        ))}
      </div>
    );
  }}
/>
      </PieChart>
    </div>
  ))}
</div>
<style jsx="true">{
  `
  .legend-style {
  font-size: 12px; /* Adjust font size */
  color: #fff; /* Legend text color */
}

.legend-style .recharts-legend-item-text {
  margin-left: 100px; /* Space between icon and text */
}
  `}
  </style>


      {/* Search Bar */}
      <div className="relative w-full max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name, user ID..."
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
                  <td colSpan="6" className="text-center p-4">Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-red-500">Error: {error}</td>
                </tr>
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={index} className="border border-gray-200">
                    <td className="p-3 border border-gray-300">{user.id}</td>
                    <td className="flex items-center space-x-2">
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
                    <td className="p-3 border border-gray-300">{user.expiryDate || "DD/MM/YY"} </td>
                    <td className="p-3 border border-gray-300">{user.chatGroupName}</td>
                    <td className="p-3 border border-gray-300">{user.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4">No learners found</td>
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