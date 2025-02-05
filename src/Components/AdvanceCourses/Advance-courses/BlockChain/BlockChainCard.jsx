import React from "react";

import img1 from "../../../../assetss/premium/blockchain/image1.jpg";
import img2 from "../../../../assetss/premium/blockchain/image2.jpg";
import img3 from "../../../../assetss/premium/blockchain/image3.jpg";
import img4 from "../../../../assetss/premium/blockchain/image4.jpg";
import img5 from "../../../../assetss/premium/blockchain/image5.jpg";
import img6 from "../../../../assetss/premium/blockchain/image6.jpg";
const BlockChainCard = () => {
  const courseData = [
    {
      imgSrc: img1,
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Machine Learning courses Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: img2,
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses that cover blockchain basics, tools, and methodologies essential for development.",
    },
    {
      imgSrc: img3,
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge with hands-on projects that mirror real-world scenarios. Gain practical experience in blockchain development and smart contracts.",
    },
    {
      imgSrc: img4,
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards. Set goals, track milestones, and measure your expertise as you advance through the courses.",
    },
    {
      imgSrc: img5,
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to deepen your knowledge in areas like smart contracts, blockchain frameworks, or performance optimization. Customize your learning path to fit your interests and career goals.",
    },
    {
      imgSrc: img6,
      title: "Earn Recognized Certifications",
      description:
        "Upon completing courses and projects, earn industry-recognized certifications to showcase your expertise and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-4xl font-medium">
            <span className="text-[#f6ac14]">The</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Future of{" "}
            </span>
            <span className="text-[#0098f1]"> Learning</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className="h-[180px] flex justify-center items-center">
                  <img
                    className="w-[300px] h-[220px] p-2 bg-cover"
                    src={course.imgSrc}
                    alt={`Project ${index + 1}`}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    {course.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlockChainCard;
