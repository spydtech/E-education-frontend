import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ImPlay } from "react-icons/im";

// Predefined video data with fixed dates and durations
const videos = [
  {
    id: 1,
    name: "Introduction to JavaScript",
    duration: "10:45",
    uploadedOn: new Date(2024, 1, 10), // Feb 10, 2024
  },
  {
    id: 2,
    name: "Advanced React Techniques",
    duration: "15:30",
    uploadedOn: new Date(2024, 0, 22), // Jan 22, 2024
  },
  {
    id: 3,
    name: "Understanding Async/Await",
    duration: "08:20",
    uploadedOn: new Date(2023, 11, 5), // Dec 5, 2023
  },
  {
    id: 4,
    name: "CSS Flexbox & Grid Mastery",
    duration: "12:10",
    uploadedOn: new Date(2023, 10, 18), // Nov 18, 2023
  },
  {
    id: 5,
    name: "Building APIs with Node.js",
    duration: "20:55",
    uploadedOn: new Date(2023, 8, 30), // Sep 30, 2023
  },
  {
    id: 6,
    name: "Database Essentials with MongoDB",
    duration: "18:40",
    uploadedOn: new Date(2023, 6, 15), // Jul 15, 2023
  },
];

export default function CourseVideoList() {
  const [sortedVideos, setSortedVideos] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    setSortedVideos([...videos].sort((a, b) => b.uploadedOn - a.uploadedOn));
  }, []);

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
    <div className="p-6 mx-auto ">
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
        const isNew = video.uploadedOn.getTime() === mostRecentDate?.getTime();
        return (
          <div
            key={video.id}
            className="flex items-center  justify-between text-black p-4 rounded-lg mb-3 relative"
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Watch now
            </button>
          </div>
        );
      })}
    </div>
  );
}
