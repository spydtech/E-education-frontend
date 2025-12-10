// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import moment from "moment";
// import axios from "axios"; // Import axios
// import { API_BASE_URL } from "../../../Config/api";

// const MeetingCalendar = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [meetingList, setMeetingList] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const jwt = localStorage.getItem("jwt");

//   // Fetch meetings from the API
//   useEffect(() => {
//     if (!jwt) {
//       setError("Authorization token is missing.");
//       return;
//     }

//     const fetchAllMeetings = async () => {
//       try {
//         setLoading(true);
//         console.log("Fetching meetings...");

//         const response = await axios.get(`${API_BASE_URL}/api/meeting/getAll`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${jwt}`,
//           },
//         });

//         console.log("Meeting API Response:", response);
//         console.log("Meeting API Data:", response.data);

//         if (!response.data || !Array.isArray(response.data.payload)) {
//           setError("Invalid response format or empty meeting list.");
//           setMeetingList([]);
//           return;
//         }

//         setMeetingList(response.data.payload);
//         setError("");
//       } catch (err) {
//         console.error("Error fetching meetings:", err);
//         setError(err.message || "An error occurred while fetching meetings.");
//         setMeetingList([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllMeetings();
//   }, [jwt]);

//   // Filter meetings for the selected date
//   const meetingsForSelectedDate = meetingList.filter(
//     (meeting) => meeting.fromDate === moment(selectedDate).format("YYYY-MM-DD")
//   );

//   return (
//     <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 bg-gray-50 min-h-screen p-6">
//       {/* Calendar Section */}
//       <div className="bg-white p-6 shadow-lg rounded-xl w-full lg:w-2/3">
//         <h1 className="text-2xl font-bold mb-4">
//           {moment(selectedDate).format("DD MMM YYYY")}
//         </h1>
//         <div className="calendar-container">
//           <Calendar
//             onChange={setSelectedDate}
//             value={selectedDate}
//             tileContent={({ date, view }) => {
//               const hasMeeting = meetingList.some(
//                 (meeting) =>
//                   meeting.fromDate === moment(date).format("YYYY-MM-DD")
//               );
//               return hasMeeting ? (
//                 <div className="bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center mx-auto">
//                   ●
//                 </div>
//               ) : null;
//             }}
//             className="custom-calendar" // Add a custom class for styling
//           />
//         </div>
//       </div>

//       {/* Meetings Sidebar */}
//       <div className="bg-white p-6 shadow-lg rounded-xl w-full lg:w-1/3">
//         <h2 className="text-xl font-semibold mb-4">Meetings for {moment(selectedDate).format("DD MMM YYYY")}</h2>
//         {loading ? (
//           <p className="text-gray-500">Loading meetings...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : meetingsForSelectedDate.length === 0 ? (
//           <p className="text-gray-500">No meetings scheduled for this day.</p>
//         ) : (
//           meetingsForSelectedDate.map((meeting, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 p-4 rounded-lg shadow-sm mb-4"
//             >
//               <h3 className="text-lg font-semibold">{meeting.title}</h3>
//               <p className="text-sm text-gray-600">
//                 <strong>From:</strong> {meeting.fromDate} {meeting.fromTime}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>To:</strong> {meeting.toDate} {meeting.toTime}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Group:</strong> {meeting.groupName}
//               </p>
//               <a
//                 href={meeting.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 underline text-sm"
//               >
//                 Meeting Link - Join
//               </a>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Custom CSS for Calendar */}
//       <style jsx>
//         {`
//           .custom-calendar {
//             width: 100%; /* Adjust width as needed */
//             max-width: 800px; /* Set a maximum width */
//             height: 600px; /* Adjust height as needed */
//             font-size: 16px; /* Increase font size for better readability */
//           }

//           .custom-calendar .react-calendar__tile {
//             padding: 1.5em 0.5em; /* Increase padding for tiles */
//           }

//           .custom-calendar .react-calendar__navigation {
//             margin-bottom: 1em; /* Add space below navigation */
//           }

//           .custom-calendar .react-calendar__month-view__weekdays {
//             font-size: 1.1em; /* Increase font size for weekdays */
//           }

//           .custom-calendar .react-calendar__month-view__days__day {
//             font-size: 1.1em; /* Increase font size for days */
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default MeetingCalendar;





import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

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
        const response = await axios.get(`${API_BASE_URL}/api/meeting/getAll`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });

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
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar Section */}
        <div className="lg:w-2/3 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            {moment(selectedDate).format("DD MMMM YYYY")}
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
                  <div className="absolute top-1 right-1 bg-[#FF9B26] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    ●
                  </div>
                ) : null;
              }}
              className="w-full h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] rounded-lg border border-gray-200 p-2"
            />
          </div>
        </div>

        {/* Meetings Sidebar */}
        <div className="lg:w-1/3 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Meetings for {moment(selectedDate).format("DD MMM YYYY")}
          </h2>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9B26]"></div>
              <span className="ml-3 text-gray-600">Loading...</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          ) : meetingsForSelectedDate.length === 0 ? (
            <div className="text-center py-8">
              <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500">No meetings scheduled for this day.</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {meetingsForSelectedDate.map((meeting, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-4 rounded-lg hover:border-[#FF9B26] transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 truncate">{meeting.title}</h3>
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {meeting.groupName}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{meeting.fromDate}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{meeting.fromTime} - {meeting.toTime}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">By: {meeting.organizer}</span>
                    </div>
                  </div>
                  
                  <a
                    href={meeting.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Join Meeting
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingCalendar;