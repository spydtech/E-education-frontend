
import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const FileFromUser = ({ setSelectedUsers }) => {
  const [files, setFiles] = useState([
    {
      name: "Priya",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsEH9evsckWldIq8ca1TW74RGPc2FoxWHmg&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Ashwini",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0mQ6LNpCev-YtUXUff0T7gQn6aW_S7FD3A&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Anjani",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSq5Nz20K1tTq5wvQKkWjnNvHAK05jE-EtQ&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Prem",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Prem",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Prem",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Prem",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
      accepted: false,
    },
    {
      name: "Prem",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOG5A9de3kG4I_OsnRtb9iX6e7UuRy9Wrgg&s",
      type: "image",
      accepted: false,
    },
  ]);

  const handleDownload = (file) => {
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

  const handleAction = (index, action) => {
    const selectedFile = files[index];
    let updatedFiles = [...files];
    updatedFiles.splice(index, 1); // Remove the file from the current list
    setFiles(updatedFiles);

    if (action === "Accepted") {
      // Add to accepted files in localStorage
      const acceptedFiles = JSON.parse(localStorage.getItem("acceptedFiles")) || [];
      localStorage.setItem("acceptedFiles", JSON.stringify([...acceptedFiles, { ...selectedFile, accepted: true }]));

      // Call the download function for accepted files
      handleDownload(selectedFile);
    } else if (action === "Rejected") {
      // Add to rejected files in localStorage
      const rejectedFiles = JSON.parse(localStorage.getItem("rejectedFiles")) || [];
      localStorage.setItem("rejectedFiles", JSON.stringify([...rejectedFiles, { ...selectedFile, rejected: true }]));
    }
  };
  const themes= localStorage.getItem("theme")
  return (
    <>
      <div className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} p-4`}>
        <h1 className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-[#204349] font-semibold text-2xl`}>
          <p className={` ${themes === "dark" ? "bg-black w-44 text-white border-white" : "text-[#204349]"} border-b-2 text-[20px] border-[#204349]`}>
            Tasks From Trainee
          </p>
        </h1>
     

      {/* Set a max height, enable scroll, and hide the scrollbar */}
      <div className={`  max-w-full  md:p-1 rounded-lg md:w-[500px] h-[400px] overflow-y-auto scrollbar-hide`}>
        <div className="flex flex-col gap-4">
          {files.map((file, index) => (
            <div
              className="rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-transform transform"
              key={index}
            >
              <div className="flex items-center gap-4 flex-grow">
                <FaArrowCircleDown className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-[#204349] w-8 h-8`} />
                <div className="flex flex-col flex-grow">
                  <h1 className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-lg font-medium text-[#204349]`}>
                    {file.name}
                  </h1>
                  <span className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-[#204349] text-sm`}>
                    {file.description || "No description"}
                  </span>
                </div>
              </div>
              <select
                className="p-2 rounded-md border focus:border-[#204349] border-[#204349] focus:ring text-[#204349]"
                onChange={(e) => handleAction(index, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>Select Action</option>
                <option value="Accepted">Accept</option>
                <option value="Rejected">Reject</option>
              </select>
            </div>
          ))}
        </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} text-[#204349] hover:underline`}>View All</Link>
        </div>
      </div>
    </>
  );
};

export default FileFromUser;
