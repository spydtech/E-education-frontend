import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import axios from "axios"; // Import axios

const MeetingCalendar = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [meetingList, setMeetingList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const jwt = localStorage.getItem("jwt");

  // Fetch meetings from the API
  useEffect(() => {
    if (!jwt) {
      setError("Authorization token is missing.");
      return;
    }

    const fetchAllMeetings = async () => {
      try {
        setLoading(true);
        console.log("Fetching meetings...");

        const response = await axios.get("http://localhost:8080/api/meeting/getAll", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });

        console.log("Meeting API Response:", response);
        console.log("Meeting API Data:", response.data);

        if (!response.data || !Array.isArray(response.data.payload)) {
          setError("Invalid response format or empty meeting list.");
          setMeetingList([]);
          return;
        }

        setMeetingList(response.data.payload);
        setError("");
      } catch (err) {
        console.error("Error fetching meetings:", err);
        setError(err.message || "An error occurred while fetching meetings.");
        setMeetingList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMeetings();
  }, [jwt]);

  // Filter meetings for the selected date
  const meetingsForSelectedDate = meetingList.filter(
    (meeting) => meeting.fromDate === moment(selectedDate).format("YYYY-MM-DD")
  );

  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 bg-gray-50 min-h-screen p-6">
      {/* Calendar Section */}
      <div className="bg-white p-6 shadow-lg rounded-xl w-full lg:w-2/3">
        <h1 className="text-2xl font-bold mb-4">
          {moment(selectedDate).format("DD MMM YYYY")}
        </h1>
        <div className="calendar-container">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={({ date, view }) => {
              const hasMeeting = meetingList.some(
                (meeting) =>
                  meeting.fromDate === moment(date).format("YYYY-MM-DD")
              );
              return hasMeeting ? (
                <div className="bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center mx-auto">
                  ●
                </div>
              ) : null;
            }}
            className="custom-calendar" // Add a custom class for styling
          />
        </div>
      </div>

      {/* Meetings Sidebar */}
      <div className="bg-white p-6 shadow-lg rounded-xl w-full lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Meetings for {moment(selectedDate).format("DD MMM YYYY")}</h2>
        {loading ? (
          <p className="text-gray-500">Loading meetings...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : meetingsForSelectedDate.length === 0 ? (
          <p className="text-gray-500">No meetings scheduled for this day.</p>
        ) : (
          meetingsForSelectedDate.map((meeting, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-lg shadow-sm mb-4"
            >
              <h3 className="text-lg font-semibold">{meeting.title}</h3>
              <p className="text-sm text-gray-600">
                <strong>From:</strong> {meeting.fromDate} {meeting.fromTime}
              </p>
              <p className="text-sm text-gray-600">
                <strong>To:</strong> {meeting.toDate} {meeting.toTime}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Group:</strong> {meeting.groupName}
              </p>
              <a
                href={meeting.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                Meeting Link - Join
              </a>
            </div>
          ))
        )}
      </div>

      {/* Custom CSS for Calendar */}
      <style jsx>
        {`
          .custom-calendar {
            width: 100%; /* Adjust width as needed */
            max-width: 800px; /* Set a maximum width */
            height: 600px; /* Adjust height as needed */
            font-size: 16px; /* Increase font size for better readability */
          }

          .custom-calendar .react-calendar__tile {
            padding: 1.5em 0.5em; /* Increase padding for tiles */
          }

          .custom-calendar .react-calendar__navigation {
            margin-bottom: 1em; /* Add space below navigation */
          }

          .custom-calendar .react-calendar__month-view__weekdays {
            font-size: 1.1em; /* Increase font size for weekdays */
          }

          .custom-calendar .react-calendar__month-view__days__day {
            font-size: 1.1em; /* Increase font size for days */
          }
        `}
      </style>
    </div>
  );
};

export default MeetingCalendar;