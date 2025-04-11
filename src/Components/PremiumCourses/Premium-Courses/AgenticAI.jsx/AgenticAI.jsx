import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import AgenticAIHero from "./AgenticAIHero";
import AgenticAICard from "./AgenticAICard";
import AgenticAINavigation from "./AgenticAIAbout/AgenticAINavigation";
import AgenticAIFoot from "./AgenticAIFoot";
const AgenticAI = () => {
  return (
    <>
      <Navbar />
      <AgenticAIHero />
      <AgenticAICard />
      <AgenticAINavigation />
      <AgenticAIFoot></AgenticAIFoot>
      <Footer />
    </>
  );
};

export default AgenticAI;
