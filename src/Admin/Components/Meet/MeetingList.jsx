// import React from "react";

// const MeetingList = ({ meetings }) => {
//   return (
//     <div className="mt-6">
//       <h2 className="text-xl font-bold mb-4">Scheduled Meetings</h2>
//       {meetings.map((meeting, index) => (
//         <div
//           key={index}
//           className="p-6 flex justify-between w-2/3 bg-white rounded-lg shadow-md mb-4"
//         >
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {meeting.title}
//             </h3>
//             <p className="text-sm text-gray-500">
//               {meeting.fromDate} - {meeting.toDate}, {meeting.fromTime} - {meeting.toTime}
//             </p>
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-gray-700">Joining Info</h4>
//               <p className="text-sm text-blue-500">Meeting Link: {meeting.link}</p>
//               <p className="text-sm text-gray-700">Join By Phone: {meeting.phone}</p>
//               <p className="text-sm text-gray-700">PIN: {meeting.pin}</p>
//               <a href="#" className="text-sm text-blue-500">More Phone Numbers</a>
//             </div>
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-gray-700">Organizer</h4>
//               <p className="text-sm text-gray-800">{meeting.organizer}</p>
//             </div>
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-gray-700">Guests</h4>
//               {meeting.guests.map((guest, guestIndex) => (
//                 <p key={guestIndex} className="text-sm text-gray-800">
//                   {guest}
//                 </p>
                
//               ))}
//                <a
//               href={meeting.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500"
//             >
//               Join Meeting
//             </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MeetingList;




// import React from "react";

// const MeetingList = () => {
 
  

//   return (
//     <div className="mt-6">
//       <h2 className="text-xl font-bold mb-4">Scheduled Meetings</h2>
//       {meetings.map((meeting, index) => (
//         <div
//           key={index}
//           className="p-6 flex justify-between w-2/3 bg-white rounded-lg shadow-md mb-4"
//         >
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {meeting.title}
//             </h3>
//             <p className="text-sm text-gray-500">
//               {meeting.date} at {meeting.time}
//             </p>
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-gray-700">
//                 Joining Info
//               </h4>
//               <p className="text-sm text-blue-500">Meeting Link: {meeting.link}</p>
//               <p className="text-sm text-gray-700">Join By Phone: {meeting.phone}</p>
//               <p className="text-sm text-gray-700">PIN: {meeting.pin}</p>
//               <a href="#" className="text-sm text-blue-500">
//                 More Phone Numbers
//               </a>
//             </div>
//             <div className="mt-4">
//               <h4 className="text-sm font-semibold text-gray-700">Organizer</h4>
//               <p className="text-sm text-gray-800">{meeting.organizer}</p>
//             </div>
//           </div>
//           <div className="mt-4">
//             <h4 className="text-sm font-semibold text-gray-700">
//               {meeting.guests.length} Guests
//             </h4>
//             <ul className="mt-2">
//               {meeting.guests.map((guest, index) => (
//                 <li key={index} className="flex items-center mb-2">
//                   <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                   <span className="text-sm text-gray-700">{guest}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MeetingList;





import React from "react";

const MeetingList = ({ meetings }) => {
  return (
    <div className="mt-6">
      {/* <h2 className="text-xl font-bold mb-4">Scheduled Meetings</h2> */}
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index} className="mb-2 p-2 border rounded shadow-sm">
            <div className="font-semibold">{meeting.title}</div>
            <div>
              {meeting.date} at {meeting.time}
            </div>
            <div>{meeting.groupname}</div>
            <a
              href={meeting.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Join Meeting
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
