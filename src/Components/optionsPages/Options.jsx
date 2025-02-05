import React from "react";
// import { MdOutlineSettingsSuggest } from "react-icons/md";
import img1 from '../../assetss/options_images/image1.png'
import { FaUserAlt } from "react-icons/fa";
import img2 from '../../assetss/options_images/image2.png'
import { useNavigate } from "react-router-dom";

const Options = () => {
  const history = useNavigate();

  const handleAdminClick = () => {
    // Navigate to the admin login page
    history("/admin_login");
  };

  const handleUserClick = () => {
    // Navigate to the user login page
    history("/admin_login");
  };

  return (
    <>
      <div className="bg-white w-full h-screen flex flex-col md:flex-row justify-center items-center gap-x-16">
        <button
          className="flex justify-center hover:border-blue-700 items-center flex-col shadow-2xl p-8 rounded-md border border-gray-200"
          onClick={handleAdminClick}
        >
          <div className="w-[230px] md:w-[230px] lg:w-[250px] justify-center flex">
            <img src={img1}/>
          </div>
          <div className="text-[30px] font-semibold text-[#00588B]">Admin</div>
        </button>
        <button
          className="flex justify-center hover:border-blue-700 items-center flex-col shadow-2xl p-8 rounded-md border border-gray-200"
          onClick={handleUserClick}
        >
           <div className="w-[230px] md:w-[230px] lg:w-[250px] justify-center flex">
            <img src={img2}/>
          </div>
          <div className="text-[30px] font-semibold text-[#00588B]">User Managment</div>
        </button>
      </div>
    </>
  );
};

export default Options;
