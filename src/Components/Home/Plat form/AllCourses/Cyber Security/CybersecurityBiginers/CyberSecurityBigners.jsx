import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import CybersecurityBeginnersHero from "./CyberSecurityBeginnersHero";
import CybersecurityBeginnersNavigation from "./CyberSecurityBeginnersNavigation";

import CyberSecurityBeginnersCard from "./CybersecurityBiginersCard";
import CyberSecurityBeginnersFoot from "./CyberSecurityBignersFoot";
// import CybersecurityBeginners from "./cybersecurityBiginersEssentials";


const CybersecurityBeginners= () => {

  return (
    <>
      <Navbar />
      <CybersecurityBeginnersHero/>
      <CyberSecurityBeginnersCard/>
      <CybersecurityBeginnersNavigation />
      <CyberSecurityBeginnersFoot/>
      <Footer />
    </>
  );
};

export default CybersecurityBeginners;