import React, { useEffect, useState } from "react";

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
    <div className="relative flex flex-col justify-center items-center bg-white m-3 md:m-5">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 md:p-5 flex flex-col">
        <h1 className="md:text-4xl text-xl text-[#F6AC14] italic text-center my-2">
          The Success Story of <span className="text-[#0098F1]">Raghav</span>
        </h1>

        <p className="text-[#0098F1]">
          Raghav started his coding journey with zero background but massive
          hunger to learn.
          <br /> He began with the basics of JavaScript, spending nights
          debugging simple functions.
          <br /> From building to-do lists to dynamic UI components, his skills
          kept leveling up.
          <br /> Despite errors, bugs, and console logs from hell, he never
          backed down.
          <br /> Today, Raghav builds slick React apps, contributes to open
          source, and mentors juniors.
          <br /> His journey proves that consistency beats everything—even
          syntax errors.
        </p>
        <button className="bg-[#0098F1] hover:bg-[#F6AC14] text-white py-2 px-4 rounded-md self-center my-2">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;
