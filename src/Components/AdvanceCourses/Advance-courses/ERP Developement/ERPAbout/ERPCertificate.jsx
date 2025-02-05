import React from "react";
import certificate from "../../../../../assetss/certficate.png";

function ERPCertificate() {
  return (
    <div className="bg-white mb-20 pt-6">
      <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src={certificate}
            alt="certificate"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="space-y-5 text-center md:text-left p-5">
            <p className="text-2xl font-bold text-[#0098f1]">
              ERP Certification
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain an ERP
              certification, greatly enhancing career prospects and skill
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPCertificate;
