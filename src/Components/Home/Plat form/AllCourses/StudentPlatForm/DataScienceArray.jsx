import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import cardImage from "../../../../../assetss/student/cardImg.png";
import Introduction_to_data_science from "../../../../../assetss/student/dataScience/dsArray/img1.png";
import Datascience_with_python from "../../../../../assetss/student/dataScience/dsArray/img2.png";
import Machine_learning from "../../../../../assetss/student/dataScience/dsArray/img3.png";
import Data_Visualization from "../../../../../assetss/student/dataScience/dsArray/img4.png";
import Big_Data from "../../../../../assetss/student/dataScience/dsArray/img5.png";
import Data_analytics from "../../../../../assetss/student/dataScience/dsArray/img6.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Girl2 from "../../../../../assetss/profile/girl2.png";
const DataScienceArray = () => {
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
    console.log("wish", wishlist);
    if (sh) navigate("/wishLists", { state: { wishlist } });
  }, [wishlist, sh]);

  const handleDelete = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((course) => course.id !== id)
    );
  };

  const courses = [
    {
      id: 1,
      title: "Introduction to Data Science",
      description:
        "Master data analysis, visualization, and machine learning with Python.",
      image: Introduction_to_data_science,
      link: "/data_Science/introduction-to-data-science",
      rating: 4.7,
      price: "₹2499",
      profilePic: Girl2,
      name: "Rajesh Kumar",
      enrolled: 3000, // Add dummy enrolled number
    },
    {
      id: 2,
      title: "Data Science with Python",
      description:
        "Learn machine learning algorithms and their real-world applications.",
      image: Datascience_with_python,
      link: "/data_Science/data-science-with-python",
      rating: 4.8,
      price: "₹2899",
      profilePic: Girl2,
      name: "Aditi Singh",
      enrolled: 2800, // Add dummy enrolled number
    },
    {
      id: 3,
      title: "Machine Learning",
      description:
        "Dive deep into neural networks and deep learning techniques.",
      image: Machine_learning,
      link: "/data_Science/machine-Learning",
      rating: 4.9,
      price: "₹3299",
      profilePic: Girl2,
      name: "Amitabh Bhatt",
      enrolled: 3200, // Add dummy enrolled number
    },
    {
      id: 4,
      title: "Data Visualization",
      description: "Learn to analyze and visualize data using R programming.",
      image: Data_Visualization,
      link: "/data_Science/data-visualization",
      rating: 4.6,
      price: "₹2099",
      profilePic: Girl2,
      name: "Sunita Deshmukh",
      enrolled: 2500, // Add dummy enrolled number
    },
    {
      id: 5,
      title: "Big Data Analytics",
      description:
        "Get introduced to the world of big data technologies and tools.",
      image: Big_Data,
      link: "/data_Science/big-data-analysis",
      rating: 4.4,
      price: "₹2299",
      profilePic: Girl2,
      name: "Vikram Kapoor",
      enrolled: 2700, // Add dummy enrolled number
    },
    {
      id: 6,
      title: "Data Analytics",
      description:
        "Understand the basics of artificial intelligence and its applications.",
      image: Data_analytics,
      link: "/data_Science/data-Analatics",
      rating: 4.9,
      price: "₹2499",
      profilePic: Girl2,
      name: "Priya Menon",
      enrolled: 2900, // Add dummy enrolled number
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
        className="object-cover w-full md:h-[500px]"
        alt="Background Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div> */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-gradient-to-r text-4xl font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent pb-5">
            Expand Data Science Courses
          </span>
        </div>

        <div className="mb-4 flex justify-end  ">
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
              className={`relative bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out  ${
                index >= 3 ? "" : "" // Add top margin for the second row
              }`}
            >
              <Link to={course.link} rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full object-contain  h-36 px-3"
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

export default DataScienceArray;
