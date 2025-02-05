import React,{useEffect} from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import PowerBiHero from "./PowerBiHero";
import PowerBiCard from "./PowerBiCard";
import PowerBiNavigation from "./PowerBIAbout/PowerBiNavigation";
import PowerBiFoot from "./PowerBiFoot";
const PowerBi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <PowerBiHero />
      <PowerBiCard />
      <PowerBiNavigation />
      <PowerBiFoot></PowerBiFoot>
      <Footer />
    </>
  );
};

export default PowerBi;
