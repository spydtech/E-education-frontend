
 

// import React, { useState } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { FiPlusCircle } from "react-icons/fi";

// const initialEvents = [
//   { id: 1, day: "Thursday", date: "25 Apr 2024", name: "New Event" },
// ];

// const ReactCalendar = ({ onEventClick }) => {
//   const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//   const abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const currentDate = new Date();
//   const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
//   const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  
//   const months = [
//     "January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December",
//   ];

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const startDay = new Date(currentYear, currentMonth, 1).getDay();

//   const getCurrentDateString = () => `${months[currentMonth]} ${currentYear}`;

//   const renderDays = () => {
//     let daysArray = [];
//     for (let i = 0; i < startDay; i++) {
//       daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//       const isToday =
//         i === currentDate.getDate() &&
//         currentMonth === currentDate.getMonth() &&
//         currentYear === currentDate.getFullYear();
//       const dayClasses = `day text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl m-1 sm:m-2 ${isToday ? "bg-[#FDE68A] rounded-full" : ""}`;
//       daysArray.push(
//         <div key={i} className={dayClasses} onClick={() => onEventClick(i)}>
//           <span className="font-roboto font-medium">{i}</span>
//         </div>
//       );
//     }
//     return daysArray;
//   };

//   const goToPreviousMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const goToNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <div className="calendar-container p-2 sm:p-4">
//       <div className="max-w-full mx-auto rounded-lg overflow-hidden p-4">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
//           <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-0">
//             {getCurrentDateString()}
//           </h2>
//           <div className="flex space-x-2 mb-2 sm:mb-0">
//             <button onClick={goToPreviousMonth} className="border border-[#204349] rounded-full p-2 sm:p-3 text-sm sm:text-base hover:text-gray-800">
//               <GoChevronLeft />
//             </button>
//             <button onClick={goToNextMonth} className="border border-[#204349]  rounded-full p-2 sm:p-3 text-sm sm:text-base hover:text-gray-800">
//               <GoChevronRight />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           {abbreviatedDays.map((day, index) => (
//             <div key={index} className="hidden sm:flex justify-center">{day}</div>
//           ))}
//           {renderDays()}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Events = () => {
//   const [events, setEvents] = useState(initialEvents);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newEvent, setNewEvent] = useState({ day: "", date: "", name: "" });
//   const [editEventId, setEditEventId] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent((prevEvent) => ({
//       ...prevEvent,
//       [name]: value,
//     }));
//   };

//   const handleAddEvent = () => {
//     if (editEventId !== null) {
//       const updatedEvents = events.map((event) => {
//         if (event.id === editEventId) {
//           return { ...event, ...newEvent };
//         }
//         return event;
//       });
//       setEvents(updatedEvents);
//     } else {
//       const newEventObject = {
//         id: events.length > 0 ? Math.max(...events.map((event) => event.id)) + 1 : 1,
//         ...newEvent,
//       };
//       setEvents([...events, newEventObject]);
//     }
//     closeModal();
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditEventId(null);
//     setNewEvent({ day: "", date: "", name: "" });
//   };

//   const handleEventClick = (day) => {
//     const selectedDate = new Date(currentYear, currentMonth, day);
//     setNewEvent({
//       date: selectedDate.toISOString().split("T")[0],
//       day: selectedDate.toLocaleString("default", { weekday: "long" }),
//       name: "", // Add default value if needed
//     });
//     setIsModalOpen(true);
//   };

//   const themes = localStorage.getItem("theme");

//   return (
//     <div className={`${themes === "dark" ? "bg-black" : "bg-white"} p-4 `}>
//       <div className="flex justify-end mb-4">
//         <button
//           className="bg-[#204349] text-white flex justify-center items-center py-3 p-4 rounded-lg"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <FiPlusCircle className="text-white text-lg mr-2" />
//           <span className="text-sm lg:text-lg">Add New Event</span>
//         </button>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-4">
//         <div className={`w-full lg:w-[70vw] rounded-lg p-4 lg:order-1`}>
//           <ReactCalendar onEventClick={handleEventClick} />
//         </div>
//       </div>

//       {/* Events List */}
//       <div className="mt-6">
//         <h2 className="font-semibold text-lg mb-4">Events</h2>
//         <div className="bg-[#204349] text-white p-4 rounded-lg">
//           {events.length === 0 ? (
//             <p>No events added.</p>
//           ) : (
//             events.map((event) => (
//               <div key={event.id} className=" py-2">
//                 <span className="font-medium">{event.name}</span> - {event.date} ({event.day})
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-[#204349] rounded-lg p-6 w-[60vw]">
//             <h2 className="text-2xl mb-4 text-white">
//               {editEventId ? "Edit Event" : "Add Event"}
//             </h2>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block mb-2 text-white">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={newEvent.date}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full border-[#204349] placeholder:text-black border-opacity-40 focus:outline-none text-[#204349]" // Change text color here
//                 />

//               </div>
//               <div>
//                 <label className="block mb-2 text-white">Event Name</label>
//                 <input
//   type="text"
//   name="name"
//   value={newEvent.name}
//   onChange={handleInputChange}
//   className="border p-2 w-full border-[#204349] border-opacity-40 focus:outline-none text-black" // Change text color to black here
// />

//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={handleAddEvent}
//                   className="bg-white text-[#204349]  px-4 py-2 rounded"
//                 >
//                   {editEventId ? "Save Changes" : "Add Event"}
//                 </button>
//                 <button
//                   onClick={closeModal}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;

// useEffect(() => {
//   const fetchMeetings = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/meeting/get/meetings/${groupId}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch meetings");
//       }
//       const data = await response.json();
//       if (data.success) {
//         setMeetings(data.data); // Assuming the API returns the meetings in `data.data`
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchMeetings();
// }, [groupId]);


// import React, { useState, useEffect } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { FiPlusCircle } from "react-icons/fi";

// // Define initialEvents array
// const initialEvents = [
//   { id: 1, day: "Thursday", date: "25 Apr 2024", name: "New Event" },
// ];

// const ReactCalendar = ({ onEventClick }) => {
//   const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//   const abbreviatedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const currentDate = new Date();
//   const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
//   const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

//   const months = [
//     "January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December",
//   ];

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const startDay = new Date(currentYear, currentMonth, 1).getDay();

//   const getCurrentDateString = () => `${months[currentMonth]} ${currentYear}`;

//   const renderDays = () => {
//     let daysArray = [];
//     for (let i = 0; i < startDay; i++) {
//       daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
//     }
//     for (let i = 1; i <= daysInMonth; i++) {
//       const isToday =
//         i === currentDate.getDate() &&
//         currentMonth === currentDate.getMonth() &&
//         currentYear === currentDate.getFullYear();
//       const dayClasses = `day text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl m-1 sm:m-2 ${isToday ? "bg-[#FDE68A] rounded-full" : ""}`;
//       daysArray.push(
//         <div key={i} className={dayClasses} onClick={() => onEventClick(i)}>
//           <span className="font-roboto font-medium">{i}</span>
//         </div>
//       );
//     }
//     return daysArray;
//   };

//   const goToPreviousMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const goToNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <div className="calendar-container p-2 sm:p-4">
//       <div className="max-w-full mx-auto rounded-lg overflow-hidden p-4">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
//           <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-0">
//             {getCurrentDateString()}
//           </h2>
//           <div className="flex space-x-2 mb-2 sm:mb-0">
//             <button onClick={goToPreviousMonth} className="border border-[#204349] rounded-full p-2 sm:p-3 text-sm sm:text-base hover:text-gray-800">
//               <GoChevronLeft />
//             </button>
//             <button onClick={goToNextMonth} className="border border-[#204349]  rounded-full p-2 sm:p-3 text-sm sm:text-base hover:text-gray-800">
//               <GoChevronRight />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
//           {abbreviatedDays.map((day, index) => (
//             <div key={index} className="hidden sm:flex justify-center">{day}</div>
//           ))}
//           {renderDays()}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Events = ({ groupId }) => {
//   const [events, setEvents] = useState(initialEvents); // initialEvents is now defined
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newEvent, setNewEvent] = useState({ day: "", date: "", name: "" });
//   const [editEventId, setEditEventId] = useState(null);
//   const [meetings, setMeetings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

 

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent((prevEvent) => ({
//       ...prevEvent,
//       [name]: value,
//     }));
//   };

//   const handleAddEvent = () => {
//     if (editEventId !== null) {
//       const updatedEvents = events.map((event) => {
//         if (event.id === editEventId) {
//           return { ...event, ...newEvent };
//         }
//         return event;
//       });
//       setEvents(updatedEvents);
//     } else {
//       const newEventObject = {
//         id: events.length > 0 ? Math.max(...events.map((event) => event.id)) + 1 : 1,
//         ...newEvent,
//       };
//       setEvents([...events, newEventObject]);
//     }
//     closeModal();
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditEventId(null);
//     setNewEvent({ day: "", date: "", name: "" });
//   };

//   const handleEventClick = (day) => {
//     const selectedDate = new Date(currentYear, currentMonth, day);
//     setNewEvent({
//       date: selectedDate.toISOString().split("T")[0],
//       day: selectedDate.toLocaleString("default", { weekday: "long" }),
//       name: "", // Add default value if needed
//     });
//     setIsModalOpen(true);
//   };

//   const themes = localStorage.getItem("theme");

//   return (
//     <div className={`${themes === "dark" ? "bg-black" : "bg-white"} p-4 `}>
//       <div className="flex justify-end mb-4">
//         <button
//           className="bg-[#204349] text-white flex justify-center items-center py-3 p-4 rounded-lg"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <FiPlusCircle className="text-white text-lg mr-2" />
//           <span className="text-sm lg:text-lg">Add New Event</span>
//         </button>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-4">
//         <div className={`w-full lg:w-[70vw] rounded-lg p-4 lg:order-1`}>
//           <ReactCalendar onEventClick={handleEventClick} />
//         </div>
//       </div>

//       {/* Events List */}
//       <div className="mt-6">
//         <h2 className="font-semibold text-lg mb-4">Events</h2>
//         <div className="bg-[#204349] text-white p-4 rounded-lg">
//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>Error: {error}</p>
//           ) : meetings.length === 0 ? (
//             <p>No meetings found.</p>
//           ) : (
//             meetings.map((meeting) => (
//               <div key={meeting.id} className="py-2">
//                 <span className="font-medium">{meeting.title}</span> - {meeting.fromDate} to {meeting.toDate}
//                 <br />
//                 <span>Time: {meeting.fromTime} to {meeting.toTime}</span>
//                 <br />
//                 <span>Link: <a href={meeting.link} target="_blank" rel="noopener noreferrer">{meeting.link}</a></span>
//                 <br />
//                 <span>Organizer: {meeting.organizer}</span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-[#204349] rounded-lg p-6 w-[60vw]">
//             <h2 className="text-2xl mb-4 text-white">
//               {editEventId ? "Edit Event" : "Add Event"}
//             </h2>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block mb-2 text-white">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={newEvent.date}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full border-[#204349] placeholder:text-black border-opacity-40 focus:outline-none text-[#204349]"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-2 text-white">Event Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newEvent.name}
//                   onChange={handleInputChange}
//                   className="border p-2 w-full border-[#204349] border-opacity-40 focus:outline-none text-black"
//                 />
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={handleAddEvent}
//                   className="bg-white text-[#204349]  px-4 py-2 rounded"
//                 >
//                   {editEventId ? "Save Changes" : "Add Event"}
//                 </button>
//                 <button
//                   onClick={closeModal}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;



import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const Events = () => {
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
          "http://localhost:8080/api/meeting/getAll/trainee/meetings",
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
  

  // Filter meetings for the selected date
  const meetingsForSelectedDate = meetingList.filter(
    (meeting) =>
      moment(meeting.fromDate).format("YYYY-MM-DD") ===
      moment(selectedDate).format("YYYY-MM-DD")
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
      <div className="bg-white p-6 shadow-lg rounded-xl w-full lg:w-1/3">
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
          height: 600px;
          font-size: 16px;
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

export default Events;