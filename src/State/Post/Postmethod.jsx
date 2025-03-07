import axios from "axios";
import { API_BASE_URL } from "../../Config/api";


const token = localStorage.getItem("jwt");

///const API_BASE_URL = "http://localhost:8080"; // Change if needed

export const likePost = async (postId, token) => {
  const response = await fetch(`${API_BASE_URL}/api/likes/${postId}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to like the post");
  }

  return response.json(); // Return updated like count
};


 // Create a Comment
// Create a Comment
export const createComment = async (jwt, postId, commentData) => {
    if (!jwt) {
      console.error("Authorization token is missing.");
      return;
    }
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/comments/create?postId=${postId}&content=${encodeURIComponent(commentData)}`,
        {}, // No request body needed since parameters are in the URL
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      return response.data; // Axios automatically parses JSON responses
    } catch (error) {
      console.error("Error creating comment:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to create comment.");
    }
  };
  
  
  
  export const fetchComments = async (postId) => {
    if (!postId) {
      console.error("Invalid postId:", postId);
      return [];
    }
 
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("User not authenticated. No token found.");
      return [];
    }
 
    try {
      console.log(`Fetching comments for postId: ${postId}`);
      const response = await axios.get(`${API_BASE_URL}/comments/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
 
      console.log("Comments fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error.response?.data || error.message);
      return [];
    }
  };
 
  
