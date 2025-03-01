// import Navbar from "../Navbar";
// import Footer from "../Home/footer/Footer";
// import React, { useState, useEffect } from 'react';
// import { FaCamera } from "react-icons/fa";
// import { FaUserEdit } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios';
// function EditModal({ userData, onSave, onClose }) {
//   const [editedData, setEditedData] = useState(userData);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     onSave(editedData);
//   };
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white p-4 rounded shadow-lg w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
//         <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex gap-2">
//             <div className="w-1/2 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={editedData.firstName}
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={editedData.lastName}
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Bio</label>
//                 <textarea
//                   name="bio"
//                   value={editedData.bio}
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Date Of Birth</label>
//                 <input
//                   type="text"
//                   name="dateOfBirth" // Changed from DateOfBirth
//                   value={editedData.dateOfBirth} // Changed from DateOfBirth
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                   placeholder="year/month/date"
//                 />
//               </div>
//             </div>
//             <div className="w-1/2 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium">Gender</label>
//                 <input
//                   type="text"
//                   name="gender"
//                   value={editedData.gender}
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={editedData.location}
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phoneNumber" // Changed from mobileNumber
//                   value={editedData.phoneNumber} // Changed from mobileNumber
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={editedData.email}
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Website</label>
//                 <input
//                   type="text"
//                   name="website" // Changed from Website
//                   value={editedData.website} // Changed from Website
//                   onChange={handleInputChange}
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function UserProfile() {
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const { auth } = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   useEffect(() => {
//     if (auth.user) {
//       const { firstName, lastName, email, phoneNumber, location, bio, gender, dateOfBirth, website, profileImage, coverImage } = auth.user;
//       const fullName = `${firstName} ${lastName}`;
//       setFormData({
//         fullName,
//         firstName,
//         lastName,
//         bio: bio || '',
//         gender: gender || '',
//         email: email,
//         phoneNumber: phoneNumber || '',
//         location: location || '',
//         dateOfBirth: dateOfBirth || '',
//         website: website || '',
//         profileImage: profileImage || '',
//         coverImage: coverImage || ''
//       });
//     }
//   }, [auth]);
//   const handleEdit = () => {
//     setShowEditModal(true);
//   };
//   // const handleSave = async (editedData) => {
//   //   try {
//   //     const response = await axios.put(`http://localhost:8080/api/users/${auth.user.id}`, editedData, {
//   //       headers: {
//   //         Authorization: `Bearer ${jwt}`,
//   //       },
//   //     });
//   //     if (response.status === 200) {
//   //       setFormData(editedData);
//   //       dispatch({ type: 'UPDATE_USER', payload: editedData });
//   //     }
//   //   } catch (error) {
//   //     console.error('Error updating user data:', error);
//   //   }
//   //   setShowEditModal(false);
//   // };
//   const handleCloseModal = () => {
//     setShowEditModal(false);
//   };
//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const newImage = event.target.result;
//         setFormData((prevUserData) => ({
//           ...prevUserData,
//           profileImage: newImage,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleCoverImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const newImage = event.target.result;
//         setFormData((prevUserData) => ({
//           ...prevUserData,
//           coverImage: newImage,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="w-full p-2 border-2 shadow-lg overflow-hidden dark:bg-gray-900">
//         <div className="flex flex-col">
//           <FaCamera className="relative justify-end items-end" />
//           <label htmlFor="cover-image-input" className="cursor-pointer">
//             <img
//               src={formData.coverImage}
//               alt="User Cover"
//               onClick={() => document.getElementById('cover-image-input').click()}
//               className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
//             />
//           </label>
//           <input type="file" id="cover-image-input" className="hidden" onChange={handleCoverImageChange} accept="image/*" />
//           <div className="sm:w-[80%] xs:w-[90%] mx-auto flex ">
//             <label htmlFor="profile-image-input" className="cursor-pointer">
//               <img
//                 src={formData.profileImage}
//                 alt="User Profile"
//                 className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
//                 onClick={() => document.getElementById('profile-image-input').click()}
//               />
//             </label>
//             <input type="file" id="profile-image-input" className="hidden" onChange={handleProfileImageChange} accept="image/*" />
//             <div className="h-20 w-full bg-gray-300">
//               <h1 className="w-full  text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
//                 {formData.fullName}
//               </h1>
//             </div>
//           </div>
//           <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
//             <p className="w-fit text-gray-700 dark:text-gray-400 text-md">{formData.bio}</p>
//             <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
//               <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
//                 <div className="w-full">
//                   <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
//                     <div className="flex flex-col pb-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
//                       <dd className="text-lg font-semibold">{formData.firstName}</dd>
//                     </div>
//                     <div className="flex flex-col py-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
//                       <dd className="text-lg font-semibold">{formData.lastName}</dd>
//                     </div>
//                     <div className="flex flex-col py-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
//                       <dd className="text-lg font-semibold">{formData.dateOfBirth}</dd>
//                     </div>
//                     <div className="flex flex-col py-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
//                       <dd className="text-lg font-semibold">{formData.gender}</dd>
//                     </div>
//                   </dl>
//                 </div>
//                 <div className="w-full">
//                   <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
//                     <div className="flex flex-col pb-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
//                       <dd className="text-lg font-semibold">{formData.location}</dd>
//                     </div>
//                     <div className="flex flex-col pt-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
//                       <dd className="text-lg font-semibold">{formData.phoneNumber}</dd>
//                     </div>
//                     <div className="flex flex-col pt-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
//                       <dd className="text-lg font-semibold">{formData.email}</dd>
//                     </div>
//                     <div className="flex flex-col pt-3">
//                       <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</dt>
//                       <dd className="text-lg font-semibold">{formData.website}</dd>
//                     </div>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//             <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
//               <FaUserEdit className="inline-block mr-1" />
//               Edit Profile
//             </button>
//             {/* {showEditModal && <EditModal userData={formData} onSave={handleSave} onClose={handleCloseModal} />} */}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }
// export default UserProfile;

// import React, { useState, useEffect } from "react";
// import profilebg from "../../assetss/profile/profilebg.jpg";
// import dp from "../../assets/women2.png";
// import { FaRegEdit } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({});
//   const { auth } = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");

//   useEffect(() => {
//     if (auth.user) {
//       const {
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         location,
//         bio,
//         gender,
//         dateOfBirth,
//         website,
//         profileImage,
//         coverImage,
//       } = auth.user;
//       const fullName = `${firstName} ${lastName}`;
//       setFormData({
//         fullName,
//         firstName,
//         lastName,
//         bio: bio || "",
//         gender: gender || "",
//         email: email,
//         phoneNumber: phoneNumber || "",
//         location: location || "",
//         dateOfBirth: dateOfBirth || "",
//         website: website || "",
//         profileImage: profileImage || "",
//         coverImage: coverImage || "",
//       });
//     }
//   }, [auth]);
//   // const handleSave = async (editedData) => {
//   //   try {
//   //     const response = await axios.put(`http://localhost:8080/api/users/${auth.user.id}`, editedData, {
//   //       headers: {
//   //         Authorization: `Bearer ${jwt}`,
//   //       },
//   //     });
//   //     if (response.status === 200) {
//   //       setFormData(editedData);
//   //       dispatch({ type: 'UPDATE_USER', payload: editedData });
//   //     }
//   //   } catch (error) {
//   //     console.error('Error updating user data:', error);
//   //   }
//   //   setIsEditing(false);
//   // };

//   const handleSave = async (editedData) => {
//     console.log("Saving data:", editedData); // Log the data being sent
//     try {
//       const response = await axios.put(
//         `http://localhost:8080/api/users/${auth.user.id}`,
//         editedData,
//         {
//           headers: {
//             Authorization: `Bearer ${jwt}`,
//           },
//         }
//       );
//       console.log("Response:", response); // Log the response
//       if (response.status === 200) {
//         setFormData(editedData);
//         dispatch({ type: "UPDATE_USER", payload: editedData });
//       }
//     } catch (error) {
//       console.error("Error updating user data:", error);
//     }
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [id]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         profileImage: reader.result,
//       }));
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleBackgroundImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         backgroundImage: reader.result,
//       }));
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   // const handleSave = () => {
//   //   localStorage.setItem("userProfile", JSON.stringify(formData));
//   //   setIsEditing(false);
//   // };

//   return (
//     <div>
//       <div
//         style={{
//           backgroundImage: `url(${formData.backgroundImage})`,
//           position: "relative",
//         }}
//         className="bg-cover bg-center py-12 h-[320px] flex justify-center items-center relative"
//       >
//         {isEditing && (
//           <label
//             htmlFor="backgroundImage"
//             className="absolute top-2 right-2 cursor-pointer"
//           >
//             <FaRegEdit className="text-black text-xl" />
//             <input
//               type="file"
//               id="backgroundImage"
//               accept="image/*"
//               className="hidden"
//               onChange={handleBackgroundImageChange}
//             />
//           </label>
//         )}
//         {/* <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold text-black">User Profile</h1>
//         </div> */}
//       </div>
//       <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//         <div className="flex items-center mb-6 justify-start">
//           <label htmlFor="profileImage" className="cursor-pointer rounded-3xl">
//             <img
//               src={formData.profileImage}
//               alt="User profile picture"
//               className="w-24 h-24 rounded-3xl mr-4"
//             />
//             <input
//               type="file"
//               id="profileImage"
//               accept="image/*"
//               className="hidden rounded-3xl"
//               onChange={handleImageChange}
//             />
//           </label>
//           <h2 className="text-3xl font-bold text-[#0098f1]">
//             {formData.fullName}
//           </h2>
//         </div>
//         <div className="flex justify-center">
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="relative">
//               <label
//                 htmlFor="fullName"
//                 className="block text-sm text-[#f6ac14] mb-3 font-medium text-muted-foreground"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full  border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
//                 placeholder="Enter here"
//                 disabled={!isEditing}
//               />
//               {isEditing && (
//                 <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
//               )}
//             </div>
//             <div className="relative">
//               <label
//                 htmlFor="phoneNumber"
//                 className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="mt-1 w-80 block border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary  lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
//                 placeholder="Enter here"
//                 disabled={!isEditing}
//               />
//               {isEditing && (
//                 <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
//               )}
//             </div>
//             <div className="relative">
//               <label
//                 htmlFor="dateOfBirth"
//                 className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
//               >
//                 Date Of Birth
//               </label>
//               <input
//                 type="date"
//                 id="dateOfBirth"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
//                 placeholder="Enter here"
//                 disabled={!isEditing}
//               />
//               {isEditing && (
//                 <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
//               )}
//             </div>
//             <div className="relative">
//               <label
//                 htmlFor="email"
//                 className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
//               >
//                 E-mail ID
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-80 border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
//                 placeholder="Enter here"
//                 disabled={!isEditing}
//               />
//               {isEditing && (
//                 <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
//               )}
//             </div>
//             <div className="relative">
//               <label
//                 htmlFor="gender"
//                 className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
//               >
//                 Gender
//               </label>
//               <input
//                 type="text"
//                 id="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
//                 placeholder="Enter here"
//                 disabled={!isEditing}
//               />
//               {isEditing && (
//                 <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
//               )}
//             </div>
//             <div className="relative">
//               <label
//                 htmlFor="loaction"
//                 className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
//                 placeholder="Enter here"
//                 disabled={!isEditing}
//               />
//               {isEditing && (
//                 <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
//               )}
//             </div>
//             <div className="relative">
//               <label
//                 htmlFor="password"
//                 className="block text-sm mb-3  text-[#f6ac14] font-medium text-muted-foreground"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
//                 placeholder="Enter here"
//                 disabled={!isEditing}
//               />
//               {isEditing && (
//                 <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="relative lg:bottom-0 lg:right-32 m-5 justify-end items-end flex">
//           <div className="mt-6 w-40 h-12 text-center rounded-lg bg-blue-500 flex justify-center items-center">
//             {isEditing ? (
//               <button
//                 onClick={handleSave}
//                 className="px-4 text-white py-2 rounded-lg flex items-center text-center"
//               >
//                 <img
//                   aria-hidden="true"
//                   alt="save-icon"
//                   src="https://openui.fly.dev/openui/24x24.svg?text=💾"
//                   className="mr-2 "
//                 />{" "}
//                 Save
//               </button>
//             ) : (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="px-4 py-2 text-white rounded-lg flex items-center text-center"
//               >
//                 <img
//                   aria-hidden="true"
//                   alt="edit-icon"
//                   src="https://openui.fly.dev/openui/24x24.svg?text=✏️"
//                   className="mr-2 "
//                 />{" "}
//                 Edit profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import profilebg from "../../assetss/profile/profilebg.jpg";
import dp from "../../assets/women2.png";

import Navbar from "../Navbar";
import { API_BASE_URL } from "../../Config/api";


const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  console.log(auth + ": " + jwt);


  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/profile", {
  //         headers: {
  //           Authorization: `Bearer ${jwt}`,
  //         },
  //       });
  //       const user = response.data;
  //       const fullName = `${user.firstName} ${user.lastName}`;
  //       setFormData({
  //         fullName,
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         bio: user.bio || "",
  //         gender: user.gender || "",
  //         email: user.email,
  //         phoneNumber: user.phoneNumber || "",
  //         location: user.location || "",
  //         dateOfBirth: user.dateOfBirth || "",
  //         website: user.website || "",
  //         profileImage: user.profileImage || "",
  //         coverImage: user.coverImage || "",
  //       });
  //     } catch (error) {
  //       console.error("Error fetching user profile data:", error);
  //     }
  //   };

  //   fetchUserProfile();
  // }, [jwt]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        const user = response.data;
        const fullName = `${user.firstName} ${user.lastName}`;
        const profilePhotoResponse = await axios.get(`${API_BASE_URL}/api/users/${user.email}/profile-photo`, {
          responseType: 'arraybuffer',  // Ensures we get the binary data for the image
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        const profilePhotoBlob = new Blob([profilePhotoResponse.data], { type: 'image/jpeg' });
        const profilePhotoUrl = URL.createObjectURL(profilePhotoBlob);
        setFormData({
          fullName,
          firstName: user.firstName,
          lastName: user.lastName,
          bio: user.bio || "",
          gender: user.gender || "",
          email: user.email,
          phoneNumber: user.phoneNumber || "",
          location: user.location || "",
          dateOfBirth: user.dateOfBirth || "",
          website: user.website || "",
          profilePhoto: profilePhotoUrl,
          coverImage: user.coverImage || "",
        });
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, [jwt])

  const handleSave = async () => {
    console.log("Saving data:", formData); // Log the data being sent
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/users/${auth.user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("Response:", response); // Log the response
      if (response.status === 200) {
        dispatch({ type: "UPDATE_USER", payload: formData });
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (!file) return; // If no file is selected, do nothing
  
    const formData = new FormData(); // Create a FormData object to send the file
    formData.append('file', file); // Append the selected file to the FormData
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/${auth.user.email}/profile-photo`, // URL for profile photo update
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'multipart/form-data', // Required for file upload
          },
        }
      );
      
      if (response.status === 200) {
        // Update the form data to reflect the new profile photo
        setFormData((prevFormData) => ({
          ...prevFormData,
          profilePhoto: URL.createObjectURL(file), // Use the uploaded image immediately
        }));
        console.log('Profile photo updated successfully');
      }
    } catch (error) {
      console.error('Error uploading profile photo:', error);
    }
  };
  
  

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        coverImage: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>

      <Navbar />

      <div
        style={{
          backgroundImage: `url(${formData.coverImage || profilebg})`,
          position: "relative",
        }}
        className="bg-cover bg-center py-12 h-[320px] flex justify-center items-center relative"
      >
        {isEditing && (
          <label
            htmlFor="coverImage"
            className="absolute top-2 right-2 cursor-pointer"
          >
            <FaRegEdit className="text-black text-xl" />
            <input
              type="file"
              id="coverImage"
              accept="image/*"
              className="hidden"
              onChange={handleBackgroundImageChange}
            />
          </label>
        )}
      </div>
      <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-6 justify-start">
        <label htmlFor="profilePhoto" className="cursor-pointer rounded-3xl">
  <img
    src={formData.profilePhoto || dp} // Display the current profile photo or default
    alt="User profile picture"
    className="w-24 h-24 rounded-3xl mr-4"
  />

  {/* Hidden input field to select file */}
  <input
    type="file"
    id="profilePhoto"
    accept="image/*"
    className="hidden" // Make the input field hidden
    onChange={handleImageChange} // Handle the file change event
  />
</label>

          <h2 className="text-3xl font-bold text-[#0098f1]">
            {formData.fullName}
          </h2>
        </div>
        <div className="flex justify-center">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label
                htmlFor="fullName"
                className="block text-sm text-[#f6ac14] mb-3 font-medium text-muted-foreground"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full  border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 w-80 block border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary  lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                Date Of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                E-mail ID
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-80 border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="gender"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="loaction"
                className="block text-sm mb-3 text-[#f6ac14] font-medium text-muted-foreground"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm mb-3  text-[#f6ac14] font-medium text-muted-foreground"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 rounded-md shadow-sm p-4 focus:ring-primary focus:border-primary lg:w-[445px] lg:h-[47px] md:w-[250px] md:h-[25px]"
                placeholder="Enter here"
                disabled={!isEditing}
              />
              {isEditing && (
                <FaRegEdit className="absolute top-1 right-1 text-yellow-400 cursor-pointer" />
              )}
            </div>
          </form>
        </div>
        <div className="relative lg:bottom-0 lg:right-32 m-5 justify-end items-end flex">
          <div className="mt-6 w-40 h-12 text-center rounded-lg bg-blue-500 flex justify-center items-center">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 text-white py-2 rounded-lg flex items-center text-center"
              >
                <img
                  aria-hidden="true"
                  alt="save-icon"
                  src="https://openui.fly.dev/openui/24x24.svg?text=💾"
                  className="mr-2 "
                />{" "}
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-white rounded-lg flex items-center text-center"
              >
                <img
                  aria-hidden="true"
                  alt="edit-icon"
                  src="https://openui.fly.dev/openui/24x24.svg?text=✏️"
                  className="mr-2 "
                />{" "}
                Edit profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
