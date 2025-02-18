import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const assignments = [
//   {
//     id: 1,
//     course: "Java",
//     assignedBy: "Ruben Runte",
//     assignedDate: "10/02/2025",
//     dueDate: "20/02/2025",
//     status: "New",
//     approval: "Pending",
//     description: "Complete the Java OOP concepts assignment.",
//     file: "Java_Assignment.pdf",
//   },
//   {
//     id: 2,
//     course: "PHP",
//     assignedBy: "Ruben Runte",
//     assignedDate: "12/02/2025",
//     dueDate: "22/02/2025",
//     status: "Submitted",
//     approval: "Pending",
//     description: "Write a PHP script for CRUD operations.",
//     file: "PHP_Assignment.pdf",
//   },
// ];

const getStatusClass = (submissionStatus) => {
  switch (submissionStatus) {
    case "New":
      return "bg-yellow-200 text-yellow-700";
    case "Submitted":
      return "bg-green-200 text-green-700";
    case "Pending":
      return "bg-red-200 text-red-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};


const getApprovalClass = (taskStatus) => {
  switch (taskStatus) {
    case "Approved":
      return "bg-green-200 text-green-700";
    case "Pending":
      return "bg-yellow-200 text-yellow-700";
    case "Rejected":
      return "bg-red-200 text-red-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

const Assignment = () => {
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const jwt = localStorage.getItem("jwt");
  
 // Fetch assignments from API
 useEffect(() => {
  const fetchAssignments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/task/getAllTasks/by-user", {
        headers: {
          Authorization: `Bearer ${jwt}`, // Include JWT token if needed
        },
      });
      setAssignments(response.data); // Assuming API returns an array of assignments
    } catch (err) {
      console.error("Error fetching assignments:", err);
      setError("Failed to load assignments.");
    } finally {
      setLoading(false);
    }
  };

  fetchAssignments();
}, []);


  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-center">
          <thead className="bg-white text-gray-600 border-b-black">
            <tr>
              <th className="py-3 px-4 ">Course</th>
              <th className="py-3 px-4 ">Assigned By</th>
              <th className="py-3 px-4 ">Assigned Date</th>
              <th className="py-3 px-4 ">Due Date</th>
              <th className="py-3 px-4 ">Status</th>
              <th className="py-3 px-4 ">Approval</th>
              <th className="py-3 px-4 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr
                key={assignment.id}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/user/assignment/viewassignments", { state: assignment })}
              >
                <td className="py-3 px-4 ">{assignment.chatGroup}</td>
                <td className="py-3 px-4 ">{assignment.trainerName}</td>
                <td className="py-3 px-4 ">{assignment.assignmentDate}</td>
                <td className="py-3 px-4 ">{assignment.dueDate}</td>
                <td className="py-3 px-4 ">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(assignment.submissionStatus)}`}>
                    {assignment.submissionStatus}
                  </span>
                </td>
                <td className="py-3 px-4 ">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getApprovalClass(assignment.taskStatus)}`}>
                    {assignment.taskStatus}
                  </span>
                </td>
                <td className="py-3 px-4  text-center">
                  <FaExternalLinkAlt
                    className="text-gray-500 hover:text-black cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent row click event
                      navigate("/user/assignment/viewassignments", { state: assignment });
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignment;
