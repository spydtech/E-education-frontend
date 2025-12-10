
// // /* eslint-disable jsx-a11y/anchor-is-valid */
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import IMG from "../../assets/E- education logo .png";
// // import { useDispatch } from "react-redux";
// // import { login } from "../../State/Auth/Action";
// // import axios from 'axios';
// // // import admin from "../../assetss/admindashboard/login.png";
// // function AdminLogin() {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [error, setError] = useState('');
  
// //   // States to toggle between Login and Forgot Password
// //   const [isForgotPassword, setIsForgotPassword] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [otpSent, setOtpSent] = useState(false);
// //   const [otp, setOtp] = useState("");
// //   const [newPassword, setNewPassword] = useState("");

// //   // Handle Login Form Submission
// //   // const handleSubmitLogin = (event) => {
// //   //   event.preventDefault();
// //   //   const data = new FormData(event.currentTarget);
// //   //   const userData = {
// //   //     email: data.get("email"),
// //   //     password: data.get("password"),
// //   //   };

// //   //   // Store user data in local storage
// //   //   localStorage.setItem("userData", JSON.stringify(userData));

// //   //   navigate("/admin/*");
// //   //   dispatch(login(userData));
// //   // };

// //   const handleSubmitLogin = async (event) => {
// //     event.preventDefault();
// //     const data = new FormData(event.currentTarget);
// //     const userData = {
// //       email: data.get('email'),
// //       password: data.get('password'),
// //     };

// //     try {
// //       const response = await axios.post('http://localhost:8080/auth/signin', userData);
// //       const { jwt, role, status } = response.data;
// //       console.log(response.data)
// //       if (jwt && status && role === "ADMIN") {
// //         localStorage.setItem("jwt", jwt);
// //         localStorage.setItem("role", role);
// //         dispatch(login(userData));
// //         navigate('/admin/*');
// //       } else {
// //         setError(response.data.message || 'Invalid credentials.');
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError('An error occurred while logging in. Please try again.');
// //     }
// //   };

// //   // Handle Forgot Password - Send OTP
// //   const handleSendOtp = (e) => {
// //     e.preventDefault();
// //     // API call to send OTP (placeholder for actual API call)
// //     setOtpSent(true); // Assuming OTP is sent successfully
// //   };

// //   // Handle Forgot Password - Verify OTP and Reset Password
// //   const handleVerifyOtp = (e) => {
// //     e.preventDefault();
// //     // API call to verify OTP and reset password (placeholder for actual API call)
// //     navigate("/admin_login");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="flex flex-col lg:flex-row bg-[#989898] shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
// //         {/* Image Section - Left */}
// //         <div className="hidden lg:flex lg:w-1/2 bg-indigo-100 items-center justify-center ">
// //           {/* <img src={admin} alt="Admin login" className="h-auto w-2xl object-cover" /> */}
// //         </div>

// //         {/* Form Section - Right */}
// //         <div className="flex flex-col justify-center items-center p-6 lg:w-1/2">
// //           <div className="w-full max-w-xs">
// //             <div className="flex justify-center">
// //               <img src={IMG} alt="Logo" className="w-52 mb-4" />
// //             </div>

// //             {/* Conditional rendering based on isForgotPassword and otpSent */}
// //             {!isForgotPassword ? (
// //               <>
// //                 <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
// //                   Admin{" "}
// //                   <span className="bg-gradient-to-r from-[#001510] to-[#00BF8F] text-transparent bg-clip-text">
// //                     Login
// //                   </span>
// //                 </h1>
// //                 <form onSubmit={handleSubmitLogin} className="w-full">
// //                   <div className="flex flex-col gap-4">
// //                     <label className="text-gray-500">User ID</label>
// //                     <input
// //                       id="email"
// //                       name="email"
// //                       type="email"
// //                       placeholder="Email"
// //                       className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
// //                     />
// //                     <label className="text-gray-500">Password</label>
// //                     <input
// //                       type="password"
// //                       id="password"
// //                       name="password"
// //                       placeholder="Password"
// //                       className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
// //                     />
// //                     <div className="flex justify-end">
// //                       <button
// //                         type="button"
// //                         onClick={() => setIsForgotPassword(true)}
// //                         className="text-sm text-gray-600 hover:underline"
// //                       >
// //                         Forgot Password?
// //                       </button>
// //                     </div>
// //                     <button
// //                       type="submit"
// //                       className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-[#989898] font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
// //                     >
// //                       Login
// //                     </button>
// //                   </div>
// //                 </form>
// //                 <p className="text-xs text-gray-600 text-center mt-6">
// //               I agree to abide by E-education's{" "}
// //               <a href="#" className="border-b border-gray-500 border-dotted">
// //                 Terms of Service
// //               </a>{" "}
// //               and its{" "}
// //               <a href="#" className="border-b border-gray-500 border-dotted">
// //                 Privacy Policy
// //               </a>
// //             </p>
// //               </>
// //             ) : (
// //               <>
// //                 {!otpSent ? (
// //                   <>
// //                     <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
// //                       Forgot Password
// //                     </h1>
// //                     <form onSubmit={handleSendOtp} className="w-full">
// //                       <label className="text-gray-500">Email</label>
// //                       <input
// //                         type="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         placeholder="Enter your email"
// //                         className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
// //                       />
// //                       <button
// //                         type="submit"
// //                         className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-[#989898] font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
// //                       >
// //                         Send OTP
// //                       </button>
// //                     </form>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
// //                       Verify OTP
// //                     </h1>
// //                     <form onSubmit={handleVerifyOtp} className="w-full">
// //                       <label className="text-gray-500">OTP</label>
// //                       <input
// //                         type="text"
// //                         value={otp}
// //                         onChange={(e) => setOtp(e.target.value)}
// //                         placeholder="Enter OTP"
// //                         className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
// //                       />
// //                       <label className="text-gray-500">New Password</label>
// //                       <input
// //                         type="password"
// //                         value={newPassword}
// //                         onChange={(e) => setNewPassword(e.target.value)}
// //                         placeholder="Enter new password"
// //                         className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
// //                       />
// //                       <button
// //                         type="submit"
// //                         className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-[#989898] font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
// //                       >
// //                         Reset Password
// //                       </button>
// //                     </form>
                    
// //                   </>
// //                 )}
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminLogin;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import IMG from "../../assets/E- education logo .png";
// import { useDispatch } from "react-redux";
// import { login } from "../../State/Auth/Action";
// import axios from "axios";
// import { API_BASE_URL } from "../../Config/api";

// export default function AdminLogin() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   // Forgot Password States
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   // Handle Login Form Submission
//   const handleSubmitLogin = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     try {
//       const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
//       const { jwt, role, status } = response.data;
//       if (jwt && status && role === "ADMIN") {
//         localStorage.setItem("jwt", jwt);
//         localStorage.setItem("role", role);
//         dispatch(login(userData));
//         navigate("/admin/dashboard");
//       } else {
//         setError(response.data.message || "Invalid credentials.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("An error occurred while logging in. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#494949] font-poppins">
//       <div className="flex flex-col lg:flex-row bg-[#494949]   w-full max-w-4xl space-x-5">
        
//         {/* Left Section - Logo & Welcome */}
//         <div className="hidden lg:flex flex-col -ml-12 lg:w-1/2 items-center justify-center p-6 text-[#989898]">
//           <img src={IMG} alt="Logo" className="w-[472px] h-[150px] mb-6" />
        
//         </div>

//         {/* Vertical Divider */}
//         <div className="hidden lg:block w-[1px] bg-[#989898]"></div>

//         {/* Right Section - Login Form */}
//         <div className="flex flex-col justify-center items-center p-6 lg:w-1/2 text-[#989898]">
//           <div className="w-full max-w-xs font-poppins ">
//           <h1 className="text-center text-lg"> Welcome to </h1>
//             <div className="text-center text-sm  mb-6">
           
//               {isForgotPassword ? "Reset Password" : "Admin Login"}
//             </div>

//             {/* Login Form */}
//             {!isForgotPassword ? (
//               <form onSubmit={handleSubmitLogin} className="w-full">
//                 <div className="flex flex-col gap-4">
//                   <label className="text-[#989898]">User ID</label>
//                   <input
//   id="email"
//   name="email"
//   type="email"
//   placeholder="Enter your email"
//   className="w-full px-4 py-3 rounded bg-[#494949] placeholder-[#989898] border border-[#989898] text-white focus:inline-none focus:border-[#ffffff]"
// />
//                   <label className="text-[#989898]">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Enter your password"
//                     className="w-full px-4 py-3 rounded  border bg-[#494949] placeholder-[#989898] text-white focus:inline-none focus:border-[#ffffff]"
//                   />
//                   <div className="flex justify-end">
//                     <button
//                       type="button"
//                       onClick={() => setIsForgotPassword(true)}
//                       className="text-sm text-yellow-400 hover:underline"
//                     >
//                       Forgot Password?
//                     </button>
//                   </div>
//                   {error && <p className="text-red-500 text-sm">{error}</p>}
//                   <button
//                     type="submit"
//                     className="mt-4 w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg focus:outline-none"
//                   >
//                     Log In
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <form className="w-full">
//                 {!otpSent ? (
//                   <>
//                     <label className="text-[#989898]">Enter your email</label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email"
//                       className="w-full px-4 py-3 rounded-lg bg-[#989898] border border-gray-600 placeholder-[#989898] text-[#989898] focus:outline-none"
//                     />
//                     <button
//                       type="submit"
//                       className="mt-4 w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg focus:outline-none"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setOtpSent(true);
//                       }}
//                     >
//                       Send OTP
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <label className="text-[#989898]">Enter OTP</label>
//                     <input
//                       type="text"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       placeholder="Enter OTP"
//                       className="w-full px-4 py-3 rounded bg-[#989898] border border-gray-600 placeholder-[#989898] text-[#989898] focus:outline-none"
//                     />
//                     <label className="text-[#989898]">New Password</label>
//                     <input
//                       type="password"
//                       value={newPassword}
//                       onChange={(e) => setNewPassword(e.target.value)}
//                       placeholder="Enter new password"
//                       className="w-full px-4 py-3 rounded bg-[#989898] border border-gray-600 placeholder-[#989898] text-[#989898] focus:outline-none"
//                     />
//                     <button
//                       type="submit"
//                       className="mt-4 w-full py-3 bg-[#FF9B26] hover:bg-yellow-600 text-white font-semibold rounded-lg focus:outline-none"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         navigate("/admin/admin_login");
//                       }}
//                     >
//                       Reset Password
//                     </button>
//                   </>
//                 )}
//               </form>
//             )}

//             <p className="text-xs text-[#989898] text-center mt-6">
//               I agree to abide by E-education's{" "}
//               <a href="#" className="border-b border-gray-500 border-dotted">
//                 Terms of Service
//               </a>{" "}
//               and its{" "}
//               <a href="#" className="border-b border-gray-500 border-dotted">
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IMG from "../../assets/E- education logo .png";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";
import axios from "axios";
import { API_BASE_URL } from "../../Config/api";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Forgot Password States
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Handle Login Form Submission
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
      console.log("Login response:", response.data);
      
      const { jwt, role, status } = response.data;
      
      if (jwt && status && role === "ADMIN") {
        // Store tokens and user data
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("role", role);
        
        // Dispatch login action
        dispatch(login({ 
          jwt, 
          role,
          userData 
        }));
        
        // Navigate immediately
        navigate("/admin/dashboard");
        
      } else {
        const errorMessage = response.data.message || "Invalid credentials.";
        setError(errorMessage);
      }
    } catch (err) {
      console.error("Login error:", err);
      
      let errorMessage = "An error occurred while logging in. Please try again.";
      
      if (err.response) {
        if (err.response.status === 401) {
          errorMessage = "Invalid email or password.";
        } else if (err.response.status === 403) {
          errorMessage = "Access denied. Admin privileges required.";
        } else if (err.response.data?.message) {
          errorMessage = err.response.data.message;
        }
      } else if (err.request) {
        errorMessage = "Network error. Please check your connection.";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#494949] font-poppins">
      <div className="flex flex-col lg:flex-row bg-[#494949] w-full max-w-4xl space-x-5">
        
        {/* Left Section - Logo & Welcome */}
        <div className="hidden lg:flex flex-col -ml-12 lg:w-1/2 items-center justify-center p-6 text-[#989898]">
          <img src={IMG} alt="Logo" className="w-[472px] h-[150px] mb-6" />
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-[1px] bg-[#989898]"></div>

        {/* Right Section - Login Form */}
        <div className="flex flex-col justify-center items-center p-6 lg:w-1/2 text-[#989898]">
          <div className="w-full max-w-xs font-poppins">
            <h1 className="text-center text-lg"> Welcome to </h1>
            <div className="text-center text-sm mb-6">
              {isForgotPassword ? "Reset Password" : "Admin Login"}
            </div>

            {/* Login Form */}
            {!isForgotPassword ? (
              <form onSubmit={handleSubmitLogin} className="w-full">
                <div className="flex flex-col gap-4">
                  <label className="text-[#989898]">User ID</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded bg-[#494949] placeholder-[#989898] border border-[#989898] text-white focus:outline-none focus:border-[#ffffff]"
                  />
                  <label className="text-[#989898]">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded border bg-[#494949] placeholder-[#989898] text-white focus:outline-none focus:border-[#ffffff]"
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsForgotPassword(true)}
                      className="text-sm text-yellow-400 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>
              </form>
            ) : (
              <form className="w-full">
                {!otpSent ? (
                  <>
                    <label className="text-[#989898]">Enter your email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded bg-[#494949] border border-[#989898] placeholder-[#989898] text-white focus:outline-none focus:border-[#ffffff]"
                    />
                    <button
                      type="button"
                      className="mt-4 w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        setOtpSent(true);
                      }}
                    >
                      Send OTP
                    </button>
                  </>
                ) : (
                  <>
                    <label className="text-[#989898]">Enter OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="w-full px-4 py-3 rounded bg-[#494949] border border-[#989898] placeholder-[#989898] text-white focus:outline-none focus:border-[#ffffff]"
                    />
                    <label className="text-[#989898]">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 rounded bg-[#494949] border border-[#989898] placeholder-[#989898] text-white focus:outline-none focus:border-[#ffffff]"
                    />
                    <button
                      type="button"
                      className="mt-4 w-full py-3 bg-[#FF9B26] hover:bg-yellow-600 text-white font-semibold rounded-lg focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        // Reset password logic here
                        setIsForgotPassword(false);
                        setOtpSent(false);
                        setEmail("");
                        setOtp("");
                        setNewPassword("");
                      }}
                    >
                      Reset Password
                    </button>
                  </>
                )}
              </form>
            )}

            <p className="text-xs text-[#989898] text-center mt-6">
              I agree to abide by E-education's{" "}
              <a href="#" className="border-b border-gray-500 border-dotted">
                Terms of Service
              </a>{" "}
              and its{" "}
              <a href="#" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}