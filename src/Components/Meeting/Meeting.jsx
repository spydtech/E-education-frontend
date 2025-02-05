import React, { useState } from 'react';
import MeetingForm from './MeetingForm';
import MeetingList from './MeetingList';


const Meeting = () => {
    const [meetings, setMeetings] = useState([]);

  const addMeeting = (meeting) => {
    setMeetings([...meetings, meeting]);
  };

  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Meeting Scheduler</h1>
      <MeetingForm addMeeting={addMeeting} />
      <MeetingList meetings={meetings} />
   
    </div>

    </>
  )
}

export default Meeting