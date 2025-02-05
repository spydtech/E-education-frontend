import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import Ui_UxHero from "./Ui_UxHero";
import Ui_UxCard from "./Ui_UxCard";
import Ui_UxNavigation from "./UI_UXAbout/Ui_UxNavigation";
import Ui_UxFoot from "./Ui_UxFoot";
const Ui_Ux = () => {
  return (
    <>
      <Navbar />
      <Ui_UxHero />
      <Ui_UxCard />
      <Ui_UxNavigation />
      <Ui_UxFoot></Ui_UxFoot>
      <Footer />
    </>
  );
};

export default Ui_Ux;
