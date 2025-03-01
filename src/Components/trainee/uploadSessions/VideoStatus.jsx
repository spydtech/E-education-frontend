import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../../Config/api";

const VideoStatus = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Video ID is missing!");
      return;
    }

    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      setError("No authentication token found!");
      return;
    }

    fetch(`${API_BASE_URL}/api/video/getAll/VideoSessions/trainer`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        const videoData = data.find((v) => v.id.toString() === id);
        if (!videoData) {
          throw new Error("Video not found!");
        }

        console.log("Extracted video object:", videoData);

        if (!videoData.videoBase64) {
          throw new Error("Video data (Base64) is missing or invalid.");
        }

        const videoUrl = `data:${videoData.videoFileType};base64,${videoData.videoBase64}`;
        setVideo(videoData);
        setVideoUrl(videoUrl);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching video:", error);
      });

    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [id]);

  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!video) return <div className="text-center text-gray-500">Loading video...</div>;

  return (
    <div className="p-8 bg-white max-w-6xl mx-auto font-poppins">
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
              video.status === "PUBLISHED" ? "text-green-600" : video.status === "DELETED" ? "text-red-600" : "text-yellow-600"
            }`}
            value={video.status}
            readOnly
          />

          <label className="text-gray-700 font-semibold mt-4 block">Selected Group</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            value={video.groupName}
            readOnly
          />

          <label className="text-gray-700 font-semibold mt-4 block">Video Description</label>
          <textarea
            className="w-full border rounded-md p-2 mt-1 h-24"
            value={video.videoDescription}
            readOnly
          />
        </div>

        {/* Right Side - Video Display & Status */}
        <div>
          {videoUrl ? (
            <video controls className="w-full h-40 border rounded-lg">
              <source src={videoUrl} type={video.videoFileType} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Loading video...</span>
            </div>
          )}

          {/* ✅ Dynamic Status UI */}
          <div className="mt-6">
            <p className="text-gray-700 font-semibold">Status</p>
            <div className="flex flex-col mt-2 relative">
              {/* Content Submitted */}
              <div className="flex items-center">
                <div className={`w-4 h-4 border-2 ${
                  ["VERIFYING", "PUBLISHED", "DELETED"].includes(video.status) ? "bg-green-500 border-green-500" : "border-gray-400"
                } rounded-full`}></div>
                <span className="ml-2 text-gray-700">Content Submitted by Trainer</span>
              </div>
              <div className="border-l-2 border-dashed border-gray-400 h-6 ml-2"></div>

              {/* Content Under Review */}
              <div className="flex items-center">
                <div className={`w-4 h-4 border-2 ${
                  ["VERIFYING", "PUBLISHED", "DELETED"].includes(video.status) ? "bg-green-500 border-green-500" : "border-gray-400"
                } rounded-full`}></div>
                <span className="ml-2 text-gray-700">Content Under Review By Admin</span>
              </div>
              <div className="border-l-2 border-dashed border-gray-400 h-6 ml-2"></div>

              {/* Content Approved and Published */}
              <div className="flex items-center">
                <div className={`w-4 h-4 border-2 ${
                  video.status === "PUBLISHED" ? "bg-green-500 border-green-500" : "border-gray-400"
                } rounded-full`}></div>
                <span className="ml-2 text-gray-700">Content Approved and Published</span>
              </div>
              <div className="border-l-2 border-dashed border-gray-400 h-6 ml-2"></div>

              {/* Content Deleted By Admin */}
              <div className="flex items-center">
                <div className={`w-4 h-4 border-2 ${
                  video.status === "DELETED" ? "bg-red-500 border-red-500" : "border-gray-400"
                } rounded-full`}></div>
                <span className="ml-2 text-gray-700">Content Deleted By Admin</span>
              </div>
            </div>
          </div>
          {/* ✅ End of Dynamic Status UI */}
        </div>
      </div>
    </div>
  );
};

export default VideoStatus;
