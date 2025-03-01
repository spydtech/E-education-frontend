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
import MeetingCalendar from "./MeetingCalendar "
import { API_BASE_URL } from "../../../Config/api";

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
        const response = await fetch(`${API_BASE_URL}/api/groups`, {
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
  
        const response = await axios.get(`${API_BASE_URL}/api/meeting/getAll`, {
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
      const response = await fetch(`${API_BASE_URL}/api/meeting/save`, {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

 

  // Toggle meet options
  const toggleMeetOptions = () => {
    setShowMeetOptions(!showMeetOptions);
    setShowForm(false);
    setShowMeetings(false);
  };

  // Open the meeting form
  const openForm = () => {
    setShowForm(!showForm); // Toggle the form visibility
    setShowMeetings(false); // Ensure the meetings list is hidden when the form is open
  };

  // Open the meetings list
  const openMeetings = () => {
    setShowMeetings(true);
    setShowForm(false);
  };

  // const themes = localStorage.getItem("theme");

  return (
    <div className="grid gap-4 px-2 font-poppins">
      <div className="w-full grid gap-4 pr-4  justify-center  text-center">
        <nav className="mb-6  mt-5 flex flex-row md:space-x-[65rem] lg:space-x-[1000px]" >
          <h1 onClick={openMeetings}>Meetings</h1>
         <div className="flex space-x-4 "> 
         <svg 
         onClick={openModal}
         width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17.775C7 14.388 7 12.6964 8.05235 11.644C9.10471 10.5917 10.7964 10.5917 14.1833 10.5917H35.7332C39.1201 10.5917 40.8118 10.5917 41.8642 11.644C42.9165 12.6964 42.9165 14.388 42.9165 17.775C42.9165 18.6208 42.9165 19.0446 42.6543 19.3086C42.3903 19.5708 41.9647 19.5708 41.1207 19.5708H8.79583C7.94999 19.5708 7.52618 19.5708 7.26219 19.3086C7 19.0446 7 18.619 7 17.775ZM7 33.9374C7 37.3243 7 39.016 8.05235 40.0683C9.10471 41.1207 10.7964 41.1207 14.1833 41.1207H35.7332C39.1201 41.1207 40.8118 41.1207 41.8642 40.0683C42.9165 39.016 42.9165 37.3243 42.9165 33.9374V24.9583C42.9165 24.1124 42.9165 23.6886 42.6543 23.4246C42.3903 23.1625 41.9647 23.1625 41.1207 23.1625H8.79583C7.94999 23.1625 7.52618 23.1625 7.26219 23.4246C7 23.6886 7 24.1142 7 24.9583V33.9374Z" fill="#494949"/>
<path d="M15.9795 7V12.3875M33.9377 7V12.3875" stroke="#494949" stroke-width="4.08333" stroke-linecap="round"/>
</svg>

  <svg
 className="relative cursor-pointer " // Add cursor-pointer for better UX
 onClick={openForm} // Use the openForm function

width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9962 8.20135C21.3128 7.50197 27.6874 7.50197 34.0041 8.20135C37.5015 8.59335 40.323 11.3476 40.7334 14.8572C41.4819 21.2639 41.4819 27.736 40.7334 34.1428C40.323 37.6524 37.5015 40.4066 34.0041 40.7986C27.6874 41.498 21.3128 41.498 14.9962 40.7986C11.4988 40.4066 8.67721 37.6524 8.26684 34.1428C7.51848 27.7367 7.51848 21.2653 8.26684 14.8592C8.47441 13.1542 9.2517 11.5692 10.4727 10.3611C11.6937 9.15306 13.287 8.39275 14.9941 8.2034M24.5001 14.3059C24.9062 14.3059 25.2957 14.4673 25.5829 14.7544C25.8701 15.0416 26.0314 15.4311 26.0314 15.8372V22.9687H33.1629C33.569 22.9687 33.9585 23.1301 34.2457 23.4172C34.5328 23.7044 34.6942 24.0939 34.6942 24.5C34.6942 24.9061 34.5328 25.2956 34.2457 25.5827C33.9585 25.8699 33.569 26.0312 33.1629 26.0312H26.0314V33.1628C26.0314 33.5689 25.8701 33.9584 25.5829 34.2455C25.2957 34.5327 24.9062 34.694 24.5001 34.694C24.094 34.694 23.7045 34.5327 23.4174 34.2455C23.1302 33.9584 22.9689 33.5689 22.9689 33.1628V26.0312H15.8373C15.4312 26.0312 15.0417 25.8699 14.7546 25.5827C14.4674 25.2956 14.3061 24.9061 14.3061 24.5C14.3061 24.0939 14.4674 23.7044 14.7546 23.4172C15.0417 23.1301 15.4312 22.9687 15.8373 22.9687H22.9689V15.8372C22.9689 15.4311 23.1302 15.0416 23.4174 14.7544C23.7045 14.4673 24.094 14.3059 24.5001 14.3059Z" fill="#494949"/>
</svg>

         </div>
        
        </nav>
      </div>

       {/* Modal */}
       {isModalOpen && (
        <div id="modal" className="modal">
          <div className="modal-content">
           
            <MeetingCalendar />
          </div>
        </div>
      )}

      {showForm && (
  <div className={`fixed left-1/3 flex justify-center items-center  `}>
    <div className="w-[450px] h-auto p-6 border rounded-xl shadow-md bg-white">
      <form onSubmit={handleSubmit}>
        <h1 className="text-lg font-semibold mb-4 text-center">Schedule New Meeting</h1>

        {/* Select Group */}
        <div className="mb-4">
          <label htmlFor="groupSelect" className="block mb-2 text-sm font-medium text-[#001510]">
            Select a group
          </label>
          <select
            id="groupSelect"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="block w-full p-2 border text-black bg-white border-gray-300 rounded-md shadow-sm focus:ring-[#001510] focus:border-[#001510]"
          >
            <option value="" disabled>Select a group</option>
            {groups.map((group) => (
              <option key={group.id} value={group.groupName}>{group.groupName}</option>
            ))}
          </select>
        </div>

        {/* Meeting Title */}
        <div className="mb-4">
          <label className="block text-[#001510]">Meeting Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Dates & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[#001510]">From Date</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}
              className="mt-1 p-2 border rounded w-full" required />
          </div>
          <div>
            <label className="block text-[#001510]">To Date</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}
              className="mt-1 p-2 border rounded w-full" required />
          </div>
          <div>
            <label className="block text-[#001510]">From Time</label>
            <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)}
              className="mt-1 p-2 border rounded w-full" required />
          </div>
          <div>
            <label className="block text-[#001510]">To Time</label>
            <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)}
              className="mt-1 p-2 border rounded w-full" required />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="bg-[#FF9B26] text-white py-2 rounded-lg w-full">
            Done
          </button>
        </div>
      </form>
    </div>
  </div>
)}



{showMeetings && (
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {loading ? (
      <p className="col-span-full text-center">Loading meetings...</p>
    ) : error ? (
      <p className="col-span-full text-red-500 text-center">{error}</p>
    ) : meetingList.length === 0 ? (
      <p className="col-span-full text-center">No meetings scheduled.</p>
    ) : (
      meetingList.map((meeting, index) => (
        <div key={index} className="p-4 border-2 border-[#989898]  text-[#989898] rounded-lg shadow-md bg-[#F4FAFF]">
          <h3 className="text-lg text-[#989898]">{meeting.title}</h3>
          <p>From:{meeting.fromDate} {meeting.fromTime}</p>
          <p>To: {meeting.toDate} {meeting.toTime}</p>
          <p>Group: {meeting.groupName}</p>
          <p>Organizer: {meeting.organizer}</p>
          <p>
            <strong>Meeting Link:</strong>  
            <a href={meeting.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
              Join Meeting
            </a>
          </p>
        </div>
      ))
    )}
  </div>
)}




    </div>
  );
};

export default MeetingForm;


