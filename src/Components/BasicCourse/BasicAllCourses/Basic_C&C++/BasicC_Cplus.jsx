import React,{ useEffect } from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import BasicC_CplusHero from "./BasicC_CplusHero";
import BasicC_CplusCard from "./BasicC_CplusCard";
import BasicC_CplusNavigation from "./BasicC&C++About/BasicC_CplusNavigation";
import BasicC_CplusFoot from "./BasicC_CplusFoot";

const BasicC_Cplus = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <BasicC_CplusHero />
      <BasicC_CplusCard />
      <BasicC_CplusNavigation />
      <BasicC_CplusFoot></BasicC_CplusFoot>
      <Footer />
    </>
  );
};

export default BasicC_Cplus;
