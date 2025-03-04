import React, { useState, useEffect, useRef } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { API_BASE_URL } from "../../../Config/api";

const UCalendar = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [meetingList, setMeetingList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get JWT Token from localStorage
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        console.log("Fetching meetings..."); // Debugging log
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

        console.log("Response status:", response.status); // Debugging log

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging log

        // ✅ Always process the payload if it exists, even if status is false
        if (data.payload && Array.isArray(data.payload)) {
          setMeetingList(data.payload);
        } else {
          setError("No meetings found.");
        }
      } catch (error) {
        console.error("API Error:", error);
        setError("Failed to fetch meetings.");
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, [jwt]);


   // Request notification permission
   useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
        if (permission === "denied") {
          alert("Please enable notifications in browser settings.");
        }
      });
    }
  }, []);
  
  

  const meetingListRef = useRef(meetingList);
meetingListRef.current = meetingList;

useEffect(() => {
  const checkMeetings = () => {
    const now = moment();

    meetingListRef.current.forEach((meeting) => {
      const meetingTime = moment(`${meeting.fromDate} ${meeting.fromTime}`, "YYYY-MM-DD hh:mm A");
      const diffMinutes = meetingTime.diff(now, "minutes");

      if (diffMinutes === 10) {
        showNotification(meeting);
      }
    });
  };

  const interval = setInterval(checkMeetings, 60000); // Run every minute
  return () => clearInterval(interval);
}, []);


  // Function to show notification
  const showNotification = (meeting) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Upcoming Meeting", {
        body: `Your meeting "${meeting.title}" starts in 10 minutes.`,
        icon: "/meeting-icon.png",
      });
    }
  };


  // Filter meetings for the selected date
  const meetingsForSelectedDate = meetingList.filter(
    (meeting) =>
      moment(meeting.fromDate).format("YYYY-MM-DD") ===
      moment(selectedDate).format("YYYY-MM-DD")
  );

  return (
    <div className="h-[800px] font-poppins -mt-8  flex flex-col lg:flex-row space-y-0 lg:space-y-0 lg:space-x-6 bg-white min-h-screen p-6">
      {/* Calendar Section */}
      <div className="bg-white p-0 rounded-xl w-full lg:w-2/3 h-[500px]">
        <h1 className="text-2xl font-bold mb-4">
          {moment(selectedDate).format("DD MMM YYYY")}
        </h1>
        <div className="calendar-container">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={({ date }) => {
              const hasMeeting = meetingList.some(
                (meeting) =>
                  moment(meeting.fromDate).format("YYYY-MM-DD") ===
                  moment(date).format("YYYY-MM-DD")
              );
              return hasMeeting ? (
                <div className="bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center mx-auto">
                  ●
                </div>
              ) : null;
            }}
            className="custom-calendar"
          />
        </div>
      </div>

      {/* Meetings Sidebar */}
      <div className="bg-white p-6  rounded-xl w-full lg:w-[350px] h-[500px] overflow-auto">
        <h2 className="text-xl font-semibold mb-4">
          Meetings for {moment(selectedDate).format("DD MMM YYYY")}
        </h2>
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
      <style jsx="true">{`
        .custom-calendar {
          width: 100%;
          max-width: 800px;
          height: 500px;
          font-size: 14px;
        }
        .custom-calendar .react-calendar__tile {
          padding: 1.5em 0.5em;
        }
        .custom-calendar .react-calendar__navigation {
          margin-bottom: 1em;
        }
        .custom-calendar .react-calendar__month-view__weekdays {
          font-size: 1.1em;
        }
        .custom-calendar .react-calendar__month-view__days__day {
          font-size: 1.1em;
        }
      `}</style>
    </div>
  );
};

export default UCalendar;
