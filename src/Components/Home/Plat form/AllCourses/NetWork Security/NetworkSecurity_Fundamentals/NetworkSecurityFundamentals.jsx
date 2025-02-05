import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import NetworkSecurityHero from "./NetworkSecurityHero";
import NetworkSecurityCard from "./NetworkSecurityCard";
import NetworkSecurityNavigation from "./NetworkSecurityAbout/NetworkSecurityNavigation";
import NetworkSecurityFoot from "./NetworkSecurityFoot";
const NetworkSecurityFundamentals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <NetworkSecurityHero />
      <NetworkSecurityCard />
      <NetworkSecurityNavigation />
      <NetworkSecurityFoot/>
      <Footer />
    </>
  );
};

export default NetworkSecurityFundamentals;
