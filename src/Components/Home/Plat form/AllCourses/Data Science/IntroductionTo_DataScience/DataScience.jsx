import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import DataScienceHero from "./DataScienceHero";
import DataScienceCard from "./DataScienceCard";
import DataScienceNavigation from "./DataScienceAbout/DataScienceNavigation";
import DataScienceFoot from "./DataScienceFoot";
const DataScience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <DataScienceHero />
      <DataScienceCard />
      <DataScienceNavigation />
      <DataScienceFoot/>
      <Footer />
    </>
  );
};

export default DataScience;
