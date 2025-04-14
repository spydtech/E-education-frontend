import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IMG from "../../assets/E- education logo .png";
import BackgroundIMG from "../../../src/assetss/login/loginimg.jpg";
import { login } from "../../State/Auth/Action";
import axios from 'axios';
import { API_BASE_URL } from "../../Config/api";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData, {
        headers: { "Content-Type": "application/json" },
      });
      
      if (response.data.status) {
        localStorage.setItem('jwt', response.data.jwt);
        dispatch(login(userData));
        navigate('/');
      } else {
        setError(response.data.message || 'Invalid credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while logging in. Please try again.');
    }
  };

 // In your Login component
const handleGoogleLoginSuccess = async (credentialResponse) => {
  try {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google Auth Response:", decoded);

    const response = await axios.post(`${API_BASE_URL}/auth/google`, {
      token: credentialResponse.credential // Send the full JWT token
    }, {
      headers: { "Content-Type": "application/json" }
    });

    if (response.data.jwt) {
      localStorage.setItem('jwt', response.data.jwt);
      dispatch(login({
        email: decoded.email,
        name: decoded.name
      }));
      navigate('/');
    } else {
      setError(response.data.message || 'Google login failed');
    }
  } catch (error) {
    console.error('Full Google login error:', {
      message: error.message,
      response: error.response?.data,
      stack: error.stack
    });
    setError(error.response?.data?.message || 'Failed to login with Google');
  }
};


  const handleGoogleLoginFailure = () => {
    setError('Google login failed. Please try again.');
  };

  return (

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "138273431686-luibtdjcpi8d156gfjapuhqt8kpigmdj.apps.googleusercontent.com"}>
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 font-poppins">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg flex flex-col lg:flex-row">
        {/* Login Section */}
        <div className="w-full lg:w-1/2 p-8 lg:px-16 flex flex-col justify-center relative">
          <img
            src={IMG}
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] mb-0"
            alt="Logo"
          />

          {/* Sign Up Button Positioned between Logo and Login Now */}
          <div className="absolute right-8 top-7">
            <Link
              to="/signup"
              className="bg-[#0098F1] text-white px-4 py-2 rounded-lg hover:bg-[#007acc] transition"
            >
              Sign Up
            </Link>
          </div>

          <div className="mb-2">
            <span className="bg-gradient-to-r text-2xl sm:text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
              Login now
            </span>
          </div>
          <span className="mb-6 text-xs sm:text-sm md:text-base">
            Hi, Welcome back 👋
          </span>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#f6ac14]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-bold text-[#f6ac14]">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5.52 0-10-4.48-10-10 0-1.61.38-3.13 1.06-4.44" />
                    <path d="M1 1l22 22" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center font-bold">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-[#f6ac14]">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-[#0098F1] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0098F1] text-white py-3 rounded-lg hover:bg-[#007acc] transition"
            >
              Login
            </button>
            {error && (
              <div className="mt-4 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-3 text-gray-500">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Login Button */}
          <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                theme="filled_blue"
                size="large"
                text="continue_with"
                shape="rectangular"
                width="350"
                useOneTap
              />
            </div>

          <p className="mt-6 text-xs mr-5 md:mr-20 text-gray-600 text-right">
            <Link to="/signup" className="text-[#0098F1] hover:underline">
              Not registered yet? Create an account{" "}
              <span className="text-[#F6AC14] font-bold">Signup</span>
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundIMG})` }}
        ></div>
      </div>
    </div>
    </GoogleOAuthProvider>
  );
}

export default Login;