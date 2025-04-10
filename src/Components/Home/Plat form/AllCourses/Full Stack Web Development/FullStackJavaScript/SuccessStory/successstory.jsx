import React, { useEffect, useState } from "react";

function SuccessStory() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-white mt-8">
      {/* Background Image */}

      {/* Content */}
      <div className="text-center mb-8 bg-white rounded-lg p-8 shadow-lg border border-gray-200">
        <h1
          className="text-4xl  pb-4"
          style={{ fontStyle: "italic", color: "#f6ac14", fontSize: "30px" }}
        >
          The Success Story of{" "}
          <span className="text-[#0098F1]" style={{ fontFamily: "Arial" }}>
            Ryan
          </span>
        </h1>

        <p className="text-[#0098F1] mb-4 mx-4 text-justify">
          Ryan embarked on their path with a vision and resolve.
          <br /> They encountered obstacles but remained steadfast.
          <br /> Through diligence and resilience, they reached their goals.
          <br /> Ryan's journey motivates us to chase our ambitions.
          <br /> Ryan started their journey with a dream and determination.
          <br /> They faced challenges but never gave up. <br />
          With hard work and perseverance, they achieved success.
          <br /> Ryan's story inspires us all to pursue our dreams relentlessly.
        </p>
        <button className="bg-[#0098F1] hover:bg-[#f6ac14] text-white py-2 px-4 rounded-md">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;
