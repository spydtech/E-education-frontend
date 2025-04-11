import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgenticAIHero = () => {
  const [courseName] = useState("Agentic AI Mastery");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726473509/WhatsApp_Image_2024-09-15_at_11.16.11_PM_1_uilojh.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <p className="text-center text-white text-[20px] font-medium max-w-[800px]">
            Step into the future with our{" "}
            <span className="font-bold text-[#00d2ff]">Agentic AI Mastery</span>{" "}
            course. Learn how to build autonomous agents, integrate AI
            decision-making, and design intelligent systems that think and act.
            Perfect for developers ready to lead in the era of next-gen AI
            solutions.
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-10">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 text-[20px] font-medium text-white bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-xl hover:scale-105 transition-transform"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AgenticAIHero;
