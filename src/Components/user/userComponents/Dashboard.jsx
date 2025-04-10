import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaBell } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../../../Config/api";

const weeklyData = [
  { name: "Mon", hours: 12 },
  { name: "Tue", hours: 18 },
  { name: "Wed", hours: 20 },
  { name: "Thu", hours: 22 },
  { name: "Fri", hours: 21 },
  { name: "Sat", hours: 6 },
  { name: "Sun", hours: 19 },
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [toDoItems, setToDoItems] = useState([]);
  const jwt = localStorage.getItem("jwt");
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [coursesError, setCoursesError] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [loadingMeetings, setLoadingMeetings] = useState(true);
  const [meetingsError, setMeetingsError] = useState(null);
// Format meeting time to readable string
const formatMeetingTime = (fromDate, fromTime) => {
  try {
    if (!fromDate || !fromTime) return "N/A";
    const [hours, minutes] = fromTime.split(':');
    const date = new Date(`${fromDate}T${fromTime}`);
    return date.toLocaleString('en-US', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  } catch (error) {
    console.error("Error formatting meeting time:", error);
    return "Invalid date";
  }
};

const getTimeUntilMeeting = (fromDate, fromTime) => {
  try {
    if (!fromDate || !fromTime) return "N/A";
    
    const meetingDate = new Date(`${fromDate}T${fromTime}`);
    const now = new Date();
    const diffMs = meetingDate - now;
    
    if (diffMs < 0) {
      // Meeting has already started
      const endTime = new Date(`${fromDate}T${toTime}`);
      if (now < endTime) {
        return "In progress";
      }
      return "Ended";
    }
    
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 60) {
      return `in ${diffMins} min`;
    } else {
      const diffHours = Math.floor(diffMins / 60);
      const remainingMins = diffMins % 60;
      return `in ${diffHours} hour${diffHours !== 1 ? 's' : ''}${remainingMins > 0 ? ` ${remainingMins} min` : ''}`;
    }
  } catch (error) {
    console.error("Error calculating meeting time:", error);
    return "Error";
  }
};

// Fetch today's meetings
const fetchTodaysMeetings = async () => {
  if (!jwt) {
    setLoadingMeetings(false);
    setMeetingsError("No authentication token found");
    return;
  }

  try {
    setLoadingMeetings(true);
    setMeetingsError(null);
    
    const response = await fetch(
      `${API_BASE_URL}/api/meeting/getAll/user/meetings`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
    }

    const data = await response.json();
    
    if (data && data.status && Array.isArray(data.payload)) {
      const today = new Date().toISOString().split('T')[0];
      
      // Filter meetings that are today
      const todaysMeetings = data.payload.filter(meeting => {
        if (!meeting.fromDate || !meeting.fromTime) return false;
        
        // Check if meeting is today
        return meeting.fromDate === today;
      }).sort((a, b) => {
        const timeA = new Date(`${a.fromDate}T${a.fromTime}`);
        const timeB = new Date(`${b.fromDate}T${b.fromTime}`);
        return timeA - timeB;
      });

      setMeetings(todaysMeetings);
    } else {
      setMeetings([]);
      setMeetingsError(data?.message || "No meetings data received");
    }
  } catch (error) {
    console.error("API Error:", error);
    setMeetingsError(error.message || "Failed to fetch meetings.");
    setMeetings([]);
  } finally {
    setLoadingMeetings(false);
  }
};

useEffect(() => {
  fetchTodaysMeetings();
}, [jwt]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/task/getAllTasks/by-user`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch courses.");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setCoursesError(error.message);
      } finally {
        setLoadingCourses(false);
      }
    };
    if (jwt) fetchCourses();
  }, [jwt]);

  useEffect(() => {
    fetchToDoList();
  }, []);

  const fetchToDoList = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/report/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || response.statusText);
      }
      const data = await response.json();
      setToDoItems(data);
    } catch (error) {
      console.error("Error fetching to-do list:", error.message);
    }
  };

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toLocaleDateString("en-GB"));
    setDayOfWeek(today.toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  const username = auth?.user?.firstName || localStorage.getItem("username") || "User";

  useEffect(() => {
    if (jwt) dispatch(getUser(jwt));
  }, [jwt, dispatch]);

  const handleCheckboxChange = (id) => {
    setToDoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const groupedCourses = courses.reduce((acc, task) => {
    const group = task.chatGroup || "Unknown";
    acc[group] = acc[group] ? [...acc[group], task] : [task];
    return acc;
  }, {});

  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen font-poppins">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-xl font-semibold">Hi, <span className="font-normal">{username}</span></h1>
        <div className="text-right mt-2 sm:mt-0">
          <p className="text-gray-500">{currentDate}</p>
          <p className="text-gray-500">{dayOfWeek}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="lg:col-span-2 bg-[#F2F8FF] rounded-2xl p-4 relative">
          <h2 className="text-lg font-semibold">Course Progress</h2>

          {loadingCourses ? <p>Loading tasks...</p> :
            coursesError ? <p className="text-red-500">{coursesError}</p> :
              Object.entries(groupedCourses).map(([groupName, tasks]) => (
                <div key={groupName} className="relative mt-4">
                  <FaExternalLinkAlt
                    className="absolute top-0 right-0 text-gray-600 cursor-pointer"
                    title="View full course details"
                    onClick={() => navigate(`/user/coursegroup`)}
                  />
                  <h3 className="text-md font-semibold mb-2">{groupName}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tasks.slice(0, 1).map((task) => (
                      <div key={task.id} className="bg-white rounded-lg p-4 border-2">
                        <p className="text-sm"><strong>Description:</strong> {task.assignmentDescription}</p>
                        <p className="text-sm"><strong>Assigned:</strong> {task.assignmentDate}</p>
                        <p className="text-sm"><strong>Due:</strong> {task.dueDate}</p>
                        <div className="mt-2">
                          <strong className="block text-sm mb-1">Team Members:</strong>
                          <div className="flex flex-wrap gap-2">
                            {(task.teamMembers || []).map((m, i) => (
                              <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded-full border" title={m.email}>{m.fullName}</span>
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${task.users?.[0]?.taskStatus === "COMPLETED" ? 100 : 0}%` }}
                          ></div>
                        </div>
                        <p className="text-right text-xs text-gray-500 mt-1">{task.users?.[0]?.taskStatus || "PENDING"}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>

          {/* Upcoming Meeting Section */}
          <div className="bg-[#F2F8FF] rounded-2xl p-4 relative">
          <FaBell className="absolute top-4 right-4 text-gray-600" />
          <h2 className="text-lg font-semibold">Upcoming Meeting</h2>
          
          {loadingMeetings ? (
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : meetingsError ? (
            <div className="mt-2 p-2 bg-red-50 text-red-500 rounded">
              {meetingsError}
              <button 
                onClick={fetchTodaysMeetings}
                className="ml-2 text-blue-500 underline"
              >
                Retry
              </button>
            </div>
          ) : meetings.length > 0 ? (
            meetings.slice(0, 1).map((meeting) => (
              <div key={`${meeting.fromDate}-${meeting.fromTime}`} className="border-2 rounded-lg p-3 mt-2 bg-white">
                <h3 className="font-semibold text-lg">{meeting.title || "Untitled Meeting"}</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Time:</p>
                    <p className="text-sm">
                      {formatMeetingTime(meeting.fromDate, meeting.fromTime)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Group:</p>
                    <p className="text-sm">{meeting.groupName || "General"}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Organizer:</p>
                  <p className="text-sm">{meeting.organizer || "N/A"}</p>
                </div>
                <div className="mt-3">
                  <p className="text-red-500 font-semibold">
                    Starts in <span className="text-red-600">
                      {getTimeUntilMeeting(meeting.fromDate, meeting.fromTime)}
                    </span>
                  </p>
                </div>
                {meeting.link && (
                  <a 
                    href={meeting.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  >
                    Join Meeting
                  </a>
                )}
                {meeting.pin && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Meeting PIN:</p>
                    <p className="font-mono bg-gray-100 px-2 py-1 rounded">{meeting.pin}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="border-2 rounded-lg p-4 mt-2 bg-white text-center">
              <p className="text-gray-500">No meetings scheduled for today</p>
              <button 
                onClick={fetchTodaysMeetings}
                className="mt-2 text-blue-500 underline text-sm"
              >
                Refresh
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 bg-[#F2F8FF] rounded-2xl p-4">
          <h2 className="text-lg font-semibold">This Week</h2>
          <p className="text-right text-sm text-gray-500">Mon - Sun</p>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData} barCategoryGap={10}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#007bff" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-yellow-200 rounded-lg p-4 relative">
          <FaExternalLinkAlt
            className="absolute top-4 right-4 text-gray-600 cursor-pointer"
            onClick={() => navigate("/user/notes/highlights")}
          />
          <h2 className="text-lg font-semibold">To-do List</h2>
          <p className="text-sm text-gray-600">{new Date().toLocaleDateString("en-GB")}</p>
          <div className="mt-2 space-y-2">
            {toDoItems.map((item) => (
              <div key={item.id} className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                  checked={item.checked || false}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <p>{item.report}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;