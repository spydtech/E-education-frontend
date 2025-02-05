import React, { useState } from 'react';

const MeetingForm = ({ addMeeting }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const generateMeetingLink = (title) => {
    const baseLink = "https://meet.jit.si/";
    const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, '-'));
    return `${baseLink}${meetingId}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = generateMeetingLink(title);
    addMeeting({ title, date, time, link });
    setTitle('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Meeting Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Time</label>
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Schedule Meeting</button>
    </form>
  );
};

export default MeetingForm;