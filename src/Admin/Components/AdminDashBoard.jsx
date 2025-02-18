import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiExternalLink } from "react-icons/fi";
import StatusButtonEmployee from "./status/StatusButtonEmployee";


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

  const scheduledMeetings = [
    { title: "UI/UX Fundamentals", group: "UI/UX", link: "#" },
    { title: "React Basics", group: "Frontend", link: "#" },
  ];

  const tickets = [
    { id: "45436", user: "45436", category: "Payment", date: "2-2-2021", channel: "Chat" },
    { id: "45437", user: "45437", category: "Support", date: "3-2-2021", channel: "Email" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-semibold">Hi,</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md"><StatusButtonEmployee /></button>
    </div>
    <p className="text-gray-600">Welcome Back</p>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
      {[
        { title: "New Students", value: "3,056,78", color: "bg-yellow-100" },
        { title: "No. of Trainers", value: "450", color: "bg-green-100" },
        { title: "Active Courses", value: "564", color: "bg-red-100" },
        { title: "No. of Employees", value: "250", color: "bg-purple-100" },
      ].map((card, index) => (
        <div key={index} className={`${card.color} p-6 rounded-md shadow-md text-center`}>
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
      <div className="col-span-2 bg-white p-6 rounded-md shadow-md">
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

      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold flex justify-between">
          Scheduled Meetings <FiExternalLink />
        </h2>
        {scheduledMeetings.map((meeting, index) => (
          <div key={index} className="p-4 mt-3 bg-gray-100 rounded-md">
            <p className="font-semibold">{meeting.title}</p>
            <p className="text-sm text-gray-600">Group - {meeting.group}</p>
            <a href={meeting.link} className="text-blue-500">
              Meeting Link - Link
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* Tickets & Login Activity */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {/* Tickets */}
      <div className="col-span-2">
        <h2 className="text-lg font-semibold flex justify-between">
          Tickets <FiExternalLink />
        </h2>

        {/* New Tickets */}
        <div className="mt-3 bg-white p-4 rounded-md shadow-md">
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
      <div>
        <h2 className="text-lg font-semibold">Login Activity</h2>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="bg-white p-4 rounded-md text-center shadow-md">
            <p className="text-gray-600">Active Logins</p>
            <p className="text-xl font-semibold">17</p>
          </div>
          <div className="bg-white p-4 rounded-md text-center shadow-md">
            <p className="text-gray-600">Inactive Users</p>
            <p className="text-xl font-semibold">17</p>
          </div>
        </div>

        {/* Active Hours */}
        <div className="bg-white p-6 rounded-md shadow-md mt-4">
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
