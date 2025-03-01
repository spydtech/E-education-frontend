import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { API_BASE_URL } from "../../../Config/api";

const VideoDashboard = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]); // Store all videos
  const [filteredVideos, setFilteredVideos] = useState([]); // Store filtered videos
  const [activeFilter, setActiveFilter] = useState("All"); // Store active filter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const jwt = localStorage.getItem("jwt");
  
    if (!jwt) {
      setError("Unauthorized. Please log in.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`${API_BASE_URL}/api/video/getAll/VideoSessions/admin`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`, // Ensure no extra spaces
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 401) {
        localStorage.removeItem("jwt"); // Clear token if unauthorized
      throw new Error("Unauthorized. Your session may have expired. Please log in again.");
    }
  
      if (!response.ok) {
        throw new Error(`Error fetching videos: ${response.status}`);
      }
  
      const data = await response.json();
      setVideos(data);
      setFilteredVideos(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
      setLoading(false);
    }
  };
  

  //  Function to filter videos based on status
  const filterVideos = (filterType) => {
    setActiveFilter(filterType);
    if (filterType === "All") {
      setFilteredVideos(videos);
    } else if (filterType === "Verifying") {
      setFilteredVideos(videos.filter((video) => video.status === "VERIFYING"));
    } else if (filterType === "Deleted") {
      setFilteredVideos(videos.filter((video) => video.status === "DELETED"));
    }
  };

  // Function to navigate to VideoApproval page
  const handleViewDetails = (videoId) => {
    const selectedVideo = videos.find((v) => v.id === videoId);
    if (!selectedVideo) {
      console.error("Video not found:", videoId);
      return;
    }
    console.log("Navigating with video data:", selectedVideo);
    navigate(`/admin/video-approval/${videoId}`, { state: { video: selectedVideo } });
  };
  

  if (loading) return <div className="p-6 text-center text-gray-600">Loading videos...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-poppins">
      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div
          className={`p-6 border rounded-lg text-center cursor-pointer ${
            activeFilter === "All" ? "bg-orange-200 border-orange-400" : "bg-orange-100 border-orange-300"
          }`}
          onClick={() => filterVideos("All")}
        >
          <p className="text-gray-700 text-lg font-medium">All videos</p>
          <p className="text-3xl font-semibold">{videos.length}</p>
        </div>

        <div
          className={`p-6 border rounded-lg text-center cursor-pointer ${
            activeFilter === "Verifying" ? "bg-green-200 border-green-400" : "bg-green-100 border-green-300"
          }`}
          onClick={() => filterVideos("Verifying")}
        >
          <p className="text-gray-700 text-lg font-medium">Waiting for Approval</p>
          <p className="text-3xl font-semibold">{videos.filter((v) => v.status === "VERIFYING").length}</p>
        </div>

        <div
          className={`p-6 border rounded-lg text-center cursor-pointer ${
            activeFilter === "Deleted" ? "bg-pink-200 border-pink-400" : "bg-pink-100 border-pink-300"
          }`}
          onClick={() => filterVideos("Deleted")}
        >
          <p className="text-gray-700 text-lg font-medium">Deleted Content</p>
          <p className="text-3xl font-semibold">{videos.filter((v) => v.status === "DELETED").length}</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          {activeFilter === "All"
            ? "All Videos"
            : activeFilter === "Verifying"
            ? "Waiting for Approval"
            : "Deleted Content"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Author</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Group</th>
                <th className="py-2 px-4">Published Date</th>
                <th className="py-2 px-4">Last Modified</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <tr key={video.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{video.id}</td>
                    <td className="py-3 px-4">{video.author}</td>
                    <td className="py-3 px-4">{video.title}</td>
                    <td className="py-3 px-4">{video.groupName}</td>
                    <td className="py-3 px-4">{video.adminRespondDate || "N/A"}</td>
                    <td className="py-3 px-4">{video.lastModified || "N/A"}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          video.status === "PUBLISHED"
                            ? "bg-green-100 text-green-600"
                            : video.status === "VERIFYING"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {video.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-gray-600 hover:text-blue-600" onClick={() => handleViewDetails(video.id)}>
                        <ExternalLink size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">No videos found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VideoDashboard;
