// import React from "react";

// const MeetingList = ({ meetings }) => {
//   return (
//     <div className="mt-6">
//       {meetings.map((meeting, index) => (
//         <div 
//           key={index} 
//           className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
//         >
//           <div className="font-semibold text-lg text-gray-800">{meeting.title}</div>
//           <div className="text-gray-600 mt-1">
//             {meeting.date} at {meeting.time}
//           </div>
//           <div className="text-gray-600">{meeting.groupname}</div>
//           <a
//             href={meeting.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-medium"
//           >
//             Join Meeting →
//           </a>
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
      {meetings.map((meeting, index) => (
        <div 
          key={index} 
          className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="font-semibold text-lg text-gray-800">{meeting.title}</div>
          <div className="text-gray-600 mt-1">
            {meeting.date} at {meeting.time}
          </div>
          <div className="text-gray-600">{meeting.groupname}</div>
          <a
            href={meeting.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-medium"
          >
            Join Meeting →
          </a>
        </div>
      ))}
    </div>
  );
};

export default MeetingList;