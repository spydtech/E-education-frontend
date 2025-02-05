import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import FooterPart from "../../../../footer/Footer";

import CertifiedEthicalHackingCard from "./CertifiedEthicalHackingCard";
import CertifiedEthicalHackingHero from "./CertifiedEthicalHackingHero";
import CertifiedEthicalHackingNavigation from "./CertifiedEthicalHackingAbout/certifiedEthicalHackingNavigation";
import CertifiedEthicalHackingFoot from "./CertifiedEthicalHackingFoot";
const CertifiedEthicalHacking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <CertifiedEthicalHackingHero />
      <CertifiedEthicalHackingCard />
      <CertifiedEthicalHackingNavigation />
      <CertifiedEthicalHackingFoot />
      <FooterPart />
    </>
  );
};

export default CertifiedEthicalHacking;
