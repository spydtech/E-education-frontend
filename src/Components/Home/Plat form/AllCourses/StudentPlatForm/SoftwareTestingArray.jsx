// // import React, { useEffect, useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import FooterPart from "../../../footer/Footer";
// // import Navbar from "../../../../Navbar";
// // import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// // import { MdArrowOutward } from "react-icons/md";
// // import cardImage from "../../../../../assets/cardImage.png";

// // const SoftwareTestingArray = () => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   // Card Data
// //   const softwareTestingArray = [
// //     {
// //       id: 1,
// //       title: "Unit Testing",
// //       description: "Testing individual components in isolation.",
// //       link: "/software-testing/unit-testing",
// //       image: cardImage,
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 2,
// //       image: cardImage,
// //       title: "Integration Testing",
// //       description: "Testing software components together.",
// //       link: "/software-testing/intigration-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 3,
// //       image: cardImage,
// //       title: "System Testing",
// //       description: "Testing the complete integrated software.",
// //       link: "/software-testing/system-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 4,
// //       image: cardImage,
// //       title: "Acceptance Testing",
// //       description: "Testing if software meets user needs.",

// //       link: "/software-testing/acceptance-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 5,
// //       image: cardImage,
// //       title: "Performance Testing",
// //       description: "Testing speed and stability.",
// //       link: "/software-testing/performance-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 6,
// //       image: cardImage,
// //       title: "Security Testing",
// //       description: "Testing for vulnerabilities.",
// //       link: "/software-testing/security-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 7,
// //       image: cardImage,
// //       title: "Usability Testing",
// //       description: "Testing user-friendliness.",
// //       link: "/software-testing/usability-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 8,
// //       image: cardImage,
// //       title: "Compatibility Testing",
// //       description: "Testing across different environments.",
// //       link: "/software-testing/compatability-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 9,
// //       image: cardImage,
// //       title: "Regression Testing",
// //       description: "Testing recent changes for new issues.",
// //       link: "/software-testing/regression-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 10,
// //       image: cardImage,
// //       title: "Stress Testing",
// //       description: "Testing under extreme conditions.",
// //       link: "/software-testing/stress-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 11,
// //       image: cardImage,
// //       title: "Manual Testing",
// //       description: "Testing done manually by testers.",
// //       link: "/software-testing/manual-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //     {
// //       id: 12,
// //       image: cardImage,
// //       title: "Automated Testing",
// //       description: "Testing using automation tools.",
// //       link: "/software-testing/automation-testing",
// //       profilePic:
// //         Girl2,
// //       name: "Jane Smith",
// //       rating: 4.3, // Add dummy rating
// //       price: "$29.99", // Add dummy price
// //     },
// //   ];

// //   const renderStars = (rating) => {
// //     const stars = [];
// //     for (let i = 1; i <= 5; i++) {
// //       if (rating >= i) {
// //         stars.push(<FaStar key={i} className="text-yellow-400" />);
// //       } else if (rating >= i - 0.5) {
// //         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// //       } else {
// //         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// //       }
// //     }
// //     return stars;
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="bg-gray-100 min-h-screen pb-10">
// //         <div className="container mx-auto px-4 pt-8">
// //           <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Software Testing Courses</h1>
// //           <div className="mb-10 flex justify-center">
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //             {softwareTestingArray
// //               .filter((item) =>
// //                 item.title.toLowerCase().includes(searchQuery.toLowerCase())
// //               )
// //               .map((item) => (
// //                 <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
// //                   <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
// //                   <div className="p-6">
// //                     <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
// //                     <p className="text-gray-600 mb-4">{item.description}</p>
// //                     <div className="flex items-center mb-4">
// //                       <img src={item.profilePic} alt={item.name} className="w-10 h-10 rounded-full mr-3" />
// //                       <div>
// //                         <p className="text-gray-700 font-semibold">{item.name}</p>
// //                         <div className="flex text-yellow-400">{renderStars(item.rating)}</div>
// //                       </div>
// //                     </div>
// //                     <p className="text-lg font-bold text-gray-900 mb-4">{item.price}</p>
// //                     <Link
// //                       to={item.link}
// //                       className="flex items-center justify-between text-blue-500 hover:text-blue-600 font-semibold"
// //                     >
// //                       <span>Learn More</span>
// //                       <MdArrowOutward className="text-xl" />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               )}
// //           </div>
// //         </div>
// //         <FooterPart />
// //       </div>
// //     </>
// //   );
// // };

// // export default SoftwareTestingArray;

// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import FooterPart from "../../../footer/Footer";
// import Navbar from "../../../../Navbar";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";
// import cardImage from "../../../../../assets/cardImage.png";

// const SoftwareTestingArray = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Card Data
//   const softwareTestingArray = [
//     {
//       id: 1,
//       title: "Unit Testing",
//       description: "Testing individual components in isolation.",
//       link: "/software-testing/unit-testing",
//       image: cardImage,
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 2,
//       image: cardImage,
//       title: "Integration Testing",
//       description: "Testing software components together.",
//       link: "/software-testing/intigration-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 3,
//       image: cardImage,
//       title: "System Testing",
//       description: "Testing the complete integrated software.",
//       link: "/software-testing/system-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 4,
//       image: cardImage,
//       title: "Acceptance Testing",
//       description: "Testing if software meets user needs.",

//       link: "/software-testing/acceptance-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 5,
//       image: cardImage,
//       title: "Performance Testing",
//       description: "Testing speed and stability.",
//       link: "/software-testing/performance-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 6,
//       image: cardImage,
//       title: "Security Testing",
//       description: "Testing for vulnerabilities.",
//       link: "/software-testing/security-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 7,
//       image: cardImage,
//       title: "Usability Testing",
//       description: "Testing user-friendliness.",
//       link: "/software-testing/usability-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 8,
//       image: cardImage,
//       title: "Compatibility Testing",
//       description: "Testing across different environments.",
//       link: "/software-testing/compatability-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 9,
//       image: cardImage,
//       title: "Regression Testing",
//       description: "Testing recent changes for new issues.",
//       link: "/software-testing/regression-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 10,
//       image: cardImage,
//       title: "Stress Testing",
//       description: "Testing under extreme conditions.",
//       link: "/software-testing/stress-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 11,
//       image: cardImage,
//       title: "Manual Testing",
//       description: "Testing done manually by testers.",
//       link: "/software-testing/manual-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 12,
//       image: cardImage,
//       title: "Automated Testing",
//       description: "Testing using automation tools.",
//       link: "/software-testing/automation-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//   ];

//   const renderStarRating = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
//     }
//     if (hasHalfStar) {
//       stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
//     }
//     while (stars.length < 5) {
//       stars.push(
//         <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />
//       );
//     }

//     return <div className="flex">{stars}</div>;
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen ">
//       <Navbar />
//       <img
//         src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1671979702.1717669022&semt=sph"
//         className="object-cover w-full md:h-[490px]"
//         alt="Background Image"
//       />
//       <div className="px-20">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex items-center justify-center mb-4">
//             <span className="bg-gradient-to-r text-4xl font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
//               Software Testing Courses
//             </span>
//           </div>
//           <div className="mb-4 flex justify-end ">
//             <input
//               type="text"
//               placeholder="Search by course name ......"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="px-4 py-2 border border-blue-600 rounded placeholder-blue-500"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {softwareTestingArray
//               .filter((course) =>
//                 course.title.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((course) => (
//                 <div
//                   key={course.id}
//                   className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-32 object-cover rounded-md mb-4"
//                   />
//                   <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
//                   <p className="text-gray-600 mb-2">{course.description}</p>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center text-gray-900">
//                       <span className="mr-2 font-bold">{course.rating}</span>
//                       {renderStarRating(course.rating)}
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center">
//                       <img
//                         src={course.profilePic}
//                         alt={course.name}
//                         className="w-8 h-8 rounded-full mr-2"
//                       />
//                       <div>
//                         <span className="text-gray-700 font-bold">
//                           {course.name}
//                         </span>
//                         <p className="text-gray-500 text-xs">2001 Enrolled</p>
//                       </div>
//                     </div>
//                     <span className="text-gray-900 font-bold">
//                       {course.price}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//       <div>
//         <FooterPart />
//       </div>
//     </div>
//   );
// };

// export default SoftwareTestingArray;
// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import FooterPart from "../../../footer/Footer";
// import Navbar from "../../../../Navbar";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";
// import cardImage from "../../../../../assets/cardImage.png";

// const SoftwareTestingArray = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Card Data
//   const softwareTestingArray = [
//     {
//       id: 1,
//       title: "Unit Testing",
//       description: "Testing individual components in isolation.",
//       link: "/software-testing/unit-testing",
//       image: cardImage,
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 2,
//       image: cardImage,
//       title: "Integration Testing",
//       description: "Testing software components together.",
//       link: "/software-testing/intigration-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 3,
//       image: cardImage,
//       title: "System Testing",
//       description: "Testing the complete integrated software.",
//       link: "/software-testing/system-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 4,
//       image: cardImage,
//       title: "Acceptance Testing",
//       description: "Testing if software meets user needs.",

//       link: "/software-testing/acceptance-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 5,
//       image: cardImage,
//       title: "Performance Testing",
//       description: "Testing speed and stability.",
//       link: "/software-testing/performance-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 6,
//       image: cardImage,
//       title: "Security Testing",
//       description: "Testing for vulnerabilities.",
//       link: "/software-testing/security-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 7,
//       image: cardImage,
//       title: "Usability Testing",
//       description: "Testing user-friendliness.",
//       link: "/software-testing/usability-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 8,
//       image: cardImage,
//       title: "Compatibility Testing",
//       description: "Testing across different environments.",
//       link: "/software-testing/compatability-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 9,
//       image: cardImage,
//       title: "Regression Testing",
//       description: "Testing recent changes for new issues.",
//       link: "/software-testing/regression-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 10,
//       image: cardImage,
//       title: "Stress Testing",
//       description: "Testing under extreme conditions.",
//       link: "/software-testing/stress-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 11,
//       image: cardImage,
//       title: "Manual Testing",
//       description: "Testing done manually by testers.",
//       link: "/software-testing/manual-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//     {
//       id: 12,
//       image: cardImage,
//       title: "Automated Testing",
//       description: "Testing using automation tools.",
//       link: "/software-testing/automation-testing",
//       profilePic:
//         Girl2,
//       name: "Jane Smith",
//       rating: 4.3, // Add dummy rating
//       price: "$29.99", // Add dummy price
//     },
//   ];

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (rating >= i) {
//         stars.push(<FaStar key={i} className="text-yellow-400" />);
//       } else if (rating >= i - 0.5) {
//         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-100 min-h-screen pb-10">
//         <div className="container mx-auto px-4 pt-8">
//           <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Software Testing Courses</h1>
//           <div className="mb-10 flex justify-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {softwareTestingArray
//               .filter((item) =>
//                 item.title.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((item) => (
//                 <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
//                   <div className="p-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
//                     <p className="text-gray-600 mb-4">{item.description}</p>
//                     <div className="flex items-center mb-4">
//                       <img src={item.profilePic} alt={item.name} className="w-10 h-10 rounded-full mr-3" />
//                       <div>
//                         <p className="text-gray-700 font-semibold">{item.name}</p>
//                         <div className="flex text-yellow-400">{renderStars(item.rating)}</div>
//                       </div>
//                     </div>
//                     <p className="text-lg font-bold text-gray-900 mb-4">{item.price}</p>
//                     <Link
//                       to={item.link}
//                       className="flex items-center justify-between text-blue-500 hover:text-blue-600 font-semibold"
//                     >
//                       <span>Learn More</span>
//                       <MdArrowOutward className="text-xl" />
//                     </Link>
//                   </div>
//                 </div>
//               )}
//           </div>
//         </div>
//         <FooterPart />
//       </div>
//     </>
//   );
// };

// export default SoftwareTestingArray;

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FooterPart from "../../../footer/Footer";
import Navbar from "../../../../Navbar";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import cardImage from "../../../../../assets/cardImage.png";
import Girl2 from "../../../../../assetss/profile/girl2.png";

const SoftwareTestingArray = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Card Data
  const softwareTestingArray = [
    {
      id: 1,
      title: "Unit Testing",
      description: "Testing individual components in isolation.",
      link: "/software-testing/unit-testing",
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726657254/image_daa9b7.png",
      profilePic: Girl2,
      name: "Anjali Sharma",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1200, // Add dummy enrolled number
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726657258/image_1_yslvgz.png",
      title: "Integration Testing",
      description: "Testing software components together.",
      link: "/software-testing/integration-testing",
      profilePic: Girl2,
      name: "Ravi Mehta",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1500, // Add dummy enrolled number
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726657263/image_2_jn8sm5.png",
      title: "System Testing",
      description: "Testing the complete integrated software.",
      link: "/software-testing/system-testing",
      profilePic: Girl2,
      name: "Neha Verma",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1300, // Add dummy enrolled number
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726658495/image_3_sxipex.png",
      title: "Acceptance Testing",
      description: "Testing if software meets user needs.",
      link: "/software-testing/acceptance-testing",
      profilePic: Girl2,
      name: "Arjun Gupta",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1400, // Add dummy enrolled number
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726658501/image_4_tmsbbg.png",
      title: "Performance Testing",
      description: "Testing speed and stability.",
      link: "/software-testing/performance-testing",
      profilePic: Girl2,
      name: "Pooja Nair",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1600, // Add dummy enrolled number
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726658509/image_5_ojh05n.png",
      title: "Security Testing",
      description: "Testing for vulnerabilities.",
      link: "/software-testing/security-testing",
      profilePic: Girl2,
      name: "Vikram Singh",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1800, // Add dummy enrolled number
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726658513/image_6_jiwvdm.png",
      title: "Usability Testing",
      description: "Testing user-friendliness.",
      link: "/software-testing/usability-testing",
      profilePic: Girl2,
      name: "Priya Iyer",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1700, // Add dummy enrolled number
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726658519/image_7_w4eh1o.png",
      title: "Compatibility Testing",
      description: "Testing across different environments.",
      link: "/software-testing/compatibility-testing",
      profilePic: Girl2,
      name: "Amit Desai",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1600, // Add dummy enrolled number
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726658531/image_9_ricc7a.png",
      title: "Regression Testing",
      description: "Testing recent changes for new issues.",
      link: "/software-testing/regression-testing",
      profilePic: Girl2,
      name: "Kavita Rao",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1400, // Add dummy enrolled number
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dfftgkkev/image/upload/v1726658524/image_8_zuhlts.png",
      title: "Stress Testing",
      description: "Testing under extreme conditions.",
      link: "/software-testing/stress-testing",
      profilePic: Girl2,
      name: "Suresh Kumar",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1500, // Add dummy enrolled number
    },
    {
      id: 11,
      image:
        "https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?t=st=1725620802~exp=1725624402~hmac=3c91abe1913c777cb6eeef31fe437afc6975c60f2a571621822994a0a50541ce&w=740",
      title: "Manual Testing",
      description: "Testing done manually by testers.",
      link: "/software-testing/manual-testing",
      profilePic: Girl2,
      name: "Meera Pillai",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 1800, // Add dummy enrolled number
    },
    {
      id: 12,
      image:
        "https://img.freepik.com/premium-vector/code-typing-concept-illustration_86047-934.jpg?w=740",
      title: "Automated Testing",
      description: "Testing using automation tools.",
      link: "/software-testing/automation-testing",
      profilePic: Girl2,
      name: "Rahul Joshi",
      rating: 4.3, // Add dummy rating
      price: "₹2499", // Add dummy price
      enrolled: 2000, // Add dummy enrolled number
    },
  ];

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />
      );
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="  ">
      <Navbar />
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-gradient-to-r text-4xl font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent pb-5">
              Expand Software Testing Courses
            </span>
          </div>
          <div className="mb-4 flex justify-end ">
            <input
              type="text"
              placeholder="Search by course name ......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-blue-600 rounded placeholder-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-5 ">
            {softwareTestingArray
              .filter((course) =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((course) => (
                <div
                  key={course.id}
                  className="relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                  <Link to={course.link} rel="noopener noreferrer">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-[170px] object-contain px-3 "
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 flex items-center text-nowrap justify-between">
                        {course.title}
                        <MdArrowOutward className="text-gray-500 text-2xl" />
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-900">
                          <span className="mr-2 font-bold">
                            {course.rating}
                          </span>
                          {renderStarRating(course.rating)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <img
                            src={course.profilePic}
                            alt={course.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <div>
                            <span className="text-gray-700 font-bold">
                              {course.name}
                            </span>
                            <p className="text-gray-500 text-xs">
                              {course.enrolled} Enrolled
                            </p>
                          </div>
                        </div>
                        <span className="text-gray-900 font-bold">
                          {course.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <FooterPart />
      </div>
    </div>
  );
};

export default SoftwareTestingArray;
