import axios from "axios";
import { API_BASE_URL } from "../../Config/api";

// Function to fetch all meetings
export const fetchAllMeetings = async () => {
  try {
    const token = localStorage.getItem("jwt"); // Get JWT token from localStorage
    const response = await axios.get(`${API_BASE_URL}/api/meeting/getAll`, { 
      headers: {
        Authorization: `Bearer ${token}`, // Include JWT token in headers
      },
    });

    console.log("All Meetings:", response.data);
    return response.data; // Returns the list of meetings
  } catch (error) {
    console.error("Error fetching meetings:", error);
    return null;
  }
};
