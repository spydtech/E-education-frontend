import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
import CyberSecurityBeginnersCard from "./CybersecurityBiginersCard";
import CybersecurityBeginnersHero from "./CyberSecurityBignersHero";
import CybersecurityBiginersNavigation from "./CyberSecurityBiginersNavigation";
import CyberSecurityBeginnersFoot from "./CyberSecurityBignersFoot";

const CybersecurityBeginners = () => {
  const [courseName] = useState("Cyber Security for Beginners"); // Placeholder for course name
  const [coursePrice] = useState(34999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
    <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfftgkkev/image/upload/v1726484672/image_1_jtkxdd.png")' }}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
    <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-10 md:mb-8"> {/* Increased margin bottom for small devices */}
      In today's interconnected world, cybersecurity stands as the first line of defense against an array 
      <span className="hidden md:inline"> <br /></span>
      of digital threats. With cyber attacks becoming increasingly sophisticated
      <span className="hidden md:inline"> <br /></span>
      sensitive data and infrastructure is paramount. 
    </p>
  </div>
  <div className="absolute inset-0 flex items-end justify-center pb-10">
    <button
      onClick={handleEnroll}
      className="px-6 py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl hover:bg-[#007bb5] transition duration-200"
    >
      Enroll Now
    </button>
  </div>
</div>


      <CyberSecurityBeginnersCard/>
      < CybersecurityBiginersNavigation />
      <CyberSecurityBeginnersFoot/>
      <Footer />
     
    </>
  );
};

export default CybersecurityBeginners;
