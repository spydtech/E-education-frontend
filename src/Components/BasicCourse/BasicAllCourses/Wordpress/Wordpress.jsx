import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import WordpressHero from "./WordpressHero";
import WordpressCard from "./WordpressCard";
import WordpressNavigation from "./WordpressAbout/WordpressNavigation";
import WordpressFoot from "./WordpressFoot";
const Wordpress = () => {
  return (
    <>
    <Navbar />
      <WordpressHero />
      <WordpressCard />
      <WordpressNavigation />
      <WordpressFoot />
      <Footer />
    </>
  );
};

export default Wordpress;
