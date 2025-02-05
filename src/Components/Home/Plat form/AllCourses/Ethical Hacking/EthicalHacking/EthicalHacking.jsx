import React, { useEffect } from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import EthicalHackingHero from "./EthicalHackingHero";
import EthicalHackingCard from "./EthicalHackingCard";
import EthicalHackingNavigation from "./EthicalHackingAbout/EthicalHackingNavigation";
import EthicalHackingCard2 from "./EthicalHackingCard2";
const EthicalHacking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <EthicalHackingCard2 />
      <EthicalHackingCard />
      <EthicalHackingNavigation />
      <EthicalHackingHero />
      <Footer />
    </>
  );
};

export default EthicalHacking;
