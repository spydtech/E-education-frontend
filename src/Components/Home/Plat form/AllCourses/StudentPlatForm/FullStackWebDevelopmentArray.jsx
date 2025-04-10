import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardImage from "../../../../../assetss/fullstackwebdev/webdev/nextGen.jpg";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import java from "../../../../../assetss/fullstackwebdev/java/java1.avif";
import javascript from "../../../../../assetss/fullstackwebdev/javaScript/javascript1.avif";
import mern from "../../../../../assetss/fullstackwebdev/Mernstack/mern2.avif";
import dotnet from "../../../../../assetss/fullstackwebdev/dotnet/dotnet1.jpg";
import devops from "../../../../../assetss/fullstackwebdev/devops/devops2.avif";
import python from "../../../../../assetss/fullstackwebdev/python/python1.avif";
import Girl2 from "../../../../../assetss/profile/girl2.png";
import { Link } from "react-router-dom";
// import { IoIosSearch } from "react-icons/io";

const FullStackWebDevelopmentArray = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [show, setShow] = useState(false);
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
    console.log("wish", wishlist);
    if (show) navigate("/wishLists", { state: { wishlist } });
  }, [wishlist, show]);

  const handleDelete = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((course) => course.id !== id)
    );
  };

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: cardImage,
      link: "/fullStack_WebDevelopment/fullStack-Web-Development",
      rating: 4.3,
      price: "₹1,499",
      profilePic: Girl2,
      name: "Shyam",
      enrolled: 1200, // Add dummy enrolled number
    },
    {
      id: 2,
      title: "Full Stack JavaScript",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: javascript,
      link: "/fullStack_WebDevelopment/full-stack-javascript",
      rating: 4.5,
      price: "₹1,699",
      profilePic: Girl2,
      name: "Mounika",
      enrolled: 1500, // Add dummy enrolled number
    },
    {
      id: 3,
      title: "MEAN Stack Development",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: mern,
      link: "/fullStack_WebDevelopment/mean-Stack-Developer",
      rating: 4.8,
      price: "₹1,899",
      profilePic: Girl2,
      name: "Sathish",
      enrolled: 1800, // Add dummy enrolled number
    },
    {
      id: 4,
      title: "Full Stack Python",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: python,
      link: "/fullStack_WebDevelopment/fullStack-Python-Development",
      rating: 4.7,
      price: "₹1,999",
      profilePic: Girl2,
      name: "Raghvendra",
      enrolled: 1700, // Add dummy enrolled number
    },
    {
      id: 5,
      title: "Full Stack Java",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: java,
      link: "/fullStack_WebDevelopment/fullStack-Java-Development",
      rating: 4.3,
      price: "₹1,599",
      profilePic: Girl2,
      name: "Ratna Priya",
      enrolled: 1400, // Add dummy enrolled number
    },
    {
      id: 6,
      title: "Dot Net Development",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: dotnet,
      link: "/fullStack_WebDevelopment/dot-net-development",
      rating: 4.9,
      price: "₹2,099",
      profilePic: Girl2,
      name: "Ashwini Kumari",
      enrolled: 1900, // Add dummy enrolled number
    },
    {
      id: 7,
      title: "Full Stack Devops",
      description:
        "The future of learning The future of learning The future of learning The future of learning",
      image: devops,
      link: "/fullStack_WebDevelopment/fullStack-Devops",
      rating: 4.9,
      price: "₹1,799",
      profilePic: Girl2,
      name: "Premchand",
      enrolled: 1600, // Add dummy enrolled number
    },
  ];

  const filteredCourses = courses.filter((course) =>
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#0098f1] ">
          Expand{" "}
          <span className="bg-gradient-to-r bg-clip-text from-[#0098f1] to-[#f6ac14] text-transparent">
            Full Stack Development
          </span>{" "}
          <span className="text-[#f6ac14]">Courses</span>
        </h1>

        <div className="mb-4 flex justify-center ">
          <input
            type="text"
            placeholder="Search by course name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="relative px-4 w-80 py-2 border border-gray-300  rounded focus:outline-none"
          />
          {/* <button className="absolute"> <IoIosSearch className=" text-4xl pt-2 pr-2 font-semibold" /></button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-5">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <Link to={course.link} rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 object-contain  px-3 "
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
                      <span className="mr-2 font-bold">{course.rating}</span>
                      {renderStarRating(course.rating)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src={course.profilePic}
                        alt={course.name}
                        className="w-8 h-8 rounded-full"
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
      <Footer />
    </>
  );
};

export default FullStackWebDevelopmentArray;
