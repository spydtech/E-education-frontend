import React, { useEffect, useState } from "react";

const TaskModal = ({ task, onClose }) => {
  const [participants, setParticipants] = useState([]);

 useEffect(() => {
  if (!task || typeof task !== "object") {
    console.error("Invalid task object:", task);
    return;
  }

  let parsedParticipants = [];

  if (Array.isArray(task.users)) {
    parsedParticipants = task.users;
  } else if (typeof task.users === "string") {
    try {
      parsedParticipants = JSON.parse(task.users);
      if (!Array.isArray(parsedParticipants)) {
        console.warn("Parsed participants is not an array:", parsedParticipants);
        parsedParticipants = [];
      }
    } catch (error) {
      console.error("Error parsing participants JSON:", error);
      parsedParticipants = [];
    }
  } else {
    console.warn("Participants is not an array or string:", task.users);
    parsedParticipants = [];
  }

  setParticipants(parsedParticipants);
}, [task]);

  // Function to handle document download
  const handleDownload = (filename, base64) => {
    try {
      if (!base64) {
        console.error("Base64 data is missing for", filename);
        return;
      }

      // Convert base64 to Blob
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length).fill(null).map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray]);

      // Create a download link
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-poppins">
      <div className="bg-white p-6 rounded-lg w-[900px] h-[600px] shadow-lg">
        <h2 className="text-xl font-bold mb-4">Assignment Details</h2>

        <div className="mb-4">
          <label className="block font-semibold">Assignment Description</label>
          <textarea
            className="w-full p-2 "
            readOnly
            value={task?.assignmentDescription || "No description available"}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold">Assignment Date</label>
            <input
              type="text"
              className="w-full p-2  border-[#989898] rounded-md"
              readOnly
              value={task?.assignmentDate || "N/A"}
            />
          </div>
          <div>
            <label className="block font-semibold">Due Date</label>
            <input
              type="text"
              className="w-full p-2 border border-[#989898] rounded-md"
              readOnly
              value={task?.dueDate || "N/A"}
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Selected Group and Members</h3>
          <p className="font-medium text-gray-700">{task?.chatGroup || "No group assigned"}</p>
          <table className="w-full mt-2  text-center">
            <thead>
              <tr className="bg-white">
                <th className=" p-2">User ID</th>
                <th className=" p-2">Name</th>
                <th className=" p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(participants) && participants.length > 0 ? (
                participants.map((participant, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className=" p-2">{participant?.userId || "N/A"}</td>
                    <td className=" p-2">{participant?.fullName || "Unknown"}</td>
                    <td className=" p-2">{participant?.email || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-gray-500 p-2">
                    No participants available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      {/* Attached Documents */}
<div className="mb-4">
  <h3 className="font-semibold">Attached Documents</h3>
  {task?.documents && Array.isArray(task.documents) && task.documents.length > 0 ? (
    <ul className="list-disc pl-4">
      {task.documents.map((doc, index) => (
        <li
          key={index}
          className="text-blue-500 underline cursor-pointer"
          onClick={() => handleDownload(doc.filename, doc.base64)}
        >
          {doc.filename}
        </li>
      ))}
    </ul>
  ) : task?.file ? (
    <p
      className="text-blue-500 underline cursor-pointer"
      onClick={() => handleDownload("downloaded_file.pdf", task.file)}
    >
      Download Attached File
    </p>
  ) : (
    <p className="text-gray-600">No attached documents</p>
  )}
</div>


        <div className="text-right">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
