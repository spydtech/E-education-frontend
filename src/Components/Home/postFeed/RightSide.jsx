import React, { useState, useEffect } from "react";
import { MdNotificationAdd, MdOutlineCancel } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

const Rightside = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);

  // Fetch notifications from API
  const fetchNotifications = async () => {
    setLoading(true);
    const jwt = localStorage.getItem("jwt"); // Retrieve JWT token

    if (!jwt) {
      console.error("❌ No JWT token found. User might be logged out.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/api/notification/unread`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      console.log("✅ Notifications API response:", response.data);

      setNotifications(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("❌ Error fetching notifications:", error.response?.data || error);
      toast.error("Failed to load notifications");
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Toggle notifications panel
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Delete a notification (API call)
  const handleDelete = async (id) => {
    setDeletingIndex(id);
    try {
      await axios.delete(`${API_BASE_URL}/api/notification/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      });

      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
      toast.success("Notification deleted successfully!");
    } catch (error) {
      console.error("❌ Error deleting notification:", error.response?.data || error);
      toast.error("Failed to delete notification");
    } finally {
      setDeletingIndex(null);
    }
  };

  return (
    <div
      className={`z-50 flex flex-col w-[300px] lg:w-[235px] xl:w-80 bg-[#0098F1] rounded-md transition-all duration-300 ease-in-out ${
        isExpanded ? "h-[300px]" : "h-[75px]"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center text-white px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="text-lg">Notifications</div>
        </div>
        <div className="text-xl cursor-pointer" onClick={handleToggle}>
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {/* Notifications List */}
      {isExpanded && (
        <div className="w-full bg-[#0098F1] rounded-lg text-white mb-1 p-2 flex flex-col gap-3 overflow-y-auto max-h-56 scrollbar-thin scrollbar-thumb-gray-500">
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="relative p-4 bg-white text-black rounded-md shadow-md flex flex-col gap-1"
              >
                <div className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer">
                  <MdOutlineCancel onClick={() => handleDelete(notification.id)} />
                </div>
                <p className="text-sm">{notification.message}</p>
                <span className="text-xs text-gray-500">
                  {new Date(notification.timestamp).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No notifications yet</p>
          )}
        </div>
      )}

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Rightside;
