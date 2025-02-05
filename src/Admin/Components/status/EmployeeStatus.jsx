import React, { useState, useEffect } from "react";

const EmployeeStatus = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tableData")) || [];
    setTableData(storedData);
  }, []);

  // Function to format ISO time to 24-hour format (HH:mm)
  const formatTime = (isoTime) => {
    if (!isoTime) return "-";
    const date = new Date(isoTime);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Employee Status</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-[#153243] text-white">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Login Time</th>
            <th className="px-4 py-2 border">Logout Time</th>
            <th className="px-4 py-2 border">Duration</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-2 border">{row.id}</td>
                <td className="px-4 py-2 border">{row.name}</td>
                <td className="px-4 py-2 border">{row.email}</td>
                <td className="px-4 py-2 border">{row.date || "-"}</td>
                <td className="px-4 py-2 border">
                  {formatTime(row.loginTime)}
                </td>
                <td className="px-4 py-2 border">
                  {formatTime(row.logoutTime)}
                </td>
                <td className="px-4 py-2 border">{row.duration || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-4 py-2 text-center border">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeStatus;
