import React from "react";
import certificate from "../../../../../../../assetss/certficate.png";

function AdvancedNetworkSecurityCertificate() {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center items-center mb-5 md:px-10 md:gap-8">
        {/* Certificate Image */}
        <div className="flex justify-center items-center">
          <img src={certificate} alt="certificate" className="" />
        </div>

        {/* Text Content */}
        <div className="space-y-3 text-center md:text-left">
          <p className="md:text-2xl font-bold text-[#0098F1]">
            Achieve Credentials and Recognition
          </p>
          <p className="md:text-xl text-gray-500">
            Successfully complete all course modules to obtain a Advanced Network
            Security certification, greatly enhancing career prospects and skill
            development.
          </p>
        </div>
      </div>
    </>
  );
}
export default AdvancedNetworkSecurityCertificate;
