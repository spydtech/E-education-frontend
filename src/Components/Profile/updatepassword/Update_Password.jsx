// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../../../Config/api";
// import { useSelector } from "react-redux";

// const UpdatePassword = () => {
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const { auth } = useSelector((state) => state);
//   const jwt = localStorage.getItem("jwt");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       setMessage("New passwords do not match");
//       return;
//     }

//     try {
//       // Replace with your API endpoint
//       const email = auth.user.email; // You should get the user's email dynamically
//       const response = await axios.put(
//         `http://localhost:8080/api/users/password/${email}`,
//         {
//           oldPassword,
//           newPassword,
//           confirmPassword,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt}`, // Pass the JWT token in the Authorization header
//           },
//         }
//       );
//       if (response.data === "password updated successfully") {
//         alert(response.data);
//         setMessage("");
//       } else {
//         setMessage(response.data);
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setMessage(
//           "Error updating password: " + JSON.stringify(error.response.data)
//         );
//       } else {
//         setMessage("Error updating password: " + error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-auto lg:min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 lg:p-8 space-y-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-800">
//           Update Password
//         </h2>
//         {message && (
//           <p className="text-center text-red-500 font-medium">{message}</p>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-black">
//               Current Password
//             </label>
//             <input
//               type="password"
//               value={oldPassword}
//               onChange={(e) => setOldPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-black">
//               New Password
//             </label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-black">
//               Confirm New Password
//             </label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
//           >
//             Update Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdatePassword;
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FiEye, FiEyeOff } from "react-icons/fi";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { auth } = useSelector((state) => state);
  const jwt = localStorage.getItem("jwt");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }

    try {
      const email = auth.user.email; // Get the user's email dynamically
      const response = await axios.put(
        `http://localhost:8080/api/users/password/${email}`,
        {
          oldPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`, // Pass the JWT token in the Authorization header
          },
        }
      );
      if (response.data === "password updated successfully") {
        alert(response.data);
        setMessage("");
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(
          "Error updating password: " + JSON.stringify(error.response.data)
        );
      } else {
        setMessage("Error updating password: " + error.message);
      }
    }
  };

  const passwordMatchMessage = () => {
    if (newPassword && confirmPassword) {
      return newPassword === confirmPassword ? (
        <p className="text-green-600 text-sm">Passwords match</p>
      ) : (
        <p className="text-red-600 text-sm">Passwords do not match</p>
      );
    }
    return null;
  };

  return (
    <div className="">
      <div className=" relative ">
        <img
          src="https://img.freepik.com/free-photo/member-log-membership-username-password-concept_53876-120613.jpg?t=st=1735891140~exp=1735894740~hmac=b71ee8b1778cc1507a110b4dc633fc6b8f1224f1bdff6ffba3f2ac9f59905539&w=826"
          className="w-full h-80 object-cover "
        />
        <div className="absolute inset-0 bg-[#FF9B2659] opacity-35"></div>
      </div>

      <div className="w-full justify-center flex max-w-5xl    ">
        <div className="w-full ">
          {/* <h2 className="text-2xl font-semibold text-center text-gray-800">
            Update Password
          </h2> */}
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold"> Update Password</h3>
          </div>
          {message && (
            <p className="text-center text-red-500 font-medium">{message}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-black">
                Current Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute top-9 right-3 text-gray-600"
              >
                {showOldPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-black">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute top-9 right-3 text-gray-600"
              >
                {showNewPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-black">
                Confirm New Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-9 right-3 text-gray-600"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
              {passwordMatchMessage()}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-bold text-white bg-[#0098f1] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
