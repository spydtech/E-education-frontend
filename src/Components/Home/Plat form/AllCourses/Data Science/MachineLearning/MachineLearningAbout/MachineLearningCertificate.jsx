import React from "react";

function MachineLearningCertificate() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center items-center md:px-10 md:gap-8 font-poppins">
    {/* Certificate Design */}
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-8 text-center border-2 border-gray-300 shadow-lg">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Certificate of Completion</h2>
        <p className="text-xl mb-12 text-gray-600">This certificate is presented to</p>
        <div className="h-1 bg-gray-300 mb-12 mx-16"></div>
        <p className="text-xl mb-12 text-gray-600">For successfully completing the Online E-education course on</p>
        <h3 className="text-2xl font-bold mb-12 text-blue-600">MACHINE LEARNING </h3>
        <div className="flex justify-between mt-16 pt-4 border-t-2 border-gray-300">
          <div className="text-center">
            <p className="font-semibold">DATE</p>
            <div className="h-1 bg-gray-300 mt-2 w-16 mx-auto"></div>
          </div>
          <div className="text-center">
            <p className="font-semibold">SIGNATURE</p>
            <div className="h-1 bg-gray-300 mt-2 w-16 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Text Content */}
    <div className="space-y-3 text-center md:text-left font-poppins">
      <p className="md:text-2xl font-bold text-[#0098F1]">
        Achieve Credentials and Recognition
      </p>
      <p className="md:text-xl text-gray-500">
        Successfully complete all course modules to obtain a MachineLearning certification, greatly enhancing career prospects and skill development.
      </p>
    </div>
  </div>
  );
}
export default MachineLearningCertificate;
