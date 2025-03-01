import React, { useState, useEffect} from "react";
import { Link, useNavigate  } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { API_BASE_URL } from "../../../Config/api";

const VideoList = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]); // State to store videos
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Store errors
  // const videos = [
  //   {
  //     id: 1001,
  //     author: "E - Education",
  //     title: "Video’s Title La saeta, al final, del tiemp",
  //     group: "Java",
  //     sentDate: "2-2-2021",
  //     lastModified: "2-2-2021",
  //     status: "Published",
  //   },
  //   {
  //     id: 1002,
  //     author: "E - Education",
  //     title: "Video’s Title La saeta, al final, del tiemp",
  //     group: "Java",
  //     sentDate: "2-2-2021",
  //     lastModified: "2-2-2021",
  //     status: "Verifying",
  //   },
  //   {
  //     id: 1003,
  //     author: "E - Education",
  //     title: "Video’s Title La saeta, al final, del tiemp",
  //     group: "PHP",
  //     sentDate: "2-2-2021",
  //     lastModified: "2-2-2021",
  //     status: "Published",
  //   },
  // ];

  // Fetch videos from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/video/getAll/VideoSessions/trainer`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`, // Ensure user is authenticated
            "Content-Type": "application/json"
          }
        });
 
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
 
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchVideos();
  }, []);

  const getStatusBadge = (status) => {
    const statusClasses = {
      Published: "bg-green-200 text-green-700",
      Verifying: "bg-yellow-200 text-yellow-700",
    };

    return (
      <span
        className={`px-3 py-1 text-sm font-semibold rounded-full ${
          statusClasses[status] || "bg-gray-200 text-gray-700"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md font-poppins">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Video List</h2>
        <Link to="/traineedashbord/upload-data">
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        ➕
      </button>
    </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Author</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Group</th>
              <th className="px-4 py-3 text-left">Sent Date</th>
              {/* <th className="px-4 py-3 text-left">Last Modified</th> */}
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr
                key={video.id + index}
                className={`border-b hover:bg-gray-100 ${
                  video.status === "Verifying" ? "bg-blue-50" : ""
                }`}
              >
                <td className="px-4 py-3">{video.id}</td>
                <td className="px-4 py-3">{video.author}</td>
                <td className="px-4 py-3">{video.title}</td>
                <td className="px-4 py-3">{video.groupName}</td>
                <td className="px-4 py-3">{video.sentDate}</td>
                {/* <td className="px-4 py-3">{video.lastModified}</td> */}
                <td className="px-4 py-3">{getStatusBadge(video.status)}</td>
                <button onClick={() => navigate(`/traineedashbord/video-status/${video.id}`,{ state: { video } })}>
                    <FaExternalLinkAlt className="p-1 text-gray-600 hover:text-black text-2xl" />
                  </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoList;
