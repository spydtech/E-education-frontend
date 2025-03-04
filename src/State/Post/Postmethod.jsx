import axios from "axios";
import { API_BASE_URL } from "../../Config/api";


const token = localStorage.getItem("jwt");

// Update with your backend URL

export const likePost = async (postId, token) => {
    if (!token) {
      console.error("Authorization token is missing.");
      return;
    }
  
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/posts/${postId}/like`,
        {}, // Empty body as it's a PUT request
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.debug("Post liked successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error liking post:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
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
    try {
      const response = await axios.get(`${API_BASE_URL}/comments/${postId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  };
  
