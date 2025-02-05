import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import AdvancedNetworkSecurityHero from "./AdvancedNetworkSecurityHero";
import AdvancedNetworkSecurityCard from "./AdvancedNetworkSecurityCard";
import AdvancedNetworkSecurityNavigation from "./AdvancedNetworkSecurityAbout/AdvancedNetworkSecurityNavigation";
import AdvancedNetworkSecurityFoot from "./AdvancedNetworkSecurityFoot";
const AdvancedNetworkSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AdvancedNetworkSecurityHero />
      <AdvancedNetworkSecurityCard />
      <AdvancedNetworkSecurityNavigation />
      <AdvancedNetworkSecurityFoot/>
      <Footer />
    </>
  );
};

export default AdvancedNetworkSecurity;
