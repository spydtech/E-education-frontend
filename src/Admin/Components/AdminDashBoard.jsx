import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiExternalLink } from "react-icons/fi";
import StatusButtonEmployee from "./status/StatusButtonEmployee";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../Config/api";
import { fetchUserStatusCount } from "../../State/ActiveUsers/CountStatus";
import {fetchEmployeesCount, fetchTrainersCount } from "../../State/ActiveUsers/CountStatus";
import { fetchAllMeetings } from "../../State/Meetings/AllMeeting";
import { getUser } from "../../State/Auth/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const AdminDashBoard = () => {
  const userGrowthData = [
    { name: "Jan", users: 12000 },
    { name: "Feb", users: 15000 },
    { name: "Mar", users: 15000 },
    { name: "Apr", users: 16000 },
    { name: "May", users: 17000 },
    { name: "Jun", users: 18000 },
    { name: "Jul", users: 19000 },
    { name: "Aug", users: 20000 },
    { name: "Sep", users: 21000 },
    { name: "Oct", users: 22000 },
    { name: "Nov", users: 23000 },
    { name: "Dec", users: 24000 },
  ];

  const activeHoursData = [
    { day: "Mon", hours: 14 },
    { day: "Tue", hours: 16 },
    { day: "Wed", hours: 16 },
    { day: "Thu", hours: 18 },
    { day: "Fri", hours: 18 },
    { day: "Sat", hours: 0 },
    { day: "Sun", hours: 0 },
  ];

  

  const tickets = [
    { id: "45436", user: "45436", category: "Payment", date: "2-2-2021", channel: "Chat" },
    { id: "45437", user: "45437", category: "Support", date: "3-2-2021", channel: "Email" },
  ];

  const [stats, setStats] = useState({
    newStudents: 0,
    activeCourses: 0,
  });
  const [userCount, setUserCount] = useState({ active: 0, inactive: 0 });
  const [employeeCount, setEmployeeCount] = useState(0);
  const [trainerCount, setTrainerCount] = useState(0);
  const [meetings, setMeetings] = useState([]);
  const auth = useSelector((state) => state.auth);
  

  const dispatch = useDispatch();
  const location = useLocation();

    useEffect(() => {
        if (auth.user && auth.user.role === "ADMIN") {
          getUser(auth.user.id);
        }
      }, [auth.user]);

  useEffect(() => {
    const getMeetings = async () => {
      const data = await fetchAllMeetings();
      console.log("Meetings Data:", data); // Debugging log
      if (Array.isArray(data)) {
        setMeetings(data);
      } else if (data && Array.isArray(data.payload)) {
        setMeetings(data.payload);
      } else {
        console.error("Unexpected data format:", data);
        setMeetings([]); // Set empty array to prevent errors
      }
    };
  
    getMeetings();
  }, []);
  

  useEffect(() => {
    const getCounts = async () => {
      const empCount = await fetchEmployeesCount();
      const trainCount = await fetchTrainersCount();
      if (empCount !== null) setEmployeeCount(empCount);
      if (trainCount !== null) setTrainerCount(trainCount);
    };

    getCounts();
  }, []);

  useEffect(() => {
    const getUserCount = async () => {
      const data = await fetchUserStatusCount();
      if (data) {
        setUserCount(data);
      }
    };
    
    getUserCount();
  }, []);

  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log("Using token:", jwt);
    
        const response = await axios.get(`${API_BASE_URL}/api/groups/get/count/by-admin`, {
          headers: { Authorization: `Bearer ${jwt}` }
        });
    
        console.log("Fetched data:", response.data);
    
        if (response.status === 200 && response.data.payload) {
          setStats({
            newStudents: response.data.payload.usersCount || 0,
            activeCourses: response.data.payload.activeCourses || 0
          });
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
  
    fetchStats();
  }, []);
  
  

  return (
    <div className="p-6 bg-white min-h-screen font-poppins">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
    {auth?.user ? (
  <h1 className="text-3xl font-semibold">
    Hi, {auth.user.firstName} {auth.user.lastName}
  </h1>
) : (
  <h1 className="text-3xl font-semibold">Loading...</h1>
)}

      {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md"><StatusButtonEmployee /></button> */}
    </div>
    <p className="text-gray-600">Welcome Back</p>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
        {[
          { title: "New Students", value: stats.newStudents, color: "bg-yellow-100" },
          { title: "No. of Trainers", value: trainerCount.trainersCount, color: "bg-green-100" },
          { title: "Active Courses", value: stats.activeCourses, color: "bg-red-100" },
          { title: "No. of Employees", value: employeeCount, color: "bg-purple-100" },
        ].map((card, index) => (
          <div key={index} className={`${card.color} p-6 rounded-md  text-center`}>
            <p className="text-gray-700">{card.title}</p>
            <p className="text-2xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>

    {/* Date Selector */}
    <div className="mb-6">
      <select className="px-4 py-2 border rounded-md">
        <option>Today</option>
        <option>Yesterday</option>
      </select>
    </div>

    {/* Graphs Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2 bg-[#FFF7F5] p-6 rounded-md ">
        <h2 className="text-lg font-semibold">User Growth yesterday</h2>
        <p className="text-green-600">+5% More Than Yesterday</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={userGrowthData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#FFA500" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#FFF7F5] p-6 rounded-md overflow-y-auto h-[360px]">
        <h2 className="text-lg font-semibold flex justify-between">
          Scheduled Meetings <FiExternalLink />
        </h2>
        {Array.isArray(meetings) ? (
  meetings.map((meeting, index) => (
    <div key={index} className="p-4 mt-3  border-2 rounded-3xl border-black">
      <p className="font-semibold">{meeting.title}</p>
      <p className="text-sm text-gray-600">Group - {meeting.groupName}</p>
      <p className="text-sm text-gray-600">From - {meeting.fromDate} {meeting.fromTime}</p>
      <p className="text-sm text-gray-600">To - {meeting.toDate} {meeting.toTime}</p>
      <a href={meeting.link} className="text-blue-500">
        Meeting Link - Link
      </a>
    </div>
  ))
) : (
  <p>No meetings available</p>
)}

      </div>
    </div>

    {/* Tickets & Login Activity */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {/* Tickets */}
      <div className="col-span-2 bg-[#FFF7F5] p-4">
        <h2 className="text-xl font-semibold flex justify-between">
          Tickets <FiExternalLink />
        </h2>

        {/* New Tickets */}
        <div className="mt-3  p-4 rounded-md">
          <h3 className="font-semibold">New Tickets <span className="text-red-500">5</span></h3>
          <table className="w-full mt-2 text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Ticket No</th>
                <th className="text-left py-2">User ID</th>
                <th className="text-left py-2">Category</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Channel</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b">
                  <td>{ticket.id}</td>
                  <td>{ticket.user}</td>
                  <td>{ticket.category}</td>
                  <td>{ticket.date}</td>
                  <td className="flex items-center">{ticket.channel} <FiExternalLink className="ml-1" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Login Activity */}
      <div className="bg-[#FFF7F5] p-4">
        <h2 className="text-lg font-semibold">Login Activity</h2>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="border-2  p-4 rounded-2xl text-center ">
            <p className="text-gray-600">Active Logins</p>
            <p className="text-xl font-semibold text-[#FF9B26]">{userCount.activeUserCount}</p>
          </div>
          <div className="border-2  p-4 rounded-2xl text-center ">
            <p className="text-gray-600">Inactive Users</p>
            <p className="text-xl font-semibold text-[#FF9B26]" >{userCount.inActiveUserCount}</p>
          </div>
        </div>

        {/* Active Hours */}
        <div className="bg-[#FFF7F5] p-6 rounded-md  mt-4">
          <h2 className="text-lg font-semibold">My Active Hours</h2>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={activeHoursData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#FFA500" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdminDashBoard;
