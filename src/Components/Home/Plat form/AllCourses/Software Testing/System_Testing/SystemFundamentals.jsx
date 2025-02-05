import React,{useEffect} from "react";
import SystemTestingNavigation from "./SystemAbout/SystemNavigation";
import SystemTestingHero from "./SystemTestingHero";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
// import CompatabilityCard from "./CompatabilityCard";
import SystemTestingCard from "./SystemCard";
// import CompatabilityFoot from "./CompatabilityFoot";
import SystemTestingFoot from "./SystemFoot";
import SystemTestingCareersOutcomes from "./SystemAbout/SystemCareersOutcomes";
const SystemTestingMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <SystemTestingHero />
      <SystemTestingCard />
      <SystemTestingNavigation />
      <SystemTestingFoot />

      <Footer />
    </>
  );
};

export default SystemTestingMain;
