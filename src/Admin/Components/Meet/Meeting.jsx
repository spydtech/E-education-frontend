// // import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import MeetingForm from "./MeetingForm";
// import MeetingList from "./MeetingList";

// const Meeting = () => {
//   const [meetings, setMeetings] = useState([]);

//   const addMeeting = (meeting) => {
//     setMeetings([...meetings, meeting]);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <MeetingForm addMeeting={addMeeting} />
//       <MeetingList meetings={meetings} />
//     </div>
//   );
// };

// export default Meeting;





import React, { useState } from "react";
import MeetingForm from "./MeetingForm";
import MeetingList from "./MeetingList";

const Meeting = () => {
  const [meetings, setMeetings] = useState([]);

  const addMeeting = (meeting) => {
    setMeetings([...meetings, meeting]);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <MeetingForm addMeeting={addMeeting} />
      <MeetingList meetings={meetings} />
    </div>
  );
};

export default Meeting;


