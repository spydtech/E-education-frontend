import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import FooterPart from "../../../footer/Footer";
// import FooterPart from "../../../footer/Footer";
import Navbar from "../../../../Navbar";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import card from "../../../../../assetss/fullstackwebdev/java/java1.avif";
import card1 from "../../../../../assetss/fullstackwebdev/devops/devops2.avif";
import card2 from "../../../../../assetss/fullstackwebdev/python/python1.avif";

import Girl2 from "../../../../../assetss/profile/girl2.png";
import { Link } from "react-router-dom";

const NetworkSecurityArray = () => {
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

  const networkSecurityCourses = [
    {
      id: 1,
      title: "Network Security Fundamentals",
      image: card,
      description:
        "Understand the basics of network security, including firewalls, intrusion detection systems, and VPNs.",
      link: "/network_security/network-security-fundamentals",
      rating: 4.3, // Add dummy rating
      price: "$29.99", // Add dummy price
      profilePic: Girl2,
      name: "Ashwini Sharma",
      enrolled: 1500, // Add dummy enrolled number
    },
    {
      id: 2,
      title: "Advanced Network Security",
      image: card1,
      description:
        "Learn advanced network security techniques , strategies to protect against  cyber threats.",
      link: "/network_security/advance-network-secuity",
      rating: 4.7, // Add dummy rating
      price: "$39.99", // Add dummy price
      profilePic: Girl2,
      name: "Ravi Kumar",
      enrolled: 2000, // Add dummy enrolled number
    },
    {
      id: 3,
      title: "Network Security Best Practices",
      image: card2,
      description:
        "Explore best practices for securing network infrastructure.",
      link: "/network_security/network-security-best-practices",
      rating: 4.6, // Add dummy rating
      price: "$24.99", // Add dummy price
      profilePic: Girl2,
      name: "Raghavendra Kommula",
      enrolled: 1800, // Add dummy enrolled number
    },
  ];

  const filteredCourses = networkSecurityCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      {/* <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1671979702.1717669022&semt=sph"
        className="object-cover w-full md:h-[490px]"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-gradient-to-r text-4xl pb-1 font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
            Expand Network Security Courses
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
              <Link to={course.link} rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 object-contain  px-3 py-3"
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
                    {/* <span className="text-gray-900 font-bold">
                      {course.price}
                    </span> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FooterPart />
    </>
  );
};

const CourseCard = ({ course, handleWishList, setShow }) => {
  const {
    id,
    title,
    description,
    image,
    link,
    rating,
    price,
    profilePic,
    name,
  } = course;
  const [liked, setLiked] = useState(false);

  const handleDataTransfer = () => {
    setShow(true);
    setLiked((prevLiked) => !prevLiked);

    handleWishList(course);
  };

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="object-cover h-48 w-full" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={profilePic}
              alt={name}
              className="h-10 w-10 rounded-full border border-gray-300"
            />
            <div className="ml-2">
              <div className="text-sm font-semibold">{name}</div>
              <div className="text-xs text-gray-500">2001 Enrolled</div>
            </div>
          </div>
          <button
            onClick={handleDataTransfer}
            className={`text-xl ${liked ? "text-red-500" : "text-gray-500"}`}
          >
            {liked ? <FcLike /> : <FcLikePlaceholder />}
          </button>
        </div>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-gray-700 mt-2 mb-4">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center">
            <span className="text-yellow-500 flex items-center">
              {[...Array(5)].map((_, index) => (
                <span key={index}>
                  {rating >= index + 1 ? (
                    <FaStar />
                  ) : rating >= index + 0.5 ? (
                    <FaStarHalfAlt />
                  ) : (
                    <FaRegStar />
                  )}
                </span>
              ))}
            </span>
            <span className="ml-2 text-gray-500">{rating}</span>
          </div>
          <div className="text-lg font-bold">{price}</div>
        </div>
        <a
          href={link}
          className="mt-4 flex items-center justify-center text-blue-500 hover:text-blue-700"
        >
          <span>Learn More</span>
          <MdArrowOutward className="ml-2" />
        </a>
      </div>
    </div>
  );
};
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

export default NetworkSecurityArray;
