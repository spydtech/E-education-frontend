
import React from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../assetss/professionalimages/image5.png";
import Footer from "../Home/footer/Footer";
import Navbar from "../Navbar";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const Advance_Courses= () => {
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
             Explore <span className="text-[#f6ac14]">Advanced</span>Courses
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

      <CourseCard />
      <Footer />
    </>
  );
};

export default Advance_Courses;




// import React, { useEffect, useState } from "react";
// import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// // import WishLists from "../../AddtoCart/WishLists";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Home/footer/Footer";
// const Advance_Courses = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [sh, setShow] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []); 
  
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
//       title: " MERN Stack",

//       image:
//         "https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1",
//       link: "/fullStack_WebDevelopment/mean-Stack-Developer",
//     },
//     {
//       id: 5,
//       title: "Mastering WordPress Development",

//       image:
//         "https://magicminds.io/wp-content/uploads/2023/12/guide-to-mastering-wordpress-development.png",
//       link: "/masteringWordPressDevelopment",
//     },
//     {
//       id: 3,
//       title: "Advanced PHP Programming",
//       image: "https://solman.in/wp-content/uploads/2018/12/php.jpg",
//       link: "/advancedPhpProgramming",
//     },
//     {
//       id: 4,
//       title: "Java Programming Mastery",

//       image: "https://img-c.udemycdn.com/course/750x422/5638204_76bd.jpg",
//       link: "/fullStack_WebDevelopment/fullStack-Java-Development",
//     },
//     {
//       id: 6,
//       title: "JavaScript for Advanced Developers",

//       image:
//         "https://www.bluejaywebsolutions.com/sites/default/files/2021-08/javascript.jpg",
//       link: "/fullStack_WebDevelopment/full-stack-javascript",
//     },

//     {
//       id: 7,
//       title: "Network Security",
//       image:
//         "https://www.logsign.com/uploads/ensuring_network_security_e34d6ce4bb.png",
//       link: "/network_security",
//     },
//     {
//       id: 8,
//       title: "Full Stack Mobile App Development",
//       image:
//         "https://qph.cf2.quoracdn.net/main-qimg-73b9c74a99ce21c0ba7b760b8828172b",
//       link: "/fullStackMobileAppDevelopment",
//     },
//     {
//       id: 9,
//       title: "ERP-Software-Development",
//       image:
//         "https://www.tatvasoft.com/outsourcing/wp-content/uploads/2023/10/What-is-ERP-Software-Development.jpg",
//       link: "/erp",
//     },
//     {
//       id: 10,
//       title: "Power BI Development",
//       image:
//         "https://3852769.fs1.hubspotusercontent-na1.net/hubfs/3852769/Power%20BI%20Developer%20Roles%20and%20Responsibilities%20%20Skills%20Scope%20and%20More%20Thumbnail.jpg",
//       link: "/power-bi",
//     },
//   ];

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <img
//         src="https://www.advancecharity.org.uk/wp-content/uploads/2020/04/advance-Trimmed.png"
//         className="object-cover w-full md:h-[450px]"
//         alt="Background Image"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
//           Explore With Advance Courses
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

// export default Advance_Courses;
