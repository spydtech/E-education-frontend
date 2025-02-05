import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import AdvancePhpHero from "./AdvancePhpHero";
import AdvancePhpCard from "./AdvancePhpCard";
import AdvancePhpNavigation from "./AdvancePhpAbout/AdvancePhpNavigation";
import AdvancePhpFoot from "./AdvancePhpFoot";
const AdvancePhp = () => {
  return (
    <>
      <Navbar />
      <AdvancePhpHero />
      <AdvancePhpCard />
      <AdvancePhpNavigation />
      <AdvancePhpFoot></AdvancePhpFoot>
      <Footer />
    </>
  );
};

export default AdvancePhp;
