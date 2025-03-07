import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaBell } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../../../Config/api";

const courses = [
  {
    id: "java-101",
    name: "Java",
    trainer: "Carmen Johns",
    createdOn: "DD/MM/YYY",
    endsOn: "DD/MM/YYY",
    progress: 10,
    participants: ["AB", "MR", "AB", "XY", "30+"],
  },
  {
    id: "php-102",
    name: "PHP",
    trainer: "Carmen Johns",
    createdOn: "DD/MM/YYY",
    endsOn: "DD/MM/YYY",
    progress: 50,
    participants: ["AB", "MR", "AB", "XY", "30+"],
  },
];

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
        throw new Error(`Failed to fetch to-do list: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      setToDoItems(data);
    } catch (error) {
      console.error("Error fetching to-do list:", error.message);
    }
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    setCurrentDate(formattedDate);
    setDayOfWeek(dayName);
  }, []);

  const username = auth?.user?.firstName || localStorage.getItem("username") || "User";

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  const handleCheckboxChange = (id) => {
    setToDoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen font-poppins">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-xl font-semibold">
            Hi, <span className="font-normal">{username}</span>
          </h1>
        </div>
        <div className="text-right mt-2 sm:mt-0">
          <p className="text-gray-500">{currentDate}</p>
          <p className="text-gray-500">{dayOfWeek}</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {/* Course Progress */}
        <div className="lg:col-span-2 bg-[#F2F8FF] rounded-2xl p-4 relative">
          <FaExternalLinkAlt className="absolute top-4 right-4 text-gray-600 cursor-pointer" />
          <h2 className="text-lg font-semibold">Course Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg p-4 border-2">
                <div className="bg-blue-600 text-white p-2 rounded-t-lg font-bold">{course.name}</div>
                <div className="p-2">
                  <p className="text-sm"><strong>Trainer:</strong> {course.trainer}</p>
                  <p className="text-sm"><strong>Created On:</strong> {course.createdOn}</p>
                  <p className="text-sm"><strong>Ends On:</strong> {course.endsOn}</p>
                  <div className="flex items-center mt-2">
                    {course.participants.slice(0, 4).map((participant, index) => (
                      <span key={index} className="w-6 h-6 bg-gray-200 text-xs flex items-center justify-center rounded-full border">{participant}</span>
                    ))}
                    <span className="ml-2 text-gray-500">{course.participants[4]}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">{course.progress}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Meeting */}
        <div className="bg-[#F2F8FF] rounded-2xl p-4 relative">
          <FaBell className="absolute top-4 right-4 text-gray-600" />
          <h2 className="text-lg font-semibold">Upcoming Meeting</h2>
          <div className="border-2 rounded-lg p-2 mt-2">
            <h3 className="font-semibold">UI/UX Fundamentals</h3>
            <p className="text-gray-600">DD/MM/YYYY HH:MM:SS</p>
            <p className="text-gray-500">Group - UI/UX</p>
            <p className="text-red-500 font-semibold mt-1">Starts in <span className="text-red-600">30min</span></p>
            <a href="#" className="text-blue-500 underline">Click here to join</a>
          </div>
        </div>

        {/* Weekly Activity */}
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

        {/* To-do List */}
        <div className="bg-yellow-200 rounded-lg p-4 relative">
          <FaExternalLinkAlt
            className="absolute top-4 right-4 text-gray-600 cursor-pointer"
            onClick={() => navigate("/user/notes/highlights")}
          />
          <h2 className="text-lg font-semibold">To-do List</h2>
          <p className="text-sm text-gray-600">14 June 2024</p>
          <div className="mt-2 space-y-2">
            {toDoItems.map((item) => (
              <div key={item.id} className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                  checked={item.checked}
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