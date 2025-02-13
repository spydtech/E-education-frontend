import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoClose } from "react-icons/io5"; // Import the close icon

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

const API_URL = "http://localhost:8080/auth/employee/register";
const RegisterEmployee = () => {
  const [employeeId, setEmployee] = useState(null);
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

  // const handleAddEmployee = () => {
  //   if (!validateInputs()) return;

  //   const username = generateUsername();
  //   const password = generatePassword();
  //   setEmployee({ username, password });

  //   // Clear fields
  //   setFirstName("");
  //   setLastName("");
  //   setMobileNumber("");
  //   setEmail("");

  //   // Show success message
  //   setShowSuccess(true);
  // };

  const handleAddEmployee = async () => {
    if (!validateInputs()) return;

    const employeeId = generateUsername(); // Generate the username and use it as userId
    const password = generatePassword(); // Generate the password
    const newEmployee = {
      firstName,
      lastName,
      phoneNumber,
      email,
      employeeId,
      password,
    }; // Include userId

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
    });
    

      if (response.ok) {
        setEmployee({ employeeId, password }); // Save the generated credentials
        setShowSuccess(true);

        // Clear inputs
        setFirstName("");
        setLastName("");
        setMobileNumber("");
        setEmail("");
      } else {
        const errorResponse = await response.json();
        console.error("Failed to register employee:", errorResponse);
        alert(
          errorResponse.message ||
            "Failed to register employee. Please try again."
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
            onClick={handleAddEmployee}
            className="bg-[#FF9B26]  text-white font-bold py-2 w-full  rounded focus:outline-none"
          >
            Generate Credentials
          </button>
        </div>
            </div>
        </div>

        {employeeId && showSuccess && (
          <div className="absolute inset-0 bg-[#001510] w-full h-full bg-opacity-10 flex justify-center items-center rounded-lg">
            <div className="bg-white border-[#001510] border-2 w-80 sm:w-96 py-8 px-4 rounded-lg text-[#001510] flex flex-col justify-center items-center relative">
              <IoClose
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={handleCloseSuccess}
              />
              <BsCheck2Circle className="text-4xl mb-4" />
              <h2 className="text-2xl font-medium mb-4">
                Generated Credentials
              </h2>
              <ul>
                <li className="mb-3">
                  <p>
                    <strong>Username:</strong> {employeeId.employeeId}
                  </p>
                  <p>
                    <strong>Password:</strong> {employeeId.password}
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

export default RegisterEmployee;

// import React, { useState } from "react";
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

// const RegisterEmployee = () => {
//   const [employee, setEmployee] = useState(null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleAddEmployee = () => {
//     const username = generateUsername();
//     const password = generatePassword();
//     setEmployee({ username, password });

//     // Clear fields
//     setFirstName("");
//     setLastName("");
//     setMobileNumber("");
//     setEmail("");

//     // Show success message
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
//           <h2 className="text-2xl font-bold text-white">Register Employee</h2>
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
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
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

// export default RegisterEmployee;
