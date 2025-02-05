import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import FileList from "./FilesFromUser";
// import Certificate121 from "../";
// import Certificate121 from "../../../assets/dataAnalatics";
// import IMG from "../../assets/WorkSpace.png";
import FooterPart from "../../Home/footer/Footer";
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
      name: "priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      status: "rejected",
    },
    {
      name: "priya",
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

  const handleDownload = (file, index) => {
    fetch(file.url)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.url.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
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

  const progressBarWidth = `${(Status / files.length) * 100}%`; // Calculate width based on Status

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold py-10 px-10 text-[#1e3a8a] text-center hover:underline">
        WorkSpace
      </h1>
      <p>{Status}</p>
      <div className="flex flex-col md:flex-row">
        <div className="px-10 ">
          <div className="p-5 border bg-white md:w-[500px] md:h-[250px] h-auto w-auto rounded text-gray-500">
            <div className="flex items-center">
              <div>
                <button
                  onClick={openBrowseProject}
                  href="#"
                  className="font-bold text-lg leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Browse your Projects
                </button>

                {isBrowseProjectOpen && (
                  <div className="fixed rounded-md inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                    <div className="relative w-auto max-w-3xl mx-auto my-6 overflow-y-auto max-h-full">
                      <div className="bg-[#023047] rounded-lgs">
                        <div className="text-white text-2xl p-2">
                          Browse Projects
                        </div>
                        <div className="text-white p-2">
                          Projects give you real-world challenges to solve with
                          industry tools, and produce work samples that help you
                          demonstrate your capabilities and stand out.
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg relative flex flex-col p-8">
                        <div className="mx-auto w-full h-[490px] max-w-[450px] bg-gray-100">
                          <form className="py-4 px-9" onSubmit={handleSubmit}>
                            <div className="mb-5">
                              <label
                                htmlFor="description"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                              >
                                Description of file:
                              </label>
                              <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Enter file description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>

                            <div className="mb-6 pt-4">
                              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                              </label>

                              <div
                                className={`relative bg-white flex min-h-[200px] items-center justify-center rounded-md border ${
                                  isDragging
                                    ? "border-solid border-[#6A64F1]"
                                    : "border-dashed border-[#e0e0e0]"
                                } p-12 text-center`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                              >
                                <input
                                  type="file"
                                  name="file"
                                  id="file"
                                  className="sr-only"
                                  onChange={handleFileChange}
                                />
                                <label
                                  htmlFor="file"
                                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                                >
                                  <div>
                                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                      {isDragging
                                        ? "Drop files here"
                                        : "Drag & drop files here"}
                                    </span>
                                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                      Or
                                    </span>
                                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                      Browse
                                    </span>
                                  </div>
                                </label>
                              </div>

                              {selectedFile && (
                                <div className="mt-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                  <div className="flex items-center justify-between">
                                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                      {selectedFile.name}
                                    </span>
                                    <button
                                      type="button"
                                      className="text-[#07074D]"
                                      onClick={() => setSelectedFile(null)}
                                    >
                                      <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>

                            <div>
                              <button
                                type="submit"
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                              >
                                Send File
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="flex mt-12 bg-gray-100 h-[480px] w-[500px] flex-col lg:w-4/6 sm:mx-auto sm:mb-2 -mx-2 p-4">
                          <p className="block text-xl font-semibold text-[#07074D]">
                            Tasks From Trainee
                          </p>
                          {files.map((file, index) => (
                            <div className="p-2 sm:w-1/2 w-full" key={index}>
                              <div
                                className="bg-gray-100 rounded flex p-4 h-full cursor-pointer items-center justify-between"
                                onClick={() => handleDownload(file, index)}
                              >
                                <div className="flex items-center">
                                  <FaArrowCircleDown className="w-[40px] h-[50px] mr-2" />
                                  <div className="flex flex-col">
                                    <span className="font-medium">
                                      {file.name}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                      {file.description}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2 ml-20">
                                  {fileStatuses[index] === "accepted" ? (
                                    <button
                                      className="bg-green-500 text-white px-3 py-1 rounded"
                                      onClick={(e) => handleAccept(index, e)}
                                    >
                                      Completed
                                    </button>
                                  ) : fileStatuses[index] === "rejected" ? (
                                    <button
                                      className="bg-red-500 text-white px-3 py-1 rounded"
                                      onClick={(e) => handleReject(index, e)}
                                    >
                                      Rejected
                                    </button>
                                  ) : (
                                    <>
                                      <button
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                        onClick={(e) => handleAccept(index, e)}
                                      >
                                        Completed
                                      </button>
                                      {/* <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={(e) => handleReject(index, e)}
                                      >
                                        Rejected
                                      </button> */}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-white">
                          <button
                            className="bg-blue-800 p-2 w-[100px] text-white hover:bg-black"
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
                  </div>
                )}
                <h2 className="text-lg font-semibold">
                  Showcase your skills to recruiters with job-relevant projects
                </h2>
                <p>
                  Add projects here to demonstrate your technical expertise and
                  ability to solve real-world problems.
                </p>

                <h1 className="text-2xl text-[#581c87] font-semibold">
                  Work Progress
                </h1>
                {/* <div className="w-full h-4 bg-gray-200 rounded-lg mt-4 relative">
                  <div
                    id="progressBarWidth"
                    className="h-full bg-blue-500 rounded-lg"
                    style={{
                      width: progressBarWidth,
                      transition: "width 0.5s",
                    }}
                  ></div>
                </div> */}
                <div className="w-full h-4 bg-gray-200 rounded-lg mt-4 relative">
                  <div
                    id="progressBarWidth"
                    className="h-full bg-blue-500 rounded-lg"
                    style={{
                      width: progressBarWidth,
                      transition: "width 0.5s",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>{/* <img src={IMG} alt="Workspace" /> */}</div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="grid md:lg:xl:grid-cols-2 grid-cols-1 gap-y-20 py-4 px-4">
          <div>
            <FileList files={uploadedFiles} />
          </div>
        </div>
      )}

      {/* <Certificate121 /> */}
      <FooterPart />
    </div>
  );
}

export default WSpace;
