// // import React, { useState, useRef, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import IMG from "../../assets/E- education logo .png";
// // import { login } from "../../State/Auth/Action";
// // import {
// //   register,
// //   verifyOtp,
// //   getUser,
// //   // checkEmail,
// // } from "../../State/Auth/Action"; // Import the Redux action creators
// // import Modal from "react-modal";
// // import Navbar from "../Navbar";

// // function SignUp() {

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const jwt = localStorage.getItem("jwt");
// //   const { auth } = useSelector((store) => store);
// //   const registrationStatus = useSelector(
// //     (state) => state?.registration?.status
// //   ); // Use optional chaining to handle undefined state
// //   const registrationError = useSelector((state) => state?.registration?.error); // Get registration error from Redux state
// //   const [userData, setUserData] = useState({
// //     userName: "",
// //     email: "",
// //     password: "",
// //   });
// //   const inputRefs = useRef([]); // State for showing OTP modal

// //   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// //   const [error, setError] = useState("");
// //   const [otpSent, setOtpSent] = useState(false);
// //   // const [showOtpModal, setShowOtpModal] = useState(false); // State for showing OTP modal
// //   useEffect(() => {
// //     if (jwt) {
// //       dispatch(getUser(jwt));
// //     }
// //   }, [jwt, auth.jwt, dispatch]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     dispatch(register(userData));
// //     setOtpSent(true);
// //   };

// //   const handleOTPEnter = (e, index) => {
// //     const value = e.target.value;
// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp.join("").slice(0, 6));

// //     // Auto focus next input
// //     if (index < 5 && value) {
// //       inputRefs.current[index + 1].focus(); // Focus on the next input box
// //     }
// //   };

// //   const handleOtpVerification = async () => {
// //     dispatch(verifyOtp({ email: userData.email, otp })) // Dispatch the verifyOtp action
// //       .then(() => {
// //         // Redirect to home page upon successful OTP verification
// //         navigate("/");
// //       })
// //       .catch((err) => {
// //         setError(err.message || "OTP verification failed.");
// //       });
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="relative min-h-screen flex px-4 md:px-10 items-center justify-center">
// //         <div className="text-gray-900 flex justify-center w-full">
// //           <div className="bg-white w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] shadow sm:rounded-lg flex flex-col lg:flex-row lg:gap-8">
// //             <div className="p-4 sm:p-6 lg:p-8 flex-1">
// //               <img
// //                 src={IMG}
// //                 className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
// //                 alt="Logo"
// //               />
// //               <div className="flex flex-col items-start mt-4">
// //                 <div className="mb-2">
// //                   <span className="bg-gradient-to-r text-2xl sm:text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
// //                     Sign Up now
// //                   </span>
// //                 </div>
// //                 <span className="mb-6 text-xs sm:text-sm md:text-base">
// //                   Hi, Welcome 👋
// //                 </span>
// //                 <form
// //                   onSubmit={handleSubmit}
// //                   className="flex flex-col items-center"
// //                 >
// //                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
// //                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
// //                       First Name
// //                     </label>
// //                     <input
// //                       id="firstName"
// //                       name="firstName"
// //                       type="text"
// //                       placeholder="First Name"
// //                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
// //                       value={userData.firstName}
// //                       onChange={handleChange}
// //                     />
// //                   </div>
// //                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
// //                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
// //                       Last Name
// //                     </label>
// //                     <input
// //                       id="lastName"
// //                       name="lastName"
// //                       type="text"
// //                       placeholder="Last Name"
// //                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
// //                       value={userData.lastName}
// //                       onChange={handleChange}
// //                     />
// //                   </div>
// //                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
// //                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
// //                       Email
// //                     </label>
// //                     <input
// //                       id="email"
// //                       name="email"
// //                       type="email"
// //                       placeholder="Email"
// //                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
// //                       value={userData.email}
// //                       onChange={handleChange}
// //                     />
// //                   </div>
// //                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
// //                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
// //                       Password
// //                     </label>
// //                     <input
// //                       type="password"
// //                       id="password"
// //                       name="password"
// //                       placeholder="Password"
// //                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
// //                       value={userData.password}
// //                       onChange={handleChange}
// //                     />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     className="mt-5 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] tracking-wide font-semibold bg-[#0098F1] text-gray-100 py-3 rounded-lg hover:bg-[#007acc] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
// //                   >
// //                     <span className="ml-3">Send OTP</span>
// //                   </button>
// //                   {registrationStatus === 'failure' && registrationError && (
// //                     <div className="mt-6 text-center text-red-500">{registrationError}</div>
// //                   )}
// //                 </form>
// //                 {otpSent && (
// //                   <div className="modal-content">
// //                     <div className="mt-4">
// //                       <p>Enter OTP:</p>
// //                       {Array.from({ length: 6 }).map((_, index) => (
// //                         <input
// //                           key={index}
// //                           type="text"
// //                           maxLength="1"
// //                           className="w-12 h-12 text-2xl border border-gray-300 rounded-md shadow-sm text-center"
// //                           value={otp[index] || ''}
// //                           onChange={(e) => handleOTPEnter(e, index)}
// //                           ref={(el) => (inputRefs.current[index] = el)}
// //                         />
// //                       ))}
// //                     </div>

// //                     <button
// //                       onClick={handleOtpVerification}
// //                       className="w-full bg-blue-500 text-white p-2 mt-4 rounded"
// //                     >
// //                       Verify OTP & Register
// //                     </button>
// //                     {/* OTP verification error */}
// //                     {error && <div className="mt-2 text-red-500">{error}</div>}
// //                   </div>
// //                 )}
// //               </div>
// //               <div className='flex pr-40 flex-col mt-4 items-center justify-center text-sm'>
// //                 <h3>
// //                   <span className='cursor-default dark:text-gray-300'>
// //                     Have an account?
// //                   </span>
// //                   <a
// //                     className='group text-blue-400 transition-all duration-100 ease-in-out'
// //                     href='/Login'
// //                   >
// //                     <span className='bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
// //                       Log In
// //                     </span>
// //                   </a>
// //                 </h3>
// //               </div>
// //             </div>

// //             <div className="flex-1  lg:mt-0 text-center hidden lg:flex">
// //               <div
// //                 className="w-[550px]  mt-80 h-[478px] bg-center bg-no-repeat right-24 mr-4"
// //                 style={{
// //                   backgroundImage:
// //                     "url('https://s3-alpha-sig.figma.com/img/0ba4/acc9/22ae30233428f93ea97ee61bed1f1368?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCbWPiAaKxLjj3vrmZV1zupjmK~2HmElPQywLV9jfz5deFv6mRXEiuFp15TKa4Mlek3c3ctsL9pW~BTsISI5cgjmhN0oatAc3cXcSO5uvTEGxoIcGwbGyOGiTGP9IrnWiMBb~wAZq1P-NB9RsD0IRihA0tCkF~iasBUhxumSJ-QA5Ao0~BfPb8FUp2c2avzIAJO9VkWWStuIbp2C9-4y8t11E9QXJayELfz6MrQhaYdod3W~udjHAFqa-D5Rqp05p9ADjZgDH6FlQE-hTT6y5laBkhisUwEvttRx9cWT9dmBRKB350XtHYq3DsWWE6b0KrYvaBgUNRjLL6X6bT2A0g__')",
// //                 }}
// //               ></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>

// //   );
// // }

// // export default SignUp;

// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import IMG from "../../assets/E- education logo .png";
// import { register, verifyOtp, getUser } from "../../State/Auth/Action";
// import Navbar from "../Navbar";
// import BackgroundIMG from "../../../src/assetss/login/signupimg.jpg";

// function SignUp() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const { auth } = useSelector((store) => store);
//   const registrationStatus = useSelector(
//     (state) => state?.registration?.status
//   );
//   const registrationError = useSelector((state) => state?.registration?.error);
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const inputRefs = useRef([]);
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(register(userData));
//     setOtpSent(true);
//   };

//   const handleOTPEnter = (e, index) => {
//     const value = e.target.value;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp.join("").slice(0, 6));

//     if (index < 5 && value) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleOtpVerification = async () => {
//     dispatch(verifyOtp({ email: userData.email, otp }))
//       .then(() => {
//         navigate("/");
//       })
//       .catch((err) => {
//         setError(err.message || "OTP verification failed.");
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex justify-center items-center bg-gray-100">
//         <div className="bg-white w-full max-w-[1150px] shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
//           {/* Form Section */}
//           <div className="p-12 w-full lg:w-1/2">
//             <img
//               src={IMG}
//               alt="Logo"
//               className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] mb-0"
//             />
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4">
//               <span className="bg-gradient-to-r text-2xl sm:text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
//                 Sign Up now
//               </span>
//             </h2>
//             <p className="text-sm mb-6">Hi, Welcome 👋</p>

//             <form onSubmit={handleSubmit} className="space-y-3">
//               <div>
//                 <label className="text-sm font-bold text-[#F6AC14]">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="Enter here"
//                   className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
//                   value={userData.firstName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-bold text-[#F6AC14]">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Enter here"
//                   className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
//                   value={userData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-bold text-[#F6AC14]  background: #FF9B26">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email id"
//                   className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
//                   value={userData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-bold text-[#F6AC14]">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
//                   value={userData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-[#0098F1] text-white font-semibold rounded-md hover:bg-[#007acc] transition-all"
//               >
//                 Send OTP
//               </button>
//               {registrationStatus === "failure" && registrationError && (
//                 <p className="text-red-500 text-center mt-4">
//                   {registrationError}
//                 </p>
//               )}
//             </form>

//             {/* OTP Verification */}
//             {otpSent && (
//               <div className="mt-6">
//                 <p>Enter OTP:</p>
//                 <div className="flex justify-center space-x-2 mt-4">
//                   {Array.from({ length: 6 }).map((_, index) => (
//                     <input
//                       key={index}
//                       type="text"
//                       maxLength="1"
//                       className="w-12 h-12 text-xl text-center border border-gray-300 rounded"
//                       value={otp[index] || ""}
//                       onChange={(e) => handleOTPEnter(e, index)}
//                       ref={(el) => (inputRefs.current[index] = el)}
//                     />
//                   ))}
//                 </div>
//                 <button
//                   onClick={handleOtpVerification}
//                   className="w-full py-2 mt-4 bg-[#0098F1] text-white rounded-md"
//                 >
//                   Verify OTP & Register
//                 </button>
//                 {error && (
//                   <p className="text-red-500 text-center mt-2">{error}</p>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Image Section */}
//           <div
//             className="hidden lg:block w-1/2 bg-cover bg-center"
//             style={{ backgroundImage: `url(${BackgroundIMG})` }} // Local image reference
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;







import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IMG from "../../assets/E- education logo .png";
import { register, verifyOtp } from "../../State/Auth/Action";
import Navbar from "../Navbar";
import BackgroundIMG from "../../../src/assetss/login/signupimg.jpg";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // FIXED: Specific selectors only
  const auth = useSelector((store) => store.auth);
  const registration = useSelector((store) => store.registration);
  
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!userData.firstName.trim()) {
      setError("First name is required");
      return false;
    }
    if (!userData.lastName.trim()) {
      setError("Last name is required");
      return false;
    }
    if (!userData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!userData.email.includes('@')) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!userData.password) {
      setError("Password is required");
      return false;
    }
    if (userData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      const result = await dispatch(register(userData));
      
      if (result?.success) {
        setSuccessMessage(result.message || "OTP sent successfully! Check your email.");
        setOtpSent(true);
      } else {
        setError(result?.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOTPEnter = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    const newOtp = [...otp];
    
    if (value.length > 1) {
      // Handle paste
      const pastedValues = value.split('');
      pastedValues.forEach((char, i) => {
        if (index + i < 6) {
          newOtp[index + i] = char;
        }
      });
      setOtp(newOtp);
      
      // Focus on next empty field
      const nextEmptyIndex = newOtp.findIndex((val, i) => i >= index && !val);
      if (nextEmptyIndex > -1 && nextEmptyIndex < 6) {
        setTimeout(() => {
          inputRefs.current[nextEmptyIndex]?.focus();
        }, 10);
      }
    } else {
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        setTimeout(() => {
          inputRefs.current[index + 1]?.focus();
        }, 10);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      setTimeout(() => {
        inputRefs.current[index - 1]?.focus();
      }, 10);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
    if (pastedData.length === 6) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
    }
  };

  const handleOtpVerification = async () => {
    setError("");
    setLoading(true);
    
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      setLoading(false);
      return;
    }
    
    try {
      await dispatch(verifyOtp({
        email: userData.email,
        otp: otpString
      }));
      navigate("/");
    } catch (err) {
      console.error("OTP Verification Error:", err);
      setError(err.response?.data?.message || err.message || "OTP verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    setError("");
    setOtp(["", "", "", "", "", ""]);
    // Reset input refs focus
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    handleSubmit(new Event('submit'));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
        <div className="bg-white w-full max-w-[1150px] shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Form Section */}
          <div className="p-6 md:p-8 lg:p-12 w-full lg:w-1/2">
            <img
              src={IMG}
              alt="Logo"
              className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] mb-4"
            />
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
                Sign Up now
              </span>
            </h2>
            
            <p className="text-sm mb-6 text-gray-600">Hi, Welcome 👋</p>

            {!otpSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-[#F6AC14] block mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0098F1] focus:ring-1 focus:ring-[#0098F1] transition-all"
                    value={userData.firstName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-[#F6AC14] block mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0098F1] focus:ring-1 focus:ring-[#0098F1] transition-all"
                    value={userData.lastName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-[#F6AC14] block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0098F1] focus:ring-1 focus:ring-[#0098F1] transition-all"
                    value={userData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-bold text-[#F6AC14] block mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password (min 6 characters)"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-[#0098F1] focus:ring-1 focus:ring-[#0098F1] transition-all"
                    value={userData.password}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 6 characters required</p>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#0098F1] text-white font-semibold rounded-md hover:bg-[#007acc] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending OTP...
                    </>
                  ) : "Send OTP"}
                </button>
                
                {registration?.status === "failure" && registration?.error && (
                  <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600 text-sm text-center">
                      {registration.error}
                    </p>
                  </div>
                )}
                
                {error && (
                  <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600 text-sm text-center">
                      {error}
                    </p>
                  </div>
                )}
                
                {successMessage && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-600 text-sm text-center">
                      {successMessage}
                    </p>
                  </div>
                )}
              </form>
            ) : (
              /* OTP Verification Section */
              <div className="mt-6">
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-gray-700">
                    We've sent a 6-digit OTP to: <br />
                    <strong className="text-[#0098F1]">{userData.email}</strong>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Please check your inbox and spam folder. The OTP is valid for 10 minutes.
                  </p>
                </div>
                
                <div className="mb-6">
                  <label className="text-sm font-bold text-[#F6AC14] block mb-3 text-center">
                    Enter 6-digit OTP:
                  </label>
                  <div 
                    className="flex justify-center space-x-2 mb-2"
                    onPaste={handlePaste}
                  >
                    {Array.from({ length: 6 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength="1"
                        className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md focus:outline-none focus:border-[#0098F1] focus:ring-2 focus:ring-[#0098F1] transition-all"
                        value={otp[index] || ""}
                        onChange={(e) => handleOTPEnter(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        disabled={loading}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Tip: You can paste the entire OTP
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleOtpVerification}
                    disabled={loading || otp.join('').length !== 6}
                    className="w-full py-3 bg-[#0098F1] text-white font-semibold rounded-md hover:bg-[#007acc] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verifying...
                      </>
                    ) : "Verify OTP & Create Account"}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={loading}
                    className="w-full py-2 text-[#0098F1] border border-[#0098F1] rounded-md hover:bg-blue-50 transition-all disabled:opacity-50 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0098F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Resending...
                      </>
                    ) : "Resend OTP"}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false);
                      setOtp(["", "", "", "", "", ""]);
                      setError("");
                      setSuccessMessage("");
                    }}
                    className="w-full py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-all"
                  >
                    Back to Registration
                  </button>
                </div>
                
                {error && (
                  <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600 text-sm text-center">
                      {error}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-[#0098F1] hover:underline font-semibold">
                  Login here
                </Link>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="hidden lg:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundIMG})` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;