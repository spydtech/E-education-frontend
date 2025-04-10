import React, { useEffect } from "react";
import Navbar from "../../../Navbar";
import BasicSoftwareTestingHero from "./BasicSoftwareTestingHero";
import BasicSoftwareTestingCard from "./BasicSoftwareTestingCard";
import BasicSoftwareTestingNavigation from "./BasicSoftwareTestingAbout/BasicSoftwareTestingNavigation";
import BasicSoftwareTestingFoot from "./BasicSoftwareTestingFoot";
import FooterPart from "../../../Home/footer/Footer";

const BasicSoftwareTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <BasicSoftwareTestingHero />
      <BasicSoftwareTestingCard />
      <BasicSoftwareTestingNavigation />
      <BasicSoftwareTestingFoot />
      <FooterPart />
    </>
  );
};

export default BasicSoftwareTesting;
