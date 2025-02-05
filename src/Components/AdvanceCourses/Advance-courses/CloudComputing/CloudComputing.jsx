import React,{useEffect}from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import CloudComputingHero from "./CloudComputingHero";
import CloudComputingCard from "./CloudComputingCard";
import CloudComputingNavigation from "./CloudComputingAbout/CloudComputingNavigation";
import CloudComputingFoot from "./CloudComputingFoot";
const CloudComputing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <CloudComputingHero />
      <CloudComputingCard />
      <CloudComputingNavigation />
      <CloudComputingFoot></CloudComputingFoot>
      <Footer />
    </>
  );
};

export default CloudComputing;
