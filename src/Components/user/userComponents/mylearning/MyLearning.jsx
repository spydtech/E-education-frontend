// import { useState } from "react";

// const courses = [
//   {
//     id: "java-101",
//     name: "Java",
//     trainer: "Carmen Johns",
//     createdOn: "DD/MM/YYY",
//     endsOn: "DD/MM/YYY",
//     progress: 10,
//     participants: ["AB", "MR", "CD", "XY", "30+"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
//   },
//   {
//     id: "php-102",
//     name: "PHP",
//     trainer: "Carmen Johns",
//     createdOn: "DD/MM/YYY",
//     endsOn: "DD/MM/YYY",
//     progress: 50,
//     participants: ["EF", "GH", "IJ", "KL", "30+"],
//     image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
//   },
//   {
//     id: "js-103",
//     name: "JavaScript",
//     trainer: "Daniel Smith",
//     createdOn: "DD/MM/YYY",
//     endsOn: "DD/MM/YYY",
//     progress: 70,
//     participants: ["MN", "OP", "QR", "ST", "40+"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
//   },
//   {
//     id: "python-104",
//     name: "Python",
//     trainer: "Emily Davis",
//     createdOn: "DD/MM/YYY",
//     endsOn: "DD/MM/YYY",
//     progress: 85,
//     participants: ["UV", "WX", "YZ", "AA", "50+"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
//   },
// ];

// const getRandomColor = (index) => {
//   const colors = [
//     "bg-red-500",
//     "bg-blue-500",
//     "bg-green-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//   ];
//   return colors[index % colors.length];
// };

// export default function CourseList() {
//   const [search, setSearch] = useState("");

//   const filteredCourses = courses.filter((course) =>
//     course.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <div>My Learnings</div>
//       <div className="p-6">
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
//               id="card"
//               key={course.id}
//               className="border hover:cursor-pointer rounded-lg overflow-hidden shadow-md p-4"
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
//                 <div className="flex items-center py-4 mt-2 relative">
//                   {course.participants.map((p, index) => (
//                     <div className="flex items-center py-4 mt-2 relative">
//                       {course.participants.map((p, index) => (
//                         <span
//                           key={index}
//                           className={`text-white text-xs px-2 py-2 w-8 h-8 flex justify-center items-center rounded-full ${getRandomColor(
//                             index
//                           )} absolute`}
//                           style={{
//                             left: `${index * 24}px`, // Reduce spacing for better overlap
//                             zIndex: `${course.participants.length + index}`, // Ensures correct stacking order
//                           }}
//                         >
//                           {p}
//                         </span>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
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
import { useState } from "react";
import CourseDetail from "../mylearning/CourseDetails/CourseDetail"; // Import CourseDetail

const courses = [
  {
    id: "java-101",
    name: "Java",
    trainer: "Carmen Johns",
    createdOn: "DD/MM/YYY",
    endsOn: "DD/MM/YYY",
    progress: 10,
    participants: ["AB", "MR", "CD", "XY", "30+"],
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    id: "php-102",
    name: "PHP",
    trainer: "Carmen Johns",
    createdOn: "DD/MM/YYY",
    endsOn: "DD/MM/YYY",
    progress: 50,
    participants: ["EF", "GH", "IJ", "KL", "30+"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: "js-103",
    name: "JavaScript",
    trainer: "Daniel Smith",
    createdOn: "DD/MM/YYY",
    endsOn: "DD/MM/YYY",
    progress: 70,
    participants: ["MN", "OP", "QR", "ST", "40+"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: "python-104",
    name: "Python",
    trainer: "Emily Davis",
    createdOn: "DD/MM/YYY",
    endsOn: "DD/MM/YYY",
    progress: 85,
    participants: ["UV", "WX", "YZ", "AA", "50+"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
];

export default function CourseList() {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null); // Store selected course

  const filteredCourses = courses.filter((course) =>
    course.id.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedCourse) {
    return (
      <CourseDetail
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
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
              id="card"
              key={course.id}
              className="border hover:cursor-pointer rounded-lg  shadow-md p-4"
              onClick={() => setSelectedCourse(course)} // Set selected course on click
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-32 object-contain bg-gray-100"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{course.name}</h2>
                <p className="text-sm text-gray-500">
                  Trainer: {course.trainer}
                </p>
                <p className="text-sm text-gray-500">
                  Created On: {course.createdOn}
                </p>
                <p className="text-sm text-gray-500">
                  Ends On: {course.endsOn}
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
