import React, { useState } from "react";
import ProfileSection from "../profilesection/ProfileSection";
import TraineForgotPassword from "../ForgotPassword/forgotpassword";
import TraineeUpdatePassword from "../UpdatePassword/updatepassword";

const TraineeNavigation = () => {
  // const sections = ["Profile", "Update Password"];
  const [currentSection, setCurrentSection] = useState(0);

  const handleSectionChange = (index) => {
    setCurrentSection(index);
  };
  const themes= localStorage.getItem("theme")
  return (
    <>
      <div className="flex flex-col items-center min-h-screen  ">
        <div className="flex justify-center  w-auto">
          <nav className="flex flex-col sm:flex-row w-full sm:w-auto max-w-full md:max-w-xl    overflow-visible">
        
          </nav>
        </div>
        <div className={`${themes==="dark"&&"bg-black"}  shadow-lg container mx-auto py-3   rounded-lg`}>
          {currentSection === 0 && <ProfileSection />}
          {/* {currentSection === 1 && <TraineForgotPassword />} */}
          {currentSection === 1 && <TraineeUpdatePassword />}
        </div>
      </div>
    </>
  );
};

export default TraineeNavigation;