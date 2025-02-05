import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import CybersecurityEssentialsHero from "./CybersecurityEssentialsHero";
import CyberSecurityEssentialsCard from "./CyberSecurityEssentialsCard";
import CybersecurityEssentialsNavigation from "./CyberSecurityEssentialsNavigation";
import CyberSecurityEssentialsFoot from "./CyberSecurityEssentialsFoot";


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
