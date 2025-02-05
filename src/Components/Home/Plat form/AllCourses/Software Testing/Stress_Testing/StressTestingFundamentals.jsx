import React,{useEffect} from "react";
// import StressTestingNavigation from "./StressTestingNavigation";
import StressTestingNavigation from "./StressAbout/StressTestingNavigation";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
// import StressTestingHero from "./StressTestingHero";
import StressTestingHero from "./StressTestingTestingHero";
import StressTestingCard from "./StressTestingCard";
import StressTestingFoot from "./StressTestingFoot";
// import SystemTestingCareersOutcomes from "./SystemAbout/SystemCareersOutcomes";
// import StressTestingCareersOutcomes from "./StressAbout/StressTestingCareersOutcomes";
const StressTestingMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <StressTestingHero />
      <StressTestingCard />
      <StressTestingNavigation />
      <StressTestingFoot />

      <Footer />
    </>
  );
};

export default StressTestingMain;
