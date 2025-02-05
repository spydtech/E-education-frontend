import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import IntigrationNavigation from "./IntegrationAbout/IntegrationNavigation";
import IntigrationHero from "./IntegrationHero";
import IntigrationCard from "./IntegrationCard";
import IntigrationFoot from "./IntegrationFoot";
// import CompatabilityCareersOutcomes from "./CompatabilityAbout/CompatilityCareersOutcomes";
const IntigrationTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <IntigrationHero />
      <IntigrationCard />
      <IntigrationNavigation />
      <IntigrationFoot />

      <Footer />
    </>
  );
};

export default IntigrationTesting;
