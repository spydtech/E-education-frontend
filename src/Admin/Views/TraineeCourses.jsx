import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import GroupTable from "./GroupTable";
import { FaTrashAlt, FaPencilAlt, FaPlus  } from "react-icons/fa";

function Tab() {
  const [openTab, setOpenTab] = useState(1);
  const location = useLocation();
  const { groupName: locationGroupName, users: locationUsers } = location.state || {};
  const [groups, setGroups] = useState([]);
  const [editedGroupName, setEditedGroupName] = useState("");
  const [currentEditedGroupId, setCurrentEditedGroupId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const jwt = localStorage.getItem("jwt");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trainerName, setTrainerName] = useState([]);
  const users = useSelector(state => state.users);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/api/groups", {
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

        const formattedGroups = (data || []).map((group) => ({
          id: group.id,
          color: getRandomColor(),
          groupName: group.groupName || "Unnamed Group",
          users: Array.isArray(group.users) ? group.users : [],
          trainees: Array.isArray(group.trainees) ? group.trainees : [],
          createdAt: group.createdAt || "Unknown Date",
          editMode: false,
        }));
        
        setGroups(formattedGroups);
        setError("");
      } catch (err) {
        setError(err.message);
        setGroups([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  // const handleTabClick = (tabNumber) => setOpenTab(tabNumber);

  const handleRemoveUser = async (id, userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/chat-groups/${id}/remove-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const updatedGroup = await response.json();
        setGroups((prevGroups) =>
          prevGroups.map((group) =>
            group.id === id ? { ...group, users: updatedGroup.users } : group
          )
        );
      } else {
        console.error("Failed to remove user:", await response.text());
      }
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  // const handleSave = () => {
  //   setTrainerName(editedName);
  //   setIsModalOpen(false);
  // };

  const handleDeleteGroup = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/groups/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setGroups(groups.filter((group) => group.id !== id));
        if (openTab === id) setOpenTab(1);
      } else {
        console.error("Error deleting chat group");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOpenModel = (group) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };
  

  const handleSaveEdit = async (id) => {
    try {
      if (!editedGroupName.trim()) {
        console.error("Group name cannot be empty.");
        return;
      }

      const groupToUpdate = groups.find((g) => g.id === id);
      if (!groupToUpdate) {
        console.error("Group not found.");
        return;
      }

      const response = await fetch(`http://localhost:8080/api/groups/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          groupName: editedGroupName,
          users: groupToUpdate.users || [],
          trainees: groupToUpdate.trainees || [],
        }),
      });

      if (!response.ok) {
        console.error("Failed to update group name:", await response.text());
        return;
      }

      setGroups(groups.map((group) =>
        group.id === id ? { ...group, groupName: editedGroupName, editMode: false } : group
      ));
    } catch (error) {
      console.error("Error updating group:", error);
    }
  };

  const handleColorChange = (color) => {
    setGroups((prevGroups) =>
      prevGroups.map((g) =>
        g.id === selectedGroup.id ? { ...g, color } : g
      )
    );
    setIsColorModalOpen(false);
  };

  const [bgColor, setBgColor] = useState("#F87171");
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const colors = ["#F87171", "#60A5FA", "#34D399", "#FBBF24", "#A78BFA"];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="p-6 font-poppins relative">
      {loading ? (
        <p className="text-center text-[#001510]">Loading groups...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : groups.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div key={group.id}
                // onClick={() => handleTabClick(group.id)}
                className=" bg-white p-4 shadow-lg rounded-xl border-2  relative w-full" 
              >
               <FaPencilAlt
  className="absolute top-4 right-4 text-gray-500 cursor-pointer"
  onClick={() => handleOpenModel(group)}
/>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full cursor-pointer border-2 border-gray-300"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setIsColorModalOpen(true)}
                  ></div>

                  {isColorModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                      <div className="bg-white p-6 rounded-lg shadow-lg w-72">
                        <h2 className="text-lg font-bold mb-4">Select a Color</h2>
                        <div className="flex space-x-2">
                          {colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
                              style={{ backgroundColor: color }}
                              onClick={() => {
                                setBgColor(color);
                                setIsColorModalOpen(false);
                              }}
                            ></div>
                          ))}
                        </div>
                        <button
                          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                          onClick={() => setIsColorModalOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                  <h3 className="text-lg font-bold">{group.groupName}</h3>
                </div>
                <div className="flex items-center mt-3">
                  {(group.users || []).slice(0, 3).map((user, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white"
                      style={{ backgroundColor: "#60A5FA" }}
                    >
                      {user.fullName.charAt(0)}
                    </div>
                  ))}
                  {group.users.length > 3 && <span className="ml-2 text-gray-500">+ {group.users.length - 3}</span>}
                </div>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Trainer:</span>{" "}
                  {group.trainees.length > 0 ? group.trainees.map(t => t.fullName).join(", ") : "No Trainer"}
                </p>

                <p className="text-sm"><span className="font-semibold">Created On:</span> {group.createdAt}</p>
              </div>
            ))}
          </div>
          {isModalOpen && selectedGroup && (
            <div className="fixed top-20 items-center rounded-lg shadow-lg justify-center bg-white bg-opacity-100 w-[800px]">
              <div className=" items-center justify-center  bg-white">
                <button
                  className="top-0 right-4 text-gray-500 hover:text-gray-800 text-xl p-4  rounded-full "
                  onClick={() => setIsModalOpen(false)}
                >
                  ✖
                </button>
                <GroupTable
                  key={selectedGroup.id}
                  groupId={selectedGroup.id}
                  groupName={selectedGroup.groupName}
                  users={selectedGroup.users}
                  trainees={selectedGroup.trainees}
                  onRemoveUser={(userId) => handleRemoveUser(selectedGroup.id, userId)}
                  onAddUser={(newUser) => handleAddUser(selectedGroup.id, newUser)}
                  // handleTraineeSearchChange={handleTraineeSearchChange}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-[#001510]">No existing groups</p>
      )}
    </div>
  );
}

export default Tab;