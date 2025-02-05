import React, { useEffect } from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import CompatabilityHero from "./CompatabilityHero";
import CompatabilityCard from "./CompatabilityCard";
import CompatabilityNavigation from "./CompatabilityAbout/CompatabilityNavigation";
import CompatabilityFoot from "./CompatabilityFoot";

const CompatabilityTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <CompatabilityHero />
      <CompatabilityCard />
      <CompatabilityNavigation />
      <CompatabilityFoot />
      <Footer />
    </>
  );
};

export default CompatabilityTesting;
