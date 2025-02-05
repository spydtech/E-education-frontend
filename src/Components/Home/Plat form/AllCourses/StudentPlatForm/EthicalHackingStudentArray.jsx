import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../Navbar";
import FooterPart from "../../../footer/Footer";
// import cardImage from "../../../../../assetss/fullstackwebdev/java/java1.avif";
// import  cardImage1  from "../../../../../assetss/fullstackwebdev/dotnet/dotnet1.jpg";
// import  cardImage2  from "../../../../../assetss/fullstackwebdev/javaScript/javascript1.avif";
import basicsCard from "../../../../../assetss/professional/ethicalHacking/basicsCard.png";
import advancedCard from "../../../../../assetss/professional/ethicalHacking/advancedCard.png";
import certifiedCard from "../../../../../assetss/professional/ethicalHacking/certifiedCard.png";
import hero from "../../../../../assetss/professional/ethicalHacking/hero.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Girl2 from "../../../../../assetss/profile/girl2.png";
import { Link } from "react-router-dom";
const EthicalHackingStudentArray = () => {
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

  const ethicalHackingCourses = [
    {
      id: 1,
      title: "Ethical Hacking Basics",
      image: basicsCard,
      description:
        "Learn the fundamentals of ethical hacking, including reconnaissance, scanning, and vulnerability assessment.",
      link: "/Ethical_Hacking/basic_ethical_Hacking",
      rating: 4.2, // Add dummy rating
      price: "₹1499", // Add dummy price
      profilePic: Girl2,
      name: "Rohan Patel",
      erolled: "1500 Enrolled",
    },
    {
      id: 2,
      title: "Advanced Ethical Hacking",
      description:
        "Dive deeper into ethical hacking techniques, including exploitation, privilege escalation, and post-exploitation.",
      image: advancedCard,
      link: "/Ethical_Hacking/advance_Ethical_Hacking",
      rating: 4.5, // Add dummy rating
      price: "₹1899", // Add dummy price
      profilePic: Girl2,
      name: "Neeraj Malhotra",
      erolled: "1000 Enrolled",
    },
    {
      id: 3,
      title: "Certified Ethical Hacker",
      image: certifiedCard,
      description:
        "Prepare for the Certified Ethical Hacker (CEH) certification with comprehensive coverage of ethical hacking topics.",
      link: "/Ethical-Hacking/certified_Ethical_Hacking",
      rating: 4.8, // Add dummy rating
      price: "₹2499", // Add dummy price
      profilePic: Girl2,
      name: "Sakshi Agarwal",
      erolled: "2000 Enrolled",
    },
  ];

  const filteredCourses = ethicalHackingCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      {/* <img
        src={hero}
        className="object-cover w-full md:h-[490px]"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-gradient-to-r pb-1 text-4xl font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
            Expand Ethical Hacking Courses
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
                {/* <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 object-cover px-3 py-3"
                  />
                </div> */}
                <div className="h-[180px]">
                  <img
                    className="w-full h-full object-contain bg-cover"
                    src={course.image}
                    alt={course.title}
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
                          {course.erolled}
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
    <div className="relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out max-w-[320px] mx-auto">
      <a href={link} rel="noopener noreferrer">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-32 object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
            {title}
            <FcLike
              onClick={handleDataTransfer}
              className={`w-8 h-8 cursor-pointer ${
                liked ? "text-red-600" : "text-gray-400"
              }`}
            />
          </h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-900">
              <span className="mr-2 font-bold">{rating}</span>
              {renderStarRating(rating)}
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src={profilePic}
                alt={name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <span className="text-gray-700 font-bold">{name}</span>
                <p className="text-gray-500 text-xs">2001 Enrolled</p>
              </div>
            </div>
            <span className="text-gray-900 font-bold">{price}</span>
          </div>
        </div>
      </a>
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

export default EthicalHackingStudentArray;
