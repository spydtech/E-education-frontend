import React, { useEffect } from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import UsabilityTestingHero from "./UsabilityTestingHero";
import UsabilityTestingCard from "./UsabilityTestingCard";
import UsabilityTestingNavigation from "./UsabilityTestingAbout/UsabilityTestingNavigation";
import UsabilityTestingFoot from "./UsabilityTestingFoot";

const UsabilityTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <UsabilityTestingHero />
      <UsabilityTestingCard />
      <UsabilityTestingNavigation />
      <UsabilityTestingFoot />
      <Footer />
    </>
  );
};

export default UsabilityTesting;
