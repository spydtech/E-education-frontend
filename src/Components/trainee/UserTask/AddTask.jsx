import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL} from "../../../Config/api";

const AddTask = () => {
  const [task, setTask] = useState({
    assignmentDescription: "",
    assignmentDate: "",
    dueDate: "",
    chatGroup: "",
    users: [],
    file: null,
  });

  const [groups, setGroups] = useState([]);
  const [groupUsers, setGroupUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const jwt = localStorage.getItem("jwt"); 

  // Fetch Groups & Users from API
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/groups/get/users/email`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
  
        if (Array.isArray(response.data)) {
          // Get unique groups and associate users
          const uniqueGroups = response.data.map(group => ({
            groupName: group.groupName,
            users: group.users.map(user => ({
              userEmail: user.email,  // Correcting key names
              userName: user.fullName, 
              status: user.userstatus,
              joiningDate: new Date(user.createdAt).toLocaleDateString("en-GB"),
              expiryDate: new Date(group.courseEndDate).toLocaleDateString("en-GB"),
            })),
          }));
  
          setGroups(uniqueGroups);
          setFilteredUsers([]); // Ensure filtered users reset
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchGroups();
  }, [jwt]);
  
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  
    if (name === "chatGroup") {
      const selectedGroup = groups.find(group => group.groupName === value);
      if (selectedGroup) {
        setFilteredUsers(selectedGroup.users || []);
        setTask(prev => ({ ...prev, users: [] })); // Reset selected users
      } else {
        setFilteredUsers([]);
      }
    }
  };
  

  // Handle User Selection
  const handleUserSelection = (userEmail) => {
    setTask(prev => ({
      ...prev,
      users: prev.users.includes(userEmail) ? prev.users.filter(email => email !== userEmail) : [...prev.users, userEmail],
    }));
  };

  // Handle Select All Users
  const handleSelectAll = (e) => {
    setTask(prev => ({
      ...prev,
      users: e.target.checked ? filteredUsers.map(user => user.userEmail) : [],
    }));
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setTask({ ...task, file: e.target.files[0] });
  };

  // Handle Submit
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.assignmentDescription || !task.assignmentDate || !task.dueDate || !task.chatGroup || task.users.length === 0) {
      alert("Please fill in all required fields and select at least one user.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("assignmentDescription", task.assignmentDescription);
      formData.append("assignmentDate", task.assignmentDate);
      formData.append("dueDate", task.dueDate);
      formData.append("chatGroup", task.chatGroup);
      formData.append("postedBy", localStorage.getItem("userEmail") || "Trainer");

      task.users.forEach((user) => formData.append("users", user));

      if (task.file) {
        formData.append("file", task.file);
      } else {
        alert("Please attach a file before submitting.");
        return;
      }

      // ✅ Debugging: Log FormData before sending
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/task/tasks/upload/by-trainee`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Assignment uploaded successfully!");
        setTask({
          assignmentDescription: "",
          assignmentDate: "",
          dueDate: "",
          chatGroup: "",
          users: [],
          file: null,
        });
      } else {
        throw new Error("Failed to upload assignment.");
      }
    } catch (error) {
      console.error("Error uploading assignment:", error);
      alert("Error uploading assignment. Please try again.");
    }
  };
  

  return (
    <div className="max-w-6xl mx-auto font-poppins pt-2">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Assignment Description */}
        <div>
          <label className="block text-sm font-medium">Assignment Description</label>
          <textarea
            name="assignmentDescription"
            value={task.assignmentDescription}
            onChange={handleChange}
            className="mt-1 block w-full h-24 border border-gray-400 rounded-md p-2"
          />
        </div>

        {/* Assignment & Due Date */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium">Assignment Date</label>
            <input
              type="date"
              name="assignmentDate"
              value={task.assignmentDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-400 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-400 rounded-md p-2"
            />
          </div>
        </div>

        {/* Select Group */}
       {/* Select Group */}
{/* Select Group */}
<div>
  <label className="block text-sm font-medium">Select Group</label>
  {loading ? (
    <p>Loading groups...</p>
  ) : (
    groups.map((group) => (
      <label key={group.groupName} className="block p-2 ">
        <input 
          type="radio" 
          name="chatGroup" 
          value={group.groupName} 
          checked={task.chatGroup === group.groupName} 
          onChange={handleChange} 
          className="h-4 w-4 border border-gray-400 rounded-md p-2 space-x-4"
        />
        {group.groupName}
      </label>
    ))
  )}
</div>



        {/* User Selection Table */}
        {task.chatGroup  && (
           <div className="mt-6 p-4 bg-white  overflow-hidden font-poppins">
           {/* Table Header */}
           <div className="grid grid-cols-6 font-semibold text-gray-800 bg-gray-100 p-3 rounded-md text-center border border-gray-300">
             <span className="flex items-center space-x-2">
               <input
                 type="checkbox"
                 onChange={handleSelectAll}
                 checked={task.users.length === filteredUsers.length}
                 className="w-4 h-4"
               />
               <span>Select All</span>
             </span>
             <span>User Name</span>
             <span>Email</span>
             <span>Status</span>
             <span>Joining Date</span>
             <span>Expiry Date</span>
           </div>
   
           {/* Table Body */}
           {filteredUsers.map((user) => (
             <div
               key={user.userEmail}
               className="grid grid-cols-6 items-center py-3 px-2 border-b border-gray-300 text-center hover:bg-gray-50 transition-all"
             >
               {/* Checkbox */}
               <input
                 type="checkbox"
                 checked={task.users.includes(user.userEmail)}
                 onChange={() => handleUserSelection(user.userEmail)}
                 className="w-4 h-4 mx-auto"
               />
   
               {/* User Name with Avatar */}
               <div className="flex items-center space-x-2">
                 <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm ">
                   {user.userName
                     ?.split(" ")
                     .map((name) => name.charAt(0))
                     .join("") || "U"}
                 </span>
                 <span className="text-gray-800 font-medium">{user.userName || "Unknown User"}</span>
               </div>
   
               {/* Email */}
               <span className="text-gray-600 text-sm">{user.userEmail}</span>
   
               {/* Status Badge */}
               <span
                 className={`py-1 px-1 rounded-full text-white text-sm  
                   ${user.status === "ACTIVE" ? "bg-green-500 bg-cover" : "bg-yellow-400 bg-cover"}`}
               >
                 {user.status}
               </span>
   
               {/* Joining Date */}
               <span className="text-gray-600">{new Date(user.joiningDate).toLocaleDateString("en-GB")}</span>
   
               {/* Expiry Date */}
               <span className="text-gray-600">{user.expiryDate}</span>
             </div>
            ))}
          </div>
        )}

        {/* File Upload Section */}
        <div className="mt-4 h-40 w-96 mx-auto bg-gray-200 border border-gray-400 rounded-md p-6 flex flex-col items-center text-center">
          <p className="mt-2 text-sm">Select a file or drag and drop here</p>
          <p className="text-xs text-gray-500">JPG, PNG, or PDF (max 10MB)</p>
          <input type="file" onChange={handleFileChange} className="mt-2" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Upload
          </button>
          <button type="button" className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md">
            Schedule Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
