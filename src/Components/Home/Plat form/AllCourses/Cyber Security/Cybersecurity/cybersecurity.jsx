import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import CybersecurityHero from "./CyberSecurityHero";
import CyberSecurityCard from "./CyberSecurityCard";
import CybersecurityNavigation from "./CyberSecurityNavigation";
import CyberSecurityFoot from "./CyberSecurityFoot";


const cybersecurity = () => {

  return (
    <>
      <Navbar />
      <CybersecurityHero/>
      <CyberSecurityCard/>
      <CybersecurityNavigation />
      <CyberSecurityFoot/>
      <Footer />
    </>
  );
};

export default cybersecurity;
