import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import BasicJavaHero from "./BasicJavaHero";
import BasicJavaCard from "./BasicJavaCard";
import BasicJavaNavigation from "./BasicJavaAbout/BasicJavaNavigation";
import BasicJavaFoot from "./BasicJavaFoot";
const BasicJava = () => {
  return (
    <>
      <Navbar />
      <BasicJavaHero />
      <BasicJavaCard />
      <BasicJavaNavigation />
      <BasicJavaFoot></BasicJavaFoot>
      <Footer />
    </>
  );
};

export default BasicJava;
