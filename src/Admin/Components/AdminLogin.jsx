
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IMG from "../../assets/E- education logo .png";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";
import axios from 'axios';
// import admin from "../../assetss/admindashboard/login.png";
function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  
  // States to toggle between Login and Forgot Password
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Handle Login Form Submission
  // const handleSubmitLogin = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const userData = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };

  //   // Store user data in local storage
  //   localStorage.setItem("userData", JSON.stringify(userData));

  //   navigate("/admin/*");
  //   dispatch(login(userData));
  // };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      const response = await axios.post('http://localhost:8080/auth/signin', userData);
      const { jwt, role, status } = response.data;
      console.log(response.data)
      if (jwt && status && role === "ADMIN") {
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("role", role);
        dispatch(login(userData));
        navigate('/admin/*');
      } else {
        setError(response.data.message || 'Invalid credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while logging in. Please try again.');
    }
  };

  // Handle Forgot Password - Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    // API call to send OTP (placeholder for actual API call)
    setOtpSent(true); // Assuming OTP is sent successfully
  };

  // Handle Forgot Password - Verify OTP and Reset Password
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // API call to verify OTP and reset password (placeholder for actual API call)
    navigate("/admin_login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Image Section - Left */}
        <div className="hidden lg:flex lg:w-1/2 bg-indigo-100 items-center justify-center ">
          {/* <img src={admin} alt="Admin login" className="h-auto w-2xl object-cover" /> */}
        </div>

        {/* Form Section - Right */}
        <div className="flex flex-col justify-center items-center p-6 lg:w-1/2">
          <div className="w-full max-w-xs">
            <div className="flex justify-center">
              <img src={IMG} alt="Logo" className="w-52 mb-4" />
            </div>

            {/* Conditional rendering based on isForgotPassword and otpSent */}
            {!isForgotPassword ? (
              <>
                <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
                  Admin{" "}
                  <span className="bg-gradient-to-r from-[#001510] to-[#00BF8F] text-transparent bg-clip-text">
                    Login
                  </span>
                </h1>
                <form onSubmit={handleSubmitLogin} className="w-full">
                  <div className="flex flex-col gap-4">
                    <label className="text-gray-500">User ID</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
                    />
                    <label className="text-gray-500">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
                    />
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setIsForgotPassword(true)}
                        className="text-sm text-gray-600 hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="text-xs text-gray-600 text-center mt-6">
              I agree to abide by E-education's{" "}
              <a href="#" className="border-b border-gray-500 border-dotted">
                Terms of Service
              </a>{" "}
              and its{" "}
              <a href="#" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </p>
              </>
            ) : (
              <>
                {!otpSent ? (
                  <>
                    <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
                      Forgot Password
                    </h1>
                    <form onSubmit={handleSendOtp} className="w-full">
                      <label className="text-gray-500">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
                      />
                      <button
                        type="submit"
                        className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
                      >
                        Send OTP
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
                      Verify OTP
                    </h1>
                    <form onSubmit={handleVerifyOtp} className="w-full">
                      <label className="text-gray-500">OTP</label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
                      />
                      <label className="text-gray-500">New Password</label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
                      />
                      <button
                        type="submit"
                        className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
                      >
                        Reset Password
                      </button>
                    </form>
                    
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;


