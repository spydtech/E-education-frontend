
import axios from 'axios';
// const DEPLOYED = 'https://e-commerce-server-production-0873.up.railway.app'



//export const API_BASE_URL = "https://api.e-education.in"; // Use HTTP instead of HTTPS

// Check if running locally or in production
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Use localhost:8082 for local development, otherwise use the production URL
export const API_BASE_URL = isLocalhost 
  ? "http://localhost:8082" 
  : "https://api.e-education.in";

console.log("API Base URL:", API_BASE_URL);




const api = axios.create({
    baseURL: API_BASE_URL,
});
export const sendOtp = async (email) => {
    return axios.post(`${API_BASE_URL}/auth/forget`, { email });
};

export const verifyOtp = async (otp) => {
    return axios.post(`${API_BASE_URL}/auth/validating-otp`, { otp });
};

export const updatePassword = async (email, password, confirmPassword) => {
    return axios.post(`${API_BASE_URL}/auth/confirmpwd/${email}`, { password, confirmPassword });
};

const jwt = localStorage.getItem('jwt');
if (jwt) {
    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}




api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

