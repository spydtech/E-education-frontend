import React,{useEffect} from "react";
// import Navbar from "../../../../../Navbar";
import Navbar from "../../../Navbar";
// import Footer from "../../../../footer/Footer";
import FooterPart from "../../../Home/footer/Footer";
// import AdvancephpNavigation from "./AdvancephpAbout/AdvancephpNavigation";
import AdvancephpNavigation from "./PhPAbout/AdvancephpNavigation";
import AdvancephpHero from "./AdvancephpHero";
import AdvancephpCard from "./AdvancephpCard";
import AdvancephpFoot from "./AdvancephpFoot";
// import AdvancephpCareersOutcomes from "./AdvancephpAbout/AdvancephpCareersOutcomes";
const Advancephp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AdvancephpHero />
      <AdvancephpCard />
      <AdvancephpNavigation />
      <AdvancephpFoot />
      {/* <UnitTestingCareersOutcomes /> */}
      <FooterPart />
    </>
  );
};

export default Advancephp;
