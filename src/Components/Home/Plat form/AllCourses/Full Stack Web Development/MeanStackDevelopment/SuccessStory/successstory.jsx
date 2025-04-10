import React, { useEffect, useState } from "react";
// import successImage from "../../../../../../../assets/success.png";
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
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center bg-white m-3 md:m-5 italic">
      {/* Content */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 md:p-5 flex flex-col">
        <h1 className="md:text-4xl text-xl text-[#F6AC14] italic text-center my-2">
          The Success Story of <span className="text-[#0098F1]">Neha</span>
        </h1>

        <p className="text-[#0098F1]">
          Neha’s journey into the tech world began with a dream to build dynamic
          web applications.
          <br /> Starting with the MEAN stack, she dedicated herself to
          mastering MongoDB, Express, Angular, and Node.js.
          <br /> Juggling personal responsibilities and learning, she stayed
          committed and built impressive real-world projects.
          <br /> Her hard work earned her a full-time role as a MEAN stack
          developer at a fast-growing startup.
          <br /> Neha now leads a team of developers, mentoring others and
          pushing boundaries in web development.
          <br /> Her story is a testament to how consistency and passion can
          turn dreams into achievements.
        </p>

        <button className="bg-[#0098F1] hover:bg-[#F6AC14] text-white py-2 px-4 rounded-md self-center my-2">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;
