// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Navbar from "../Navbar";
// import IMG from "../../assets/E- education logo .png";
// import { login } from "../../State/Auth/Action";

// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     // Save user data to local storage
//     localStorage.setItem("userEmail", userData.email);
//     localStorage.setItem("userPassword", userData.password);

//     // navigate("/");
//     dispatch(login(userData));
//   };

//   return (
//     <div className="relative">
//       <button className="absolute top-4 right-24 bg-[#F6AC14] text-white px-2 py-2 rounded-lg shadow-lg hover:bg-[#F8B64C] focus:outline-none focus:ring-2 focus:ring-[#F6AC14] transition-all duration-300 ease-in-out text-sm md:text-base">
//         Sign Up
//       </button>
//       <div className="text-gray-900 flex px-20 justify-center">
//         <div className="bg-white w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] shadow sm:rounded-lg flex flex-col lg:flex-row lg:gap-8">
//           <div className="pl-4 sm:pl-6 lg:p-8 flex-1">
//             <img
//               src={IMG}
//               className="w-[300px] sm:w-[350px] md:w-[400px]"
//               alt="Logo"
//             />
//             <div className="flex flex-col items-start ">
//               <div className="mb-2">
//                 <span className="bg-gradient-to-r text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
//                   Login now
//                 </span>
//               </div>
//               <span className="mb-6 text-sm md:text-base">
//                 Hi, Welcome back 👋
//               </span>
//               <div>
//                 <div className="flex flex-col items-center mt-4">
//                   <button className="w-full sm:w-[400px] md:w-[500px] font-bold shadow-sm rounded-lg py-3 bg-[#0098F1] text-white transition-all duration-300 ease-in-out hover:bg-indigo-200 focus:outline-none">
//                     <span className="ml-2">Login with Google</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between mt-4 mb-4">
//                 <div className="border-t border-[#F6AC14] border-2 w-[120px] sm:w-[150px] md:w-[180px] h-[1px] mr-2"></div>
//                 <span className="text-gray-600 text-xs md:text-sm whitespace-nowrap mt-4">
//                   or Login with Email
//                 </span>
//                 <div className="border-t border-2 border-[#F6AC14] w-[100px] sm:w-[120px] md:w-[150px] h-[1px] ml-2"></div>
//               </div>
//               <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col items-center"
//               >
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[400px] md:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     label="Email"
//                     name="email"
//                     type="email"
//                     placeholder="email"
//                     className="w-full px-4  h-[50px] py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[400px] md:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     label="Password"
//                     placeholder="password"
//                     className="w-full px-4 py-2  h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between w-full sm:w-[400px] md:w-[500px] mb-4 text-sm md:text-base">
//                   <div className="flex items-center">
//                     <input
//                       id="remember-me"
//                       type="checkbox"
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                     />
//                     <label
//                       htmlFor="remember-me"
//                       className="ml-2 block text-sm text-gray-900"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                   <div>
//                     <Link
//                       to="/forgotPassword"
//                       className="text-sm text-indigo-600 hover:underline cursor-pointer"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="mt-5 w-full sm:w-[400px] md:w-[500px] tracking-wide font-semibold bg-indigo-500 text-gray-100 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
//                 >
//                   <svg
//                     className="w-6 h-6 -ml-2"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//                     <circle cx="8.5" cy="7" r="4" />
//                     <path d="M20 8v6M23 11h-6" />
//                   </svg>
//                   <span className="ml-3">Login</span>
//                 </button>
//               </form>

// <p className="mt-6 text-xs mr-20 text-gray-600 text-center">
//   <Link to="/signup" className="text-blue-600 hover:underline ">
//     Not registered yet? Create an account{" "}
//     <span className="text-[#F6AC14]  font-bold">Signup</span>
//   </Link>
// </p>
//             </div>
//           </div>
//           <div className="flex-1 mt-64  text-center hidden lg:flex">
//             <div
//               className="  w-full  bg-center bg-no-repeat"
//               style={{
//                 backgroundImage:
//                   "url('https://s3-alpha-sig.figma.com/img/4d78/3822/fe1286f790824427471a7beab6c3cd84?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmrG7~EFFLLa7f6CcscMzpjNCXXyZAooSZjGspfAuJCF~Ww2H3bmAZTdlfpXCOsnCbsnFBN3LMfrPjFvQdxRS43LX9SAtudKwblTz4Ch6tNSuyYmgAjg6xFDOw8ahRmhIOUg8qu2mmU-R~w95rLCBQFSL-nNxcpPxF7JxHflIpPDgsZUxJhZd3JME~r5bE1Y0o59oulGUpM5Bou4CzDHBHSKrx9j70JmFr5cFg3OFeJ1-StCrN9QlQbjfUzctt9njhWclLPB9kNR7oq-xqS24Jxbxfn5714-8rXt1h7CMp7RawDdUVEt7gzclm-NUortVjIc2coflOGq9x~al~bUpw__')",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import IMG from "../../assets/E- education logo .png";
// import { login } from "../../State/Auth/Action";

// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     navigate("/");
//     dispatch(login(userData));
//   };

//   return (
//     <div className="relative">
//       <button className="hidden md:block absolute top-4 right-24 bg-[#F6AC14] text-white px-2 py-2 rounded-lg shadow-lg hover:bg-[#F8B64C] focus:outline-none focus:ring-2 focus:ring-[#F6AC14] transition-all duration-300 ease-in-out text-sm md:text-base">
//         Sign Up
//       </button>

//       <div className="text-gray-900 flex px-4 md:px-10 justify-center">
//         <div className="bg-white w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] shadow sm:rounded-lg flex flex-col lg:flex-row lg:gap-8">
//           <div className="pl-4 sm:pl-6 lg:p-8 flex-1">
//             <img
//               src={IMG}
//               className="w-[200px]  h-[119px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
//               alt="Logo"
//             />
//             <div className="flex flex-col items-start ">
//               <div className="mb-2">
//                 <span className="bg-gradient-to-r text-2xl sm:text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
//                   Login now
//                 </span>
//               </div>
//               <span className="mb-6 text-xs sm:text-sm md:text-base">
//                 Hi, Welcome back 👋
//               </span>
//               <div>
//                 <div className="flex flex-col items-center mt-4">
//                   <button className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] font-bold shadow-sm rounded-lg py-3 bg-[#0098F1] text-white transition-all duration-300 ease-in-out hover:bg-indigo-200 focus:outline-none">
//                     <span className="ml-2">Login with Google</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="flex  items-center justify-between mt-4 mb-4">
//                 <div className="border-t hidden md:block border-[#F6AC14] border-2 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-[1px] mr-2"></div>
//                 <span className="  text-gray-600  hidden md:block text-xs md:text-sm whitespace-nowrap mt-4">
//                   or Login with Email
//                 </span>
//                 <div className="border-t hidden md:block  border-2 border-[#F6AC14] w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[1px] ml-2"></div>
//               </div>
//               <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col items-center"
//               >
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     label="Email"
//                     name="email"
//                     type="email"
//                     placeholder="email"
//                     className="w-full px-4 h-[40px] sm:h-[45px] md:h-[50px] py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
//                   <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     label="Password"
//                     placeholder="password"
//                     className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between w-full sm:w-[300px] md:w-[400px] lg:w-[500px] mb-4 text-sm md:text-base">
//                   <div className="flex items-center">
//                     <input
//                       id="remember-me"
//                       type="checkbox"
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                     />
//                     <label
//                       htmlFor="remember-me"
//                       className="ml-2 block text-sm text-gray-900"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                   <div>
//                     <Link
//                       to="/forgot-Password"
//                       className="text-sm text-indigo-600 hover:underline cursor-pointer"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="mt-5 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] tracking-wide font-semibold bg-indigo-500 text-gray-100 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
//                 >
//                   <svg
//                     className="w-6 h-6 -ml-2"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//                     <circle cx="8.5" cy="7" r="4" />
//                     <path d="M20 8v6M23 11h-6" />
//                   </svg>
//                   <span className="ml-3">Login</span>
//                 </button>
//               </form>

//               <p className="mt-6 text-xs mr-5 md:mr-20 text-gray-600 text-center">
//                 <Link to="/signup" className="text-blue-600 hover:underline">
//                   Not registered yet? Create an account{" "}
//                   <span className="text-[#F6AC14] font-bold">Signup</span>
//                 </Link>
//               </p>
//             </div>
//           </div>
//           <div className="flex-1 mt-64 text-center hidden lg:flex mr-4">
//             <div
//               className="w-[550px]  mt-10 h-[478px] bg-center bg-no-repeat right-24 mr-4"
//               style={{
//                 backgroundImage:
//                   "url('https://s3-alpha-sig.figma.com/img/4d78/3822/fe1286f790824427471a7beab6c3cd84?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmrG7~EFFLLa7f6CcscMzpjNCXXyZAooSZjGspfAuJCF~Ww2H3bmAZTdlfpXCOsnCbsnFBN3LMfrPjFvQdxRS43LX9SAtudKwblTz4Ch6tNSuyYmgAjg6xFDOw8ahRmhIOUg8qu2mmU-R~w95rLCBQFSL-nNxcpPxF7JxHflIpPDgsZUxJhZd3JME~r5bE1Y0o59oulGUpM5Bou4CzDHBHSKrx9j70JmFr5cFg3OFeJ1-StCrN9QlQbjfUzctt9njhWclLPB9kNR7oq-xqS24Jxbxfn5714-8rXt1h7CMp7RawDdUVEt7gzclm-NUortVjIc2coflOGq9x~al~bUpw__')",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IMG from "../../assets/E- education logo .png";
import BackgroundIMG from "../../../src/assetss/login/loginimg.jpg";
import { login } from "../../State/Auth/Action";
import axios from 'axios';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const userData = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };

  //   navigate("/mylearning");
  //   dispatch(login(userData));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      const response = await axios.post('http://localhost:8080/auth/signin', userData);
      if (response.data.status) {
        localStorage.setItem('jwt', response.data.jwt);
        dispatch(login(userData));
        navigate('/mylearning');
      } else {
        setError(response.data.message || 'Invalid credentials.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while logging in. Please try again.');
    }
  };
  

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg flex flex-col lg:flex-row">
        {/* Login Section */}
        <div className="w-full lg:w-1/2 p-8 lg:px-16 flex flex-col justify-center relative">
          <img
            src={IMG}
            // className="w-[200px] h-[119px] sm:w-[250px] md:w-[300px] lg:w-[350px] mb-6"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] mb-0"
            alt="Logo"
          />

          {/* Sign Up Button Positioned between Logo and Login Now */}
          <div className="absolute right-8 top-7">
            <Link
              to="/signup"
              className="bg-[#0098F1] text-white px-4 py-2 rounded-lg hover:bg-[#007acc]  transition"
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
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#f6ac14]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                placeholder="Enter your password"
              />
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
          </form>

          {/* Google Login Button */}
          <div className="mt-6">
            <button className="w-full bg-[#0098F1] text-white py-3 rounded-lg hover:bg-[#007acc] transition">
              <span>Login with Google</span>
            </button>
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
  );
}

export default Login;
