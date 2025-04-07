import React, { useEffect } from "react";
import Navbar from "../../../Navbar";
import BasicWebdevlopmentHero from "./Webdevlopment_hero";
import WebDevlopmentCard from "./Web_devlopment_Card";
import BasicWebdevlopmentNavigation from "./Basic_webdevlopment_About/BasicWebdevlopmentNavigation";
import BasicWebdevlopmentFoot from "./Web_devlopment_Footer";
import FooterPart from "../../../Home/footer/Footer";



const BasicWebdevlopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <BasicWebdevlopmentHero />
      <WebDevlopmentCard />
      <BasicWebdevlopmentNavigation />
      <BasicWebdevlopmentFoot />
      <FooterPart />

    
    </>
  );
};

export default BasicWebdevlopment;
