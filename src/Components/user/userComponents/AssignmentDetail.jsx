import { useState } from "react";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AssignmentDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assignment = location.state; // Retrieve passed data

  const [answer, setAnswer] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  if (!assignment) {
    return <div className="p-6 text-red-500">No assignment selected.</div>;
  }

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle assignment submission
  const handleSubmit = async () => {
    if (!answer.trim() && !file) {
      setMessage("Please provide an answer or attach a file.");
      return;
    }

    const formData = new FormData();
    formData.append("taskId", assignment.id); // Ensure task ID is passed correctly
    formData.append("answer", answer);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/task/task/submitted/by-user",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Include JWT token
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error submitting task:", error);
      setMessage("Failed to submit assignment.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
        <svg
          onClick={() => navigate("/user/assignment")}
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M17.5 20.5L12.5 15.5L17.5 10.5"
            stroke="black"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>My Assignments</span>
      </h2>

      <div className="mb-4">
        <label className="block font-medium">Assignment Description</label>
        <textarea
          className="w-full p-3 border rounded-lg bg-gray-100"
          readOnly
          value={assignment.assignmentDescription}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium">Assignment Date</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-gray-100"
            readOnly
            value={assignment.assignmentDate}
          />
        </div>
        <div>
          <label className="block font-medium">Due Date</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-gray-100"
            readOnly
            value={assignment.dueDate}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Assigned By</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg bg-gray-100"
          readOnly
          value={assignment.trainerName}
        />
      </div>

      {/* Download File Section */}
      {assignment.file && (
        <div className="mb-4">
          <label className="block font-medium">Attached Documents</label>
          <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-100">
            <FaFilePdf className="text-red-500 text-2xl" />
            <span className="flex-1 text-sm">{assignment.file}</span>
            <a
              href={`http://localhost:8080/api/task/download/${assignment.id}`}
              download
              className="text-gray-500 hover:text-black cursor-pointer"
            >
              <FaDownload />
            </a>
          </div>
        </div>
      )}

      <hr className="my-6 border-gray-300" />

      {/* Answer Input */}
      <div className="mb-4">
        <label className="block font-medium">
          My Answer <span className="text-gray-500 text-sm">(Optional)</span>
        </label>
        <textarea
          className="w-full p-3 border rounded-lg bg-white"
          placeholder="Write your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      {/* File Upload */}
      <div className="mb-4">
        <label className="block font-medium">Attach Documents</label>
        <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-300 border-dashed rounded-lg text-gray-500 text-center">
          <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
          <label htmlFor="fileUpload" className="cursor-pointer">
            <span className="text-xl">📂</span>
            <p>Select a file or drag and drop here</p>
            <p className="text-xs text-gray-500">
              JPG, PNG, or PDF, file size no more than 10MB
            </p>
            <button 
            onChange={handleFileChange}
            className="mt-3 px-4 py-2 bg-gray-300 rounded-lg text-gray-700">
              Select file
            </button>
          </label>
        </div>
        {file && <p className="text-sm text-green-600 mt-2">{file.name} selected</p>}
      </div>

      {/* Submission Button */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Submit Assignment
        </button>
      </div>

      {/* Message Display */}
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default AssignmentDetails;
