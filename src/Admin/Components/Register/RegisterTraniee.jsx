// import React, { useState } from "react";
// import axios from "axios";
// import { BsCheck2Circle } from "react-icons/bs";
// import { IoClose } from "react-icons/io5"; // Import the close icon

// function generateUsername() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

// function generatePassword(length = 12) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     password += characters[randomIndex];
//   }
//   return password;
// }

// const RegisterTrainee = () => {
//   const [employee, setEmployee] = useState(null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleAddEmployee = async () => {
//     const username = generateUsername();
//     const password = generatePassword();
//     setEmployee({ username, password });

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/trainee/register",
//         {
//           userId: username,
//           password: password,
//           firstName,
//           lastName,
//           email,
//           phoneNumber,
//         }
//       );

//       if (response.status === 200) {
//         setEmployee(response.data);
//         setFirstName("");
//         setLastName("");
//         setPhoneNumber("");
//         setEmail("");
//         setError("");
//         alert("Registered Successfully");
//       }
//     } catch (error) {
//       setError("Registration failed. Please try again.");
//       console.error("Error registering trainee:", error);
//     }
//     setShowSuccess(true);
//   };

//   const handleCloseSuccess = () => {
//     setShowSuccess(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen shadow-lg">
//       <div
//         id="main"
//         className="bg-white rounded-lg shadow-lg w-[700px] h-[400px] relative"
//       >
//         <div className="w-auto h-[100px] bg-[#0098f1] rounded-t-lg flex justify-center items-center">
//           <h2 className="text-2xl font-bold text-white">Register Trainee</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10">
//           <div className="col-span-1">
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="shadow appearance-none border rounded w-[300px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none border-[#0098f1] focus:shadow-outline mb-3"
//             />
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="shadow appearance-none border rounded w-[300px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none border-[#0098f1] focus:shadow-outline mb-3"
//             />
//           </div>
//           <div className="col-span-1">
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="shadow appearance-none border rounded w-[300px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none border-[#0098f1] focus:shadow-outline mb-3"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-[300px] h-[60px] py-2 px-3 text-gray-700 leading-tight focus:outline-none border-[#0098f1] focus:shadow-outline mb-3"
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             onClick={handleAddEmployee}
//             className="bg-[#0098f1] w-[300px] h-[60px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Generate Credentials
//           </button>
//         </div>

//         {employee && showSuccess && (
//           <div className="absolute inset-0 bg-[#0098f1] w-[700px] h-[400px] bg-opacity-10 flex justify-center items-center rounded-lg">
//             <div className="bg-[#ffffff] border-[#0098f1] border-2 w-[320px] h-[240px] sm:w-[440px] sm:h-[320px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg text-white flex flex-col justify-center items-center relative">
//               <IoClose
//                 className="absolute top-2 right-2 text-2xl text-[#0098f1] cursor-pointer"
//                 onClick={handleCloseSuccess}
//               />
//               <BsCheck2Circle className="text-3xl text-[#0098f1] sm:text-4xl md:text-6xl mb-4" />
//               <h2 className="text-2xl text-[#f6ac14] font-medium mb-4">
//                 Generated Credentials
//               </h2>
//               <ul>
//                 <li className="mb-3 text-[#f6ac14]">
//                   <p>
//                     <strong>Username:</strong> {employee.username}
//                   </p>
//                   <p>
//                     <strong>Password:</strong> {employee.password}
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RegisterTrainee;

// import React, { useState } from "react";
// import axios from "axios";
// import { BsCheck2Circle } from "react-icons/bs";
// import { IoClose } from "react-icons/io5"; // Import the close icon

// function generateUsername() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

// function generatePassword(length = 12) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     password += characters[randomIndex];
//   }
//   return password;
// }

// const RegisterTrainee = () => {
//   const [employee, setEmployee] = useState(null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);

//   // Validation states
//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const validateInputs = () => {
//     let isValid = true;
//     setFirstNameError("");
//     setLastNameError("");
//     setPhoneNumberError("");
//     setEmailError("");

//     // First name validation
//     if (!/^[A-Za-z]+$/.test(firstName)) {
//       setFirstNameError("First name can only contain letters.");
//       isValid = false;
//     }

//     // Last name validation
//     if (!/^[A-Za-z]+$/.test(lastName)) {
//       setLastNameError("Last name can only contain letters.");
//       isValid = false;
//     }

//     // Phone number validation (must be 10 digits)
//     if (!/^\d{10}$/.test(phoneNumber)) {
//       setPhoneNumberError("Phone number must be exactly 10 digits.");
//       isValid = false;
//     }

//     // Email validation
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setEmailError("Please enter a valid email address.");
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleAddEmployee = async () => {
//     const username = generateUsername();
//     const password = generatePassword();
//     setEmployee({ username, password });

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/trainee/register",
//         {
//           userId: username,
//           password: password,
//           firstName,
//           lastName,
//           email,
//           phoneNumber,
//         }
//       );

//       if (response.status === 200) {
//         setEmployee(response.data);
//         setFirstName("");
//         setLastName("");
//         setPhoneNumber("");
//         setEmail("");
//         setError("");
//         alert("Registered Successfully");
//       }
//     } catch (error) {
//       setError("Registration failed. Please try again.");
//       console.error("Error registering trainee:", error);
//     }
//     setShowSuccess(true);
//   };

//   const handleCloseSuccess = () => {
//     setShowSuccess(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-100">
//       <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">
//           Register Trainee
//         </h2>
//         <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
//             />
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               onClick={handleAddEmployee}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Generate Credentials
//             </button>
//           </div>
//         </div>
//         {employee && (
//           <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8">
//             <h2 className="text-2xl font-bold mb-4">Generated Credentials</h2>
//             <ul>
//               <li className="mb-2">
//                 <p>
//                   <strong>Username:</strong> {employee.username}
//                 </p>
//                 <p>
//                   <strong>Password:</strong> {employee.password}
//                 </p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RegisterTrainee;


import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoClose } from "react-icons/io5"; // Close icon
import img1 from "../../../assetss/AccessFields/trainer.png"
import { API_BASE_URL } from "../../../Config/api";

// Utility functions
function generateUsername() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generatePassword(length = 12) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Main Component
const RegisterTrainee = () => {
  const [trainee, setTrainee] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Validation states
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setMobileNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Backend API URL
  const API_URL = `${API_BASE_URL}/trainee/register`;

  const validateInputs = () => {
    let isValid = true;
    setFirstNameError("");
    setLastNameError("");
    setMobileNumberError("");
    setEmailError("");

    // First name validation
    if (!/^[A-Za-z]+$/.test(firstName)) {
      setFirstNameError("First name can only contain letters.");
      isValid = false;
    }

    // Last name validation
    if (!/^[A-Za-z]+$/.test(lastName)) {
      setLastNameError("Last name can only contain letters.");
      isValid = false;
    }

    // Mobile number validation (must be 10 digits)
    if (!/^\d{10}$/.test(phoneNumber)) {
      setMobileNumberError("Mobile number must be exactly 10 digits.");
      isValid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    return isValid;
  };

  const handleAddTrainee = async () => {
    if (!validateInputs()) return;

    const userId = generateUsername(); // Generate the username and use it as userId
    const password = generatePassword(); // Generate the password
    const newTrainee = {
      firstName,
      lastName,
      phoneNumber,
      email,
      userId,
      password,
    }; // Include userId

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrainee),
      });

      if (response.ok) {
        setTrainee({ userId, password }); // Save the generated credentials
        setShowSuccess(true);

        // Clear inputs
        setFirstName("");
        setLastName("");
        setMobileNumber("");
        setEmail("");
      } else {
        const errorResponse = await response.json();
        console.error("Failed to register trainee:", errorResponse);
        alert(
          errorResponse.message ||
            "Failed to register trainee. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while registering the trainee. Please try again later."
      );
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className=" justify-center  items-center min-h-screen mx-auto p-5 font-poppins">
      <div className="    w-[350px]    "
      >
       

        {/* Form Inputs */}
        <div className="  ">
          <div className=" flex flex-col  text-sm">
            <label className="text-[#989898] text-sm">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow  border rounded w-auto placeholder border-[#989898]  text-[#989898] focus:inline-none focus:shadow-inline "
            />
            {firstNameError && (
              <p className="text-red-500 text-sm">{firstNameError}</p>
            )}
           
         

         <label className="text-[#989898] text-sm">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-auto text-[#989898] focus:outline-none focus:shadow-outline "
            />
            {lastNameError && (
              <p className="text-red-500 text-sm">{lastNameError}</p>
            )}
        <label className="text-[#989898] text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-auto  text-[#989898] focus:outline-none focus:shadow-outline"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <label className="text-[#989898] text-sm">phone Number</label>
            <input
              type="number"
              placeholder="phone Number "
              value={phoneNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="shadow appearance-none border rounded w-auto text-[#989898] focus:outline-none focus:shadow-outline "
            />
            {phoneNumberError && (
              <p className="text-red-500 text-sm">{phoneNumberError}</p>
            )}
            <div className="flex  w-full pt-2">
          <button
            onClick={handleAddTrainee}
            className="bg-[#FF9B26]  text-white font-bold py-2 w-full  rounded focus:outline-none"
          >
            Generate Credentials
          </button>
        </div>
            </div>
        </div>

        {/* Submit Button */}
       

        {/* Success Modal */}
        {trainee && showSuccess && (
          <div className="absolute inset-0 bg-[#001510] bg-opacity-10 flex justify-center items-center rounded-lg">
            <div className="bg-white border-[#001510] border-2 w-[320px] sm:w-[440px] py-8 px-4 rounded-lg relative">
              <IoClose
                className="absolute top-2 right-2 text-2xl text-gray-700 cursor-pointer"
                onClick={handleCloseSuccess}
              />
              <BsCheck2Circle className="text-4xl text-[#001510] mb-4" />
              <h2 className="text-2xl text-[#001510] font-medium mb-4">
                Generated Credentials
              </h2>
              <ul>
                <li className="mb-2">
                  <p>
                    <strong>Username (UserId):</strong> {trainee.userId}
                  </p>
                  <p>
                    <strong>Password:</strong> {trainee.password}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterTrainee;
