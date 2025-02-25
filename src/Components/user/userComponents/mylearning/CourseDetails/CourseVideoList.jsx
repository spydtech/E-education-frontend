import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ImPlay } from "react-icons/im";
import Events from "../Events";

export default function CourseVideoList({ videos, onWatchNow }) {
  const [sortedVideos, setSortedVideos] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    setSortedVideos([...videos].sort((a, b) => b.uploadedOn - a.uploadedOn));
  }, [videos]);

  const toggleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    setSortedVideos(
      [...sortedVideos].sort((a, b) =>
        newOrder === "asc"
          ? a.uploadedOn - b.uploadedOn
          : b.uploadedOn - a.uploadedOn
      )
    );
  };

  const mostRecentDate =
    sortedVideos.length > 0 ? sortedVideos[0].uploadedOn : null;

  return (
    <div className="flex  justify-between">
      <div className="p-6 w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Video List</h2>
          <button
            onClick={toggleSort}
            className="flex items-center gap-1 text-blue-500"
          >
            Sort{" "}
            {sortOrder === "asc" ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>

        {sortedVideos.map((video) => {
          const isNew =
            video.uploadedOn.getTime() === mostRecentDate?.getTime();
          return (
            <div
              key={video.id}
              className="flex  items-center justify-between text-black p-4 rounded-lg mb-3 relative"
            >
              {isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                  New
                </span>
              )}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f2f8ff] flex justify-center items-center rounded-full">
                  <ImPlay />
                </div>
                <div>
                  <p className="text-sm font-medium">{video.name}</p>
                  <p className="text-sm">{video.duration}</p>
                  <p className="text-xs text-gray-400">
                    Uploaded on {video.uploadedOn.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => onWatchNow(video)}
              >
                Watch now
              </button>
            </div>
          );
        })}
      </div>

      <div className=" ">
        <Events />
      </div>
    </div>
  );
}
