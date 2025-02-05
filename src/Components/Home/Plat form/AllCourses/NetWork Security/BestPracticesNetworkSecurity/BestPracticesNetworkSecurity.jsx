import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import BestPracticesNetworkSecurityHero from "./BestPracticesNetworkSecurityHero";
import BestPracticesNetworkSecurityCard from "./BestPracticesNetworkSecurityCard";
import BestPracticesNetworkSecurityNavigation from "./BestPracticesNetworkSecurityAbout/BestPracticesNetworkSecurityNavigation";
import BestPracticesNetworkSecurityFoot from "./BestPracticesNetworkSecurityFoot";
const BestPracticesNetworkSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <BestPracticesNetworkSecurityHero />
      <BestPracticesNetworkSecurityCard />
      <BestPracticesNetworkSecurityNavigation />
      <BestPracticesNetworkSecurityFoot/>
      <Footer />
    </>
  );
};

export default BestPracticesNetworkSecurity;
