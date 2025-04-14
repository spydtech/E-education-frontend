import React from "react";
import img1 from "../../../../../../assetss/premium/cybersecurityEssentials/image1.jpg";
import img2 from "../../../../../../assetss/premium/cybersecurityEssentials/image2.jpg";
import img3 from "../../../../../../assetss/premium/cybersecurityEssentials/image3.jpg";
import img4 from "../../../../../../assetss/premium/cybersecurityEssentials/image4.jpg";
import img5 from "../../../../../../assetss/premium/cybersecurityEssentials/image5.jpg";
import img6 from "../../../../../../assetss/premium/cybersecurityEssentials/image6.jpg";
const CyberSecurityEssentialsCard = () => {
  const courseData = [
    {
      imgSrc: img1,
      title: "Discover the Cybersecurity Path",
      description:
        "Explore a structured journey through cybersecurity fundamentals, tools, and techniques. Our catalog guides you from basic principles to advanced defense strategies.",
    },
    {
      imgSrc: img2,
      title: "Build a Strong Foundation",
      description:
        "Begin with essential topics like network security, cryptography, and system vulnerabilities. Perfect for beginners aiming to enter the cybersecurity domain with confidence.",
    },
    {
      imgSrc: img3,
      title: "Hands-on Labs & Simulations",
      description:
        "Work on practical, real-world cybersecurity scenarios including penetration testing, threat detection, and incident response. Gain the skills employers look for.",
    },
    {
      imgSrc: img4,
      title: "Progress with Clarity",
      description:
        "Track your learning journey with progress bars, achievements, and personalized feedback. Stay motivated as you advance through each cybersecurity milestone.",
    },
    {
      imgSrc: img5,
      title: "Choose Your Cybersecurity Specialization",
      description:
        "Dive into focused tracks like Malware Analysis, Cloud Security, or Ethical Hacking. Tailor your learning experience to align with your career aspirations.",
    },
    {
      imgSrc: img6,
      title: "Get Certified, Get Ahead",
      description:
        "Complete your training and earn globally recognized cybersecurity certifications. Boost your resume and stand out in today’s competitive job market.",
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

export default CyberSecurityEssentialsCard;
