import React, { useState } from "react";
import IMG from "../../../assets/Platform/student.png";
import EducationCarousel from "../eductionCarousel/EductionCarousel";
import Certified from "./Certified";
import { Link } from "react-router-dom";

function Platform() {
  // State to hold text content and style
  const [studentText, setStudentText] = useState("Students");
  const [professionalText, setProfessionalText] = useState("Professionals");

  const [studentTextStyle, setStudentTextStyle] = useState({
    color: "white", // Default color
    fontSize: "18px", // Default size
    fontWeight: "bold", // Default weight
  });

  const [professionalTextStyle, setProfessionalTextStyle] = useState({
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  });

  return (
    <>
      <Certified />
      <EducationCarousel />
      <div className="bg-[#ff9b26] bg-opacity-30 font-sans h-auto md:h-[625px] flex justify-center items-center py-4 md:py-0 font-poppins">
        <div>
          <h1 className=" text-xl md:text-3xl px-2 lg:text-4xl font-bold text-center pt-4 lg:pt-10">
            The perfect Platform{" "}
            <span className="  bg-gradient-to-r from-[#ff9b26] to-[#0098F1] inline-block text-transparent bg-clip-text ">
              To Boost
            </span>{" "}
            Your Technical Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-10 justify-center items-center">
            <Link to="/student">
              <div className=" hover:shadow-sm hover:shadow-[#0098f1] shyam overflow-hidden w-full lg:w-[420px] h-[385px] bg-white rounded-lg text-center p-4 transform hover:-translate-y-2 transition-transform">
                <div className="flex justify-center items-center">
                  <img
                    src={IMG}
                    className="h-[180px] w-[180px]"
                    alt="Student"
                  />
                </div>
                <p className="font-semibold bg-gradient-to-r from-[#ff9b26] to-[#0098F1] inline-block text-transparent bg-clip-text text-lg my-4 mb-7">
                  Empower Your Journey
                </p>
                <div
                  className="bar hover:bg-[#ff9b26]"
                  onMouseEnter={() => {
                    setStudentText(
                      "Kickstart your career in tech with industry-relevant skills "
                    );
                    setStudentTextStyle({
                      color: "white", // Change color on hover
                      fontSize: "16px", // Change size on hover
                      fontWeight: "normal",
                    });
                  }}
                  onMouseLeave={() => {
                    setStudentText("Students");
                    setStudentTextStyle({
                      color: "white", // Reset to default color
                      fontSize: "18px", // Reset to default size
                      fontWeight: "bold",
                    });
                  }}
                >
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                  <span
                    className="bar-text"
                    style={studentTextStyle} // Apply styles dynamically
                  >
                    {studentText}
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/professional">
              <div className="hover:shadow-sm hover:shadow-[#0098f1]  shyam overflow-hidden w-full lg:w-[420px] h-[385px]  bg-white rounded-lg text-center p-4 transform hover:-translate-y-2 transition-transform">
                <div className="flex justify-center items-center">
                  <img
                    className="h-[180px] w-[180px]"
                    src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png"
                    alt="Professional"
                  />
                </div>
                <p className="font-semibold bg-gradient-to-r from-[#ff9b26] to-[#0098F1] inline-block text-transparent bg-clip-text text-lg my-4 mb-7">
                  Advance Your Career
                </p>
                <div
                  className="bar hover:bg-[#ff9b26] "
                  onMouseEnter={() => {
                    setProfessionalText(
                      "Stay ahead of the curve by mastering emerging technologies ."
                    );
                    setProfessionalTextStyle({
                      color: "white", // Change color on hover
                      fontSize: "16px", // Change size on hover
                      fontWeight: "normal",
                      // Padding on the right
                    });
                  }}
                  onMouseLeave={() => {
                    setProfessionalText("Professionals");
                    setProfessionalTextStyle({
                      color: "white", // Reset to default
                      fontSize: "18px", // Reset to default
                      fontWeight: "bold",
                    });
                  }}
                >
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                  <span
                    className="bar-text"
                    style={professionalTextStyle} // Apply styles dynamically
                  >
                    {professionalText}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .bar {
          position: relative;
          left: -16px;
          height: 60px;
          width: 259px;
          border-radius: 0px 22px 22px 0px;
          overflow: hidden;
          transition: height 0.4s ease-out, border-radius 0.4s ease-out,
            width 1s ease-out;
        }
        .bar:hover {
          height: 122px;
          width: 100%;
          border-radius: 0px 22px 0px 0px;
        }
        .emptybar:hover {
          height: 122px;
          width: 100%;
          border-radius: 0px 22px 0px 0px;
        }
        .filledbar:hover {
          height: 122px;
          width: 100%;
          border-radius: 0px 22px 0px 0px;
        }
        .emptybar {
          background-color: #ff9b26;
          width: 100%;
          height: 100%;
          border-radius: 0px 22px 22px 0px;
        }
        .filledbar {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 3;
          width: 0%;
          height: 100%;
          transition: width 1s ease-out;
          border-radius: 0px 22px 22px 0px;
        }
        .shyam:hover .filledbar {
          width: 100%;
        }
        .bar-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 18px;
          font-weight: bold;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}

export default Platform;
