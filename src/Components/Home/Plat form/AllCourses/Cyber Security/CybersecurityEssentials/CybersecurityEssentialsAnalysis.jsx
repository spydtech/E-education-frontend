import React from "react";
// import DataHero from "./DataHero";
// import DataAbout from "./DataAbout";
// import DataAnalaticsNavigation from "./CyberSecurityEssentialsNavigation";
import Navbar from "../../../../../Navbar";
import CybersecurityEssentialsHero from "./CybersecurityEssentialsHero";
import CyberSecurityEssentialsCard from "./CyberSecurityEssentialsCard";
import CybersecurityEssentialsNavigation from "./CyberSecurityEssentialsNavigation";
import CyberSecurityEssentialsFoot from "./CyberSecurityEssentialsFoot";
import Footer from "../../../../footer/Footer";
const cybersecurityEssentials = () => {
  return (
    
     <>
      <Navbar />
      <CybersecurityEssentialsHero/>
      <CyberSecurityEssentialsCard/>
      <CybersecurityEssentialsNavigation />
      <CyberSecurityEssentialsFoot/>
      <Footer />
    </>
  
  );
};

export default cybersecurityEssentials;
