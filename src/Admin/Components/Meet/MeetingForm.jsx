// import React, { useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { getUser, logout } from "../../../State/Auth/Action";

// const MeetingForm = () => {
//   const [title, setTitle] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [showMeetOptions, setShowMeetOptions] = useState(false);
//   const [showMeetings, setShowMeetings] = useState(false);
//   const { groupName: locationGroupName, users: locationUsers } = location.state || {};
//    const [loading, setLoading] = useState(true); 
//    const [error, setError] = useState("");

//     const jwt = localStorage.getItem("jwt");
//      const auth = useSelector((state) => state.auth);
   
//      const dispatch = useDispatch();
//      const [meetings, setMeetings] = useState([]);




//   useEffect(() => {
//       const fetchGroups = async () => {
//         try {
//           setLoading(true);
//           const response = await fetch("http://localhost:8080/api/chat-groups", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${jwt}`, // Include the JWT token
//             },
//           });
        
//           if (!response.ok) {
//             throw new Error(`Failed to fetch groups: ${response.statusText}`);
//           }
//           const data = await response.json();
  
//           // Ensure the response matches expected data structure
//           const formattedGroups = data.map((group) => ({
//             id: group.id,
//             groupName: group.groupName, // Ensure you're accessing the correct field
//             users: group.users || [],
//             trainees: group.trainees || [],
//             editMode: false,
//           }));
//           setGroups(formattedGroups);
//           setError("");
//         } catch (err) {
//           setError(err.message);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchGroups();
//     }, []);

//   const generateMeetingLink = (title) => {
//     const baseLink = "https://meet.jit.si/spydtech/";
//     const meetingId = encodeURIComponent(title.trim().replace(/\s+/g, "-"));
//     return `${baseLink}${meetingId}`;
//   };




//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Check if all required fields are filled
//     if (!title || !fromDate || !toDate || !fromTime || !toTime || !selectedGroup) {
//       setError("Please fill in all the required fields.");
//       return;
//     }
  
//     // Check if the selected group exists in the list of available groups
//     const groupExists = groups.some(group => group.groupName === selectedGroup);
  
//     if (!groupExists) {
//       setError(`The selected group "${selectedGroup}" does not exist.`);
//       return;
//     }
  
//     // Generate the meeting link
//     const link = generateMeetingLink(title);
  
//     // Create the meeting object
//     const meeting = {
//       title,
//       fromDate,
//       toDate,
//       fromTime,
//       toTime,
//       link,
//       groupName: selectedGroup,
//       phone: "(US) +1 406-838-3066",
//       pin: "235 386 172#",
//       organizer: Admin,  // Admin's name, fetched from state or user context
//       guests: ["Guest1", "Guest2"], // Example guest data
//     };
  
//     // Get JWT token from localStorage
//     const jwt = localStorage.getItem("jwt");
  
//     if (!jwt) {
//       setError("No authentication token found. Please log in.");
//       return;
//     }
  
//     try {
//       const response = await fetch("http://localhost:8080/meeting/save", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${jwt}`, // Add JWT token here
//         },
//         body: JSON.stringify(meeting), // Send the meeting data in the request body
//       });
  
//       console.log("Meeting payload being sent:", meeting);
  
//       if (!response.ok) {
//         const responseData = await response.json();
//         console.error("Error response body:", responseData);
//         throw new Error(`Error saving meeting: ${responseData.error || response.statusText}`);
//       }
  
//       const savedMeeting = await response.json();
//       console.log("Meeting saved successfully:", savedMeeting);
  
//       if (savedMeeting.status === false) {
//         setError(savedMeeting.message || "An error occurred while saving the meeting.");
//         return;
//       }
  
//       // Add the new meeting to the list (assuming you have a function for this)
//       addMeeting(savedMeeting.payload);  // Assuming the payload contains the meeting details
  
//       // Reset form fields after successful submission
//       setTitle("");
//       setFromDate("");
//       setToDate("");
//       setFromTime("");
//       setToTime("");
//       setSelectedGroup("");
//       setError("");
//       setShowForm(false);
//       setShowMeetOptions(false);
//     } catch (error) {
//       console.error("An error occurred:", error.message);
//       setError(error.message || "An unknown error occurred while saving the meeting.");
//     }
//   };
  
//   const [meetingList, setMeetingList] = useState([]);
//   useEffect(() => {
//     const fetchAllMeetings = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:8080/meeting/getAll", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to fetch meetings: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setMeetingList(data.payload); // Update the state variable
//         setError("");
//       } catch (err) {
//         setError(err.message);
//         setMeetingList([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllMeetings();
//   }, []);

 
  



  
//    useEffect(() => {
//       if (jwt) {
//           dispatch(getUser(jwt));
//       }
//   }, [jwt, dispatch]);

//   const Admin = auth.user ? `${auth.user.firstName} ${auth.user.lastName}` : "Unknown Admin";


  

  
//   const toggleMeetOptions = () => {
//     setShowMeetOptions(!showMeetOptions);
//     setShowForm(false);
//     setShowMeetings(false);
//   };

//   const openForm = () => {
//     setShowForm(true);
//     setShowMeetings(false);
//   };

//   const openMeetings = () => {
//     setShowMeetings(true);
//     setShowForm(false);
//   };
//   const themes= localStorage.getItem("theme");
//   return (
//     <div className="grid gap-4 px-2">
//       <div className="w-full  grid gap-4  pr-4">
//         <nav className="mb-6">
//           <a
//             href="#"
//             className="block text-xl text-[#001510]"
//             onClick={toggleMeetOptions}
//           >
//             Meet
//           </a>
//           {showMeetOptions && (
//             <div className="mt-2">
//               <button
//                 onClick={openForm}
//                 className="block w-full md:w-40 h-12 py-2 px-4 text-nowrap bg-[#001510] text-white rounded-md mb-2"
//               >
//                 Schedule Meeting
//               </button>
//               <a
//                 href="#"
//                 onClick={openMeetings}
//                 className="block lg:text-xl text-lg text-nowrap text-[#001510]"
//               >
//                 My Meetings
//               </a>
//             </div>
//           )}
//         </nav>
//       </div>

//       {showForm && (
//         <div className={` ${themes === "dark" ? "bg-black text-black" : "text-[#001510] bg-gradient-to-l from-[#001510] to-[#00BF8F]   "} w-full  md:w-auto gap-4`}>
//           <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
//             <div className="grid  gap-4 lg:grid-cols-4 md:grid-cols-2 ">
//               <div className="mb-4">
//                 <label
//                   htmlFor="groupSelect"
//                   className="block mb-2 text-sm font-medium text-[#001510]"
//                 >
//                   Select a group
//                 </label>
//                 <select
//                   id="groupSelect"
//                   value={selectedGroup}
//                   onChange={(e) => setSelectedGroup(e.target.value)}
//                   className="block w-full md:w-44 p-2 border text-black bg-white border-gray-300 rounded-md shadow-sm focus:ring-[#001510] focus:border-[#001510]"
//                 >
//                   <option value="" disabled>
//                     Select a group
//                   </option>
//                   {groups.map((group) => (
//                     <option key={group.id} value={group.groupName}>
//                       {group.groupName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-full mb-4">
//                 <label className="block text-[#001510]">Meeting Title</label>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full md:w-44"
//                   required
//                 />
//               </div>
//             </div>
//             <div className=" grid  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 ">
//               <div className="w-full mb-4">
//                 <label className="block text-[#001510]">From Date</label>
//                 <input
//                   type="date"
//                   value={fromDate}
//                   onChange={(e) => setFromDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                   required
//                 />
//               </div>
//               <div className="w-full mb-4">
//                 <label className="block text-[#001510]">To Date</label>
//                 <input
//                   type="date"
//                   value={toDate}
//                   onChange={(e) => setToDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                   required
//                 />
//               </div>
     
           
//               <div className="w-full mb-4">
//                 <label className="block text-[#001510]">From Time</label>
//                 <input
//                   type="time"
//                   value={fromTime}
//                   onChange={(e) => setFromTime(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                   required
//                 />
//               </div>
//               <div className="w-full mb-4">
//                 <label className="block text-[#001510]">To Time</label>
//                 <input
//                   type="time"
//                   value={toTime}
//                   onChange={(e) => setToTime(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                   required
//                 />
//               </div>
           
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-[#00BF8F] to-[#001510] text-white py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

// {showMeetings && (
//         <div className="w-full md:w-3/4 lg:w-2/3">
//           <h2 className="text-xl font-semibold mb-4">Scheduled Meetings</h2>
//           {loading ? (
//             <p>Loading meetings...</p>
//           ) : error ? (
//             <p className="text-red-500">{error}</p>
//           ) : meetingList.length > 0 ? (
//             <ul className="list-disc pl-5">
//               {meetingList.map((meeting, index) => (
//                 <li key={index} className="mb-2">
//                   <a href={meeting.link} target="_blank" rel="noopener noreferrer">
//                     {meeting.title} ({meeting.fromDate} {meeting.fromTime} - {meeting.toDate}{" "}
//                     {meeting.toTime})
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No meetings scheduled</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MeetingForm;



import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../State/Auth/Action";
import axios from "axios";

const MeetingForm = () => {
  const [title, setTitle] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showMeetOptions, setShowMeetOptions] = useState(false);
  const [showMeetings, setShowMeetings] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [meetingList, setMeetingList] = useState([]);

  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const Admin = auth.user ? `${auth.user.firstName} ${auth.user.lastName}` : "Unknown Admin";

  // Fetch groups from the backend
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/api/chat-groups", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch groups: ${response.statusText}`);
        }

        const data = await response.json();
        const formattedGroups = data.map((group) => ({
          id: group.id,
          groupName: group.groupName,
          users: group.users || [],
          trainees: group.trainees || [],
          editMode: false,
        }));

        setGroups(formattedGroups);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [jwt]);

  

  useEffect(() => {
    if (!jwt) {
      setError("Authorization token is missing.");
      return;
    }
  
    const fetchAllMeetings = async () => {
      try {
        setLoading(true);
        console.log("Fetching meetings...");
  
        const response = await axios.get("http://localhost:8080/api/meeting/getAll", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        console.log("Meeting API Response:", response);
        console.log("Meeting API Data:", response.data);
  
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
  }, [jwt]);// Re-run effect when the JWT token changes
  // Generate a meeting link
  const generateMeetingLink = (title) => {
    const baseLink = "https://meet.jit.si/spydtech/";
    const meetingId = encodeURIComponent(title.trim().toLowerCase().replace(/\s+/g, "-"));
    return `${baseLink}${meetingId}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !fromDate || !toDate || !fromTime || !toTime || !selectedGroup) {
      setError("Please fill in all the required fields.");
      return;
    }

    const groupExists = groups.some((group) => group.groupName === selectedGroup);
    if (!groupExists) {
      setError(`The selected group "${selectedGroup}" does not exist.`);
      return;
    }

    const link = generateMeetingLink(title);

    const meeting = {
      title,
      fromDate,
      toDate,
      fromTime,
      toTime,
      link,
      groupName: selectedGroup,
      phone: "(US) +1 406-838-3066",
      pin: "235 386 172#",
      organizer: Admin,
      guests: ["Guest1", "Guest2"],
    };

    try {
      const response = await fetch("http://localhost:8080/api/meeting/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(meeting),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(`Error saving meeting: ${responseData.error || response.statusText}`);
      }

      const savedMeeting = await response.json();
      console.log("Meeting saved successfully:", savedMeeting);

      if (savedMeeting.status === false) {
        setError(savedMeeting.message || "An error occurred while saving the meeting.");
        return;
      }

      // Add the new meeting to the list
      setMeetingList([...meetingList, savedMeeting.payload]);

      // Reset form fields
      setTitle("");
      setFromDate("");
      setToDate("");
      setFromTime("");
      setToTime("");
      setSelectedGroup("");
      setError("");
      setShowForm(false);
      setShowMeetOptions(false);
      alert("Meeting saved successfully!");
    } catch (error) {
      console.error("An error occurred:", error.message);
      setError(error.message || "An unknown error occurred while saving the meeting.");
    }
  };

  // Toggle meet options
  const toggleMeetOptions = () => {
    setShowMeetOptions(!showMeetOptions);
    setShowForm(false);
    setShowMeetings(false);
  };

  // Open the meeting form
  const openForm = () => {
    setShowForm(true);
    setShowMeetings(false);
  };

  // Open the meetings list
  const openMeetings = () => {
    setShowMeetings(true);
    setShowForm(false);
  };

  const themes = localStorage.getItem("theme");

  return (
    <div className="grid gap-4 px-2">
      <div className="w-full grid gap-4 pr-4">
        <nav className="mb-6">
          <button href="#" className="block w-full md:w-40 h-12 py-2 px-4 text-nowrap bg-[#001510] text-white rounded-md mb-2" onClick={toggleMeetOptions}>
            Meet
          </button>
          {showMeetOptions && (
            <div className="mt-2 flex gap-4">
              <button
                onClick={openForm}
                className="block w-full md:w-40 h-12 py-2 px-4 text-nowrap bg-[#001510] text-white rounded-md mb-2"
              >
                Schedule Meeting
              </button>
              <button href="#" onClick={openMeetings} className="block w-full md:w-40 h-12 py-2 px-4 text-nowrap text-white bg-[#001510] rounded-md mb-2">
                My Meetings
              </button>
            </div>
          )}
        </nav>
      </div>

      {showForm && (
        <div className={`${themes === "dark" ? "bg-black text-black" : "text-[#001510] bg-gradient-to-l from-[#001510] to-[#00BF8F]"} w-full md:w-auto gap-4`}>
          <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
              <div className="mb-4">
                <label htmlFor="groupSelect" className="block mb-2 text-sm font-medium text-[#001510]">
                  Select a group
                </label>
                <select
                  id="groupSelect"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="block w-full md:w-44 p-2 border text-black bg-white border-gray-300 rounded-md shadow-sm focus:ring-[#001510] focus:border-[#001510]"
                >
                  <option value="" disabled>
                    Select a group
                  </option>
                  {groups.map((group) => (
                    <option key={group.id} value={group.groupName}>
                      {group.groupName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full mb-4">
                <label className="block text-[#001510]">Meeting Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 border rounded w-full md:w-44"
                  required
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
              <div className="w-full mb-4">
                <label className="block text-[#001510]">From Date</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-[#001510]">To Date</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-[#001510]">From Time</label>
                <input
                  type="time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-[#001510]">To Time</label>
                <input
                  type="time"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-gradient-to-r from-[#00BF8F] to-[#001510] text-white py-2 px-4 rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      )}



{showMeetings && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">My Meetings</h2>
          {loading ? (
            <p>Loading meetings...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : meetingList.length === 0 ? (
            <p>No meetings scheduled.</p>
          ) : (
            <ul className="list-disc pl-5">
              {meetingList.map((meeting, index) => (
                <li key={index} className="mb-2">
                  <strong>Title:</strong> {meeting.title} <br />
                  <strong>From:</strong> {meeting.fromDate} {meeting.fromTime} <br />
                  <strong>To:</strong> {meeting.toDate} {meeting.toTime} <br />
                  <strong>Group:</strong> {meeting.groupName} <br />
                  <strong>Organizer:</strong> {meeting.organizer} <br />
                  <strong>Link:</strong> <a href={meeting.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Join Meeting
                  </a>
                  <hr className="mt-2"/>
                </li>
              ))}
            </ul>
          )}
  </div>
)}



    </div>
  );
};

export default MeetingForm;


