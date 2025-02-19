import React from "react";
import { useParams, Link } from "react-router-dom";

const VideoStatus = () => {
  const { id } = useParams();

  // Mock video data (Replace with actual API call)
  const video = {
    id,
    title: "Video’s Title La saeta, al final, del tiempo clava, un alma enamorada.",
    author: "E Education",
    group: "Java",
    status: id === "1002" ? "Verifying" : "Published",
    description:
      "Every line of code that runs in Java must be inside a class. And the class name should always start with an uppercase first letter. In our example, we named the class Main.",
    views: "1,55,000",
  };

  return (
    <div className="p-8 bg-white  max-w-6xl mx-auto font-poppins">
      <Link to="/traineedashbord/uploadsession" className="text-blue-500 font-medium">← Back</Link>

      <div className="grid grid-cols-2 gap-6 mt-4">
        {/* Left Side - Video Details */}
        <div>
          <label className="text-gray-700 font-semibold">Video Title</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            value={video.title}
            readOnly
          />

          <label className="text-gray-700 font-semibold mt-4 block">Author</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            value={video.author}
            readOnly
          />

          <label className="text-gray-700 font-semibold mt-4 block">Status</label>
          <input
            type="text"
            className={`w-full border rounded-md p-2 mt-1 font-semibold ${
              video.status === "Published" ? "text-green-600" : "text-yellow-600"
            }`}
            value={video.status}
            readOnly
          />

          <label className="text-gray-700 font-semibold mt-4 block">Selected Group</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            value={video.group}
            readOnly
          />

          <label className="text-gray-700 font-semibold mt-4 block">Video Description</label>
          <textarea
            className="w-full border rounded-md p-2 mt-1 h-24"
            value={video.description}
            readOnly
          />
        </div>

        {/* Right Side - Video Display & Status */}
        <div>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Display uploaded video</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600">⏱ HH:MM:SS</span>
            <span className="font-semibold text-gray-700">👁 {video.views}</span>
          </div>

          {/* Status Steps */}
          <div className="mt-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-gray-700">Content Submitted by Trainer</span>
            </div>
            <div className="border-l-2 border-gray-300 ml-2 h-6"></div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-gray-700">Content Reviewed By Admin</span>
            </div>
            <div className="border-l-2 border-gray-300 ml-2 h-6"></div>
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full ${
                video.status === "Published" ? "bg-green-500" : "bg-gray-300"
              }`}></div>
              <span className="ml-2 text-gray-700">Content Approved and Published</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStatus;
