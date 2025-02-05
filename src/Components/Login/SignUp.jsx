// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import IMG from "../../assets/E- education logo .png";
// import { login } from "../../State/Auth/Action";
// import {
//   register,
//   verifyOtp,
//   getUser,
//   // checkEmail,
// } from "../../State/Auth/Action"; // Import the Redux action creators
// import Modal from "react-modal";
// import Navbar from "../Navbar";

// function SignUp() {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const { auth } = useSelector((store) => store);
//   const registrationStatus = useSelector(
//     (state) => state?.registration?.status
//   ); // Use optional chaining to handle undefined state
//   const registrationError = useSelector((state) => state?.registration?.error); // Get registration error from Redux state
//   const [userData, setUserData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });
//   const inputRefs = useRef([]); // State for showing OTP modal

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   // const [showOtpModal, setShowOtpModal] = useState(false); // State for showing OTP modal
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

//     // Auto focus next input
//     if (index < 5 && value) {
//       inputRefs.current[index + 1].focus(); // Focus on the next input box
//     }
//   };

//   const handleOtpVerification = async () => {
//     dispatch(verifyOtp({ email: userData.email, otp })) // Dispatch the verifyOtp action
//       .then(() => {
//         // Redirect to home page upon successful OTP verification
//         navigate("/");
//       })
//       .catch((err) => {
//         setError(err.message || "OTP verification failed.");
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative min-h-screen flex px-4 md:px-10 items-center justify-center">
//         <div className="text-gray-900 flex justify-center w-full">
//           <div className="bg-white w-full max-w-[1000px] sm:max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] shadow sm:rounded-lg flex flex-col lg:flex-row lg:gap-8">
//             <div className="p-4 sm:p-6 lg:p-8 flex-1">
//               <img
//                 src={IMG}
//                 className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
//                 alt="Logo"
//               />
//               <div className="flex flex-col items-start mt-4">
//                 <div className="mb-2">
//                   <span className="bg-gradient-to-r text-2xl sm:text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
//                     Sign Up now
//                   </span>
//                 </div>
//                 <span className="mb-6 text-xs sm:text-sm md:text-base">
//                   Hi, Welcome 👋
//                 </span>
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex flex-col items-center"
//                 >
//                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
//                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                       First Name
//                     </label>
//                     <input
//                       id="firstName"
//                       name="firstName"
//                       type="text"
//                       placeholder="First Name"
//                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                       value={userData.firstName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
//                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                       Last Name
//                     </label>
//                     <input
//                       id="lastName"
//                       name="lastName"
//                       type="text"
//                       placeholder="Last Name"
//                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                       value={userData.lastName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
//                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="Email"
//                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                       value={userData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="flex flex-col items-start mb-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
//                     <label className="text-[#F6AC14] font-bold text-left mb-1 text-sm md:text-base">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Password"
//                       className="w-full px-4 py-2 h-[40px] sm:h-[45px] md:h-[50px] rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                       value={userData.password}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="mt-5 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] tracking-wide font-semibold bg-[#0098F1] text-gray-100 py-3 rounded-lg hover:bg-[#007acc] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
//                   >
//                     <span className="ml-3">Send OTP</span>
//                   </button>
//                   {registrationStatus === 'failure' && registrationError && (
//                     <div className="mt-6 text-center text-red-500">{registrationError}</div>
//                   )}
//                 </form>
//                 {otpSent && (
//                   <div className="modal-content">
//                     <div className="mt-4">
//                       <p>Enter OTP:</p>
//                       {Array.from({ length: 6 }).map((_, index) => (
//                         <input
//                           key={index}
//                           type="text"
//                           maxLength="1"
//                           className="w-12 h-12 text-2xl border border-gray-300 rounded-md shadow-sm text-center"
//                           value={otp[index] || ''}
//                           onChange={(e) => handleOTPEnter(e, index)}
//                           ref={(el) => (inputRefs.current[index] = el)}
//                         />
//                       ))}
//                     </div>

//                     <button
//                       onClick={handleOtpVerification}
//                       className="w-full bg-blue-500 text-white p-2 mt-4 rounded"
//                     >
//                       Verify OTP & Register
//                     </button>
//                     {/* OTP verification error */}
//                     {error && <div className="mt-2 text-red-500">{error}</div>}
//                   </div>
//                 )}
//               </div>
//               <div className='flex pr-40 flex-col mt-4 items-center justify-center text-sm'>
//                 <h3>
//                   <span className='cursor-default dark:text-gray-300'>
//                     Have an account?
//                   </span>
//                   <a
//                     className='group text-blue-400 transition-all duration-100 ease-in-out'
//                     href='/Login'
//                   >
//                     <span className='bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
//                       Log In
//                     </span>
//                   </a>
//                 </h3>
//               </div>
//             </div>

//             <div className="flex-1  lg:mt-0 text-center hidden lg:flex">
//               <div
//                 className="w-[550px]  mt-80 h-[478px] bg-center bg-no-repeat right-24 mr-4"
//                 style={{
//                   backgroundImage:
//                     "url('https://s3-alpha-sig.figma.com/img/0ba4/acc9/22ae30233428f93ea97ee61bed1f1368?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCbWPiAaKxLjj3vrmZV1zupjmK~2HmElPQywLV9jfz5deFv6mRXEiuFp15TKa4Mlek3c3ctsL9pW~BTsISI5cgjmhN0oatAc3cXcSO5uvTEGxoIcGwbGyOGiTGP9IrnWiMBb~wAZq1P-NB9RsD0IRihA0tCkF~iasBUhxumSJ-QA5Ao0~BfPb8FUp2c2avzIAJO9VkWWStuIbp2C9-4y8t11E9QXJayELfz6MrQhaYdod3W~udjHAFqa-D5Rqp05p9ADjZgDH6FlQE-hTT6y5laBkhisUwEvttRx9cWT9dmBRKB350XtHYq3DsWWE6b0KrYvaBgUNRjLL6X6bT2A0g__')",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>

//   );
// }

// export default SignUp;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IMG from "../../assets/E- education logo .png";
import { register, verifyOtp, getUser } from "../../State/Auth/Action";
import Navbar from "../Navbar";
import BackgroundIMG from "../../../src/assetss/login/signupimg.jpg";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const registrationStatus = useSelector(
    (state) => state?.registration?.status
  );
  const registrationError = useSelector((state) => state?.registration?.error);
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

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(userData));
    setOtpSent(true);
  };

  const handleOTPEnter = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join("").slice(0, 6));

    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpVerification = async () => {
    dispatch(verifyOtp({ email: userData.email, otp }))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message || "OTP verification failed.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white w-full max-w-[1150px] shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Form Section */}
          <div className="p-12 w-full lg:w-1/2">
            <img
              src={IMG}
              alt="Logo"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] mb-0"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4">
              <span className="bg-gradient-to-r text-2xl sm:text-3xl md:text-4xl font-bold pb-2 from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
                Sign Up now
              </span>
            </h2>
            <p className="text-sm mb-6">Hi, Welcome 👋</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-sm font-bold text-[#F6AC14]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter here"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  value={userData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm font-bold text-[#F6AC14]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter here"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  value={userData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm font-bold text-[#F6AC14]  background: #FF9B26">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email id"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm font-bold text-[#F6AC14]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0098F1] text-white font-semibold rounded-md hover:bg-[#007acc] transition-all"
              >
                Send OTP
              </button>
              {registrationStatus === "failure" && registrationError && (
                <p className="text-red-500 text-center mt-4">
                  {registrationError}
                </p>
              )}
            </form>

            {/* OTP Verification */}
            {otpSent && (
              <div className="mt-6">
                <p>Enter OTP:</p>
                <div className="flex justify-center space-x-2 mt-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-xl text-center border border-gray-300 rounded"
                      value={otp[index] || ""}
                      onChange={(e) => handleOTPEnter(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
                </div>
                <button
                  onClick={handleOtpVerification}
                  className="w-full py-2 mt-4 bg-[#0098F1] text-white rounded-md"
                >
                  Verify OTP & Register
                </button>
                {error && (
                  <p className="text-red-500 text-center mt-2">{error}</p>
                )}
              </div>
            )}
          </div>

          {/* Image Section */}
          <div
            className="hidden lg:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundIMG})` }} // Local image reference
          ></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
