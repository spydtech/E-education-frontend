import axios from 'axios';
import { API_BASE_URL } from '../../Config/api';
import {
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_TRAINEE_FAILURE,
  GET_TRAINEE_REQUEST,
  GET_TRAINEE_SUCCESS,
  LOGOUT,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  EMAIL_EXISTS,
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILURE,
  TRAINEE_LOGIN_REQUEST,
  TRAINEE_LOGIN_SUCCESS,
  TRAINEE_LOGIN_FAILURE
} from './ActionType';

const jwt = localStorage.getItem('jwt');


// Action creators for registering a user
export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = () => ({ type: REGISTER_SUCCESS });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });
export const emailExists = () => ({ type: EMAIL_EXISTS });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    dispatch(registerSuccess());
    alert('OTP sent successfully. Please check your email to verify.');
  } catch (error) {
    // Handle other errors
    console.error('Error during registration:', error);
    dispatch(registerFailure('An error occurred during registration.'));
    alert('Email is already registered. Please use a different email.')
  }
};

// Action creators for verifying OTP
export const verifyOtpRequest = () => ({ type: VERIFY_OTP_REQUEST });
export const verifyOtpSuccess = (user) => ({ type: VERIFY_OTP_SUCCESS, payload: user });
export const verifyOtpFailure = (error) => ({ type: VERIFY_OTP_FAILURE, payload: error });

export const verifyOtp = (otpData) => async (dispatch) => {
  dispatch(verifyOtpRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, otpData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }
    dispatch(verifyOtpSuccess(user.jwt));
  } catch (error) {
    dispatch(verifyOtpFailure(error.message));
  }
};



const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    // API call
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/signin`,
      userData
    );

    const { jwt, role, status } = response.data;

    // Validate the response
    if (jwt && status && (role === "CUSTOMER" || role === "ADMIN")) {
      // Store JWT and role in localStorage
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("UserRole", role);

      // Dispatch success action
      dispatch(loginSuccess(userData));
    } else {
      // Unauthorized access
      throw new Error("Unauthorized access. This login is for valid roles only.");
    }
  } catch (error) {
    // Handle errors
    const errorMessage =
      error.response?.data?.message || "An error occurred while logging in.";
    dispatch(loginFailure(errorMessage));
  }
};

const traineeLoginRequest = () => ({ type: TRAINEE_LOGIN_REQUEST });
const traineeLoginSuccess = (trainee) => ({ type: TRAINEE_LOGIN_SUCCESS, payload: trainee });
const traineeLoginFailure = (error) => ({ type: TRAINEE_LOGIN_FAILURE, payload: error });

export const trainee = (traineeData) => async (dispatch) => {
  dispatch(traineeLoginRequest);

  try {
    const response = await axios.post(`${API_BASE_URL}/trainee/signin`, traineeData);
    const trainee = response.data;
    if (trainee.jwt) {
      localStorage.setItem('jwt', trainee.jwt);
    }
    dispatch(traineeLoginSuccess(trainee.jwt));
  } catch (error) {
    dispatch(traineeLoginFailure(error.message));
  }
};

export const getAllCustomers = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CUSTOMERS_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/users`, {
        headers: {
          "Authorization": `Bearer ${jwt}`
        }
      });
      const users = response.data;
      dispatch({ type: GET_ALL_CUSTOMERS_SUCCESS, payload: users });
      console.log("All Customers", users)
    } catch (error) {
      const errorMessage = error.message;
      console.log(error)
      dispatch({ type: GET_ALL_CUSTOMERS_FAILURE, payload: errorMessage });
    }
  };
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt, role) => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      params: { role },
    });
    const user = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

const getTraineeRequest = () => ({ type: GET_TRAINEE_REQUEST });
const getTraineeSuccess = (trainee) => ({ type: GET_TRAINEE_SUCCESS, payload: trainee });
const getTraineeFailure = (error) => ({ type: GET_TRAINEE_FAILURE, payload: error });

export const getTrainee = (jwt) => async (dispatch) => {
  dispatch(getTraineeRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/trainee/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const trainee = response.data;
    localStorage.setItem("trainee", JSON.stringify(trainee));  // Save trainee data to localStorage
    dispatch(getTraineeSuccess(trainee));  // Dispatch success action with the trainee data
  } catch (error) {
    dispatch(getTraineeFailure(error.message));  // Dispatch failure action with error message
  }
};

export const logout = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
  };
};
