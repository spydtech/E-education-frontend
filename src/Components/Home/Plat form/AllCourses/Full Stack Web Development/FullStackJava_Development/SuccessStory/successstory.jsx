import React, { useEffect, useState } from "react";
import successImage from "../../../../../../../assets/success.png";
import company from "../../../../../../../assets/company.png";
import webcertificate from "../../../../../../../assets/webcertificate.png";
import { ImQuotesLeft } from "react-icons/im";

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
    <div className="relative flex flex-col justify-center items-center bg-white m-3 md:m-5">
      {/* Content */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 md:p-5 flex flex-col">
        <h1 className="md:text-4xl text-xl text-[#F6AC14] italic text-center my-2">
          The Success Story of <span className="text-[#0098F1]">Rahul</span>
        </h1>

        <p className="text-[#0098F1]">
          Rahul began his journey with a passion for building scalable
          applications.
          <br /> Intrigued by the power of Java, he dedicated himself to
          mastering core and advanced Java concepts.
          <br /> From object-oriented programming to Spring Boot and RESTful
          APIs, Rahul consistently pushed his limits.
          <br /> He built real-world applications, tackled algorithmic
          challenges, and contributed to open-source Java projects.
          <br /> His relentless drive earned him a position at a leading
          software company as a backend Java developer.
          <br /> Rahul’s journey is proof that with focus and discipline,
          mastering Java can open doors to a thriving tech career.
        </p>

        <button className="bg-[#0098F1] hover:bg-[#F6AC14] text-white py-2 px-4 rounded-md self-center my-2">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;
