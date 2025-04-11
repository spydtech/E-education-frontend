import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import GenerativeAIHero from "./GenerativeAIHero";
import GenerativeAICard from "./GenerativeAICard";
import GenerativeAINavigation from "./GenerativeAIAbout/GenerativeAINavigation";
import GenerativeAIFoot from "./GenerativeAIFoot";
const GenerativeAI = () => {
  return (
    <>
      <Navbar />
      <GenerativeAIHero />
      <GenerativeAICard />
      <GenerativeAINavigation />
      <GenerativeAIFoot></GenerativeAIFoot>
      <Footer />
    </>
  );
};

export default GenerativeAI;
