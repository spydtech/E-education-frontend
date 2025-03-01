import axios from "axios";
import { API_BASE_URL } from "../../Config/api";

export const fetchUserStatusCount = async () => {
  try {
    const token = localStorage.getItem("jwt"); // Assuming token is stored in localStorage
    const response = await axios.get(`${ API_BASE_URL}/api/users/count`, {
      headers: {
        Authorization: `Bearer ${token}`, // Sending JWT token in headers
      },
    });
    
    console.log("User Status Count:", response.data);
    return response.data; // { active: X, inactive: Y }
  } catch (error) {
    console.error("Error fetching user status count:", error);
    return null;
  }
};



// Function to fetch employees count
export const fetchEmployeesCount = async () => {
  try {
    const token = localStorage.getItem("jwt"); // Assuming token is stored in localStorage
    const response = await axios.get(`${ API_BASE_URL}/auth/employee/getEmployeesCount`, {
      headers: {
        Authorization: `Bearer ${token}`, // Sending JWT token in headers
      },
    });

    console.log("Employees Count:", response.data);
    return response.data; // Returns the employees count
  } catch (error) {
    console.error("Error fetching employees count:", error);
    return null;
  }
};

// Function to fetch trainers count
export const fetchTrainersCount = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.get(`${API_BASE_URL}/trainee/count`, { // lowercase "count"
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("Trainee Count:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching trainee count:", error);
      return null;
    }
  };
  