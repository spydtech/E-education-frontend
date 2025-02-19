import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoDashboard = () => {
  const navigate = useNavigate();

  const allVideos = [
    {
      id: 1001,
      author: "E - Education",
      title: "Video’s Title La saeta, al final, del tiemp",
      group: "Java",
      publishedDate: "2-2-2021",
      lastModified: "2-2-2021",
      status: "Published",
    },
    {
      id: 1002,
      author: "E - Education",
      title: "Video’s Title La saeta, al final, del tiemp",
      group: "Java",
      publishedDate: "--",
      lastModified: "2-2-2021",
      status: "New",
    },
    {
      id: 1003,
      author: "E - Education",
      title: "Video’s Title La saeta, al final, del tiemp",
      group: "PHP",
      publishedDate: "2-2-2021",
      lastModified: "2-2-2021",
      status: "Published",
    },
    {
      id: 1004,
      author: "E - Education",
      title: "Video’s Title La saeta, al final, del tiemp",
      group: "Python",
      publishedDate: "1-1-2021",
      lastModified: "2-2-2021",
      status: "Deleted",
    },
  ];

  const [filteredVideos, setFilteredVideos] = useState(allVideos);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterVideos = (filterType) => {
    setActiveFilter(filterType);
    if (filterType === "All") {
      setFilteredVideos(allVideos);
    } else {
      setFilteredVideos(allVideos.filter((video) => video.status === filterType));
    }
  };

  // Function to navigate to VideoApproval page
  const handleViewDetails = (videoId) => {
    navigate(`/admin/video-approval/${videoId}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-poppins">
      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className={`p-6 border rounded-lg text-center cursor-pointer ${activeFilter === "All" ? "bg-orange-200 border-orange-400" : "bg-orange-100 border-orange-300"}`} onClick={() => filterVideos("All")}>
          <p className="text-gray-700 text-lg font-medium">All videos</p>
          <p className="text-3xl font-semibold">{allVideos.length}</p>
        </div>

        <div className={`p-6 border rounded-lg text-center cursor-pointer ${activeFilter === "New" ? "bg-green-200 border-green-400" : "bg-green-100 border-green-300"}`} onClick={() => filterVideos("New")}>
          <p className="text-gray-700 text-lg font-medium">Waiting for Approval</p>
          <p className="text-3xl font-semibold">{allVideos.filter(v => v.status === "New").length}</p>
        </div>

        <div className={`p-6 border rounded-lg text-center cursor-pointer ${activeFilter === "Deleted" ? "bg-pink-200 border-pink-400" : "bg-pink-100 border-pink-300"}`} onClick={() => filterVideos("Deleted")}>
          <p className="text-gray-700 text-lg font-medium">Deleted Content</p>
          <p className="text-3xl font-semibold">{allVideos.filter(v => v.status === "Deleted").length}</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          {activeFilter === "All" ? "All Videos" : activeFilter === "New" ? "Waiting for Approval" : "Deleted Content"}
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
                    <td className="py-3 px-4">{video.group}</td>
                    <td className="py-3 px-4">{video.publishedDate}</td>
                    <td className="py-3 px-4">{video.lastModified}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${video.status === "Published" ? "bg-green-100 text-green-600" : video.status === "New" ? "bg-purple-100 text-purple-600" : "bg-red-100 text-red-600"}`}>
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
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No videos found
                  </td>
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
