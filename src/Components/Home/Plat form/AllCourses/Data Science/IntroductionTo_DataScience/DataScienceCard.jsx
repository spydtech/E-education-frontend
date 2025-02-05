import React from "react";
import img1 from "../../../../../../assetss/student/cards/image1.jpg";
import img2 from "../../../../../../assetss/student/cards/image2.jpg";
import img3 from "../../../../../../assetss/student/cards/image3.jpg";
import img4 from "../../../../../../assetss/student/cards/image4.jpg";
import img5 from "../../../../../../assetss/student/cards/image5.jpg";
import img6 from "../../../../../../assetss/student/cards/image6.jpg";
const DataScienceCard = () => {
  const courseData = [
    {
      imgSrc: img1,
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of Introduction to DataScience courses Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: img2,
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts algorithms, and programming languages essential for Introduction to DataScience.",
    },
    {
      imgSrc: img3,
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, model building, and evaluation under the guidance of industry experts.",
    },
    {
      imgSrc: img4,
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Introduction to DataScience concepts as you advance through the courses.",
    },
    {
      imgSrc: img5,
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Introduction to DataScience, such as deep learning, natural language processing, or computer vision. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: img6,
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
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

export default DataScienceCard;

// import React from "react";

// const DataScienceCard = () => {
//   const courseData = [
//     {
//       imgSrc:
//         "https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?t=st=1716451287~exp=1716454887~hmac=cc991f9dacafb486a88efc45f1b6ab6d8d04e77495c9a8d56c3b1bc97ef7884d&w=740",
//       title: "Explore Course Catalog",
//       description:
//         "Browse our extensive catalog of Data Science courses. Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
//     },
//     {
//       imgSrc:
//         "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?t=st=1716451383~exp=1716454983~hmac=02ea07b92b250c3bb681aaff29754fee3a4f75af789e5ba0a13b3fbd5ac0cdfc&w=826",
//       title: "Enroll in Foundational Courses",
//       description:
//         "Start with foundational courses covering basic concepts, algorithms, and tools essential for Data Science.",
//     },
//     {
//       imgSrc:
//         "https://t3.ftcdn.net/jpg/04/57/66/56/240_F_457665662_ap8MydjBqBekFsieXX6HRgUAWcSM4Kl4.jpg",
//       title: "Practice with Real-world Projects",
//       description:
//         "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, data processing, and visualization.",
//     },
//     {
//       imgSrc:
//         "https://img.freepik.com/free-vector/control-panel-concept-illustration_114360-530.jpg?t=st=1722235065~exp=1722238665~hmac=2033e453859c10ec4258b47e11fd1638e193b034843d223211e267c69b2b7bba&w=740",
//       title: "Track Your Progress",
//       description:
//         "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various Data Science concepts as you advance through the courses.",
//     },
//     {
//       imgSrc:
//         "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?t=st=1716451464~exp=1716455064~hmac=b20bffd75cbf6f3c20c1d05348247ca261db387eb06c386f823603a08a890fd1&w=826",
//       title: "Specialize and Advance",
//       description:
//         "Choose specialized tracks or advanced courses to delve deeper into specific areas of Data Science, such as data engineering, predictive analytics, or Introduction to DataScience.",
//     },
//     {
//       imgSrc:
//         "https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?ga=GA1.1.1810882797.1717402309&semt=ais_user",
//       title: "Earn Recognized Certifications",
//       description:
//         "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
//     },
//   ];

//   return (
//     <section id="portfolio" className="portfolio-section py-10 px-4">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-medium">
//             <span className="text-[#f6ac14]">The</span>
//             <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
//               {" "}
//               Future of{" "}
//             </span>
//             <span className="text-[#0098f1]"> Learning</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {courseData.map((course, index) => (
//             <div
//               key={index}
//               className="group  border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
//             >
//               <a href="#">
//                 <div className="h-[210px] bg-[#0098f1]">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={course.imgSrc}
//                     alt={`Project ${index + 1}`}
//                   />
//                 </div>
//                 <div className="p-4 flex flex-col items-center justify-between">
//                   <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900">
//                     {course.title}
//                   </h3>
//                   <p className="text-md text-gray-600 pt-4">
//                     {course.description}
//                   </p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DataScienceCard;
