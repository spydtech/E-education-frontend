import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import BigDataHero from "./BigDataHero";
import BigDataCard from "./BigDataCard";
import BigDataNavigation from "./BigDataAbout/BigDataNavigation";
import BigDataFoot from "./BigDataFoot";
const BigData = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <BigDataHero />
      <BigDataCard />
      <BigDataNavigation />
      <BigDataFoot></BigDataFoot>
      <Footer />
    </>
  );
};

export default BigData;
