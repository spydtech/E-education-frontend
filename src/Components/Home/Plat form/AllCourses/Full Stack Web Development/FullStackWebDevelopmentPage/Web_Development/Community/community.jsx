import React from "react";
import CommunityImg from "../../../../../../../../assetss/fullstackwebdev/community.png";

const Community = () => {
  return (
    <div className="relative flex justify-center max-w-full h-48 md:h-96">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${CommunityImg})`,
        }}
      ></div>
      <div className="relative text-center z-10 flex flex-col items-center justify-center space-y-2">
        <h1 className=" font-bold text-[#0098F1] md:text-xl">
          Join Our Thriving Community
        </h1>
        <p className="text-[#0098F1] md:text-lg">7,05,07,278</p>
        <button className="px-8 py-2 bg-[#0098F1] text-white font-semibold rounded-full shadow-md">
          Join Today
        </button>
      </div>
    </div>
  );
};

export default Community;
