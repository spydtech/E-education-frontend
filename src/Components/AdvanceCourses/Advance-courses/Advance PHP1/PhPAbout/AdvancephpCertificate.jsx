import React from "react";
// import certificate from "../../../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";
import certificate from "../../../../../assets/dataAnalatics/Certificate-PNG-Pic.png";
function AdvancephpCertificate() {
  return (
    <>
      <div
        id="main"
        className="grid  grid-cols-1 md:lg:grid-cols-2 pb-16 bg-[#d90429] mb-12"
      >
        <div id="content" className="flex justify-center items-center">
          <div className="p-5 space-y-5 w-[450px] h-96">
            <p className="text-[#f9ac13] text-xl font-medium">
              Advance PHP Certification
            </p>
            <p className="text-6xl font">
              Achieve{" "}
              <p className="text-[#f9ac13]">Recognition and Credentials</p>
            </p>
            <p className="text-xl text-gray-500">
              Successfully complete all course modules to obtain a Software
              Testing Fundamentals certification, enhancing career prospects and
              demonstrating proficiency in software testing techniques and
              methodologies.
            </p>
          </div>
        </div>
        <div
          id="certificate"
          className="flex justify-center items-center p-10 pt-32"
        >
          <img src={certificate} alt="certificate" className="bg-transparent" />
        </div>
      </div>
    </>
  );
}

export default AdvancephpCertificate;
