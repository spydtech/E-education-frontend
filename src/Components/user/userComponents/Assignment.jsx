import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const assignments = [
  {
    id: 1,
    course: "Java",
    assignedBy: "Ruben Runte",
    assignedDate: "10/02/2025",
    dueDate: "20/02/2025",
    status: "New",
    approval: "Pending",
    description: "Complete the Java OOP concepts assignment.",
    file: "Java_Assignment.pdf",
  },
  {
    id: 2,
    course: "PHP",
    assignedBy: "Ruben Runte",
    assignedDate: "12/02/2025",
    dueDate: "22/02/2025",
    status: "Submitted",
    approval: "Pending",
    description: "Write a PHP script for CRUD operations.",
    file: "PHP_Assignment.pdf",
  },
];

const getStatusClass = (status) => {
  switch (status) {
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

const getApprovalClass = (approval) => {
  switch (approval) {
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
                <td className="py-3 px-4 ">{assignment.course}</td>
                <td className="py-3 px-4 ">{assignment.assignedBy}</td>
                <td className="py-3 px-4 ">{assignment.assignedDate}</td>
                <td className="py-3 px-4 ">{assignment.dueDate}</td>
                <td className="py-3 px-4 ">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(assignment.status)}`}>
                    {assignment.status}
                  </span>
                </td>
                <td className="py-3 px-4 ">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getApprovalClass(assignment.approval)}`}>
                    {assignment.approval}
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
