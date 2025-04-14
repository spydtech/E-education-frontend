import React from "react";
import img1 from "../../../../../../assetss/premium/cybersecurity/image1.jpg";
import img2 from "../../../../../../assetss/premium/cybersecurity/image2.jpg";
import img3 from "../../../../../../assetss/premium/cybersecurity/image3.jpg";
import img4 from "../../../../../../assetss/premium/cybersecurity/image4.jpg";
import img5 from "../../../../../../assetss/premium/cybersecurity/image5.jpg";
import img6 from "../../../../../../assetss/premium/cybersecurity/image6.jpg";
const CyberSecurityCard = () => {
  const courseData = [
    {
      imgSrc: img1,
      title: "Discover Cyber Security Courses",
      description:
        "Explore a wide range of Cyber Security courses crafted for all levels. From fundamental principles to advanced topics, find the right course to start or grow your career.",
    },
    {
      imgSrc: img2,
      title: "Start with the Basics",
      description:
        "Begin your journey with essential courses covering Cyber Security fundamentals, network security, encryption, and basic programming skills.",
    },
    {
      imgSrc: img3,
      title: "Hands-on Learning Experience",
      description:
        "Build real-world skills by working on interactive labs and practical projects. Tackle real-life security challenges with expert guidance and feedback.",
    },
    {
      imgSrc: img4,
      title: "Progress and Performance Insights",
      description:
        "Stay motivated with progress tracking tools. View your learning milestones, performance stats, and get personalized recommendations as you advance.",
    },
    {
      imgSrc: img5,
      title: "Advance with Specializations",
      description:
        "Pursue in-depth knowledge in specialized areas like ethical hacking, cloud security, or malware analysis. Customize your learning to match your career ambitions.",
    },
    {
      imgSrc: img6,
      title: "Get Certified and Recognized",
      description:
        "Complete your learning path and earn certifications that are respected by top employers in the industry. Show your skills and boost your resume.",
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

export default CyberSecurityCard;
