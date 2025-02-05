import React from "react";
// import girl3 from "../../../../../../assets/girl3.png";
import { GoArrowUpRight } from "react-icons/go";
import Img1 from "../../../../../../assetss/student/cards/image1.jpg";
import Img2 from "../../../../../../assetss/student/cards/image2.jpg";
import Img3 from "../../../../../../assetss/student/cards/image3.jpg";
import Img4 from "../../../../../../assetss/student/cards/image4.jpg";
import Img5 from "../../../../../../assetss/student/cards/image5.jpg";
import Img6 from "../../../../../../assetss/student/cards/image6.jpg";
function DataAbout() {
  const courseData = [
    {
      imgSrc: Img1,
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of  Data Analytics courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: Img2,
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts, algorithms, and tools essential for  Data Analytics.",
    },
    {
      imgSrc: Img3,
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, data processing, and visualization.",
    },
    {
      imgSrc: Img4,
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Data Data Analytics concepts as you advance through the courses.",
    },
    {
      imgSrc: Img5,
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Data Analytics, such as data engineering, predictive analytics, or machine learning.",
    },
    {
      imgSrc: Img6,
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];
  return (
    // <section id="portfolio" className="portfolio-section py-10 px-4">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
    //         <span className="text-[#f6ac14]">The</span>
    //         <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
    //           {" "}
    //           Future of{" "}
    //         </span>
    //         <span className="text-[#0098f1]"> Learning</span>
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {courseData.map((course, index) => (
    //         <div
    //           key={index}
    //           className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
    //         >
    //           <a href="#" >
    //             <div className="h-[210px]">
    //               <img
    //                 className="w-full h-full object-cover"
    //                 src={course.imgSrc}
    //                 alt={`Project ${index + 1}`}
    //               />
    //             </div>
    //             <div className="p-4 flex flex-col items-center justify-between">
    //               <h3 className="text-lg flex justify-center items-center font-medium text-[#f6ac14] group-hover:text-black">
    //                 {course.title}
    //               </h3>
    //               <p className="text-md text-gray-600 pt-4">
    //                 {course.description}
    //               </p>
    //             </div>
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl pb-2 md:text-3xl lg:text-4xl font-medium">
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
export default DataAbout;
