import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenerativeAIHero = () => {
  const [courseName] = useState("Generative AI Mastery");
  const [coursePrice] = useState(74999);
  const [courseDuration] = useState("6 months"); // Placeholder for course duration
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice, courseDuration } });
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
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white text-[20px] font-medium px-4 max-w-[800px]">
            Unlock the power of Generative AI and take your tech skills to the
            next level. Learn how to build intelligent systems with large
            language models, create AI-powered content, and explore real-world
            applications across industries. Perfect for developers and tech
            enthusiasts ready to lead the future of innovation.
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-10">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerativeAIHero;
