import React, { useState, useEffect  } from "react";
import axios from "axios";

const CourseGroup = () => {
  // Course Data with Assignments
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const [courses, setCourses] = useState([
 
  ]);
  const [teamMembers, setTeamMembers] = useState([]);

  // const courses = [
  //   {
  //     name: "Java",
  //     trainer: "Ruben Runte",
  //     createdOn: "01/01/2024",
  //     endsOn: "01/06/2024",
  //     team: "Team Alpha",
  //     assignments: [
  //       { id: 1, description: "Java Basics", assignedDate: "02/01/2024", dueDate: "10/01/2024", status: "Completed" },
  //       { id: 2, description: "OOP Concepts", assignedDate: "15/01/2024", dueDate: "25/01/2024", status: "New Assignment" },
  //       { id: 3, description: "Spring Framework", assignedDate: "01/02/2024", dueDate: "10/02/2024", status: "Completed" },
  //     ],
  //   },
  //   {
  //     name: "PHP",
  //     trainer: "Alice Johnson",
  //     createdOn: "05/02/2024",
  //     endsOn: "05/07/2024",
  //     team: "Team Beta",
  //     assignments: [
  //       { id: 1, description: "PHP Basics", assignedDate: "06/02/2024", dueDate: "15/02/2024", status: "Completed" },
  //       { id: 2, description: "Laravel Framework", assignedDate: "20/02/2024", dueDate: "28/02/2024", status: "New Assignment" },
  //       { id: 3, description: "API Development", assignedDate: "05/03/2024", dueDate: "15/03/2024", status: "Completed" },
  //     ],
  //   },
  // ];

  // Team Members Data
  // const teamMembers = [
  //   { id: 101, name: "Ruben Runte DVM", email: "RubenRunte@gmail.com", group: "Team Alpha" },
  //   { id: 102, name: "Alice Johnson", email: "AliceJ@gmail.com", group: "Team Alpha" },
  //   { id: 103, name: "Bob Smith", email: "BobSmith@gmail.com", group: "Team Beta" },
  //   { id: 104, name: "Charlie Brown", email: "CharlieB@gmail.com", group: "Team Beta" },
  // ];
  
 


  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/task/getAllTasks/by-user", {
          headers: { Authorization: `Bearer ${jwt}` },
        });
  
        console.log("API Response:", response.data); // Debugging API response
  
        const fetchedCourses = response.data.map(task => ({
          name: task.chatGroup,  
          trainer: task.trainerName,
          createdOn: task.assignmentDate,
          endsOn: task.dueDate,
          team: `Team ${task.chatGroup}`,
          assignments: [{
            id: task.id,
            description: task.assignmentDescription,
            assignedDate: task.assignmentDate,
            dueDate: task.dueDate,
            status: task.taskStatus
          }]
        }));
  
        // Extract team members from users in API response
        const fetchedMembers = response.data.flatMap(task => 
          task.users.map(user => ({
            id: user.id || user.userId, 
            name: user.name || user.fullName, 
            email: user.email,
            group: `Team ${task.chatGroup}`
          }))
        );
        
  
        setCourses(fetchedCourses);
        setTeamMembers(fetchedMembers);
  
        if (fetchedCourses.length > 0) {
          setSelectedCourse(fetchedCourses[0]);  // Ensure first course is set
        }
      } catch (err) {
        console.error("Error fetching assignments:", err);
        setError("Failed to load assignments.");
      } finally {
        setLoading(false);
      }
    };
  
    if (jwt) {
      fetchAssignments();
    } else {
      setError("JWT token is missing");
      setLoading(false);
    }
  }, [jwt]);
  
  
  // Ensure selectedCourse is updated after courses are set
  useEffect(() => {
    if (courses.length > 0) {
      setSelectedCourse(courses[0]);
    }
  }, [courses]);
  
  
  
  // Ensure selectedCourse is always valid
const [selectedCourse, setSelectedCourse] = useState(courses.length > 0 ? courses[0] : { assignments: [] });

  // Filter members by selected course team
  const filteredMembers = teamMembers.filter(member => member.group === selectedCourse.team);
  const totalAssignments = selectedCourse?.assignments?.length || 0;
  const completedAssignments = selectedCourse?.assignments?.filter(ass => ass.status === "Completed").length || 0;
  const progress = totalAssignments > 0 ? (completedAssignments / totalAssignments) * 100 : 0;
  

  return (
    <div className="p-6 font-poppins bg-white min-h-screen ">
      {/* Course Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Select Course</h2>
        <div className="flex gap-4 mt-2">
          {courses.map((course) => (
            <button
              key={course.name}
              onClick={() => setSelectedCourse(course)}
              className={`px-6 py-2 rounded-md ${
                selectedCourse.name === course.name
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 text-gray-600"
              }`}
            >
              {course.name}
            </button>
          ))}
        </div>
      </div>

      {/* Course Details */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6 bg-white p-4 text-center ">
        <div className="flex space-x-20 ">
          <p className="text-gray-600">Trainer</p>
          <p className="">{selectedCourse.trainer}</p>
        </div>
        <div className="flex space-x-12">
          <p className="text-gray-600">Created On</p>
          <p className="">{selectedCourse.createdOn}</p>
        </div>
        <div className="flex space-x-20">
          <p className="text-gray-600">Ends On</p>
          <p className="">{selectedCourse.endsOn}</p>
        </div>
      </div>

      {/* Assignment Progress */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Assignment Progress</h2>
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-200 h-2 rounded-md">
            <div
              className="bg-blue-500 h-2 rounded-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-gray-500 text-sm">
            {completedAssignments}/{totalAssignments} completed
          </span>
        </div>
      </div>

      {/* Team Members Table */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Team Members ({selectedCourse.team})</h2>
        <table className="w-full border-collapse mt-2 bg-white ">
          <thead>
            <tr className=" border-b-black border-b-2">
              <th className="text-left py-2 px-4">User ID</th>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member, index) => (
              <tr
                key={member.id}
                className={`${index % 2 === 0 ? "bg-white" : ""} `}
              >
                <td className="py-2 px-4">{member.id}</td>
                <td className="py-2 px-4">{member.name}</td>
                <td className="py-2 px-4">{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assignment Details */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Assignment Details</h2>
        {selectedCourse?.assignments?.map((assignment) => (
  <div key={assignment.id} className="border rounded-md p-4 mb-4 bg-white shadow-sm">
    <p className="text-gray-700">{assignment.description}</p>
    <p className="text-sm text-gray-500 mt-2">Assigned Date - {assignment.assignedDate}</p>
    <p className="text-sm text-gray-500">Due Date - {assignment.dueDate}</p>
    <span
      className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${
        assignment.status === "Completed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
      }`}
    >
      {assignment.status}
    </span>
  </div>
))}

      </div>
    </div>
  );
};

export default CourseGroup;
