

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { trainee } from '../../../State/Auth/Action';
// import traineloginpageimage from "../../../assetss/login/traineloginpageimage.png";
// import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";
// import axios from 'axios';

// const API_URL = "http://localhost:8080/trainee/signin"; // Backend API URL

// const Traine_Login = () => {
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false); // To manage loading state
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const traineeData  = {
//       email: data.get('email'), // Ensure this matches what the backend expects
//       password: data.get('password'), // Ensure this matches what the backend expects
//     };
  
//     try {
//       const response = await axios.post('http://localhost:8080/trainee/signin', traineeData);
//       console.log(response);
//       if (response.data.status) {
//         localStorage.setItem('jwt', response.data.jwt);
//         dispatch(trainee(traineeData));
//         navigate('/traineedashbord');
//       } else {
//         setError(response.data.message || 'Invalid credentials.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred while logging in. Please try again.');
//     }
//   };
  


//   return (
//     <div className="flex flex-col-reverse md:flex-row h-screen px-4 py-8 md:px-8 md:py-8">
//       {/* Left Section for Larger Screens */}
//       <div className="hidden md:flex flex-col justify-center bg-gradient-to-r from-[#4CA1AF] to-[#204349] items-center w-full md:w-1/2 p-4">
//         <img src={Eeducationlogo} alt="E-Education Logo" className='h-40 w-72 md:h-[200px] md:w-[400px]' />
//         <div className='mb-12'>
//           <img src={traineloginpageimage} alt="Trainee Login Page" className="mb-4 h-40 w-40 md:h-[300px] md:w-[300px] border-[#4CA1AFC9] bg-opacity-70 border-[10px] rounded-full" />
//         </div>
//       </div>

//       {/* Right Section for Login Form */}
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
//         <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#4CA1AFC9]">Trainee Login</h2>
//         <form className="w-full max-w-sm" onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="user-id"> Email </label>
//             <input
//               id="email"
//               name="email"
//               type="text"
//               placeholder="Enter your Email"
//               className="shadow appearance-none border-[#4CA1AF] border-2 focus:outline-none focus:ring-[#204349] focus:border-[#204349] focus:border-none focus:border placeholder:text-[#4CA1AF] rounded w-full py-3 md:py-4 px-3 text-[#4CA1AF] leading-tight focus:outline-[#4CA1AF] focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="password"> Password </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               className="shadow appearance-none border-[#4CA1AF] border-2 focus:outline-none focus:ring-[#204349] focus:border-[#204349] focus:border-none placeholder:text-[#4CA1AF] rounded w-full py-3 md:py-4 px-3 text-[#4CA1AF] leading-tight focus:outline-[#4CA1AF] focus:shadow-outline"
//             />
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
//           )}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`${
//               loading ? "bg-gray-400" : "bg-[#4CA1AF]"
//             } text-white w-full py-3 md:py-4 rounded`}
//           >
//             {loading ? "Logging in..." : "Log In"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Traine_Login;







// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import IMG from "../../assets/E- education logo .png";
// import { useDispatch } from "react-redux";
// import { login } from "../../State/Auth/Action";
// import axios from 'axios';
// // import admin from "../../assetss/admindashboard/login.png";
// function AdminLogin() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = useState('');
  
//   // States to toggle between Login and Forgot Password
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   // Handle Login Form Submission
//   // const handleSubmitLogin = (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   const userData = {
//   //     email: data.get("email"),
//   //     password: data.get("password"),
//   //   };

//   //   // Store user data in local storage
//   //   localStorage.setItem("userData", JSON.stringify(userData));

//   //   navigate("/admin/*");
//   //   dispatch(login(userData));
//   // };

//   const handleSubmitLogin = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       email: data.get('email'),
//       password: data.get('password'),
//     };

//     try {
//       const response = await axios.post('http://localhost:8080/auth/signin', userData);
//       const { jwt, role, status } = response.data;
//       console.log(response.data)
//       if (jwt && status && role === "ADMIN") {
//         localStorage.setItem("jwt", jwt);
//         localStorage.setItem("role", role);
//         dispatch(login(userData));
//         navigate('/admin/*');
//       } else {
//         setError(response.data.message || 'Invalid credentials.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred while logging in. Please try again.');
//     }
//   };

//   // Handle Forgot Password - Send OTP
//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     // API call to send OTP (placeholder for actual API call)
//     setOtpSent(true); // Assuming OTP is sent successfully
//   };

//   // Handle Forgot Password - Verify OTP and Reset Password
//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     // API call to verify OTP and reset password (placeholder for actual API call)
//     navigate("/admin_login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="flex flex-col lg:flex-row bg-[#989898] shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
//         {/* Image Section - Left */}
//         <div className="hidden lg:flex lg:w-1/2 bg-indigo-100 items-center justify-center ">
//           {/* <img src={admin} alt="Admin login" className="h-auto w-2xl object-cover" /> */}
//         </div>

//         {/* Form Section - Right */}
//         <div className="flex flex-col justify-center items-center p-6 lg:w-1/2">
//           <div className="w-full max-w-xs">
//             <div className="flex justify-center">
//               <img src={IMG} alt="Logo" className="w-52 mb-4" />
//             </div>

//             {/* Conditional rendering based on isForgotPassword and otpSent */}
//             {!isForgotPassword ? (
//               <>
//                 <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
//                   Admin{" "}
//                   <span className="bg-gradient-to-r from-[#001510] to-[#00BF8F] text-transparent bg-clip-text">
//                     Login
//                   </span>
//                 </h1>
//                 <form onSubmit={handleSubmitLogin} className="w-full">
//                   <div className="flex flex-col gap-4">
//                     <label className="text-gray-500">User ID</label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="Email"
//                       className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
//                     />
//                     <label className="text-gray-500">Password</label>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Password"
//                       className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
//                     />
//                     <div className="flex justify-end">
//                       <button
//                         type="button"
//                         onClick={() => setIsForgotPassword(true)}
//                         className="text-sm text-gray-600 hover:underline"
//                       >
//                         Forgot Password?
//                       </button>
//                     </div>
//                     <button
//                       type="submit"
//                       className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-[#989898] font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </form>
//                 <p className="text-xs text-gray-600 text-center mt-6">
//               I agree to abide by E-education's{" "}
//               <a href="#" className="border-b border-gray-500 border-dotted">
//                 Terms of Service
//               </a>{" "}
//               and its{" "}
//               <a href="#" className="border-b border-gray-500 border-dotted">
//                 Privacy Policy
//               </a>
//             </p>
//               </>
//             ) : (
//               <>
//                 {!otpSent ? (
//                   <>
//                     <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
//                       Forgot Password
//                     </h1>
//                     <form onSubmit={handleSendOtp} className="w-full">
//                       <label className="text-gray-500">Email</label>
//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
//                       />
//                       <button
//                         type="submit"
//                         className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-[#989898] font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
//                       >
//                         Send OTP
//                       </button>
//                     </form>
//                   </>
//                 ) : (
//                   <>
//                     <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
//                       Verify OTP
//                     </h1>
//                     <form onSubmit={handleVerifyOtp} className="w-full">
//                       <label className="text-gray-500">OTP</label>
//                       <input
//                         type="text"
//                         value={otp}
//                         onChange={(e) => setOtp(e.target.value)}
//                         placeholder="Enter OTP"
//                         className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
//                       />
//                       <label className="text-gray-500">New Password</label>
//                       <input
//                         type="password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         placeholder="Enter new password"
//                         className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#001510]"
//                       />
//                       <button
//                         type="submit"
//                         className="mt-4 w-full py-3 bg-gradient-to-r from-[#001510] to-[#00BF8F] text-[#989898] font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
//                       >
//                         Reset Password
//                       </button>
//                     </form>
                    
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { trainee } from '../../../State/Auth/Action';
// import traineloginpageimage from "../../../assetss/login/traineloginpageimage.png";
import IMG from "../../../assets/E- education logo .png";
import axios from 'axios';

const API_URL = "http://localhost:8080/trainee/signin"; // Backend API URL

const Traine_Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const traineeData  = {
      email: data.get('email'), // Ensure this matches what the backend expects
      password: data.get('password'), // Ensure this matches what the backend expects
    };
  
    try {
      const response = await axios.post('http://localhost:8080/trainee/signin', traineeData);
      console.log(response);
      if (response.data.status) {
        localStorage.setItem('jwt', response.data.jwt);
        dispatch(trainee(traineeData));
        navigate('/traineedashbord');
      } else {
        setError(response.data.message || 'Invalid credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while logging in. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#006666]">
      <div className="flex flex-col lg:flex-row bg-[#006666]   w-full max-w-4xl space-x-5">
        
        {/* Left Section - Logo & Welcome */}
        <div className="hidden lg:flex flex-col -ml-12 lg:w-1/2 items-center justify-center p-6 text-white">
          <img src={IMG} alt="Logo" className="w-[472px] h-[150px] mb-6" />
        
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-[1px] bg-white"></div>

        {/* Right Section - Login Form */}
        <div className="flex flex-col justify-center items-center p-6 lg:w-1/2 text-white">
          <div className="w-full max-w-xs font-poppins ">
          <h1 className="text-center text-lg"> Welcome to </h1>
            <div className="text-center text-sm  mb-6">
           
              Trainer Login
            </div>

            {/* Login Form */}
          
              <form onSubmit={handleLogin} className="w-full">
                <div className="flex flex-col gap-4">
                  <label className="text-white">User ID</label>
                  <input
  id="email"
  name="email"
  type="email"
  placeholder="Enter your email"
  className="w-full px-4 py-3 rounded bg-[#006666] placeholder-white border border-white text-white focus:inline-none focus:border-[#ffffff]"
/>
                  <label className="text-white">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded  border bg-[#006666] placeholder-white border-white text-white focus:inline-none focus:border-[#ffffff]"
                  />
                  <div className="flex justify-end">
                    
                  </div>
                  {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
                  <button
                    type="submit"
                    className="mt-4 w-full py-3 bg-[#0098F1] hover:bg-[#328dc1] text-white font-semibold rounded-lg focus:outline-none"
                  >
                     {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>
              </form>
          

            <p className="text-xs text-white text-center mt-6">
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
export default Traine_Login;