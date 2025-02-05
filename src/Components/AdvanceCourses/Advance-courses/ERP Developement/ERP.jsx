import React,{useEffect} from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import ERPHero from "./ERPHero";
import ERPCard from "./ERPCard";
import ERPNavigation from "./ERPAbout/ERPNavigation";
import ERPFoot from "./ERPFoot";
const ERP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <ERPHero />
      <ERPCard />
      <ERPNavigation />
      <ERPFoot></ERPFoot>
      <Footer />
    </>
  );
};

export default ERP;
