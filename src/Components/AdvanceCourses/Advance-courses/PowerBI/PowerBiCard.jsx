import React from "react";

const PowerBiCard = () => {
  const courseData = [
    {
      imgSrc: "https://res.cloudinary.com/dfftgkkev/image/upload/v1726579678/image1_hef1sc.png",
      title: "Explore Course Catalog",
      description:
        "Browse our extensive catalog of PowerBI courses Discover beginner-friendly to advanced-level programs designed to accommodate learners of all backgrounds.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dfftgkkev/image/upload/v1726579681/image2_xdrrvu.png",
      title: "Enroll in Foundational Courses",
      description:
        "Start with foundational courses covering basic concepts algorithms, and programming languages essential for PowerBI.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dfftgkkev/image/upload/v1726579686/image3_ih9nxv.jpg",
      title: "Practice with Real-world Projects",
      description:
        "Apply your knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in data analysis, model building, and evaluation under the guidance of industry experts.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dfftgkkev/image/upload/v1726579693/image4_no3xea.jpg",
      title: "Track Your Progress",
      description:
        "Monitor your progress with intuitive dashboards and tracking tools. Set goals, track milestones, and measure your proficiency in various PowerBI concepts as you advance through the courses.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dfftgkkev/image/upload/v1726579696/image5_yxs4dr.png",
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of PowerBI, such as deep learning, natural language processing, or computer vision. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: "https://res.cloudinary.com/dfftgkkev/image/upload/v1726579701/image6_md7ztw.jpg",
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];
  
  return (
      <section id="portfolio" className="portfolio-section py-10 px-4">
        <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl pb-2 md:text-3xl lg:text-4xl font-medium">
            <span className="text-[#f6ac14]">The Advanced</span>
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
                <div className="h-[180px] justify-center items-center flex">
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

export default PowerBiCard;
