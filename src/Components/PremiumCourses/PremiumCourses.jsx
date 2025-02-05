
import React from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../assetss/student/studentHome.png";
import Footer from "../Home/footer/Footer";
import Navbar from "../Navbar";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const PremiumCourses = () => {
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
              <Link to="/" className="flex items-center gap-1.5">
                Find the Courses
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <CourseCard/>
      <Footer />
    </>
  );
};

export default PremiumCourses ;




// import React, { useEffect, useState } from "react";
// import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// // import WishLists from "../../AddtoCart/WishLists";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Home/footer/Footer";
// const PremiumCourses = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [sh, setShow] = useState(false);
//   const navigate = useNavigate();

//   const handleWishList = (course) => {
//     const index = wishlist.findIndex((item) => item.id === course.id);
//     if (index !== -1) {
//       const updatedWishlist = [...wishlist];
//       updatedWishlist.splice(index, 1);
//       setWishlist(updatedWishlist);
//     } else {
//       setWishlist((prevWishlist) => [...prevWishlist, course]);
//     }
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   useEffect(() => {
//     console.log("wish", wishlist);
//     if (sh) navigate("/wishLists", { state: { wishlist } });
//   }, [wishlist, sh]);

//   const handleDelete = (id) => {
//     setWishlist((prevWishlist) =>
//       prevWishlist.filter((course) => course.id !== id)
//     );
//   };

//   const courses = [
//     {
//       id: 1,
//       title: "Full Stack Development",

//       image:
//         "https://media.licdn.com/dms/image/D4E12AQHPfeaf61ARlw/article-cover_image-shrink_720_1280/0/1707956393334?e=2147483647&v=beta&t=GYpFx7NlLhBWpF2Ow0tzdwoqWrF78PvPmI-wVFuO3B8",
//       link: "/fullStack_WebDevelopment/fullStack-Web-Development",
//     },
//     {
//       id: 2,
//       title: "Software Testing",

//       image:
//         "https://www.buildoffshoreteam.com/blog/wp-content/uploads/2024/03/type-of-testing.jpg",
//       link: "/software_testing",
//     },

//     {
//       id: 3,
//       title: "Machine Learning with AI",

//       image:
//         "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
//       link: "/data_Science/machine-Learning",
//     },
//     {
//       id: 4,
//       title: "DevOps Mastery",

//       image:
//         "https://s3.amazonaws.com/tf-nightingale/2023/04/How-DevOps-Mastery-Optimizes-Development-and-Operations-for-Business-Success--2.jpg",
//       link: "/fullStack_WebDevelopment/fullStack-Devops",
//     },
//     {
//       id: 5,
//       title: "Blockchain Development",

//       image:
//         "https://ideausher.com/wp-content/uploads/2022/12/Blockchain-Developer-Hire_-A-Complete-Guide-1.webp",
//       link: "/blockchain",
//     },
//     {
//       id: 6,
//       title: "Cloud with AWS",

//       image:
//         "https://images.squarespace-cdn.com/content/v1/60cfd646701da4034512a1c5/1654217981309-RTSZMBJWA9YJ5V32UN8R/AWS-Cloud.png",
//       link: "/cloud-computing",
//     },

//     {
//       id: 7,
//       title: "Data Science Techniques",

//       image:
//         "https://cdn.hackr.io/uploads/posts/large/1573232636UxdizR1FyX.png",
//       link: "/data_Science",
//     },
//     {
//       id: 8,
//       title: "Ethical Hacking",

//       image:
//         "https://www.bugcrowd.com/wp-content/uploads/2022/05/ethical-hackers-1.jpg",
//       link: "/ethical_Hacking",
//     },
//     {
//       id: 9,
//       title: "Cyber Security",

//       image:
//         "https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg",
//       link: "/cyber_security",
//     },
//   ];

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <img
//         src="https://st4.depositphotos.com/1350793/23721/i/450/depositphotos_237213214-stock-photo-next-level-concept-with-woman.jpg"
//         className="object-cover w-full md:h-[450px]"
//         alt="Background Image"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
//           Explore With Next Level Premium Courses
//         </h1>

//         <div className="mb-4 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search by course name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
//           />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {filteredCourses.map((course) => (
//             <CourseCard
//               key={course.id}
//               course={course}
//               handleWishList={handleWishList}
//               setShow={setShow}
//             />
//           ))}
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
//     <div className="mx-auto relative mb-12 cursor-pointer">
//       <Link to={link}>
//         <img
//           src={image}
//           alt={title}
//           className="h-[240px] w-full hover:scale-105 transition-all duration-500 shadow-2xl"
//         />
//         <div
//           className="text-center px-4 py-8 bg-white shadow-lg rounded-md
//                 md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300"
//         >
//           <p>
//             {" "}
//             <span className="font-bold">{title}</span>
//           </p>
//         </div>
//       </Link>
//       <Link>
//         <button id="wishlist" onClick={handleDataTransfer}>
//           {liked ? (
//             <FcLike className="w-8 transition-transform duration-300 transform hover:scale-125 rounded h-8 text-white top-3 left-3 absolute" />
//           ) : (
//             <FcLikePlaceholder className="w-8 rounded text-red-800 h-8 transition-transform duration-300 transform hover:scale-125 top-3 left-3 absolute" />
//           )}
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default PremiumCourses;
