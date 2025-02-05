import React, { useState } from "react";
import { MdNotificationAdd, MdOutlineCancel } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Rightside = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notifications, setNotifications] = useState([
    "New comment on your post",
    "You have a new follower",
    "Your profile was updated successfully",
    "System update available",
    "New message from John Doe",
    "Reminder: Meeting at 3 PM",
    "Password change successful",
  ]);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = (index) => {
    setDeletingIndex(index);
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((_, i) => i !== index)
      );
      setDeletingIndex(null);
    }, 300); // Matches animation duration
  };

  return (
    <div
      className={`z-50 flex flex-col w-[300px] lg:w-[235px] xl:w-80 bg-[#0098F1] rounded-md transition-all duration-300 ease-in-out ${
        isExpanded ? "h-[250px]" : "h-[75px]"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center text-white px-8 py-2">
        <div className="flex items-center gap-2">
          <div className="text-lg">Notifications</div>
          <div className="text-lg">
            <MdNotificationAdd />
          </div>
        </div>
        <div className="text-xl cursor-pointer" onClick={handleToggle}>
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {/* Notifications */}
      {isExpanded && (
        <div className="w-full bg-[#0098f1] rounded-lg text-white mb-1 p-2 pl-5 flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className={`relative  p-4 cursor-pointer bg-gray-100 text-black rounded-md shadow-md transition-all duration-300 ease-in-out ${
                deletingIndex === index
                  ? "translate-x-full opacity-0"
                  : "translate-y-0"
              }`}
              style={{
                transform:
                  deletingIndex === index
                    ? "translateX(100%)"
                    : "translateY(0)",
              }}
            >
              {/* Delete Icon */}
              <div className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer">
                <MdOutlineCancel onClick={() => handleDelete(index)} />
              </div>
              {notification}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rightside;
