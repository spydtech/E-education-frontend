import React from "react";
// import Navbar from "../../../../../Navbar";
import Navbar from "../../../Navbar"
// import Footer from "../../../../footer/Footer";
import Footer from "../../../Home/footer/Footer"

import AdvancewordpressNavigation from "./AdvancewordspressAbout/AdvancewordpressNavigation";
import AdvancewordpressHero from "./AdvancewordpressHero";
import AdvancewordpressCard from "./AdvancewordpressCard";
import AdvancewordpressFoot from "./AdvancewordpressFoot";
// import AdvancewordpressCareersOutcomes from "./AdvancewordspressAbout/AdvancewordpressCareersOutcomes";
const AdvanceWordpress = () => {
  return (
    <>
      <Navbar />
      <AdvancewordpressHero />
      <AdvancewordpressCard />
      <AdvancewordpressNavigation />
      <AdvancewordpressFoot />
      {/* <UnitTestingCareersOutcomes /> */}
      <Footer />
    </>
  );
};

export default AdvanceWordpress;
