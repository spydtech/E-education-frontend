import React from 'react';
import certificate from "../../../../../../../assetss/certficate1.png";

const DBCertificate = () => {
  return (
    <div className="bg-white mb-20">
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
              Database Management Certification
            </p>
            <p className="text-xl text-gray-500">
              Acquire in-depth knowledge and practical skills in database management,
              leading to a certification that boosts career prospects and expertise in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBCertificate;
