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

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
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
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
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

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
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
        const meetingTime = moment(
          `${meeting.fromDate} ${meeting.fromTime}`,
          "YYYY-MM-DD hh:mm A"
        );
        const diffMinutes = meetingTime.diff(now, "minutes");

        if (diffMinutes === 10) {
          showNotification(meeting);
        }
      });
    };

    const interval = setInterval(checkMeetings, 60000);
    return () => clearInterval(interval);
  }, []);

  const showNotification = (meeting) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Upcoming Meeting", {
        body: `Your meeting "${meeting.title}" starts in 10 minutes.`,
        icon: "/meeting-icon.png",
      });
    }
  };

  const meetingsForSelectedDate = meetingList.filter(
    (meeting) =>
      moment(meeting.fromDate).format("YYYY-MM-DD") ===
      moment(selectedDate).format("YYYY-MM-DD")
  );

  return (
    <div className="font-poppins bg-white min-h-screen p-4 lg:p-8">
      {/* Main Layout Container */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Calendar Section */}
        <div className="bg-white p-4 md:p-6 rounded-xl w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-lg md:text-2xl font-bold mb-4 text-center md:text-left">
            {moment(selectedDate).format("DD MMM YYYY")}
          </h1>
          <div className="flex justify-center">
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
              className="w-full max-w-md md:max-w-full custom-calendar"
            />
          </div>
        </div>

        {/* Meetings List */}
        <div className="bg-white p-4 md:p-6 rounded-xl w-full md:w-1/3 lg:w-1/2 overflow-auto max-h-[500px]">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
            Meetings for {moment(selectedDate).format("DD MMM YYYY")}
          </h2>
          {loading ? (
            <p className="text-gray-500 text-center">Loading meetings...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : meetingsForSelectedDate.length === 0 ? (
            <p className="text-gray-500 text-center">
              No meetings scheduled for this day.
            </p>
          ) : (
            meetingsForSelectedDate.map((meeting, index) => (
              <div
                key={index}
                className="border border-gray-200 p-4 rounded-lg shadow-sm mb-4 bg-white"
              >
                <h3 className="text-md font-semibold">{meeting.title}</h3>
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

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .custom-calendar {
            font-size: 12px;
          }
          .custom-calendar .react-calendar__tile {
            padding: 0.8em 0.3em;
          }
          .custom-calendar .react-calendar__navigation {
            margin-bottom: 0.5em;
          }
          .custom-calendar .react-calendar__month-view__weekdays {
            font-size: 0.9em;
          }
          .custom-calendar .react-calendar__month-view__days__day {
            font-size: 0.9em;
          }
        }

        @media (max-width: 480px) {
          .custom-calendar {
            font-size: 10px;
          }
          .custom-calendar .react-calendar__tile {
            padding: 0.5em 0.2em;
          }
          .custom-calendar .react-calendar__navigation {
            margin-bottom: 0.3em;
          }
          .custom-calendar .react-calendar__month-view__weekdays {
            font-size: 0.8em;
          }
          .custom-calendar .react-calendar__month-view__days__day {
            font-size: 0.8em;
          }
        }
      `}</style>
    </div>
  );
};

export default UCalendar;