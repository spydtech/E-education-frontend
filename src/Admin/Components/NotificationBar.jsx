import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { API_BASE_URL } from "../../Config/api";

const NotificationBar = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetchNotifications();
    }
  }, [isOpen]);

  // Fetch unread notifications from backend
  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("jwt");
      console.log("Fetching notifications with token:", token);

      const response = await fetch(`${API_BASE_URL}/api/notification/unread`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch notifications: ${errorText}`);
      }

      const data = await response.json();
      console.log("Fetched Notifications:", data);

      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  // Mark notification as read
  const markAsRead = async (notificationId) => {
    try {
      const token = localStorage.getItem("jwt");
      await fetch(`${API_BASE_URL}/api/notification/read/${notificationId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the notification from the list after marking as read
      setNotifications((prev) => prev.filter((notif) => notif.id !== notificationId));
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "320px",
        height: "100vh",
        backgroundColor: "#fff",
        boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px 0 0 8px",
        padding: "20px",
        zIndex: 1200,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Typography variant="h6" fontWeight="bold">
          Notifications
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Loading Indicator */}
      {loading ? (
        <CircularProgress size={24} sx={{ display: "block", margin: "auto" }} />
      ) : notifications.length === 0 ? (
        <Typography sx={{ textAlign: "center", color: "gray" }}>No new notifications</Typography>
      ) : (
        notifications.map((notification) => (
          <Box
            key={notification.id}
            sx={{
              padding: "12px 0",
              borderBottom: "1px solid #ddd",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => markAsRead(notification.id)}
          >
            <Typography variant="body1" fontWeight="bold">
              {notification.message}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {notification.email} {/* Fixed sender issue */}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(notification.timestamp).toLocaleString()} {/* Fixed timestamp issue */}
            </Typography>
            {/* Unread Indicator */}
            {!notification.read && (
              <Box
                sx={{
                  position: "absolute",
                  top: "12px",
                  right: "10px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "orange",
                  borderRadius: "50%",
                }}
              />
            )}
          </Box>
        ))
      )}
    </Box>
  );
};

export default NotificationBar;
