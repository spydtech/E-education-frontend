import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Img1 from "../../../../assetss/Professionals/image1.jpg";
import Img2 from "../../../../assetss/Professionals/image2.jpg";
import Img3 from "../../../../assetss/Professionals/image3.jpg";
import Img4 from "../../../../assetss/Professionals/image4.jpg";
import Img5 from "../../../../assetss/Professionals/image5.jpg";
import Img6 from "../../../../assetss/Professionals/image6.jpg";
const MobileappCard = () => {
  const courseData = [
    {
      href: "/oop-concepts",
      imgSrc: Img1,
      title: "Explore Advanced OOP Concepts",
      description: "Dive into advanced Object-Oriented Programming concepts, including inheritance, polymorphism, and design patterns to create robust and scalable mobile applications.",
    },
    {
      href: "/app-design-patterns",
      imgSrc: Img2,
      title: "Master Mobile App Design Patterns",
      description: "Learn and implement various design patterns such as Singleton, Factory, and Strategy to solve common problems and improve code maintainability in mobile app development.",
    },
    {
      href: "/app-performance",
      imgSrc: Img3,
      title: "Optimize Mobile App Performance",
      description: "Gain insights into performance optimization techniques including caching, database indexing, and memory management to build high-performing mobile applications.",
    },
    {
      href: "/scalable-applications",
      imgSrc: Img4,
      title: "Build Scalable Mobile Applications",
      description: "Learn how to build scalable applications using advanced techniques like microservices architecture, load balancing, and horizontal scaling in mobile app development.",
    },
    {
      href: "/modern-frameworks",
      imgSrc: Img5,
      title: "Integrate with Modern Mobile App Frameworks",
      description: "Get hands-on experience with modern mobile app frameworks such as React Native, Flutter, and Xamarin to accelerate your development workflow and build robust applications.",
    },
    {
      href: "/app-security",
      imgSrc: Img6,
      title: "Secure Mobile Applications",
      description: "Understand advanced security practices to protect your mobile applications against common threats and vulnerabilities, ensuring data integrity and user safety.",
    },
  ];

  return (
    // <section id="portfolio" className="portfolio-section py-10 px-4">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
    //         <span className="text-[#f6ac14]">Mastering</span>
    //         <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
    //           {" "}
    //           Advanced Mobile App Development:{" "}
    //         </span>
    //         <span className="text-[#0098f1]"> Elevate Your Development Skills</span>
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {courseData.map((course, index) => (
    //         <div
    //           key={index}
    //           className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
    //         >
    //           <a href={course.href}>
    //             {/* <div className="h-[210px]">
    //               <img
    //                 className="w-full h-full object-cover"
    //                 src={course.imgSrc}
    //                 alt={course.title}
    //               />
    //             </div> */}
    //             <div className="h-[180px]">
    //               <img
    //                 className="w-full h-full bg-cover"
    //                 src={course.imgSrc} 
    //                 alt={`Course ${index + 1}`}
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
};

export default MobileappCard;
