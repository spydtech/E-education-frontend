

import React, { useState } from "react";
import FileFromUser from "./FilesFromUser";
import TraineeTable from "./TraineeTable";
function FileUploadForm() {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

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
  const themes= localStorage.getItem("theme")
  return (
    <>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1  lg:grid-cols-2 lg:px-8">
      {/* Container for the File Upload Form */}
      <div className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} flex-1  rounded-lg  border-[#204349] border-2 border-solid shadow-lg`}>
        <div className="p-4">
          <h1 className="text-[#204349] font-semibold text-lg mb-4">
            <h1 className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} border-b-2 border-[#204349] w-28`}>Upload Tasks</h1>
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="description"
                className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} block text-base mb-2 font-medium text-[#204349]`}
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
                className="w-full rounded-md border-[#204349] focus:outline-none focus:ring-[#204349]  placeholder:text-[#204349] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#204349] focus:shadow-md"
              />
            </div>
  
            <div>
              <label className={` ${themes === "dark" ? "bg-black text-white border-white" : "text-[#204349]"} block text-xl font-semibold text-[#204349] mb-4`}>
                Upload File
              </label>
  
              <div
                className={`relative bg-white flex min-h-[200px] items-center justify-center rounded-md border ${
                  isDragging
                    ? "border-solid border-[#204349]"
                    : "border-dashed border-[#204349]"
                } p-6 text-center`}
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
                    <span className="mb-2 block text-xl font-semibold text-[#204349]">
                      {isDragging ? "Drop files here" : "Drag & drop files here"}
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#204349]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-white bg-[#204349]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
  
              {selectedFile && (
                <div className="mt-5 rounded-md bg-[#F5F7FB] py-4 px-6">
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
                className="hover:shadow-form w-full rounded-md bg-[#204349] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
  
      {/* FileFromUser Component */}
      <div className={`  flex-1 bg-white rounded-lg  border-[#204349] border-2 border-solid`}>
        <FileFromUser />
      </div> 
     
    </div>
    <div>
        <TraineeTable/>
      </div>
    </>
    
  );
 
  
}

export default FileUploadForm;
