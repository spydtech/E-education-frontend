// import { useState } from "react";
// import CourseDetail from "../mylearning/CourseDetails/CourseDetail";

// const courses = [
//   {
//     id: "java-101",
//     name: "Java",
//     trainer: "Carmen Johns",
//     createdOn: "10/01/2024",
//     endsOn: "10/05/2024",
//     progress: 10,
//     participants: ["AB", "MR", "CD", "XY", "30+"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
//     videos: [
//       {
//         id: 1,
//         name: "Java Basics",
//         duration: "10:45",
//         uploadedOn: new Date(2024, 1, 10),
//         url: "https://videos.pexels.com/video-files/27868053/12249549_640_360_24fps.mp4",
//       },
//       {
//         id: 2,
//         name: "OOP in Java",
//         duration: "15:30",
//         uploadedOn: new Date(2024, 0, 22),
//         url: "https://videos.pexels.com/video-files/27868053/12249549_640_360_24fps.mp4",
//       },
//     ],
//   },
//   {
//     id: "php-102",
//     name: "PHP",
//     trainer: "Carmen Johns",
//     createdOn: "12/02/2024",
//     endsOn: "12/06/2024",
//     progress: 50,
//     participants: ["EF", "GH", "IJ", "KL", "30+"],
//     image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
//     videos: [
//       {
//         id: 1,
//         name: "Intro to PHP",
//         duration: "12:00",
//         uploadedOn: new Date(2024, 2, 1),
//         url: "https://videos.pexels.com/video-files/27868053/12249549_640_360_24fps.mp4",
//       },
//       {
//         id: 2,
//         name: "PHP and MySQL",
//         duration: "18:40",
//         uploadedOn: new Date(2024, 1, 5),
//         url: "https://videos.pexels.com/video-files/27868053/12249549_640_360_24fps.mp4",
//       },
//     ],
//   },
// ];

// export default function CourseList() {
//   const [search, setSearch] = useState("");
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const filteredCourses = courses.filter((course) =>
//     course.id.toLowerCase().includes(search.toLowerCase())
//   );

//   if (selectedCourse) {
//     return (
//       <CourseDetail
//         course={selectedCourse}
//         onBack={() => setSelectedCourse(null)}
//       />
//     );
//   }

//   return (
//     <>
//       <div>My Learnings</div>
//       <div className="relative p-6 overflow-auto">
//         <input
//           type="text"
//           placeholder="Search by Course ID..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="mb-4 p-2 border rounded-full w-96 placeholder:text-center"
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredCourses.map((course) => (
//             <div
//               key={course.id}
//               className="border hover:cursor-pointer rounded-lg shadow-md p-4"
//               onClick={() => setSelectedCourse(course)}
//             >
//               <img
//                 src={course.image}
//                 alt={course.name}
//                 className="w-full h-32 object-contain bg-gray-100"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-bold">{course.name}</h2>
//                 <p className="text-sm text-gray-500">
//                   Trainer: {course.trainer}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Created On: {course.createdOn}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Ends On: {course.endsOn}
//                 </p>
//                 <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
//                   <div
//                     className="bg-blue-500 h-2 rounded-full"
//                     style={{ width: `${course.progress}%` }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import CourseDetail from "../mylearning/CourseDetails/CourseDetail";
import { API_BASE_URL } from "../../../../Config/api";
import { useParams } from "react-router-dom";

export default function CourseList() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]); // Store fetched groups
  const [selectedGroup, setSelectedGroup] = useState(null); //  Store selected group
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  //  Fetch groups from backend
  useEffect(() => {
    const token = localStorage.getItem("jwt");
  
    fetch(`${API_BASE_URL}/api/video/published/group`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
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
  

    //  Show CourseVideoList when a group is selected
    // if (selectedGroup) {
    //   return <CourseVideoList groupName={selectedGroup} onBack={() => setSelectedGroup(null)} />;
    // }

  const filteredCourses = courses.filter((course) =>
    course.id.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedGroup) {
    return (
      <CourseDetail course={selectedGroup} onBack={() => setSelectedGroup(null)} />

    );
  }

  return (
    <>
      <div>My Learnings</div>
      <div className="relative p-6 overflow-auto">
        <input
          type="text"
          placeholder="Search by Course ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 p-2 border rounded-full w-96 placeholder:text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="border w-96 bg-[#f2f8ff] hover:cursor-pointer rounded-lg shadow-md p-4"
              onClick={() => setSelectedGroup(course)}
            >
              {/* <img
                src={course.image}
                alt={course.name}
                className="w-full h-32 object-contain bg-gray-100"
              /> */}
              <div className="p-4">
                <h2 className="text-lg font-bold">{course.name}</h2>
                <div className="flex justify-between text-sm text-gray-500 space-x-4">
                  <p className="">Trainer</p>
                  <span>{course.trainer}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 space-x-4">
                  <p className=""> Created On</p>
                  <span>{course.createdOn}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-500 space-x-4">
                  <p className=""> Ends On</p>
                  <span> {course.endsOn}</span>
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
        backgroundColor: ["#FFA500", "#6A5ACD", "#FF69B4", "#8A2BE2"][
          index % 4
        ],
      }}
    >
      {p}
    </div>
  ))}
  {course.participants?.length > 4 && (
    <span className="text-xs font-medium text-gray-600 ml-2">
      + {course.participants.length - 4}
    </span>
  )}
</div>


                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                  <div className="justify-end flex">{course.progress}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
