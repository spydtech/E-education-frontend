import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import intro_CS from "../../../../../assetss/student/cyberSecurity/cyberArray/img1.png";
import CS_Essentials from "../../../../../assetss/student/cyberSecurity/cyberArray/img2.png";
import CS_Beginners from "../../../../../assetss/student/cyberSecurity/cyberArray/img3.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Girl2 from "../../../../../assetss/profile/girl2.png";
import { Link } from "react-router-dom";
const CyberSecurityArray = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [sh, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWishList = (course) => {
    const index = wishlist.findIndex((item) => item.id === course.id);
    if (index !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(index, 1);
      setWishlist(updatedWishlist);
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, course]);
    }
  };

  useEffect(() => {
    if (sh) navigate("/wishLists", { state: { wishlist } });
  }, [wishlist, sh]);

  const cybersecurityCourses = [
    {
      id: 1,
      title: "Introduction to Cyber security",
      description:
        "Learn the basic principles of cybersecurity, including risk management, threat detection, and security policies.",
      link: "/Cybersecurity/Cybersecurity_fundamentals",
      image: intro_CS,
      rating: 4.5,
      price: "$24.99",
      profilePic: Girl2,
      name: "Mohan Sharma",
      enrolled: 2200, // Add dummy enrolled number
    },
    {
      id: 2,
      title: "Cyber security Essentials",
      description:
        "Understand the core concepts of cybersecurity, including network security, cryptography, and incident response.",
      link: "/Cybersecurity/cybersecurity_essentials",
      rating: 4.7,
      image: CS_Essentials,
      price: "$29.99",
      profilePic: Girl2,
      name: "Ratna Priya",
      enrolled: 2500, // Add dummy enrolled number
    },
    {
      id: 3,
      image: CS_Beginners,
      title: "Cyber security for Beginners",
      description:
        "An introductory course for those new to the field of cybersecurity, covering fundamental concepts and best practices.",
      link: "/Cybersecurity/cybersecurity_beginners",
      rating: 4.6,
      price: "$27.50",
      profilePic: Girl2,
      name: "Manish Sharma",
      enrolled: 2100, // Add dummy enrolled number
    },
  ];

  const filteredCourses = cybersecurityCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center text-yellow-400">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
        {halfStar && <FaStarHalfAlt />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      {/* <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1671979702.1717669022&semt=sph"
        className="object-cover w-full md:h-[490px]"
        alt="Background Image"
      /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center   mb-4">
          <span className="bg-gradient-to-r text-4xl  py-1 font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
            Expand Cyber Security Courses
          </span>
        </div>

        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search by course name ......"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-blue-600 rounded placeholder-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-5">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out ${
                index >= 3 ? "mt-6" : "" // Add top margin for the second row
              }`}
            >
              <Link  to={course.link} rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-36 px-3"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    {course.title}
                    <MdArrowOutward className="text-gray-500 text-2xl" />
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-900">
                      <span className="mr-2 font-bold">{course.rating}</span>
                      {renderStarRating(course.rating)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src={course.profilePic}
                        alt={course.name}
                        className="w-8 h-8 object-contain  rounded-full mr-2"
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
      <Footer />
    </>
  );
};

export default CyberSecurityArray;
