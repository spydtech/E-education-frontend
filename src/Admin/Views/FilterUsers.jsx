import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import girl from "../../assetss/Home/Admin.png"
import { IoCloseCircle } from "react-icons/io5";
import { useTheme } from "@mui/material";
import { FaBars, FaPlus, FaPen } from "react-icons/fa";
import Tab from "./TraineeCourses";
import { API_BASE_URL } from "../../Config/api";


function UsersRolesTable() {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [searchCourse, setSearchCourse] = useState("");
  const [searchTrainee, setSearchTrainee] = useState("");
  const [searchTraineeCourse, setSearchTraineeCourse] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedTrainees, setSelectedTrainees] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const [showTraineeSearch, setShowTraineeSearch] = useState(false);
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [userData, setUserData] = useState([]);
  const [traineeData, setTraineeData] = useState([]);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const themes = localStorage.getItem("theme");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseEndDate, setCourseEndDate] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/payment/user-courses`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUserData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [jwt]);

   useEffect(() => {
    if (!jwt) {
      setError("JWT token is missing.");
      return;
    }

    axios
      .get(`${API_BASE_URL}/trainee/getAllTrainee`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        // Log the response to see what data is returned
        console.log("Trainee data fetched:", response.data);

        if (Array.isArray(response.data)) {
          setTraineeData(response.data);
        } else {
          setError("Trainee data format is incorrect.");
        }
      })
      .catch((error) => {
        console.error("Error fetching trainee data:", error);
        setError("Failed to fetch trainee data.");
      });
  }, [jwt]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSearchChange = (event) => setSearch(event.target.value);
  const handleSearchCourseChange = (event) =>
    setSearchCourse(event.target.value);
  const handleTraineeSearchChange = (event) =>
    setSearchTrainee(event.target.value);
  const handleTraineeCourseChange = (event) =>
    setSearchTraineeCourse(event.target.value);

  const handleAddToGroupClick = (user) => {
    if (!selectedUsers.find((u) => u.userName === user.userName)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleAddTraineeToGroup = (trainee) => {
    if (!selectedTrainees.find((t) => t.userName === trainee.userName)) {
      setSelectedTrainees([...selectedTrainees, trainee]);
    }
    setShowTraineeSearch(false);
  };

  const handleRemoveFromGroupClick = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.userName !== user.userName));
  };

  const handleRemoveTraineeFromGroupClick = (trainee) => {
    setSelectedTrainees(
      selectedTrainees.filter((t) => t.userName !== trainee.userName)
    );
  };
  const handleGroupNameChange = (event) => setGroupName(event.target.value);
  

  // No changes in the rest of the component
// Update only the `handleCreateGroup` function
const handleCreateGroup = () => {
  if (!groupName.trim()) {
    setError("Group name cannot be empty.");
    return;
  }

  if (selectedUsers.length === 0 && selectedTrainees.length === 0) {
    setError("Please add at least one user or trainee to the group.");
    return;
  }

  if (!courseEndDate.trim()) {
    setError("Please select a course end date.");
    return;
  }

  setError(""); // Clear any previous errors

  // Create group data with only emails for users and trainees
  const groupData = {
    groupName: groupName.trim(),
    courseEndDate: courseEndDate.trim(), 
    users: selectedUsers.map((user) => user.email), 
    trainees: selectedTrainees.length > 0 ? selectedTrainees[0].email : "",  // Only email
  };

  // Log groupData to verify its structure
  console.log("Group Data:", groupData);

  // Make the POST request
  fetch(`${API_BASE_URL}/api/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(groupData),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message || "Failed to create group.");
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log("Group created successfully:", data);
      // navigate("/admin/users/existing-group");
    })
    .catch((error) => {
      console.error("Error creating group:", error);
      setError(error.message || "Failed to connect to the server.");
    });
};



const handleAddMember = (user) => {
  if (!selectedUsers.some((u) => u.userName === user.userName)) {
    setSelectedUsers([...selectedUsers, user]);
  }
};
  
  
  // const filteredUserData = userData.filter(
  //   (user) =>
  //     user.userName?.toLowerCase().includes(search.toLowerCase()) &&
  //     user.email &&
  //     Array.isArray(user.courses) &&
  //     user.courses.some((course) =>
  //       course.toLowerCase().includes(searchCourse.toLowerCase())
  //     )
  // );
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);


  const filteredTraineeData = traineeData.filter(
    (trainee) =>
      (trainee.firstName + " " + trainee.lastName)
        .toLowerCase()
        .includes(searchTrainee.toLowerCase())
  );

  return (
    <div className=" min-h-screen p-8 font-poppins">
     <div className="flex justify-center space-x-[85%]">
     <h1>Manage Groups</h1>
     <svg 
      onClick={openModal}
     width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.996 8.20135C21.3127 7.50197 27.6873 7.50197 34.004 8.20135C37.5013 8.59335 40.3229 11.3476 40.7333 14.8572C41.4818 21.2639 41.4818 27.736 40.7333 34.1428C40.3229 37.6524 37.5013 40.4066 34.004 40.7986C27.6873 41.498 21.3127 41.498 14.996 40.7986C11.4987 40.4066 8.67709 37.6524 8.26672 34.1428C7.51835 27.7367 7.51835 21.2653 8.26672 14.8592C8.47429 13.1542 9.25157 11.5692 10.4726 10.3611C11.6936 9.15306 13.2868 8.39275 14.994 8.2034M24.5 14.3059C24.9061 14.3059 25.2956 14.4673 25.5828 14.7544C25.8699 15.0416 26.0313 15.4311 26.0313 15.8372V22.9687H33.1628C33.5689 22.9687 33.9584 23.1301 34.2456 23.4172C34.5327 23.7044 34.694 24.0939 34.694 24.5C34.694 24.9061 34.5327 25.2956 34.2456 25.5827C33.9584 25.8699 33.5689 26.0312 33.1628 26.0312H26.0313V33.1628C26.0313 33.5689 25.8699 33.9584 25.5828 34.2455C25.2956 34.5327 24.9061 34.694 24.5 34.694C24.0939 34.694 23.7044 34.5327 23.4173 34.2455C23.1301 33.9584 22.9688 33.5689 22.9688 33.1628V26.0312H15.8372C15.4311 26.0312 15.0416 25.8699 14.7545 25.5827C14.4673 25.2956 14.306 24.9061 14.306 24.5C14.306 24.0939 14.4673 23.7044 14.7545 23.4172C15.0416 23.1301 15.4311 22.9687 15.8372 22.9687H22.9688V15.8372C22.9688 15.4311 23.1301 15.0416 23.4173 14.7544C23.7044 14.4673 24.0939 14.3059 24.5 14.3059Z" fill="#494949"/>
</svg>
</div>

<Tab />
 {/* Modal */}
 {isModalOpen && (
        <div  className="absolute bg-white border-2 w-[1024px] h-auto top-20">
          <div
        
      >
        

        {/* Sidebar Content */}
       
          <div className="flex items-center space-x-2 p-5">
            {/* <FaPen className="text-red-400 text-4xl" /> */}
            <span>New Group Groups</span>
          </div>
       
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Group Name Input */}
        <div className="flex items-center">
  <div className="relative h-16 w-16 sm:h-20 sm:w-20 border bg-[#FF9B26] rounded-full text-white">
    <FaPen className="text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  </div>
  <input
    type="text"
    value={groupName}
    onChange={handleGroupNameChange}
    placeholder="Type the group name here"
    className="border-b-2 border-gray-300 outline-none w-full sm:w-1/3 text-lg ml-4"
  />
   <input
    type="date"
    value={courseEndDate}
    onChange={(e) => setCourseEndDate(e.target.value)}
    placeholder="Course End Date"
    className="border-b-2 border-gray-300 outline-none w-full sm:w-1/3 text-lg ml-4"
  />
</div>
     

        {/* Trainer Name Dropdown */}
        <div className="mt-6">
        <label 
         onClick={() => setShowTraineeSearch(true)}
        className=" text-white   border-2  p-2 bg-[#FF9B26] rounded-lg">Add Trainer </label>
       
      </div>

        {/* Group Members Table */}
        <div className="mt-8">
          <h3 className="text-lg font-bold">Group Members</h3>
         
          <div className="mt-2 flex justify-between items-center">
          <div className="overflow-x-auto ">
        <div className="sm:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 p-4  gap-4 sm:space-x-4 space-x-0">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={handleSearchChange}
            className=" w-auto h-12 px-4 py-2 border text-black  border-[#153243] rounded-md"
          />
          <input
            type="text"
            placeholder="Search by course"
            value={searchCourse}
            onChange={handleSearchCourseChange}
            className=" w-auto h-12 px-4 py-2  text-black  border border-[#153243] rounded-md"
          />
       

       <svg 
           onClick={() => setIsAddMemberModalOpen(true)}
     width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.996 8.20135C21.3127 7.50197 27.6873 7.50197 34.004 8.20135C37.5013 8.59335 40.3229 11.3476 40.7333 14.8572C41.4818 21.2639 41.4818 27.736 40.7333 34.1428C40.3229 37.6524 37.5013 40.4066 34.004 40.7986C27.6873 41.498 21.3127 41.498 14.996 40.7986C11.4987 40.4066 8.67709 37.6524 8.26672 34.1428C7.51835 27.7367 7.51835 21.2653 8.26672 14.8592C8.47429 13.1542 9.25157 11.5692 10.4726 10.3611C11.6936 9.15306 13.2868 8.39275 14.994 8.2034M24.5 14.3059C24.9061 14.3059 25.2956 14.4673 25.5828 14.7544C25.8699 15.0416 26.0313 15.4311 26.0313 15.8372V22.9687H33.1628C33.5689 22.9687 33.9584 23.1301 34.2456 23.4172C34.5327 23.7044 34.694 24.0939 34.694 24.5C34.694 24.9061 34.5327 25.2956 34.2456 25.5827C33.9584 25.8699 33.5689 26.0312 33.1628 26.0312H26.0313V33.1628C26.0313 33.5689 25.8699 33.9584 25.5828 34.2455C25.2956 34.5327 24.9061 34.694 24.5 34.694C24.0939 34.694 23.7044 34.5327 23.4173 34.2455C23.1301 33.9584 22.9688 33.5689 22.9688 33.1628V26.0312H15.8372C15.4311 26.0312 15.0416 25.8699 14.7545 25.5827C14.4673 25.2956 14.306 24.9061 14.306 24.5C14.306 24.0939 14.4673 23.7044 14.7545 23.4172C15.0416 23.1301 15.4311 22.9687 15.8372 22.9687H22.9688V15.8372C22.9688 15.4311 23.1301 15.0416 23.4173 14.7544C23.7044 14.4673 24.0939 14.3059 24.5 14.3059Z" fill="#494949"/>
</svg>




  {/* Add Member Modal */}
  {isAddMemberModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/2">
          <button className="" onClick={() => setIsAddMemberModalOpen(false)}>
                  <IoCloseCircle
                    className={`  text-3xl mb-6 text-[#153243] `}
                  />
                </button>
            <h2 className="text-lg font-bold mb-4">Add New Member To Group</h2>
            <input
              type="text"
              placeholder="🔍 Search by name, user ID..."
              className="w-full p-2 border rounded mb-4"
            />
            <div className="overflow-y-auto max-h-60">
              {userData.map((user) => (
                <div key={user.userId} className="flex justify-between items-center p-2 border-b">
                  <span>{user.userId}</span>
                  <span>{user.userName}</span>
                  <span>{user.email}</span>
                  
    
                  <button
              onClick={() => handleAddToGroupClick(user)}
              className="bg-[#FF9B26] text-white px-4 py-1 rounded"
            >
              Add
            </button>
                </div>
              ))}
            </div>
            {/* <button
              onClick={() => handleAddToGroupClick(user)}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded"
            >
              Add to group
            </button> */}


            
          </div>
          
        </div>
      )}



      
            </div>
      
      </div>
          
          </div>
        </div>

        {/* Create Group Button */}
        
<div className="mt-8">
  <h3 className="text-lg font-bold">Group Members</h3>
  <table className="mt-4 w-full">
    <thead>
      <tr className="text-left text-gray-600 font-medium">
        <th className="p-2">User ID</th>
        <th className="p-2">Name</th>
        <th className="p-2">Email</th>
        <th className="p-2">Status</th>
      </tr>
    </thead>
    <tbody>
      {selectedUsers.map((user) => (
        <tr key={user.userId} className="border-b">
          <td className="p-2">{user.userId}</td>
          <td className="p-2">{user.userName}</td>
          <td className="p-2">{user.email}</td>
          <button className="p-2 bg-[#FF9B26]" onClick={() => handleRemoveFromGroupClick(user)}>remover user</button> {/* You can change this based on your data */}
        </tr>
      ))}
    </tbody>
  </table>
</div>
<button 
          onClick={handleCreateGroup}
        className="mt-6 w-full bg-[#FF9B26] text-white py-3 rounded-lg">
          Create Group
        </button>
       
      </div>
        </div>
     
     
     
     
     )}
     
      
        {/* Group Form and Search Section */}
        {/* {showGroupForm && (
          <div className="fixed inset-0 bg-black/50 flex  justify-center items-center z-50">
            <div
              className={` bg-white  lg:min-w-[640px]  overflow-x-auto border-2 border-[#153243]  rounded-lg p-4 relative`}
            >
              
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Enter Group Name"
                  value={groupName}
                  onChange={handleGroupNameChange}
                  className="auto h-12 px-4 py-2 border border-[#153243]  rounded-md"
                />
              </div>
              {error && (
                <div className="text-#FF9B26 text-center pb-2">{error}</div>
              )}
              <div className="p-4">
                <button
                  className="px-4 py-2  h-12 text-white bg-[#FF9B26]    rounded-md "
                  onClick={handleCreateGroup}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )} */}
        {/* Trainee Search Section */}
        {showTraineeSearch && (
          <div className="fixed   inset-0 bg-black/50 flex justify-center items-center z-50 overflow-auto">
            <div className="bg-white rounded-lg px-4 p-2 w-full pb-8 max-w-3xl max-h-screen h-[500px] overflow-y-auto">
              <div className="flex justify-between ">
                <h1 className=" h-12 font-semibold text-[#153243] p-5 text-2xl">
                  Add Trainee
                </h1>
                <button onClick={() => setShowTraineeSearch(false)}>
                  <IoCloseCircle className=" text-3xl mb-6 text-[#153243] " />
                </button>
              </div>
              <div className="p-4 grid gap-6">
                <input
                  type="text"
                  placeholder="Search Trainee by name"
                  value={searchTrainee}
                  onChange={handleTraineeSearchChange}
                  className="w-auto px-4 h-12 py-2 border border-[#153243] rounded-md"
                />
              
              <table className="min-w-full bg-white border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="py-3 px-6 border border-gray-300 text-left">Name</th>
      <th className="py-3 px-6 border border-gray-300 text-left">Email</th>
      <th className="py-3 px-6 border border-gray-300 text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    {filteredTraineeData.map((trainee) => (
      <tr key={trainee.userName} className="hover:bg-gray-50">
        <td className="py-3 px-6 border border-gray-300">
          {trainee.firstName} {trainee.lastName}
        </td>
        <td className="py-3 px-6 border border-gray-300">
          {trainee.email}
        </td>
        <td className="py-3 px-6 border border-gray-300 bg-[#FF9B26]">
          <button
            className="text-white font-semibold hover:underline"
            onClick={() => handleAddTraineeToGroup(trainee)}
          >
            Add to Group
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
              </div>
              <div className="p-4">
                {/* <button
                  className="px-4 py-2  text-white bg-[#FF9B26] rounded-md "
                  onClick={() => setShowTraineeSearch(false)}
                >
                  Save
                </button> */}
              </div>
            </div>
          </div>
        )}

    
    
     
    </div>
  );
}

export default UsersRolesTable;