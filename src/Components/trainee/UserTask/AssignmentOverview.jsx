import React, { useState, useEffect } from "react";
import { Download, ChevronLeft } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

const AssignmentOverview = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const task = location.state?.task || {};
  const jwt = localStorage.getItem("jwt"); // Retrieve JWT token


  const [taskStatus, setTaskStatus] = useState(task.taskStatus || "Pending");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [assignment, setAssignment] = useState({
    assignmentDescription: "",
    submittedOn: "",
    files: [],
  });
  
  const handleDownload = (base64String) => {
    try {
      const byteCharacters = atob(base64String); // Decode Base64
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" }); // Adjust MIME type if necessary
      const url = URL.createObjectURL(blob);
  
      // Create a link and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "submitted_assignment.pdf"; // Name the file
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  
      // Revoke the Blob URL to free memory
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  
  

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
  
     // Retrieve JWT token
  
    try {
      await axios.put(
        `${API_BASE_URL}/api/task/task/approval/by-trainee`, // Use PUT instead of POST
        null, // No request body since we are using params
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`, // Attach token
          },
          params: { // Send taskId and taskStatus as query parameters
            taskId: id,
            taskStatus: task.users?.[0]?.status,
          },
        }
      );
  
      setIsSubmitting(false);
      alert("Status updated successfully!");
    } catch (err) {
      setError("Failed to update status. Try again.");
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="p-6 bg-white   max-w-6xl mx-auto font-poppins">
      {/* Header */}
      <div className="flex items-center mb-6">
      <ChevronLeft className="w-6 h-6 cursor-pointer text-gray-600" onClick={() => navigate("/traineedashbord/reports")} />
        <h2 className="ml-2 text-xl font-semibold">Overview</h2>
      </div>

      {/* Submission Status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-gray-700 text-lg">Submission Status -</span>
          <span className="ml-2 px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-600">
          {task.users?.[0]?.submissionStatus || "N/A"}
          </span>
        </div>

        {/* Approve Task Dropdown */}
        <div>
          <select
            value={taskStatus}
            onChange={handleStatusChange}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-600"
          >
            <option value="Pending">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label className="text-gray-700 font-medium">Assignment Description</label>
        <textarea
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          rows="4"
          value={task.assignmentDescription}
          readOnly
        />
      </div>

      {/* Submitted On */}
      <div className="mb-4">
        <label className="text-gray-700 font-medium">Submitted On</label>
        <input
          type="text"
          value={task.users?.[0]?.createdAt}
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          readOnly
        />
      </div>

      {/* Attached Documents */}
<div className="mb-6">
  <label className="text-gray-700 font-medium">Attached Documents</label>
  {task.users?.[0]?.submittedFile ? (
    <div className="flex items-center justify-between p-3 mt-2 border border-gray-300 rounded-md">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
          alt="PDF Icon"
          className="w-6 h-6"
        />
        <div className="ml-3">
          <p className="text-gray-800 font-medium">Submitted File</p>
          <p className="text-sm text-gray-500">{task.users?.[0]?.size} KB</p>
        </div>
      </div>
      <button
        onClick={() => handleDownload(task.users[0].submittedFile)}
        className="flex items-center text-gray-500 cursor-pointer hover:text-teal-600"
      >
        <Download className="w-5 h-5" />
      </button>
    </div>
  ) : (
    <p className="text-gray-500">No attached documents</p>
  )}
</div>



      {/* Save Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        {isSubmitting ? "Saving..." : "Save"}
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default AssignmentOverview;
