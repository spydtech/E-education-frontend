import React from "react";
import certificate from "../../../../../assetss/certficate1.png";

function AdvanceWordpressCertificate() {
  return (

    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center items-center md:px-10 md:gap-8 mb-5">
    {/* Certificate Image */}
    <div className="flex justify-center items-center">
      <img
         src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1726124070/WhatsApp_Image_2024-09-11_at_11.36.30_PM_jij6tk.jpg"
        alt="certificate"
        className=""
      />

    </div>
    
    {/* Text Content */}
    <div className="space-y-3 text-center md:text-left">
      <p className="md:text-2xl font-bold text-[#0098F1]">
        Achieve Credentials and Recognition
      </p>
      <p className="md:text-xl text-gray-500">
        Successfully complete all course modules to obtain an WordPress
        Fundamentals certification, greatly enhancing career prospects and
        skill development.
      </p>
    </div>
  </div>
  );
}

export default AdvanceWordpressCertificate;
