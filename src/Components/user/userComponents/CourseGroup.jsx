import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

const CourseGroup = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const [courses, setCourses] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({ assignments: [] });

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/task/getAllTasks/by-user`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });

        const groupedCourses = {};
        const allMembers = [];

        response.data.forEach((task) => {
          const courseName = task.chatGroup;

          // Group assignments by course
          if (!groupedCourses[courseName]) {
            groupedCourses[courseName] = {
              name: courseName,
              trainer: task.trainerName,
              createdOn: task.assignmentDate,
              endsOn: task.dueDate,
              team: `Team ${courseName}`,
              assignments: [],
            };
          }

          groupedCourses[courseName].assignments.push({
            id: task.id,
            description: task.assignmentDescription,
            assignedDate: task.assignmentDate,
            dueDate: task.dueDate,
            status: task.taskStatus,
          });

          // Collect team members
          task.users.forEach((user) => {
            const exists = allMembers.some((m) => m.email === user.email && m.group === `Team ${courseName}`);
            if (!exists) {
              allMembers.push({
                id: user.userId,
                name: user.fullName,
                email: user.email,
                group: `Team ${courseName}`,
              });
            }
          });
        });

        setCourses(Object.values(groupedCourses));
        setTeamMembers(allMembers);
        if (Object.values(groupedCourses).length > 0) {
          setSelectedCourse(Object.values(groupedCourses)[0]);
        }
      } catch (err) {
        console.error("Error fetching assignments:", err);
        setError("Failed to load assignments.");
      } finally {
        setLoading(false);
      }
    };

    if (jwt) fetchAssignments();
    else {
      setError("JWT token is missing");
      setLoading(false);
    }
  }, [jwt]);

  useEffect(() => {
    if (courses.length > 0) setSelectedCourse(courses[0]);
  }, [courses]);

  const filteredMembers = teamMembers.filter((member) => member.group === selectedCourse.team);
  const totalAssignments = selectedCourse?.assignments?.length || 0;
  const completedAssignments =
    selectedCourse?.assignments?.filter((ass) => ass.status === "Completed").length || 0;
  const progress = totalAssignments > 0 ? (completedAssignments / totalAssignments) * 100 : 0;

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-4 sm:p-6 font-poppins bg-white min-h-screen">
      {/* Course Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Select Course</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {courses.map((course) => (
            <button
              key={course.name}
              onClick={() => setSelectedCourse(course)}
              className={`px-4 py-2 rounded-md text-sm ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-4 text-center shadow-md rounded-md">
        <div>
          <p className="text-gray-600 text-sm">Trainer</p>
          <p className="text-md font-semibold">{selectedCourse.trainer}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Created On</p>
          <p className="text-md font-semibold">{selectedCourse.createdOn}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Ends On</p>
          <p className="text-md font-semibold">{selectedCourse.endsOn}</p>
        </div>
      </div>

      {/* Assignment Progress */}
      <div className="mt-6">
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

      {/* Team Members */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Team Members ({selectedCourse.team})</h2>
        <div className="mt-2">
          {filteredMembers.length > 0 ? (
            <div className="overflow-x-auto">
              {/* Table for Desktop */}
              <table className="w-full hidden sm:table border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 px-4">User ID</th>
                    <th className="text-left py-2 px-4">Name</th>
                    <th className="text-left py-2 px-4">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((member, index) => (
                    <tr
                      key={member.id}
                      className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
                    >
                      <td className="py-2 px-4">{member.id}</td>
                      <td className="py-2 px-4">{member.name}</td>
                      <td className="py-2 px-4">{member.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Cards for Mobile */}
              <div className="sm:hidden">
                {filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white p-3 mb-2 shadow-sm rounded-md"
                  >
                    <p>
                      <span className="font-semibold">Name:</span> {member.name}
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> {member.email}
                    </p>
                    <p>
                      <span className="font-semibold">User ID:</span> {member.id}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No team members found.</p>
          )}
        </div>
      </div>

      {/* Assignment Details */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Assignment Details</h2>
        {selectedCourse?.assignments?.map((assignment) => (
          <div
            key={assignment.id}
            className="border rounded-md p-4 mb-4 bg-white shadow-sm"
          >
            <p className="text-gray-700">{assignment.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Assigned Date: {assignment.assignedDate}
            </p>
            <p className="text-sm text-gray-500">Due Date: {assignment.dueDate}</p>
            <span
              className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${
                assignment.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
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
