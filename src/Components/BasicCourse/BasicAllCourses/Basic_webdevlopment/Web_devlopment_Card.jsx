import React from "react";
import Img1 from "../../../../assetss/Basic_Courses/BasicPHP/image1.jpg";
import Img2 from "../../../../assetss/Basic_Courses/BasicPHP/image2.jpg";
import Img3 from "../../../../assetss/Basic_Courses/BasicPHP/image3.jpg";
import Img4 from "../../../../assetss/Basic_Courses/BasicPHP/image4.jpg";
import Img5 from "../../../../assetss/Basic_Courses/BasicPHP/image5.jpg";
import Img6 from "../../../../assetss/Basic_Courses/BasicPHP/image6.jpg";

const WebDevlopmentCard = () => {
  const courseData = [
    {
      imgSrc: Img1,
      title: "Explore Web Development Courses",
      description:
        "Browse our comprehensive catalog of web development courses covering HTML, CSS, JavaScript, and popular frameworks for all skill levels.",
    },
    {
      imgSrc: Img2,
      title: "Master Core Technologies",
      description:
        "Start with foundational courses in HTML5, CSS3, and modern JavaScript to build responsive and interactive websites.",
    },
    {
      imgSrc: Img3,
      title: "Build Real-world Projects",
      description:
        "Apply your skills by creating portfolio-worthy projects including e-commerce sites, web apps, and responsive layouts.",
    },
    {
      imgSrc: Img4,
      title: "Track Your Coding Journey",
      description:
        "Monitor your progress with our learning dashboard. Set milestones and watch your web development skills grow.",
    },
    {
      imgSrc: Img5,
      title: "Specialize in Advanced Topics",
      description:
        "Dive deeper into backend development, APIs, or modern frameworks like React and Node.js to become a full-stack developer.",
    },
    {
      imgSrc: Img6,
      title: "Earn Web Development Certificates",
      description:
        "Get industry-recognized certifications upon completing courses to showcase your web development expertise.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section py-10 px-4 font-poppins">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl pb-2 md:text-3xl lg:text-4xl font-medium">
            <span className="text-[#f6ac14]">Mastering</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Web Development{" "}
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

export default WebDevlopmentCard;