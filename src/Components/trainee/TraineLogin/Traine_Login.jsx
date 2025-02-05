

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { trainee } from '../../../State/Auth/Action';
import traineloginpageimage from "../../../assetss/login/traineloginpageimage.png";
import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";
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
    <div className="flex flex-col-reverse md:flex-row h-screen px-4 py-8 md:px-8 md:py-8">
      {/* Left Section for Larger Screens */}
      <div className="hidden md:flex flex-col justify-center bg-gradient-to-r from-[#4CA1AF] to-[#204349] items-center w-full md:w-1/2 p-4">
        <img src={Eeducationlogo} alt="E-Education Logo" className='h-40 w-72 md:h-[200px] md:w-[400px]' />
        <div className='mb-12'>
          <img src={traineloginpageimage} alt="Trainee Login Page" className="mb-4 h-40 w-40 md:h-[300px] md:w-[300px] border-[#4CA1AFC9] bg-opacity-70 border-[10px] rounded-full" />
        </div>
      </div>

      {/* Right Section for Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#4CA1AFC9]">Trainee Login</h2>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="user-id"> Email </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your Email"
              className="shadow appearance-none border-[#4CA1AF] border-2 focus:outline-none focus:ring-[#204349] focus:border-[#204349] focus:border-none focus:border placeholder:text-[#4CA1AF] rounded w-full py-3 md:py-4 px-3 text-[#4CA1AF] leading-tight focus:outline-[#4CA1AF] focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="password"> Password </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="shadow appearance-none border-[#4CA1AF] border-2 focus:outline-none focus:ring-[#204349] focus:border-[#204349] focus:border-none placeholder:text-[#4CA1AF] rounded w-full py-3 md:py-4 px-3 text-[#4CA1AF] leading-tight focus:outline-[#4CA1AF] focus:shadow-outline"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-[#4CA1AF]"
            } text-white w-full py-3 md:py-4 rounded`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Traine_Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import traineloginpageimage from "../../../assetss/login/traineloginpageimage.png";
// import Eeducationlogo from "../../../assets/logo/E-educationlogo.png";

// const Trainee_Login = () => {
//   // const [role, setRole] = useState("trainee");
//   const [data, setData] = useState({ userId: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       let response;

//       // Check role and make respective API call
//       if (role === "ADMIN") {
//         response = await axios.post('http://localhost:8080/auth/signin', data
//         );
//       } else if (role === "trainee") {
//         response = await axios.post(
//           'http://localhost:8080/trainee/signin',
//           data
//         );
//       } else {
//         throw new Error("Invalid role selected.");
//       }

//       // Check if login was successful
//       if (response.status === 200) {
//         const { token, role } = response.data;

//         // Store token and role in localStorage (optional)
//         localStorage.setItem("token", token);
//         localStorage.setItem("role", role);

//         // Navigate to trainee dashboard
//         navigate("/traineedashboard");
//       } else {
//         throw new Error("Login failed. Please check your credentials.");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials or network error.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col-reverse md:flex-row h-screen px-4 py-8 md:px-8 md:py-8">
//       {/* Left Section */}
//       <div className="hidden md:flex flex-col justify-center bg-gradient-to-r from-[#4CA1AF] to-[#204349] items-center w-full md:w-1/2 p-4">
//         <img
//           src={Eeducationlogo}
//           alt="E-Education Logo"
//           className="h-40 w-72 md:h-[200px] md:w-[400px]"
//         />
//         <img
//           src={traineloginpageimage}
//           alt="Login"
//           className="mb-4 h-40 w-40 md:h-[300px] md:w-[300px] border-[#4CA1AFC9] bg-opacity-70 border-[10px] rounded-full"
//         />
//       </div>

//       {/* Right Section - Login Form */}
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
//         <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#4CA1AFC9]">
//           Login
//         </h2>

//         {/* Role Selection */}
//         {/* <div className="mb-4">
//           <label className="text-zinc-700 text-sm font-bold mb-2">
//             Login as:
//           </label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full py-2 px-3 border-2 rounded border-[#4CA1AF] text-[#4CA1AF]"
//           >
//             <option value="trainee">Trainee</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div> */}

//         <form className="w-full max-w-sm" onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label
//               className="block text-zinc-700 text-sm font-bold mb-2"
//               htmlFor="user-id"
//             >
//               User ID / Email
//             </label>
//             <input
//               id="user-id"
//               name="userId"
//               type="text"
//               placeholder="Enter your User ID or Email"
//               value={data.userId}
//               onChange={handleChange}
//               className="shadow border-2 rounded w-full py-3 px-3 text-[#4CA1AF] border-[#4CA1AF]"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-zinc-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//               className="shadow border-2 rounded w-full py-3 px-3 text-[#4CA1AF] border-[#4CA1AF]"
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 rounded ${
//               loading ? "bg-gray-400" : "bg-[#4CA1AF]"
//             } text-white`}
//           >
//             {loading ? "Logging in..." : "Log In"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Trainee_Login;
