import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react"; 
import { API_BASE_URL } from "../../../Config/api";

const VideoApproval = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoDuration, setVideoDuration] = useState("00:00:00");

  console.log("API_BASE_URL:", API_BASE_URL);

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setError("Unauthorized. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/video/getAll/VideoSessions/admin`, {
        method: "GET",
        headers: { Authorization: `Bearer ${jwt.trim()}` },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch video details.");
      }

      const data = await response.json();
      const videoData = data.find((v) => v.id.toString() === id);

      if (!videoData) {
        setError("Video not found.");
        setLoading(false);
        return;
      }

      let finalVideoUrl = "";
      if (videoData.videoBase64) {
        finalVideoUrl = `data:${videoData.videoFileType};base64,${videoData.videoBase64}`;
      } else {
        setError("⚠️ No valid video source available.");
        setLoading(false);
        return;
      }

      setVideo({
        id: videoData.id,
        title: videoData.title,
        author: videoData.author || "Unknown",
        group: videoData.groupName,
        status: videoData.status,
        description: videoData.videoDescription,
      });

      setVideoUrl(finalVideoUrl);
        // ✅ Calculate duration when video is loaded
    const videoElement = document.createElement("video");
    videoElement.src = finalVideoUrl;
    videoElement.preload = "metadata";
    videoElement.onloadedmetadata = () => {
      URL.revokeObjectURL(videoElement.src); // Free memory
     setVideoDuration(formatDuration(videoElement.duration));
    };
      setLoading(false);
    } catch (error) {
      setError(" Error fetching video details.");
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setError("Unauthorized. Please log in.");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/video/update/status?videoId=${video.id}&videoStatus=PUBLISHED`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${jwt.trim()}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update video status.");
      }

      alert("Video approved and published!");
      fetchVideoDetails(); // Refresh the video details
    } catch (error) {
      setError(" Error updating video status.");
    }
  };

  const handleDelete = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setError("Unauthorized. Please log in.");
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:8080/api/video/update/status?videoId=${video.id}&videoStatus=DELETED`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${jwt.trim()}` },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to delete video.");
      }
  
      alert("Video deleted successfully!");
      fetchVideoDetails(); // Refresh page to move video to deleted content
    } catch (error) {
      setError("Error deleting video.");
    }
  };
  

  const handleRestore = async () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setError("Unauthorized. Please log in.");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/video/update/status?videoId=${video.id}&videoStatus=NEW`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${jwt.trim()}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to restore video.");
      }

      alert("Video restored successfully!");
      fetchVideoDetails(); // Refresh the video details
    } catch (error) {
      setError(" Error restoring video.");
    }
  };

  const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return [hrs, mins, secs].map((unit) => String(unit).padStart(2, "0")).join(":");
  };
  

  if (loading) return <div className="p-6 text-center text-gray-600"> Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg flex flex-col">
      <button onClick={() => navigate(-1)} className="text-gray-600 mb-4 flex items-center">
        <ArrowLeft size={24} className="mr-2" />
        Back
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
            className={`w-full p-2 border rounded-md mt-1 ${
              video.status === "PUBLISHED" ? "text-green-600" : video.status === "DELETED" ? "text-red-600" : "text-purple-600"
            }`}
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
          {videoUrl ? (
            <video className="w-full h-48 border" controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-48 border flex items-center justify-center text-gray-400">
              Display uploaded video
            </div>
          )}
       <div className="mt-4 text-gray-700">
        <p className="text-sm flex items-center gap-2">
       {videoDuration} 
    </p>
    
  </div>
          
          <div className="mt-6">
  <p className="text-gray-700 font-semibold">Status</p>
  <div className="flex flex-col mt-2 relative">



    
    
    {/* Content Submitted */}
    <div className="flex items-center">
      <div className={`w-4 h-4 border-2 ${["VERIFYING", "PUBLISHED", "DELETED"].includes(video.status) ? "bg-green-500 border-green-500" : "border-gray-400"} rounded-full`}></div>
      <span className="ml-2 text-gray-700">Content Submitted by Trainer</span>
    </div>
    <div className="border-l-2 border-dashed border-gray-400 h-6 ml-2"></div>

    {/* Content Under Review */}
    <div className="flex items-center">
      <div className={`w-4 h-4 border-2 ${["VERIFYING", "PUBLISHED", "DELETED"].includes(video.status) ? "bg-green-500 border-green-500" : "border-gray-400"} rounded-full`}></div>
      <span className="ml-2 text-gray-700">Content Under Review By Admin</span>
    </div>
    <div className="border-l-2 border-dashed border-gray-400 h-6 ml-2"></div>
    
    {/* Content Approved and Published */}
    <div className="flex items-center">
      <div className={`w-4 h-4 border-2 ${video.status === "PUBLISHED" ? "bg-green-500 border-green-500" : "border-gray-400"} rounded-full`}></div>
      <span className="ml-2 text-gray-700">Content Approved and Published</span>
    </div>
    <div className="border-l-2 border-dashed border-gray-400 h-6 ml-2"></div>

    {/* Content Deleted By Admin */}
    <div className="flex items-center">
      <div className={`w-4 h-4 border-2 ${video.status === "DELETED" ? "bg-red-500 border-red-500" : "border-gray-400"} rounded-full`}></div>
      <span className="ml-2 text-gray-700">Content Deleted By Admin</span>
    </div>
  </div>
</div>

        </div>
      </div>


{/* Button Section */}
<div className="relative mt-6">
  {/* Delete Button (for Published Videos) - Positioned in the Bottom Left */}
  {video.status === "PUBLISHED" && (
    <button 
      onClick={handleDelete} 
      className="absolute left-0 bottom-0 bg-red-600 text-white px-4 py-2 rounded flex items-center hover:bg-red-700"
    >
      <Trash2 size={18} className="mr-2" /> 
    </button>
  )}

  {/* Main Action Button - Positioned in the Center */}
  <div className="flex justify-center">
    {video.status === "PUBLISHED" ? (
      <button className="bg-orange-500 text-white px-6 py-2 rounded">
        Published
      </button>
    ) : video.status === "DELETED" ? (
      <button onClick={handleRestore} className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
        Restore
      </button>
    ) : (
      <button onClick={handleApprove} className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
        Approve and Publish
      </button>
    )}
  </div>
</div>
 
    </div>
  );
};

export default VideoApproval;
