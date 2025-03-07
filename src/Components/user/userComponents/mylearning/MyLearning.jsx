import { useState, useEffect } from "react";
import CourseDetail from "./CourseDetails/CourseDetail";
import { API_BASE_URL } from "../../../../Config/api";

export default function CourseList() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses from API
  useEffect(() => {
    const token = localStorage.getItem("jwt");

    fetch(`${API_BASE_URL}/api/video/published/group`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch courses");
        return response.json();
      })
      .then((data) => {
        const formattedCourses = Object.keys(data).map((groupName) => ({
          id: groupName.toLowerCase().replace(/\s+/g, "-"),
          name: groupName,
          progress: Math.floor(Math.random() * 100),
          videos: data[groupName].map((video) => ({
            id: video.id,
            name: video.title,
            description: video.videoDescription,
            uploadedOn: new Date(video.adminRespondDate),
            author: video.author,
            videoBase64: video.videoBase64,
          })),
        }));
        setCourses(formattedCourses);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedGroup) {
    return <CourseDetail course={selectedGroup} onBack={() => setSelectedGroup(null)} />;
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Heading */}
      <h1 className="text-xl md:text-2xl font-semibold text-center">My Learnings</h1>

      {/* Search Input */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search by Course Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 p-2 border rounded-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Course Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="border bg-[#f2f8ff] hover:cursor-pointer rounded-lg shadow-md p-4 transition-all hover:shadow-lg"
            onClick={() => setSelectedGroup(course)}
          >
            {/* Course Name */}
            <h2 className="text-lg font-bold text-gray-700">{course.name}</h2>

            {/* Course Details */}
            <div className="mt-2 text-sm text-gray-600">
              <p className="flex justify-between">
                <span>Trainer:</span> <span>{course.trainer || "N/A"}</span>
              </p>
              <p className="flex justify-between">
                <span>Created On:</span> <span>{course.createdOn || "N/A"}</span>
              </p>
              <p className="flex justify-between">
                <span>Ends On:</span> <span>{course.endsOn || "N/A"}</span>
              </p>
            </div>

            {/* Participants */}
            <div className="flex items-center mt-3">
              {(course.participants || []).slice(0, 4).map((p, index) => (
                <div
                  key={index}
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold text-white border-2 border-white ${
                    index !== 0 ? "-ml-2" : ""
                  }`}
                  style={{
                    backgroundColor: ["#FFA500", "#6A5ACD", "#FF69B4", "#8A2BE2"][index % 4],
                  }}
                >
                  {p}
                </div>
              ))}
              {course.participants?.length > 4 && (
                <span className="text-xs font-medium text-gray-600 ml-2">
                  +{course.participants.length - 4}
                </span>
              )}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
              <p className="text-right text-sm text-gray-600">{course.progress}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Loading & Error Messages */}
      {loading && (
        <p className="text-center text-gray-500 mt-4">Loading courses...</p>
      )}
      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}
    </div>
  );
}