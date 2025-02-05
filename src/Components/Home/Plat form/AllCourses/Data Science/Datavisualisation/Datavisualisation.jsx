import React,{useEffect} from "react";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import DatavisualisationHero from "./DatavisualisationHero";
// import MachineLearningCard from "../MachineLearning/MachineLearningCard";
import DatavisualisationCard from "./DatavisualisationCard";
// import MachineLearningNavigation from "./DatavisualisationAbout/DatavisualisationNavigation";
import DatavisualisationNavigation from "./DatavisualisationAbout/DatavisualisationNavigation";
import Datavisualisationsupersection from "./DatavisualisationAbout/Datavisualisationsupersection";
const Datavisualisation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <DatavisualisationHero />
      <DatavisualisationCard />

      <DatavisualisationNavigation />
      <Datavisualisationsupersection />
      <Footer />
    </>
  );
};

export default Datavisualisation;
