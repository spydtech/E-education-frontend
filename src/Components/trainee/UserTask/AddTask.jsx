import React, { useState, useEffect } from "react";
import axios from "axios";

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
        const response = await axios.get("http://localhost:8080/api/chat-groups/get/users/email", {
          headers: { Authorization: `Bearer ${jwt}` },
        });
  
        if (Array.isArray(response.data)) {
          // Remove duplicate chat groups
          const uniqueGroups = response.data.reduce((acc, group) => {
            if (!acc.some(g => g.chatGroupName === group.chatGroupName)) {
              acc.push(group);
            }
            return acc;
          }, []);
  
          setGroups(uniqueGroups);
          setGroupUsers(response.data);
          setFilteredUsers(response.data);
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
  

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });

    if (name === "chatGroup") {
      const selectedGroupUsers = groupUsers.filter(user => user.chatGroupName === value);
      setFilteredUsers(selectedGroupUsers);
      setTask(prev => ({ ...prev, users: [] }));
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
        "http://localhost:8080/api/task/tasks/upload/by-trainee",
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
<div>
  <label className="block text-sm font-medium">Select Group</label>
  {loading ? (
    <p>Loading groups...</p>
  ) : (
    groups.map((group) => (
      <label key={group.chatGroupName} className="block">
        <input 
          type="radio" 
          name="chatGroup" 
          value={group.chatGroupName} 
          checked={task.chatGroup === group.chatGroupName} 
          onChange={handleChange} 
        />
        {group.chatGroupName}
      </label>
    ))
  )}
</div>


        {/* User Selection Table */}
        {task.chatGroup  && (
          <div className="mt-4 p-4 font-poppins">
            <div className="grid grid-cols-6 font-medium text-gray-700 border-b pb-2 text-center border-2 border-gray-400 rounded-md">
              <span className="space-x-2">
                <input type="checkbox" onChange={handleSelectAll} checked={task.users.length === filteredUsers.length} />
                <span>Select All</span>
              </span>
              <span>User Name</span>
              <span>Email</span>
              <span>Status</span>
              <span>Joining Date</span>

              <span>Expiry Date</span>
            </div>
            {filteredUsers.map((user) => (
              <div key={user.userEmail} className="grid grid-cols-6 items-center py-2 border-b-gray-400 text-center">
                <input
                  type="checkbox"
                  checked={task.users.includes(user.userEmail)}
                  onChange={() => handleUserSelection(user.userEmail)}
                />
                
                <span className="flex items-center space-x-2">
  {/* Circle with Initials */}
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-lg font-semibold">
    {user.userName
      ?.split(" ")
      .map((name) => name.charAt(0))
      .join("") || ""}
  </span>

  {/* Full Name */}
  <span className="text-gray-800 font-medium">{user.userName || "Unknown User"}</span>
</span>



                <span>{user.userEmail}</span>
                <span className={`p-2 w-auto rounded-full text-white ${user.status === "ACTIVE" ? "bg-green-500 object-cover" : "bg-yellow-300"}`}>
                  {user.status}
                </span>
                <span>{user.joiningDate}</span>
                <span>{user.expiryDate}</span>
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
