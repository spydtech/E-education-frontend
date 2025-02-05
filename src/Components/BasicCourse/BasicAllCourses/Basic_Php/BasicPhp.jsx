import React, { useEffect } from "react";
import Navbar from "../../../Navbar";
import BasicPhpHero from "./BasicPhpHero";
import BasicPhpCard from "./BasicPhpCard";
import BasicPhpNavigation from "./BasicPhpAbout/BasicPhpNavigation";
import BasicPhpFoot from "./BasicPhpFoot";
import FooterPart from "../../../Home/footer/Footer";

const BasicPhp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <BasicPhpHero />
      <BasicPhpCard />
      <BasicPhpNavigation />
      <BasicPhpFoot />
      <FooterPart />
    </>
  );
};

export default BasicPhp;
