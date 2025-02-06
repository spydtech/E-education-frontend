

import React from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../assetss/student/studentHome.png";
import Footer from "../../Components/Home/footer/Footer";
import Navbar from "../Navbar";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";



const BasicCourseArray = () => {
  return (
    <>
    <Navbar />
      <div
        id="main"
        className="flex justify-center items-center bg-cover bg-center h-[582px] w-full"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <div className="flex flex-col justify-center items-center h-auto space-y-4 p-4 md:p-8 lg:p-12">
          <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-[58px] flex justify-center items-center">
            <span className="text-center text-white text-3xl md:text-4xl lg:text-5xl">
              Master <span className="text-[#f6ac14]">Tech</span> Fundamentals
            </span>
          </div>
          <div className="w-full max-w-2xl lg:max-w-3xl h-auto flex justify-center items-center">
            <p className="text-center text-white text-base md:text-lg lg:text-xl">
              Accelerate your tech skills with hands-on courses designed for
              students. Gain expertise in programming, data analysis,
              cybersecurity, and more. Prepare yourself for success in the
              digital world.
            </p>
          </div>
          <div className="flex justify-center items-center rounded-lg top-16 relative">
            <motion.button className="rounded-lg w-[200px] md:w-[265px] h-[50px] md:h-[70px] px-4 text-lg md:text-2xl group flex justify-center items-center gap-1.5 bg-[#0098f1] py-2 text-white transition-colors">
              <Link to="#" className="flex items-center gap-1.5">
                Find the Courses
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </Link>
            </motion.button>
          </div>
        </div>
      </div>

      <CourseCard />
      <Footer />
    </>
  );
};
export default BasicCourseArray;



// import React, { useEffect, useState } from "react";
// import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Home/footer/Footer";
// import fullstack from "../../assetss/studentCourses/full stack.png";
// import science from "../../assetss/studentCourses/data-science.png";
// import cyber from "../../assetss/studentCourses/cyber-security (1).png";
// import ethical from "../../assetss/studentCourses/hacker.png";
// import testing from "../../assetss/studentCourses/testing.png";
// import security from "../../assetss/studentCourses/cyber-security.png";
// import { motion } from "framer-motion"; // Ensure framer-motion is imported
// import { FiArrowRight } from "react-icons/fi"; // Ensure FiArrowRight is imported

// const BasicCourseArray = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleWishList = (course) => {
//     const index = wishlist.findIndex((item) => item.id === course.id);
//     if (index !== -1) {
//       setWishlist((prevWishlist) =>
//         prevWishlist.filter((item) => item.id !== course.id)
//       );
//     } else {
//       setWishlist((prevWishlist) => [...prevWishlist, course]);
//     }
//   };

//   useEffect(() => {
//     if (show) navigate("/wishLists", { state: { wishlist } });
//   }, [wishlist, show, navigate]);

//   const courses = [
//     {
//       id: 1,
//       title: "Web Development",
//       image: fullstack,
//       description: "Learn to build modern web applications.",
//       link: "/fullStack_WebDevelopment/fullStack-Web-Development",
//     },
//     {
//       id: 2,
//       title: "Data Science",
//       image: science,
//       description: "Explore data analytics and machine learning.",
//       link: "/data-science",
//     },
//     {
//       id: 3,
//       title: "Cyber Security",
//       image: cyber,
//       description: "Understand cyber threats and secure applications.",
//       link: "/cyber-security",
//     },
//     {
//       id: 4,
//       title: "Ethical Hacking",
//       image: ethical,
//       description: "Learn ethical hacking to safeguard networks.",
//       link: "/ethical-hacking",
//     },
//     {
//       id: 5,
//       title: "Software Testing",
//       image: testing,
//       description: "Master the art of software quality assurance.",
//       link: "/software-testing",
//     },
//     {
//       id: 6,
//       title: "Security",
//       image: security,
//       description: "Gain insights into advanced security protocols.",
//       link: "/security",
//     },
//     {
//       id: 7,
//       title: "Java Programming",
//       image: fullstack,
//       description: "Dive deep into Java development.",
//       link: "/java",
//     },
//     {
//       id: 8,
//       title: "JavaScript",
//       image: fullstack,
//       description: "Learn JavaScript for dynamic web development.",
//       link: "/javaScript",
//     },
//     {
//       id: 9,
//       title: "C/C++ Programming",
//       image: fullstack,
//       description: "Get started with C and C++ programming.",
//       link: "/c_c++",
//     },
//     {
//       id: 10,
//       title: "UI/UX Design",
//       image: fullstack,
//       description: "Master the principles of UI/UX design.",
//       link: "/ui_ux_design",
//     },
//   ];

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="relative">
//         <img
//           src="https://img.freepik.com/premium-photo/word-basic-consists-wooden-cubes-with-letters-top-view-light-background-work-space_284815-2974.jpg"
//           className="object-cover w-full md:h-[450px]"
//           alt="Background"
//         />
//         {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
//       </div>
//       <div className="container mx-auto px-4 py-8">
      
//         <div className="text-center text-black text-3xl font-bold m-4 my-10">
//           <span className="text-[#f6ac14]">Explore </span>
//           <span className="bg-gradient-to-r  from-[#f6ac14] to-[#0098f1] bg-clip-text text-transparent">
//           Basic 
//           </span>
//           <span className="text-[#0098f1]"> Courses</span>
//         </div>
//         <div className="mb-4 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search by course name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-5 bg-black ">
//           <div className="">
//           {filteredCourses.map((course) => (
//             <CourseCard
//               key={course.id}
//               course={course}
//               handleWishList={handleWishList}
//               setShow={setShow}
//             />
         
//           ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// const CourseCard = ({ course, handleWishList, setShow }) => {
//   const { id, title, description, image, link } = course;
//   const [liked, setLiked] = useState(false);

//   const handleDataTransfer = () => {
//     setShow(true);
//     setLiked((prevLiked) => !prevLiked);
//     handleWishList(course);
//   };

//   return (

    
//     <div className="w-full sm:w-[317px] lg:w-[340px] mx-2 h-[360px] lg:h-[360px] rounded-lx p-4 group  duration-600 ease-out transform bg-[#0098f1] text-white relative rounded-2xl shadow-md  flex flex-col justify-between transition-transform duration-500 hover:scale-105 before:absolute before:w-1/5 before:h-1/5 before:bg-[#f6ac14] before:transition-all before:duration-500 before:top-0 before:right-0 before:rounded-tr-[15px] before:rounded-bl-[100%] hover:before:w-full hover:before:h-full hover:before:rounded-[15px] after:absolute after:w-1/5 after:h-1/5 after:bg-[#f6ac14] after:bg-opacity-0 after:transition-all after:duration-500 after:bottom-0 after:left-0 after:rounded-tl-[100%] after:rounded-br-[15px] hover:after:w-full hover:after:h-full hover:after:rounded-[15px]">
//       <Link to={link}>
//         <div className="rounded-full w-[80px] h-[80px] bg-[#d2efff] flex justify-center items-center mb-4">
//           <img src={image} alt={title} className="w-[48px] h-[48px]" />
//         </div>
//         <div className="text-center">
//           <p className="text-white text-[20px] font-bold mt-4">{title}</p>
//           <p className="text-white mt-2">{description}</p>
//         </div>
//       </Link>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="rounded-lg w-[265px] bg-[#d2efff] group-hover:bg-[#fed19c] h-[70px] px-4 text-2xl group flex justify-center items-center gap-1.5 text-[#0098f1] py-2 transition-colors "
//       >
//         <Link
//           to={link}
//           className="flex items-center gap-1.5 group-hover:text-white"
//         >
//           Start Learning
//           <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
//         </Link>
//       </motion.button>
//       <button
//         id="wishlist"
//         onClick={handleDataTransfer}
//         className="absolute top-3 left-3 w-8 h-8 text-white rounded transition-transform duration-300 transform hover:scale-125"
//       >

//       </button>
//     </div>
   
//   );
// };

// export default BasicCourseArray;

// const [searchQuery, setSearchQuery] = useState("");
// const [wishlist, setWishlist] = useState([]);
// const [sh, setShow] = useState(false);
// const navigate = useNavigate();

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

// const handleWishList = (course) => {
//   const index = wishlist.findIndex((item) => item.id === course.id);
//   if (index !== -1) {
//     const updatedWishlist = [...wishlist];
//     updatedWishlist.splice(index, 1);
//     setWishlist(updatedWishlist);
//   } else {
//     setWishlist((prevWishlist) => [...prevWishlist, course]);
//   }
// };

// useEffect(() => {
//   console.log("wish", wishlist);
//   if (sh) navigate("/wishLists", { state: { wishlist } });
// }, [wishlist, sh]);

// const handleDelete = (id) => {
//   setWishlist((prevWishlist) =>
//     prevWishlist.filter((course) => course.id !== id)
//   );
// };
