import React, { useEffect } from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import RegressionTestingHero from "./RegressionTestingHero";
import RegressionTestingCard from "./RegressionTestingCard";
import RegressionTestingNavigation from "./RegressionTestingAbout/RegressionTestingNavigation";
import RegressionTestingFoot from "./RegressionTestingFoot";
const RegressionTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <RegressionTestingHero />
      <RegressionTestingCard />
      <RegressionTestingNavigation />

      <RegressionTestingFoot />

      <Footer />
    </>
  );
};

export default RegressionTesting;
