
import React, { useState } from "react";

function CourseCompletionTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsToShow, setRowsToShow] = useState(10);

  const data = [
    {
      courseName: "React Basics",
      issueDate: "2023-01-01",
      expiryDate: "2024-01-01",
      username: "user1",
      firstName: "John",
      lastName: "Doe",
    },
    
    {
      courseName: "AWS Basics",
      issueDate: "2024-08-20",
      expiryDate: "2025-08-20",
      username: "user20",
      firstName: "Sam",
      lastName: "Purple",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const themes= localStorage.getItem("theme")

  return (
    <div className={` ${themes==="dark"&&"bg-black"} p-4 `}>
      <h2 className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} text-xl text-[#204349] font-bold mb-4`}>
        Course Completion Within 30 Days
      </h2>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <input
          type="text"
          className="border-[#204349] border-2 focus:ring-[#204349]  p-2 focus:border-[#204349] rounded-3xl placeholder:text-[#204349] w-full md:w-auto"
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          className="border-[#204349] border-2 focus:ring-[#204349] focus:border-[#204349] p-2 text-[#204349] placeholder:text-[#204349] rounded w-full md:w-auto"
          placeholder="Show rows"
          value={rowsToShow}
          onChange={(e) => setRowsToShow(Number(e.target.value))}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full  border  ">
          <thead>
            <tr>
              <th className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border  bg-[#204349] text-white px-4 py-4`}>Course Name</th>
              <th className={` ${themes === "dark" ? "bg-black text-white border-white" : ""}border  bg-[#204349] text-white px-4 py-4`}>Issue Date</th>
              <th className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border  bg-[#204349] text-white px-4 py-4`}>Expiry Date</th>
              <th className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border  bg-[#204349] text-white px-4 py-4`}>Username</th>
              <th className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border  bg-[#204349] text-white px-4 py-4`}>First Name</th>
              <th className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border  bg-[#204349] text-white px-4 py-4`}>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, rowsToShow).map((item, index) => (
              <tr key={index} className="border">
                <td className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border-white bg-[#204349] text-center text-[#204349] bg-opacity-10 px-4 py-2`}>{item.courseName}</td>
                <td className={`${themes === "dark" ? "bg-black text-white border-white" : ""}border-white bg-[#204349] text-center text-[#204349] bg-opacity-10  px-4 py-2`}>{item.issueDate}</td>
                <td className={ `${themes === "dark" ? "bg-black text-white border-white" : ""}border-white bg-[#204349] text-center text-[#204349] bg-opacity-10  px-4 py-2`}>{item.expiryDate}</td>
                <td className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border-white bg-[#204349] text-center text-[#204349] bg-opacity-10  px-4 py-2`}>{item.username}</td>
                <td className={` ${themes === "dark" ? "bg-black text-white border-white" : ""} border-white bg-[#204349] text-center text-[#204349] bg-opacity-10  px-4 py-2`}>{item.firstName}</td>
                <td className={`  ${themes === "dark" ? "bg-black text-white border-white" : ""}border-white  bg-[#204349] text-center text-[#204349] bg-opacity-10 px-4 py-2`}>{item.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseCompletionTable;
