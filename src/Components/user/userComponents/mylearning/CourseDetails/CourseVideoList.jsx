import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ImPlay } from "react-icons/im";

export default function CourseVideoList({ videos, onWatchNow }) {
  const [sortedVideos, setSortedVideos] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    setSortedVideos([...videos].sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn)));
  }, [videos]);

  return (
    <div className="p-6">
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} className="text-blue-500 flex items-center">
        Sort {sortOrder === "asc" ? <ChevronUp /> : <ChevronDown />}
      </button>
      {sortedVideos.map((video) => (
        <div key={video.id} className="flex justify-between p-4 bg-gray-100 rounded-lg mb-3">
          <div className="flex items-center gap-4">
            <ImPlay className="w-6 h-6" />
            <div>
              <p className="font-medium">{video.name}</p>
              <p className="text-sm">{video.description}</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => onWatchNow(video)}>Watch now</button>
        </div>
      ))}
    </div>
  );
}
