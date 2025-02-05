import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import FileList from "../../trainee/UserTask/FilesFromUser";
import Certificate121 from "../WorkSpace1/Certificate121";
// import Certificate121 from "../Profile/WorkSpace1/Certificate121";
// import IMG from "../../assets/WorkSpace.png";
// import FooterPart from "../Home/footer/Footer";
// import certificate from "../../../../../../../assetss/certficate.png";
// import certificate from "..";


import IMG from "../../../assets/wspace.png";
import Footer from "../../Home/footer/Footer";

import { FaArrowCircleDown } from "react-icons/fa";

function WSpace({ acceptedFilesCount, totalFiles }) {
  const files = [
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "accepted", // Add status to each file
    },
    {
      name: "radha",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "rejected",
    },
    {
      name: "krishna",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "accepted",
    },
    {
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
      type: "image",
      status: "rejected",
    },
  ];

  const [isBrowseProjectOpen, setIsBrowseProjectOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(7);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileStatuses, setFileStatuses] = useState(
    files.map((file) => file.status)
  );
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [Status, setStatus] = useState(0);
  const [selectedAction, setSelectedAction] = useState("");
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setUploadedFiles(storedFiles);
    setCompletedTasks(storedFiles.filter((file) => file !== null).length);
    const storedStatus = parseInt(localStorage.getItem("Status"), 10) || 0;
    setStatus(storedStatus);
  }, []);

  const openBrowseProject = () => {
    setIsBrowseProjectOpen(true);
  };

  const closeBrowseProject = () => {
    setIsBrowseProjectOpen(false);
  };

  const handleFileUpload = (index, file) => {
    if (file) {
      setUploadedFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = file;
        localStorage.setItem(
          "uploadedFiles",
          JSON.stringify(updatedFiles.filter((file) => file !== null))
        );
        return updatedFiles;
      });
      setCompletedTasks((prevCount) => prevCount + 1);
    }
  };

  const awardCertificate = () => {
    if (completedTasks === files.length) {
      alert(
        "Congratulations! You've completed all tasks and earned the certificate!"
      );
    }
  };

 

  const [activeTab, setActiveTab] = useState("uploadTasks");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handleDownload = (file) => {
    fetch(file.url)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name; // Ensure it downloads with the correct name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Remove the link after download
        window.URL.revokeObjectURL(url); // Clean up the object URL
      })
      .catch((error) => {
        console.error("Error downloading the file", error);
      });
  };

  const handleAction = (e, file) => {
    const action = e.target.value;
    setSelectedAction(action); // Update the state with the selected action

    if (action === "download") {
      handleDownload(file); // Trigger the download when the "download" option is selected
    } else {
      console.log(`Action "${action}" selected for file ${file.name}`);
    }
  };
  const handleAccept = (index, e) => {
    e.stopPropagation();
    setFileStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = "accepted";
      return newStatuses;
    });
    setStatus((prevStatus) => prevStatus + 1); // Increase Status count by 1
    localStorage.setItem("Status", Status); // Store Status in local storage
  };

  const handleReject = (index, e) => {
    e.stopPropagation();
    setFileStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[index] = "rejected";
      return newStatuses;
    });
    // setStatus((prevStatus) => prevStatus - 1); // Decrease Status count by 1
    localStorage.setItem("Status", Status); // Store Status in local storage
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Description:", description);
    console.log("Selected file:", selectedFile);
  };

  // const progressBarWidth = `${(Status / files.length) * 100}%`; // Calculate width based on Status

  return (
    <div className="">
      <Navbar />
     
      <div className="flex justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row justify-center  md:items-start items-center md:justify-between  p-4">
        <div className="p-4 border bg-white lg:w-[500px] w-[300px]  h-[340px]  mt-10  rounded-lg  shadow-sm-light shadow-[#0098f1]">
            <div className="flex items-center ">
              <div className=" h-[300px] space-y-16">
                <div className="">
                  <button
                    onClick={openBrowseProject}
                    href="#"
                    className="font-bold py-4 text-xl leading-none hover:underline bg-gradient-to-r from-[#0098f1] to-[#F19E22] bg-clip-text text-transparent transition duration-500 ease-in-out"
                  >
                    Browse your Projects
                  </button>

                  {isBrowseProjectOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
    <div className="relative w-full max-w-4xl p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-xl overflow-auto max-h-[90vh]">
      {/* Modal Header */}
      <div className="bg-[#0098f1] h-20 rounded-t-lg flex items-center px-4">
        <h1 className="text-white text-xl font-bold">Browse Projects</h1>
      </div>

      {/* Tab System */}
      <div className="p-4">
        {/* Tab Headers */}
        <div className="flex justify-between border-b border-gray-300 mb-4">
          <button
            className={`text-lg sm:text-xl font-medium px-4 py-2 border-b-2 transition-all duration-300 ${
              activeTab === "uploadTasks"
                ? "text-[#F6AC14] border-[#F6AC14]"
                : "text-gray-600 border-transparent"
            }`}
            onClick={() => handleTabChange("uploadTasks")}
          >
            Upload Tasks
          </button>
          <button
            className={`text-lg sm:text-xl font-medium px-4 py-2 border-b-2 transition-all duration-300 ${
              activeTab === "tasksFromTrainee"
                ? "text-[#F6AC14] border-[#F6AC14]"
                : "text-gray-600 border-transparent"
            }`}
            onClick={() => handleTabChange("tasksFromTrainee")}
          >
            Tasks From Trainee
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "uploadTasks" && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Description Input */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-[#0098f1] mb-2"
                >
                  Description of file:
                </label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter file description"
                  className="w-full rounded-md border-2 border-[#0098f1] py-2 px-4 text-base placeholder-[#0098f1] outline-none focus:border-[#0098f1] focus:ring-2 focus:ring-[#0098f1]"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-lg font-medium text-[#0098f1] mb-2">
                  Upload File
                </label>
                <div
                  className={`relative flex items-center justify-center h-32 border-2 rounded-md p-4 ${
                    isDragging
                      ? "border-solid border-[#6A64F1]"
                      : "border-dashed border-[#6A64F1]"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <div className="text-center">
                    <p className="text-lg font-medium text-[#0098f1]">
                      {isDragging ? "Drop files here" : "Drag & drop files here"}
                    </p>
                    <p className="text-sm text-gray-500">or</p>
                    <span className="inline-block mt-2 px-4 py-2 bg-[#0098f1] text-white rounded-md cursor-pointer">
                      Browse
                    </span>
                  </div>
                </div>

                {selectedFile && (
                  <div className="mt-4 p-4 bg-[#F5F7FB] rounded-md flex justify-between items-center">
                    <span className="text-[#0098f1] truncate">
                      {selectedFile.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedFile(null)}
                      className="text-[#0098f1] hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0098f1] text-white py-3 rounded-md hover:bg-[#0078c1]"
              >
                Send File
              </button>
            </form>
          )}

          {activeTab === "tasksFromTrainee" && (
            <div className="space-y-4">
              {files.map((file, index) => (
                <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-md cursor-pointer hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <FaArrowCircleDown className="text-[#0098f1]" />
                  <div>
                    <p className="text-base font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">{file.description}</p>
                  </div>
                </div>
                <select
                  className="p-2 rounded-md border border-[#0098f1] text-[#0098f1]"
                  onChange={(e) => handleAction(e, file)} // Pass the file to handleAction
                  value={selectedAction}
                >
                  <option value="" disabled>
                    Select Action
                  </option>
                  <option value="Accepted">Completed</option>
                  <option value="Rejected">Pending</option>
                  <option value="download">Download</option>
                </select>
              </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal Footer */}
      <div className="mt-4 flex justify-end">
        <button
          className="bg-[#0098f1] text-white py-2 px-4 rounded-md hover:bg-[#0078c1]"
          onClick={() => {
            closeBrowseProject();
            awardCertificate();
          }}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


                  <p className="lg:text-lg text-sm text-[#0098f1]">
                    Showcase your skills to recruiters with job-relevant
                    projects Add projects here to demonstrate your technical
                    expertise and ability to solve real-world problems.
                  </p>
                </div>
                <div className="py-4">
                  <span className="text-lg bg-gradient-to-r from-[#0098f1]  to-[#F19E22] bg-clip-text text-transparent font-semibold">
                    Work Progress
                  </span>
                  <div className="w-auto h-4 bg-[#0098f1] bg-opacity-30 rounded-lg mt-4 relative">
                    <div
                      id="progressBarWidth"
                      className="h-full bg-[#0098f1] rounded-lg"
                      style={{
                        // width: progressBarWidth,
                        transition: "width 0.5s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <img
              src={IMG}
              className="md:w-[500px] md:h-[500px] w-auto h-auto"
              alt="Workspace"
            />
          </div>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="grid md:lg:xl:grid-cols-2 grid-cols-1  gap-y-20 py-4 px-4">
          <div>
            <FileList files={uploadedFiles} />
          </div>
        </div>
      )}

      <Certificate121 />
      <Footer />
    </div>
  );
}

export default WSpace;
