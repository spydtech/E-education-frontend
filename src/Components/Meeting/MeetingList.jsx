import React from 'react';

const MeetingList = ({ meetings }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Scheduled Meetings</h2>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index} className="mb-2 p-2 border rounded shadow-sm">
            <div className="font-semibold">{meeting.title}</div>
            <div>{meeting.date} at {meeting.time}</div>
            <a href={meeting.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Join Meeting
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;