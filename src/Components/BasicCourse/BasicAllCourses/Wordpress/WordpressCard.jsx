import React from "react";
import Img1 from "../../../../assetss/Basic_Courses/BasicPHP/image1.jpg";
import Img2 from "../../../../assetss/Basic_Courses/BasicPHP/image2.jpg";
import Img3 from "../../../../assetss/Basic_Courses/BasicPHP/image3.jpg";
import Img4 from "../../../../assetss/Basic_Courses/BasicPHP/image4.jpg";
import Img5 from "../../../../assetss/Basic_Courses/BasicPHP/image5.jpg";
import Img6 from "../../../../assetss/Basic_Courses/BasicPHP/image6.jpg";
const WordpressCard = () => {
  const courseData = [
    {
      imgSrc: Img1,
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of WordPress courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds",
    },
    {
      imgSrc:Img2,
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, tools, and methodologies essential for building and managing WordPress sites.",
    },
    {
      imgSrc: Img3,
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in building and customizing WordPress sites under the guidance of industry experts.",
    },
    {
      imgSrc: Img4,
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various WordPress skills as you advance through the courses.",
    },
    {
      imgSrc: Img5,
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of WordPress development, such as theme customization, plugin development, or SEO optimization. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: Img6,
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4 font-poppins">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl pb-2 md:text-3xl lg:text-4xl font-medium">
          <span className="text-[#f6ac14]">Basics of</span>
          <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
            {" "}
            WordPress{" "}
          </span>
          <span className="text-[#0098f1]"> </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
          >
            <a href="#">
            <div className="h-[180px] justify-center items-center flex">
                <img
                  className="w-[300px] h-[220px] p-2 bg-cover"
                  src={course.imgSrc}
                  alt={`Course ${index + 1}`}
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
}
export default WordpressCard;

