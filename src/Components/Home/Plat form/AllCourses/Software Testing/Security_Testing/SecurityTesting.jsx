import React, { useEffect } from "react";
import Navbar from "../../../../../Navbar";
import FooterPart from "../../../../footer/Footer";
import SecurityTestingHero from "./SecurityTestingHero";
import SecurityTestingCard from "./SecurityTestingCard";
import SecurityTestingNavigation from "./SecurityTestingAbout/SecurityTestingNavigation";
import SecurityTestingFoot from "./SecurityTestingFoot";

const SecurityTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-full">
      <SecurityTestingHero />
      <SecurityTestingCard />
      <SecurityTestingNavigation />
      <SecurityTestingFoot />
      </div>
      <FooterPart />
    </>
  );
};

export default SecurityTesting;
