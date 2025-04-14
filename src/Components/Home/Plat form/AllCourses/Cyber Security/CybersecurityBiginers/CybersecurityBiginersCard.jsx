import React from "react";
import img1 from "../../../../../../assetss/premium/cybersecurityBegineers/image1.jpg";
import img2 from "../../../../../../assetss/premium/cybersecurityBegineers/image2.jpg";
import img3 from "../../../../../../assetss/premium/cybersecurityBegineers/image3.jpg";
import img4 from "../../../../../../assetss/premium/cybersecurityBegineers/image4.jpg";
import img5 from "../../../../../../assetss/premium/cybersecurityBegineers/image5.jpg";
import img6 from "../../../../../../assetss/premium/cybersecurityBegineers/image6.jpg";
const CyberSecurityBeginnersCard = () => {
  const courseData = [
    {
      imgSrc: img1,
      title: "Discover Cybersecurity Paths",
      description:
        "Explore a wide range of beginner-friendly cybersecurity courses designed to introduce you to the field and guide you through various learning paths.",
    },
    {
      imgSrc: img2,
      title: "Kickstart with Core Skills",
      description:
        "Begin your journey with essential courses that cover cybersecurity fundamentals, key tools, and basic security principles every learner should know.",
    },
    {
      imgSrc: img3,
      title: "Hands-On Learning",
      description:
        "Work on interactive, real-world projects that simulate security breaches, threat analysis, and ethical hacking — gaining practical experience from day one.",
    },
    {
      imgSrc: img4,
      title: "Progress at Your Pace",
      description:
        "Track your learning milestones with easy-to-use dashboards. Set personal goals, monitor achievements, and stay motivated throughout your journey.",
    },
    {
      imgSrc: img5,
      title: "Dive into Specializations",
      description:
        "Advance your skills by choosing specialized areas like penetration testing, network defense, or security compliance — tailored to your career goals.",
    },
    {
      imgSrc: img6,
      title: "Get Certified & Stand Out",
      description:
        "Earn recognized cybersecurity certifications upon course completion. Build a strong portfolio and boost your chances in job markets and interviews.",
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

export default CyberSecurityBeginnersCard;
