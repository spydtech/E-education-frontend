import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import PerformanceTestingHero from "./PerformanceTestingHero";
import PerformanceTestingCard from "./PerformanceTestingCard";
import PerformanceTestingNavigation from "./PerformanceTestingAbout/PerformanceTestingNavigation";
import PerformanceTestingFoot from "./PerformanceTestingFoot";
const PerformanceTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full">
      <PerformanceTestingHero />
      <PerformanceTestingCard />
      <PerformanceTestingNavigation />
      <PerformanceTestingFoot/>
      </div>
      <Footer />
    </>
  );
};

export default PerformanceTesting;
