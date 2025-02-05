import React from "react";
import successImage from "../../../assets/studentSitting.png";
import company from "../../../assets/company.png";
import webcertificate from "../../../assets/webcertificate.png";
import { ImQuotesLeft } from "react-icons/im";

function SuccessStory() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-white mt-8">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center w-96 h-96 mb-4 mt-4 sm:w-80 sm:h-80 md:w-96 md:h-96"
        style={{
          backgroundImage: `url(${successImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Company Background Strip */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            marginLeft: "400px",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 1,
            height: "40px",
            width: "120px",
          }}
        >
          <img
            src={company}
            alt="company"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <p style={{ marginLeft: "10px", fontSize: "10px" }}>
            finished
            <br /> kotlin track
          </p>
        </div>

        {/* Web Developer Certificate */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "-50px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 1,
            height: "40px",
            width: "160px",
          }}
        >
          <img
            src={webcertificate}
            alt="webdeveloper"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <p style={{ marginLeft: "0px", fontSize: "10px" }}>
            web developer
            <br /> certificate
          </p>
        </div>

        {/* ImQuotesLeft Strip */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 1,
            height: "40px",
            width: "60px",
          }}
        >
          <ImQuotesLeft
            style={{
              color: "skyblue",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          />
          <p
            style={{ marginLeft: "10px", color: "white", fontSize: "14px" }}
          ></p>
        </div>
      </div>

      {/* Content */}
      <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-gray-200">
        <h1
          className="text-4xl  pb-4"
          style={{ fontStyle: "italic", color: "black", fontSize: "30px" }}
        >
          The Success Story of{" "}
          <span className="text-blue-600" style={{ fontFamily: "Arial" }}>
            Hasky
          </span>
        </h1>

        <p className="text-black mb-4 mx-4 text-justify">
          Hasky started their journey with a dream and determination.
          <br /> They faced challenges but never gave up.
          <br /> With hard work and perseverance, they achieved success.
          <br /> Hasky's story inspires us all to pursue our dreams
          relentlessly.
          <br /> Hasky started their journey with a dream and determination.
          <br /> They faced challenges but never gave up. <br />
          With hard work and perseverance, they achieved success.
          <br /> Hasky's story inspires us all to pursue our dreams
          relentlessly.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;
