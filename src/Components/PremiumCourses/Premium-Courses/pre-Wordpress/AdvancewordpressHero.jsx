import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import student from "../../../../assetss/professionalimages/image7.png";

const AdvanceWordpressHero = () => {
  const [courseName] = useState("Integration Testing");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (

    <>
     <div className="relative w-full h-[370px] bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726473509/WhatsApp_Image_2024-09-15_at_11.16.11_PM_1_uilojh.jpg")' }}>
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-center text-white text-[20px] font-medium px-4 max-w-[800px]">
      Discover how WordPress can transform using data and algorithms
       to enable AI to imitate the way that humans learn, gradually
       improving its accuracy.
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

export default AdvanceWordpressHero;
