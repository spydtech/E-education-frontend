import React from "react";
import { MdImportantDevices } from "react-icons/md";
import { MdOutlineImportantDevices } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { IoWoman } from "react-icons/io5";
import { AuditOutlined } from "@ant-design/icons";
import { TbCertificate } from "react-icons/tb";
import { Link } from "react-router-dom";
import { PiCertificateThin } from "react-icons/pi";
function Certified() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-8 px-4  lg:px-20 font-poppins ">
      <div className="hover:bg-white mb-8 lg:mb-0 lg:mr-8 w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105 bg-[#0098F1] group">
        <div className="flex items-start justify-start mb-4">
          <MdOutlineImportantDevices className="h-[60px] p-1  w-[60px] text-[#0098F1] bg-white group-hover:bg-[#0098F1] group-hover:text-white rounded-full  transition-colors" />
        </div>
        <h1 className="group-hover:text-[#0098F1] text-white text-lg md:text-lg font-semibold mb-2">
          Get Started Learning Quickly with E-education
        </h1>
        <button className="group-hover:bg-[#0098f1] bg-white text-[#0098f1] group-hover:text-white p-2 rounded-lg mt-2">
          <p className="flex items-center text-md md:text-lg font-medium">
            <span>Enroll Now</span>
          </p>
        </button>
      </div>

      <div className="bg-white mb-8 lg:mb-0 lg:mr-8 w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105 hover:bg-[#0098F1] group">
        <div className="flex items-start justify-start mb-4">
          <IoWoman className="h-[60px] w-[60px] text-[#0098F1] group-hover:bg-white group-hover:text-[#0098F1] rounded-full p-2 transition-colors" />
        </div>
        <h1 className="text-[#0098F1] group-hover:text-white text-lg md:text-lg font-semibold mb-2">
          Enhance Your Professional Skills With E-education
        </h1>
        <button className="group-hover:bg-white bg-[#0098f1] text-white group-hover:text-[#0098f1] p-2 rounded-lg mt-2">
          <p className="flex items-center text-md md:text-lg font-medium">
            <span>Enroll Now</span>
          </p>
        </button>
      </div>

      <div className="bg-white mb-8 lg:mb-0 w-full max-w-xs md:max-w-sm lg:max-w-md h-[250px] shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105 hover:bg-[#0098F1] group ">
        <div className="flex items-start justify-start mb-4">
          <PiCertificateThin className="h-[60px] w-[60px] font-bold text-[#0098F1] group-hover:bg-white group-hover:text-[#0098F1] rounded-full p-2 transition-colors" />
        </div>
        <h1 className="text-[#0098F1] group-hover:text-white text-lg md:text-lg font-semibold mb-2">
          Get Professionally Certified With E-education Courses
        </h1>
        <button className="group-hover:bg-white bg-[#0098f1] text-white group-hover:text-[#0098f1] p-2 rounded-lg mt-2">
          <p className="flex items-center text-md md:text-lg font-medium">
            <span>Enroll Now</span>
          </p>
        </button>
      </div>
    </div>
  );
}

export default Certified;
