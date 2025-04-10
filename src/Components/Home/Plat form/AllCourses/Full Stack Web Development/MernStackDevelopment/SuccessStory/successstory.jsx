import React, { useEffect, useState } from "react";
import company from "../../../../../../../assets/company.png";
import webcertificate from "../../../../../../../assets/webcertificate.png";
import { ImQuotesLeft } from "react-icons/im";

function SuccessStory() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center bg-white m-3 md:m-5 italic">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 md:p-5 flex flex-col">
        <h1 className="md:text-4xl text-xl text-[#F6AC14] italic text-center my-2">
          The Success Story of <span className="text-[#0098F1]">Aarav</span>
        </h1>

        <p className="text-[#0098F1]">
          Aarav began his journey as a beginner in web development, eager to
          break into tech but unsure where to start.
          <br /> He chose to master the MERN Stack — MongoDB, Express, React,
          and Node.js — and never looked back.
          <br /> From learning how to build REST APIs to designing dynamic React
          UIs, Aarav turned theory into real-world projects.
          <br /> After months of persistence, he landed his first role as a
          full-stack developer at a fast-growing tech startup.
          <br /> Today, Aarav builds scalable web apps used by thousands of
          users and mentors others to follow the same path.
          <br /> His journey proves that with the right skills and
          determination, anything is possible.
        </p>

        <button className="bg-[#0098F1] hover:bg-[#F6AC14] text-white py-2 px-4 rounded-md self-center my-2">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;
