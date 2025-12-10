import React, { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 p-4">Error loading notifications</div>;
    }
    return this.props.children;
  }
}

const Rightside = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const fetchNotifications = async () => {
    setLoading(true);
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      console.error("❌ No JWT token found.");
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
      console.error("❌ Error fetching notifications:", error);
      // Remove toast.error as it might be causing the conflict
      // toast.error("Failed to load notifications");
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = async (id) => {
    setDeletingIndex(id);
    try {
      await axios.delete(`${API_BASE_URL}/api/notification/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      });

      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
      // Remove toast.success as it might be causing the conflict
      // toast.success("Notification deleted successfully!");
      alert("Notification deleted successfully!");
    } catch (error) {
      console.error("❌ Error deleting notification:", error);
      // Remove toast.error as it might be causing the conflict
      // toast.error("Failed to delete notification");
      alert("Failed to delete notification");
    } finally {
      setDeletingIndex(null);
    }
  };

  return (
    <ErrorBoundary>
      {/* REMOVED ToastContainer from here - Should only be once in App.jsx */}
      
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div
          className={`flex flex-col w-full bg-[#0098F1] rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
            isExpanded ? "h-[300px]" : "h-[75px]"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center text-white px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="text-lg font-semibold">Notifications</div>
            </div>
            <div className="text-xl cursor-pointer" onClick={handleToggle}>
              {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>

          {/* Notifications List */}
          {isExpanded && (
            <div className="w-full bg-[#0098F1] rounded-b-lg text-white p-2 flex flex-col gap-3 overflow-y-auto max-h-56">
              {loading ? (
                <p className="text-center text-white py-4">Loading...</p>
              ) : notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="relative p-4 bg-white text-black rounded-md shadow-sm flex flex-col gap-1"
                  >
                    <div className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer">
                      {deletingIndex === notification.id ? (
                        <span className="text-xs">Deleting...</span>
                      ) : (
                        <MdOutlineCancel onClick={() => handleDelete(notification.id)} />
                      )}
                    </div>
                    <p className="text-sm">{notification.message}</p>
                    <span className="text-xs text-gray-500">
                      {new Date(notification.timestamp).toLocaleString()}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center text-white py-4">No notifications yet</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden w-full h-full">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <button
            onClick={() => {
              const drawer = document.getElementById('mobileRightSide');
              if (drawer) drawer.classList.add('hidden');
            }}
            className="text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Mobile Notifications List */}
        <div className="w-full h-full overflow-y-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
              <p className="mt-2 text-white">Loading notifications...</p>
            </div>
          ) : notifications.length > 0 ? (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="relative p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="absolute top-3 right-3 text-red-500 hover:text-red-700 cursor-pointer">
                    {deletingIndex === notification.id ? (
                      <span className="text-xs">Deleting...</span>
                    ) : (
                      <MdOutlineCancel 
                        onClick={() => handleDelete(notification.id)}
                        className="w-5 h-5"
                      />
                    )}
                  </div>
                  <p className="text-sm pr-6">{notification.message}</p>
                  <span className="text-xs text-gray-500 block mt-2">
                    {new Date(notification.timestamp).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No notifications yet</p>
              <p className="text-sm text-gray-500 mt-2">You're all caught up!</p>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Rightside;