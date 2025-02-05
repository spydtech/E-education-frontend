import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import BasicJavaScriptHero from "./BasicJavaScriptHero";
import BasicJavaScriptCard from "./BasicJavaScriptCard";
import BasicJavaScriptNavigation from "./BasicJavaScriptAbout/BasicJavaScriptNavigation";
import BasicJavaScriptFoot from "./BasicJavaScriptFoot";
const BasicJavaScript = () => {
  return (
    <>
      <Navbar />
      <BasicJavaScriptHero />
      <BasicJavaScriptCard />
      <BasicJavaScriptNavigation />
      <BasicJavaScriptFoot></BasicJavaScriptFoot>
      <Footer />
    </>
  );
};

export default BasicJavaScript;
