import React from "react";
// import Navbar from "../../../../../Navbar";
import Navbar from "../../../Navbar";
// import Footer from "../../../../footer/Footer";
import FooterPart from "../../../Home/footer/Footer";
import MobileappNavigation from "./mobileappAbout/mobileappNavigation";
// import AdvancephpHero from "./mobileappHero";
import mobileappHero from "./mobileappHero";
// import AdvancephpCard from "./AdvancephpCard";
import MobileappCard from "./mobileappCard";
import MobileappFoot from "./mobileappFoot";
// import AdvancephpCareersOutcomes from "./AdvancephpAbout/AdvancephpCareersOutcomes";
import MobileappHero from "./mobileappHero";
const FullstackMobileapp = () => {
  return (
    <>
      <Navbar />
      <MobileappHero />
      <MobileappCard />
      <MobileappNavigation />
      <MobileappFoot />
      {/* <UnitTestingCareersOutcomes /> */}
      <FooterPart />
    </>
  );
};

export default FullstackMobileapp;
