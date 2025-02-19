import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react";

const VideoApproval = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const videoData = [
    {
      id: 1002,
      author: "E - Education",
      title: "Video’s Title La saeta, al final, del tiempo clava, un alma enamorada. Una",
      group: "Java",
      status: "New",
      description:
        "Every line of code that runs in Java must be inside a class. And the class name should always start with an uppercase first letter. In our example, we named the class Main.",
    },
  ];

  const [video, setVideo] = useState(null);

  useEffect(() => {
    const foundVideo = videoData.find((v) => v.id.toString() === id);
    if (foundVideo) {
      setVideo(foundVideo);
    }
  }, [id]);

  const handleApprove = () => {
    alert(`Video "${video.title}" has been approved!`);
    navigate("/admin/videodashboard");
  };

  if (!video) {
    return <div className="p-6 text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg flex flex-col">
      <button onClick={() => navigate(-1)} className="text-gray-600 mb-4">
        <ArrowLeft size={24} />
      </button>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <label className="text-gray-700">Video Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mt-1"
            value={video.title}
            disabled
          />

          <label className="text-gray-700 mt-4">Author</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mt-1"
            value={video.author}
            disabled
          />

          <label className="text-gray-700 mt-4">Status</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mt-1 text-purple-600"
            value={video.status}
            disabled
          />

          <label className="text-gray-700 mt-4">Selected Group</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mt-1"
            value={video.group}
            disabled
          />

          <label className="text-gray-700 mt-4">Video Description</label>
          <textarea
            className="w-full p-2 border rounded-md mt-1"
            rows="4"
            value={video.description}
            disabled
          ></textarea>
        </div>
        
        {/* Right Section */}
        <div>
          <div className="w-full h-48 border flex items-center justify-center text-gray-400">
            Display uploaded video
          </div>
          
          <div className="mt-4 text-gray-700">
            <p className="text-sm flex items-center gap-2">
              ⏰ HH:MM:SS
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 font-semibold">Status</p>
            <div className="mt-2">
              <p className="text-green-600">● Content Submitted by Trainer</p>
              <p className="text-green-600">● Content Under Review By Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
        <button
          onClick={handleApprove}
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Approve and Publish
        </button>
      </div>
    </div>
  );
};

export default VideoApproval;
