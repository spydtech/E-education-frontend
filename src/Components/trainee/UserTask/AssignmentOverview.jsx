import React, { useState } from "react";
import { Download, ChevronLeft } from "lucide-react";

const AssignmentOverview = () => {
  const [submissionStatus, setSubmissionStatus] = useState("Submitted");

  return (
    <div className="p-6 bg-white shadow-md rounded-lg font-poppins">
      {/* Header */}
      <div className="flex items-center mb-4">
        <ChevronLeft className="w-6 h-6 cursor-pointer" />
        <h2 className="ml-2 text-xl font-semibold">Overview</h2>
      </div>

      {/* Submission Status */}
      <div className="flex items-center mb-4">
        <span className="text-gray-700 text-lg">Submission Status -</span>
        <span
          className={`ml-2 px-3 py-1 text-sm font-medium rounded-full ${
            submissionStatus === "Submitted"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {submissionStatus}
        </span>
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label className="text-gray-700 font-medium">Assignment Description</label>
        <textarea
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          rows="4"
          defaultValue="Distinctio aut saepe. Quasi quam consequatur et rem. Tenetur odit sed sint nemo quo voluptatem et sequi sed. Repudiandae expedita aut ad sed omnis voluptate."
        />
      </div>

      {/* Submitted On */}
      <div className="mb-4">
        <label className="text-gray-700 font-medium">Submitted On</label>
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
      </div>

      {/* Attached Documents */}
      <div className="mb-6">
        <label className="text-gray-700 font-medium">Attached Documents</label>
        <div className="flex items-center justify-between p-3 mt-2 border border-gray-300 rounded-md">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt="PDF Icon"
              className="w-6 h-6"
            />
            <div className="ml-3">
              <p className="text-gray-800 font-medium">File Title.pdf</p>
              <p className="text-sm text-gray-500">313 KB • 31 Aug, 2024</p>
            </div>
          </div>
          <Download className="w-5 h-5 text-gray-500 cursor-pointer hover:text-teal-600" />
        </div>
      </div>

      {/* Save Button */}
      <button className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Save
      </button>
    </div>
  );
};

export default AssignmentOverview;
