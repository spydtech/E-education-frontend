
import axios from 'axios';
const DEPLOYED = 'https://e-commerce-server-production-0873.up.railway.app'

export const API_BASE_URL = 'http://localhost:8082'; // Corrected




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

api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

