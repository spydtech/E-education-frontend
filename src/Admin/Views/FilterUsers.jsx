import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import girl from "../../assetss/Home/Admin.png"
import { IoCloseCircle } from "react-icons/io5";
import { useTheme } from "@mui/material";

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

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/payment/user-courses", {
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
      .get("http://localhost:8080/trainee/getAllTrainee", {
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

  setError(""); // Clear any previous errors

  // Create group data with only emails for users and trainees
  const groupData = {
    groupName: groupName.trim(),
    users: selectedUsers.map((user) => user.email),  // Only email
    trainees: selectedTrainees.map((trainee) => trainee.email),  // Only email
  };

  // Log groupData to verify its structure
  console.log("Group Data:", groupData);

  // Make the POST request
  fetch("http://localhost:8080/api/chat-groups", {
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
      navigate("/admin/users/existing-group");
    })
    .catch((error) => {
      console.error("Error creating group:", error);
      setError(error.message || "Failed to connect to the server.");
    });
};






// const handleCreateGroup = () => {
//   if (!groupName.trim()) {
//     setError("Group name cannot be empty.");
//     return;
//   }
//   setError("");

//   const groupData = {
//     groupName: groupName, // Name of the group
//     users: selectedUsers.map((user) => user.email), // Array of user emails
//     trainees: selectedTrainees.map((trainee) => trainee.email), // Array of trainee emails
//   };

//   axios
//     .post("http://localhost:8080/chat-groups", groupData, {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     })
//     .then((response) => {
//       if (response.status === 200 || response.status === 201) {
//         navigate("/admin/users/existing-group");
//       } else {
//         setError("Unexpected response from the server.");
//       }
//     })
//     .catch((error) => {
//       if (error.response) {
//         setError(
//           `Failed to create group: ${error.response.data.message || "Unknown error"}`
//         );
//       } else {
//         setError("Failed to connect to the server.");
//       }
//     });
// };


  
  
  const filteredUserData = userData.filter(
    (user) =>
      user.userName?.toLowerCase().includes(search.toLowerCase()) &&
      user.email &&
      Array.isArray(user.courses) &&
      user.courses.some((course) =>
        course.toLowerCase().includes(searchCourse.toLowerCase())
      )
  );

  const filteredTraineeData = traineeData.filter(
    (trainee) =>
      (trainee.firstName + " " + trainee.lastName)
        .toLowerCase()
        .includes(searchTrainee.toLowerCase())
  );

  return (
    <div className=" min-h-screen p-8">
      {/* Buttons Section */}
      <div className=" grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 sm:space-x-4 p-4 space-x-0">
        <button
          className="bg-[#153243] max-w-64 h-12 text-white font-semibold py-2 px-4 rounded"
          onClick={() => setShowGroupForm(true)}
        >
          Create Group
        </button>
        <button
          className="bg-[#153243] max-w-64 h-12  text-white font-semibold py-2 px-4 rounded"
          onClick={() => setShowTraineeSearch(true)}
        >
          Add Trainee
        </button>
      </div>
      <div className="flex ">
        {/* Group Form and Search Section */}
        {showGroupForm && (
          <div className="fixed inset-0 bg-black/50 flex  justify-center items-center z-50">
            <div
              className={` bg-white  lg:min-w-[640px]  overflow-x-auto border-2 border-[#153243]  rounded-lg p-4 relative`}
            >
              <div className="flex justify-between ">
                <h1 className=" h-12 font-semibold mb-4  p-5 text-2xl">
                  Create Group
                </h1>
                <button className="" onClick={() => setShowGroupForm(false)}>
                  <IoCloseCircle
                    className={`  text-3xl mb-6 text-[#153243] `}
                  />
                </button>
              </div>
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
                  className="px-4 py-2  h-12 text-white bg-[#00BF8F]    rounded-md "
                  onClick={handleCreateGroup}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
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
                {/* <input
              type="text"
              placeholder="Search Trainee by course"
              value={searchTraineeCourse}
              onChange={handleTraineeCourseChange}
              className="w-full px-4 h-12 py-2 mt-2 border border-[#0098f1]  rounded-md"
            /> */}
               {filteredTraineeData.map((trainee) => (
              <tr key={trainee.userName}>
                <td className="py-3 px-6 border border-[#153243]">
                  {trainee.firstName} {trainee.lastName}
                </td>
                {/* <td className="py-3 px-6 border border-[#153243]">
                  {trainee.courses.join(", ")}
                </td> */}
                <td className="py-3 px-6 border border-[#153243] bg-[#153243]">
                  <button
                    className="  text-white font-semibold hover:underline"
                    onClick={() => handleAddTraineeToGroup(trainee)}
                  >
                    Add to Group
                  </button>
                </td>
              </tr>
            ))}
              </div>
              <div className="p-4">
                <button
                  className="px-4 py-2  text-white bg-[#00BF8F] rounded-md "
                  onClick={() => setShowTraineeSearch(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Table Section */}
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
        </div>

        
        <table className="min-w-full border-collapse border border-gray-300 text-start">
          <thead>
            <tr className="bg-[#153243] text-white">
              <th className="py-3 px-6 border">UserID</th>
              <th className="py-3 px-6 border">Name</th>
              <th className="py-3 px-6 border">Email</th>
              <th className="py-3 px-6 border">Course</th>
              <th className="py-3 px-6 border">Date</th>
              <th className="py-3 px-6 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUserData.map((user) => (
              <tr key={user.userId}>
                <td className="py-3 px-6 border">{user.userId}</td>
                <td className="py-3 px-6 border">{user.userName}</td>
                <td className="py-3 px-6 border">{user.email}</td>
                <td className="py-3 px-6 border">
  {Array.isArray(user.courses) && user.courses.length > 0 
    ? user.courses.join(", ") 
    : "No Courses"}
</td>

                <td className="py-3 px-6 border">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</td>
                <td className="py-3 px-6 border">
                  <button className="text-[#153243] font-semibold hover:underline" onClick={() => handleAddToGroupClick(user)}>
                    Add to Group
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersRolesTable;