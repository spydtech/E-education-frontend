import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../Navbar";
import Footer from "../../../footer/Footer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Girl2 from "../../../../../assetss/profile/girl2.png";

const ArtificialIntelligenceArray = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiCourses = [
    {
      id: 1,
      title: "Generative AI Foundations",
      description:
        "Learn how generative models like GANs and transformers power modern AI creativity and content generation.",
      link: "/AI/generative_ai_foundations",
      image:
        "https://img.freepik.com/premium-vector/artificial-intelligence-chipset-circuit-board-futuristic-concept_32996-2164.jpg?ga=GA1.1.1972706767.1731660040&semt=ais_hybrid&w=740", // Replace with actual image path
      rating: 4.8,
      price: "$35.00",
      profilePic: Girl2,
      name: "Ayesha Verma",
      enrolled: 1800,
    },
    {
      id: 2,
      title: "Agentic AI Concepts",
      description:
        "Explore how autonomous agents interact with environments, make decisions, and exhibit goal-oriented behavior.",
      link: "/AI/agentic_ai_concepts",
      image:
        "https://img.freepik.com/free-vector/blue-technology-background-with-many-faces_1017-18299.jpg?ga=GA1.1.1972706767.1731660040&semt=ais_hybrid&w=740", // Replace with actual image path
      rating: 4.6,
      price: "$32.00",
      profilePic: Girl2,
      name: "Rajeev Nair",
      enrolled: 1600,
    },
  ];

  const filteredCourses = aiCourses.filter((course) =>
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-gradient-to-r text-4xl py-1 font-bold from-[#0098f1] to-[#f6ac14] bg-clip-text text-transparent">
            Explore Generative & Agentic AI Courses
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
                index >= 3 ? "mt-6" : ""
              }`}
            >
              <Link to={course.link} rel="noopener noreferrer">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-36 px-3 object-contain"
                />
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
                        className="w-12 h-12 object-cover rounded-full mr-2"
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

export default ArtificialIntelligenceArray;
